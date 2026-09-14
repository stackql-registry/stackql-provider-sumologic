#!/usr/bin/env node

// Live smoke test for the sumologic stackql provider.
//
// Exercises the queries and mutations a Sumo Logic user is most likely to
// run (the surface the Terraform provider's examples lead with) against a
// real account: read smokes over users, roles, service accounts, access
// keys, collectors and sources, the personal folder, dashboards, monitors,
// partitions, fields, scheduled views, ingest budgets, connections, tokens,
// apps and account status; then a disposable write lifecycle - a hosted
// collector with an HTTP source (INSERT / SELECT / DELETE), a role (INSERT /
// UPDATE / DELETE), a folder in the personal folder (INSERT / UPDATE and the
// asynchronous delete job started with EXEC and polled with SELECT) and a
// monitor folder (INSERT / DELETE). Every object created is named
// `stackql-smoke-<stamp>` and swept at the start and the end of the run.
//
// Cost: none of the objects touched are billable - hosted collectors,
// sources with no data sent, roles, folders and monitor folders are free;
// no search jobs are started and no data is ingested. The run is a few
// dozen API calls, well inside the API rate limit.
//
// Credentials and the deployment come from the environment, exactly as the
// provider itself reads them (`make smoke-test` sources .env):
//
//     SUMOLOGIC_ACCESSID       access ID   (basic-auth username)
//     SUMOLOGIC_ACCESSKEY      access key  (basic-auth password)
//     SUMOLOGIC_ENVIRONMENT    deployment, e.g. us2 / au / eu  (default us2)
//
// Usage:
//     node tests/smoke_test.mjs                 # local provider (provider-dev/openapi)
//     node tests/smoke_test.mjs --live          # the published provider from the stackql registry
//     node tests/smoke_test.mjs --read-only     # read smokes only, no writes
//     node tests/smoke_test.mjs --cleanup-only  # sweep stackql-smoke-* breadcrumbs and exit
//     node tests/smoke_test.mjs --verbose       # print every statement and result
//
// Binary resolution: $STACKQL, ./stackql, then `stackql` on PATH.

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const live = args.includes('--live');
const readOnly = args.includes('--read-only');
const cleanupOnly = args.includes('--cleanup-only');
const verbose = args.includes('--verbose');
const SMOKE_PREFIX = 'stackql-smoke-';
const stamp = String(Date.now()).slice(-6);
const NAME = `${SMOKE_PREFIX}${stamp}`;
const INTER_REQUEST_DELAY_MS = 250;

for (const v of ['SUMOLOGIC_ACCESSID', 'SUMOLOGIC_ACCESSKEY']) {
  if (!process.env[v]) {
    console.error(`${v} is not set - see the header of this script (make smoke-test sources .env)`);
    process.exit(2);
  }
}
const region = process.env.SUMOLOGIC_ENVIRONMENT || 'us2';

function findStackql() {
  if (process.env.STACKQL && fs.existsSync(process.env.STACKQL)) return process.env.STACKQL;
  const local = path.join(repoRoot, process.platform === 'win32' ? 'stackql.exe' : 'stackql');
  if (fs.existsSync(local)) return local;
  return 'stackql';
}
const bin = findStackql();
const regPath = path.join(repoRoot, 'provider-dev', 'openapi').replace(/\\/g, '/');
const registryArg = live ? null : `--registry=${JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } })}`;

const ERROR_RE = /http response status code: [45]|error|panic|FindRoute|no matching operation|cannot find matching operation|cannot find any viable servers|disallowed|not yet supported|not supported/i;
let requests = 0;

function q(sql) {
  return new Promise((resolve) => {
    const run = () => {
      requests++;
      const argv = [];
      if (registryArg) argv.push(registryArg);
      argv.push('exec', sql, '--output', 'json');
      const child = spawn(bin, argv, { cwd: repoRoot, env: process.env });
      let stdout = '', stderr = '';
      child.stdout.on('data', (d) => { stdout += d; });
      child.stderr.on('data', (d) => { stderr += d; });
      const timer = setTimeout(() => child.kill(), 180000);
      child.on('error', (e) => { clearTimeout(timer); resolve({ rows: null, err: String(e) }); });
      child.on('close', () => {
        clearTimeout(timer);
        stdout = stdout.trim(); stderr = stderr.trim();
        if (verbose) console.log(`    sql: ${sql}\n    out: ${stdout.slice(0, 300)}${stderr ? `\n    err: ${stderr.slice(0, 300)}` : ''}`);
        if (ERROR_RE.test(stderr)) return resolve({ rows: null, err: stderr });
        if (!stdout) return resolve({ rows: [], err: null });
        try { resolve({ rows: JSON.parse(stdout) ?? [], err: null }); } catch { resolve({ rows: [{ _text: stdout }], err: ERROR_RE.test(stdout) ? stdout : null }); }
      });
    };
    setTimeout(run, requests ? INTER_REQUEST_DELAY_MS : 0);
  });
}

const results = [];
function record(name, pass, note = '') {
  results.push({ name, pass, note });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${!pass && note ? `  [${String(note).slice(0, 200)}]` : ''}`);
}
async function step(name, sql, { expectRows = false, contains = null, predicate = null } = {}) {
  const { rows, err } = await q(sql);
  if (err) { record(name, false, err); return null; }
  const blob = JSON.stringify(rows);
  if (expectRows && (!rows || rows.length === 0)) { record(name, false, 'expected rows, got none'); return null; }
  if (contains && !blob.includes(contains)) { record(name, false, `'${contains}' not in result ${blob.slice(0, 120)}`); return null; }
  if (predicate && !predicate(rows)) { record(name, false, `predicate failed on ${blob.slice(0, 160)}`); return null; }
  record(name, true);
  return rows;
}
async function waitFor(name, sql, pred, { timeoutMs = 120000, intervalMs = 5000 } = {}) {
  const start = Date.now();
  let last = '';
  while (Date.now() - start < timeoutMs) {
    const { rows, err } = await q(sql);
    last = err || JSON.stringify(rows).slice(0, 160);
    if (!err && pred(rows)) { record(name, true); return rows; }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  record(name, false, `timeout: ${last}`);
  return null;
}

// ------------------------------------------------------------- breadcrumbs
async function sweep() {
  console.log('== breadcrumb sweep ==');
  let { rows, err } = await q('SELECT id, name FROM sumologic.collectors.collectors WHERE filter = \'hosted\'');
  if (err) console.log(`  WARN collector sweep list failed: ${err.slice(0, 120)}`);
  for (const c of rows || []) {
    if (!String(c.name).startsWith(SMOKE_PREFIX)) continue;
    console.log(`  sweeping collector ${c.name}`);
    const s = await q(`SELECT id FROM sumologic.collectors.sources WHERE collector_id = '${c.id}'`);
    for (const src of s.rows || []) await q(`DELETE FROM sumologic.collectors.sources WHERE collector_id = '${c.id}' AND source_id = '${src.id}'`);
    await q(`DELETE FROM sumologic.collectors.collectors WHERE id = '${c.id}'`);
  }
  ({ rows, err } = await q('SELECT id, name FROM sumologic.roles.roles'));
  if (err) console.log(`  WARN role sweep list failed: ${err.slice(0, 120)}`);
  for (const r of rows || []) {
    if (!String(r.name).startsWith(SMOKE_PREFIX)) continue;
    console.log(`  sweeping role ${r.name}`);
    await q(`DELETE FROM sumologic.roles.roles WHERE id = '${r.id}'`);
  }
  ({ rows, err } = await q('SELECT children FROM sumologic.content.personal_folder'));
  if (err) console.log(`  WARN personal folder read failed: ${err.slice(0, 120)}`);
  let children = [];
  try { children = JSON.parse(rows?.[0]?.children || '[]'); } catch { children = []; }
  for (const ch of children) {
    if (!String(ch.name).startsWith(SMOKE_PREFIX)) continue;
    console.log(`  sweeping folder ${ch.name}`);
    await q(`EXEC sumologic.content.delete_jobs.start @id = '${ch.id}'`);
  }
  ({ rows, err } = await q(`SELECT json_extract(item, '$.id') AS id, json_extract(item, '$.name') AS name FROM sumologic.monitors.search WHERE query = 'name:${SMOKE_PREFIX}'`));
  if (err) console.log(`  WARN monitor sweep search failed: ${err.slice(0, 120)}`);
  for (const m of rows || []) {
    if (!String(m.name).startsWith(SMOKE_PREFIX)) continue;
    console.log(`  sweeping monitor folder ${m.name}`);
    await q(`DELETE FROM sumologic.monitors.monitors WHERE id = '${m.id}'`);
  }
}

// -------------------------------------------------------------- read path
async function readSmokes() {
  console.log('== read smokes ==');
  await step('show services', 'SHOW SERVICES IN sumologic', { expectRows: true, contains: 'collectors' });
  await step('account status', 'SELECT plan_type, account_activated, pricing_model FROM sumologic.account.status', { expectRows: true });
  await step('users (snake_case columns, paginated)', 'SELECT id, first_name, last_name, email, is_active FROM sumologic.users.users', { expectRows: true, predicate: (r) => 'first_name' in r[0] });
  const users = await step('users with limit = 1 (pagination traverses every page)', 'SELECT id, email FROM sumologic.users.users WHERE limit = 1', { expectRows: true });
  const allUsers = await step('users total', 'SELECT count(*) AS n FROM sumologic.users.users', { expectRows: true });
  if (users && allUsers) record('pagination: limit = 1 returns the same row count as the default page size', users.length === Number(allUsers[0].n), `${users.length} vs ${allUsers[0].n}`);
  await step('roles', 'SELECT id, name, system_defined, json_array_length(capabilities) AS capabilities FROM sumologic.roles.roles', { expectRows: true, contains: 'Administrator' });
  await step('roles filtered by name (predicate pushdown)', "SELECT id, name FROM sumologic.roles.roles WHERE name = 'Administrator'", { expectRows: true, predicate: (r) => r.length === 1 });
  await step('service accounts', 'SELECT id, name, email, is_active FROM sumologic.service_accounts.service_accounts');
  await step('personal access keys', 'SELECT id, label, disabled, created_at FROM sumologic.access_keys.personal_access_keys', { expectRows: true });
  const collectors = await step('collectors (Collector Management API, $.collectors)', 'SELECT id, name, collector_type, alive, collector_version FROM sumologic.collectors.collectors');
  if (collectors && collectors.length > 0) {
    const c = collectors[0];
    await step('collector get by id ($.collector)', `SELECT name, collector_type FROM sumologic.collectors.collectors WHERE id = '${c.id}'`, { expectRows: true, contains: String(c.name) });
    await step('collector get by name', `SELECT id FROM sumologic.collectors.collectors WHERE name = '${String(c.name).replace(/'/g, "''")}'`, { expectRows: true });
    await step('sources of the first collector', `SELECT id, name, source_type, category FROM sumologic.collectors.sources WHERE collector_id = '${c.id}'`);
  }
  await step('collectors overview', 'SELECT installed_collectors_count, hosted_collectors_count, hosted_sources_count FROM sumologic.collectors.overview', { expectRows: true });
  await step('personal folder (nested children JSON)', 'SELECT id, name, item_type, json_array_length(children) AS items FROM sumologic.content.personal_folder', { expectRows: true });
  await step('dashboards', 'SELECT id, title, folder_id, refresh_interval FROM sumologic.dashboards.dashboards');
  await step('monitors root', 'SELECT id, name, content_type FROM sumologic.monitors.root', { expectRows: true });
  await step('monitors search (bare array)', "SELECT json_extract(item, '$.name') AS name, path FROM sumologic.monitors.search WHERE query = 'type:monitor'");
  await step('partitions', 'SELECT id, name, analytics_tier, retention_period, is_active FROM sumologic.partitions.partitions', { expectRows: true });
  await step('fields', 'SELECT field_name, field_id, data_type, state FROM sumologic.fields.fields');
  await step('field quota', 'SELECT quota, remaining FROM sumologic.fields.quota', { expectRows: true });
  await step('scheduled views', 'SELECT id, index_name, query, retention_period FROM sumologic.scheduled_views.scheduled_views');
  await step('ingest budgets', 'SELECT id, name, capacity_bytes, usage_bytes, usage_status FROM sumologic.ingest_budgets.ingest_budgets');
  await step('connections', 'SELECT id, name, type FROM sumologic.connections.connections');
  await step('tokens', 'SELECT id, name, type, status FROM sumologic.tokens.tokens');
  await step('log searches (token cursor)', 'SELECT id, name, query_string FROM sumologic.log_searches.log_searches');
  await step('apps catalog (v2)', 'SELECT uuid, name, version FROM sumologic.apps.apps_v2', { expectRows: true });
  await step('health events', 'SELECT event_id, event_name, severity_level, event_time FROM sumologic.health_events.health_events');
  await step('password policy', 'SELECT min_length, max_length, must_contain_digits FROM sumologic.password_policy.password_policy', { expectRows: true });
  await step('audit policy', 'SELECT enabled FROM sumologic.policies.audit', { expectRows: true });
}

// ------------------------------------------------------------- write path
async function collectorLifecycle() {
  console.log(`== hosted collector + HTTP source lifecycle (${NAME}) ==`);
  await step('collector INSERT (Hosted)', `INSERT INTO sumologic.collectors.collectors (collector) SELECT '{"name": "${NAME}", "collectorType": "Hosted", "category": "stackql/smoke", "description": "stackql smoke test"}'`);
  const rows = await step('collector visible by name', `SELECT id, name, collector_type FROM sumologic.collectors.collectors WHERE name = '${NAME}'`, { expectRows: true, contains: 'Hosted' });
  if (!rows) return;
  const cid = rows[0].id;
  try {
    await step('source INSERT (HTTP)', `INSERT INTO sumologic.collectors.sources (collector_id, source) SELECT '${cid}', '{"name": "${NAME}-http", "sourceType": "HTTP", "category": "stackql/smoke/http", "messagePerRequest": false}'`);
    const srcs = await step('source visible in list ($.sources)', `SELECT id, name, source_type, url FROM sumologic.collectors.sources WHERE collector_id = '${cid}'`, { expectRows: true, contains: `${NAME}-http` });
    const sid = (srcs || []).find((s) => s.name === `${NAME}-http`)?.id;
    if (sid) {
      await step('source get ($.source)', `SELECT name, url FROM sumologic.collectors.sources WHERE collector_id = '${cid}' AND source_id = '${sid}'`, { expectRows: true, contains: 'https://' });
      await step('source DELETE', `DELETE FROM sumologic.collectors.sources WHERE collector_id = '${cid}' AND source_id = '${sid}'`);
    }
  } finally {
    await step('collector DELETE', `DELETE FROM sumologic.collectors.collectors WHERE id = '${cid}'`);
    const gone = await q(`SELECT id FROM sumologic.collectors.collectors WHERE name = '${NAME}'`);
    record('collector gone after DELETE', !!gone.err || (gone.rows || []).length === 0, gone.err ? '' : JSON.stringify(gone.rows));
  }
}

async function roleLifecycle() {
  console.log(`== role lifecycle (${NAME}) ==`);
  await step('role INSERT', `INSERT INTO sumologic.roles.roles (name, description, capabilities) SELECT '${NAME}', 'stackql smoke test', '["viewCollectors"]'`);
  const rows = await step('role visible after INSERT', `SELECT id, name, description FROM sumologic.roles.roles WHERE name = '${NAME}'`, { expectRows: true });
  if (!rows) return;
  const rid = rows[0].id;
  try {
    await step('role UPDATE (PUT replaces the role)', `UPDATE sumologic.roles.roles SET name = '${NAME}', description = 'stackql smoke test (updated)', capabilities = '["viewCollectors"]' WHERE id = '${rid}'`);
    await step('role reflects UPDATE', `SELECT description FROM sumologic.roles.roles WHERE id = '${rid}'`, { expectRows: true, contains: '(updated)' });
  } finally {
    await step('role DELETE', `DELETE FROM sumologic.roles.roles WHERE id = '${rid}'`);
  }
}

async function folderLifecycle() {
  console.log(`== personal folder child lifecycle (${NAME}) ==`);
  const personal = await step('personal folder id', 'SELECT id FROM sumologic.content.personal_folder', { expectRows: true });
  if (!personal) return;
  await step('folder INSERT', `INSERT INTO sumologic.content.folders (name, description, parent_id) SELECT '${NAME}', 'stackql smoke test', '${personal[0].id}'`);
  const pf = await q('SELECT children FROM sumologic.content.personal_folder');
  let child = null;
  try { child = JSON.parse(pf.rows?.[0]?.children || '[]').find((c) => c.name === NAME); } catch { child = null; }
  record('folder visible in personal folder children', !!child, pf.err || 'not found');
  if (!child) return;
  await step('folder get', `SELECT name, description FROM sumologic.content.folders WHERE id = '${child.id}'`, { expectRows: true, contains: NAME });
  await step('folder UPDATE', `UPDATE sumologic.content.folders SET name = '${NAME}', description = 'stackql smoke test (updated)' WHERE id = '${child.id}'`);
  const del = await q(`EXEC sumologic.content.delete_jobs.start @id = '${child.id}'`);
  record('folder delete job started (EXEC delete_jobs.start)', !del.err, del.err || '');
  const jobId = del.rows?.[0]?.id;
  if (jobId) {
    await waitFor('folder delete job reaches Success (SELECT delete_jobs)', `SELECT status FROM sumologic.content.delete_jobs WHERE id = '${child.id}' AND job_id = '${jobId}'`, (r) => r?.[0]?.status === 'Success', { timeoutMs: 60000, intervalMs: 3000 });
  } else {
    record('folder delete job id returned', false, JSON.stringify(del.rows));
  }
}

async function monitorFolderLifecycle() {
  console.log(`== monitor folder lifecycle (${NAME}) ==`);
  const root = await step('monitors root id', 'SELECT id FROM sumologic.monitors.root', { expectRows: true });
  if (!root) return;
  await step('monitor folder INSERT (parentId query param + typed body)', `INSERT INTO sumologic.monitors.monitors (parent_id, name, description, type) SELECT '${root[0].id}', '${NAME}', 'stackql smoke test', 'MonitorsLibraryFolder'`);
  const found = await step('monitor folder visible via search', `SELECT json_extract(item, '$.id') AS id, json_extract(item, '$.name') AS name FROM sumologic.monitors.search WHERE query = 'name:${NAME}'`, { expectRows: true, contains: NAME });
  const id = (found || []).find((m) => m.name === NAME)?.id;
  if (id) {
    await step('monitor folder get', `SELECT name, content_type FROM sumologic.monitors.monitors WHERE id = '${id}'`, { expectRows: true, contains: 'Folder' });
    await step('monitor folder DELETE', `DELETE FROM sumologic.monitors.monitors WHERE id = '${id}'`);
  }
}

// ----------------------------------------------------------------- main
console.log(`sumologic smoke test  registry=${live ? 'published (stackql registry)' : 'local provider-dev/openapi'}  region=${region}  name=${NAME}  stackql=${bin}`);
if (live) {
  const pull = await q('REGISTRY PULL sumologic');
  record('registry pull sumologic', !pull.err, pull.err || '');
}
await sweep();
if (!cleanupOnly) {
  await readSmokes();
  if (!readOnly) {
    await collectorLifecycle();
    await roleLifecycle();
    await folderLifecycle();
    await monitorFolderLifecycle();
    await sweep();
  }
}
const failed = results.filter((r) => !r.pass);
console.log(`\n== summary ==\n  ${results.length - failed.length} passed, ${failed.length} failed; ${requests} statements (registry: ${live ? 'published' : 'local'})`);
for (const f of failed) console.log(`  FAIL  ${f.name}  [${String(f.note).slice(0, 160)}]`);
process.exit(failed.length ? 1 : 0);
