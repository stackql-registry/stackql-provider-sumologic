#!/usr/bin/env node

// Integration tests: run the generated sumologic provider (local file
// registry) against the mock Sumo Logic API and assert row-level results
// for each operation archetype:
//   - basic-auth header (SUMOLOGIC_ACCESSID / SUMOLOGIC_ACCESSKEY); the mock
//     401s anything else
//   - the region server variable: default us2, resolved from
//     SUMOLOGIC_ENVIRONMENT (x-stackQL-envVar), a WHERE region value beating
//     the environment
//   - token / next pagination across pages ($.data lists), the log search
//     list with its `token` cursor, the data archiving list with `nextToken`
//     and the POST-driven OpenTelemetry collectors list with the cursor in
//     the request body
//   - the Collector Management API wrappers: $.collectors / $.collector /
//     $.sources / $.source unwrapping, and the {"collector": {...}} /
//     {"source": {...}} request wrappers on INSERT
//   - predicate pushdown of declared query parameters (WHERE email = ...)
//   - the snake_case surface: snake WHERE / INSERT / UPDATE keys resolve to
//     the camelCase wire names via request.nativeCasing; SELECT columns are
//     snake aliases
//   - a user INSERT / SELECT / UPDATE (PUT) / DELETE lifecycle, a role
//     lifecycle with the assign_user / remove_user EXECs, the users.unlock
//     and partitions.decommission lifecycle EXECs
//   - the bare-array monitors search, the SCIM list ($.Resources), a
//     JSON-string scalar read (account owner), nested JSON columns
//     (personal folder children) and the error envelope on 404
//
// The vendor server template is https-only and cannot address the mock, so
// this runner materialises a TEST COPY of provider-dev/openapi in
// tests/integration/.registry-tmp (gitignored, recreated each run) with the
// server URLs rewritten to http://localhost:<port>/{region}/api - the
// region variable and its x-stackQL-envVar extension are preserved, and the
// mock records the region segment of every request. provider-dev/** is
// never modified.
//
// Requires a stackql binary: $STACKQL, ./stackql, or `stackql` on PATH.
//
// Usage: node tests/integration/run_integration_tests.mjs [--verbose]

import { spawn } from 'child_process';
import { existsSync, rmSync, cpSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import {
  startMockServer, EXPECTED_ACCESS_ID, EXPECTED_ACCESS_KEY, USER_ID, ADMIN_ROLE_ID, COLLECTOR_ID, SOURCE_ID, PARTITION_ID
} from './mock_sumologic_server.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..');
const verbose = process.argv.includes('--verbose');
const t0 = Date.now();

function findStackql() {
  if (process.env.STACKQL) return process.env.STACKQL;
  const local = path.join(repoRoot, process.platform === 'win32' ? 'stackql.exe' : 'stackql');
  if (existsSync(local)) return local;
  return 'stackql'; // PATH
}

function buildTestRegistry(port) {
  const srcDir = path.join(repoRoot, 'provider-dev', 'openapi');
  const tmpDir = path.join(here, '.registry-tmp');
  rmSync(tmpDir, { recursive: true, force: true });
  cpSync(srcDir, tmpDir, { recursive: true });
  const servicesDir = path.join(tmpDir, 'src', 'sumologic', 'v00.00.00000', 'services');
  for (const f of readdirSync(servicesDir)) {
    if (!f.endsWith('.yaml')) continue;
    const fp = path.join(servicesDir, f);
    const doc = yaml.load(readFileSync(fp, 'utf8'));
    if (!doc.servers?.[0]?.url) throw new Error(`no top-level servers block found in ${f}`);
    if (!doc.servers[0].variables?.region?.['x-stackQL-envVar']) throw new Error(`${f}: region server variable lost its x-stackQL-envVar`);
    doc.servers[0].url = `http://127.0.0.1:${port}/{region}/api`;
    writeFileSync(fp, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
  }
  return tmpDir;
}

const stackqlBin = findStackql();

// IMPORTANT: must be async (spawn, not spawnSync) - the mock server runs on
// this process's event loop, so a synchronous wait for stackql deadlocks.
function makeRunSql(registry) {
  return function runSql(sql, envOverrides = {}) {
    return new Promise((resolve) => {
      // SUMOLOGIC_ENVIRONMENT is set like a real user would: any-sdk lists a
      // server variable as REQUIRED whenever its env var is unset (the
      // default only applies at request time), so with it unset a SELECT
      // falls back to us2 but INSERT / UPDATE / EXEC routing does not see
      // `region` supplied. The default-fallback test passes undefined
      // explicitly.
      const env = {
        ...process.env,
        SUMOLOGIC_ACCESSID: EXPECTED_ACCESS_ID,
        SUMOLOGIC_ACCESSKEY: EXPECTED_ACCESS_KEY,
        SUMOLOGIC_ENVIRONMENT: 'us2',
        ...envOverrides
      };
      for (const [k, v] of Object.entries(env)) if (v === undefined) delete env[k];
      const child = spawn(stackqlBin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env });
      let stdout = '', stderr = '';
      child.stdout.on('data', (d) => { stdout += d; });
      child.stderr.on('data', (d) => { stderr += d; });
      const timer = setTimeout(() => child.kill(), 120000);
      child.on('error', (e) => { clearTimeout(timer); resolve({ rows: null, err: String(e) }); });
      child.on('close', () => {
        clearTimeout(timer);
        stdout = stdout.trim();
        stderr = stderr.trim();
        if (verbose) console.log(`    sql: ${sql}\n    out: ${stdout.slice(0, 400)}${stderr ? `\n    err: ${stderr.slice(0, 400)}` : ''}`);
        const errish = /http response status code: [45]|error|panic|FindRoute|no matching operation|cannot find matching operation|disallowed|cannot find any viable servers|not yet supported|not supported/i;
        if (errish.test(stderr)) return resolve({ rows: null, err: stderr });
        if (!stdout) return resolve({ rows: [], err: null });
        try {
          resolve({ rows: JSON.parse(stdout) ?? [], err: null }); // literal null for zero rows
        } catch {
          resolve({ rows: [{ _text: stdout }], err: errish.test(stdout) ? stdout : null }); // DML status text
        }
      });
    });
  };
}

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${!cond && note ? `  [${String(note).slice(0, 240)}]` : ''}`);
}

const { server, port, log, state } = await startMockServer();
const tmpDir = buildTestRegistry(port);
const regPath = tmpDir.split(path.sep).join('/');
const registry = JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });
const runSql = makeRunSql(registry);
console.log(`mock Sumo Logic API on 127.0.0.1:${port}, stackql: ${stackqlBin}`);

const calls = (mark, method, p) => log.slice(mark).filter((e) => e.method === method && e.path === p);

try {
  // --- meta sanity
  let r = await runSql('SHOW SERVICES IN sumologic');
  check('show services (50)', r.rows && r.rows.length === 50, r.err || `got ${r.rows?.length}`);

  // --- basic auth + region default + pagination
  let mark = log.length;
  r = await runSql('SELECT id, first_name, last_name, email, is_active FROM sumologic.users.users');
  check('users list: 3 rows across 2 pages (token / next pagination, $.data)', r.rows && r.rows.length === 3, r.err || `got ${r.rows?.length}`);
  const userCalls = calls(mark, 'GET', '/v1/users');
  check('pagination: second request carries the next token as ?token=', userCalls.length === 2 && userCalls[1].query.token === '2', JSON.stringify(userCalls.map((c) => c.query)));
  check('basic auth header sent (Basic base64(accessId:accessKey))',
    userCalls.length > 0 && /^basic\s+/i.test(userCalls[0].authorization) && userCalls[0].authorization.split(/\s+/)[1] === Buffer.from(`${EXPECTED_ACCESS_ID}:${EXPECTED_ACCESS_KEY}`).toString('base64'),
    JSON.stringify(userCalls.map((c) => c.authorization)));
  check('region resolved from SUMOLOGIC_ENVIRONMENT=us2', userCalls.every((c) => c.region === 'us2'), JSON.stringify(userCalls.map((c) => c.region)));
  check('snake_case columns (first_name, is_active) on the wire camelCase', r.rows && r.rows[0] && 'first_name' in r.rows[0] && 'is_active' in r.rows[0], JSON.stringify(r.rows?.[0]));
  check('no auth failures so far', state.authFailures === 0, `authFailures=${state.authFailures}`);
  mark = log.length;
  r = await runSql('SELECT id FROM sumologic.users.users', { SUMOLOGIC_ENVIRONMENT: undefined });
  check('region defaults to us2 for SELECT when SUMOLOGIC_ENVIRONMENT is unset', r.rows && r.rows.length === 3 && calls(mark, 'GET', '/v1/users').every((c) => c.region === 'us2'), r.err || JSON.stringify(log.slice(mark).map((e) => e.region)));
  r = await runSql('SELECT id FROM sumologic.users.users', { SUMOLOGIC_ACCESSKEY: 'wrong' });
  check('wrong access key -> 401 surfaced', r.err && /401/.test(r.err), r.err || 'no error');

  // --- region: env-resolved and WHERE override
  mark = log.length;
  r = await runSql('SELECT id FROM sumologic.users.users', { SUMOLOGIC_ENVIRONMENT: 'au' });
  check('SUMOLOGIC_ENVIRONMENT=au routes to the au deployment', r.rows && r.rows.length === 3 && calls(mark, 'GET', '/v1/users').every((c) => c.region === 'au'), r.err || JSON.stringify(log.slice(mark).map((e) => e.region)));
  mark = log.length;
  r = await runSql("SELECT id FROM sumologic.users.users WHERE region = 'eu'", { SUMOLOGIC_ENVIRONMENT: 'au' });
  check('WHERE region = eu beats SUMOLOGIC_ENVIRONMENT=au', r.rows && r.rows.length === 3 && calls(mark, 'GET', '/v1/users').every((c) => c.region === 'eu'), r.err || JSON.stringify(log.slice(mark).map((e) => e.region)));

  // --- predicate pushdown: declared query parameter in WHERE
  mark = log.length;
  r = await runSql("SELECT id, email FROM sumologic.users.users WHERE email = 'grace@example.com'");
  const filtered = calls(mark, 'GET', '/v1/users');
  check('WHERE email pushed down as ?email= (1 row)', r.rows && r.rows.length === 1 && filtered.length === 1 && filtered[0].query.email === 'grace@example.com', r.err || JSON.stringify(filtered.map((c) => c.query)));

  // --- single read
  r = await runSql(`SELECT first_name, last_name, json_extract(role_ids, '$[0]') AS role FROM sumologic.users.users WHERE id = '${USER_ID}'`);
  check('user get by id (json_extract on role_ids)', r.rows && r.rows.length === 1 && r.rows[0].role === ADMIN_ROLE_ID && r.rows[0].first_name === 'Ada', r.err || JSON.stringify(r.rows));

  // --- user lifecycle: INSERT / UPDATE (PUT) / DELETE / EXEC unlock
  mark = log.length;
  r = await runSql(`INSERT INTO sumologic.users.users (first_name, last_name, email, role_ids) SELECT 'Stack', 'QL', 'stackql-smoke@example.com', '["${ADMIN_ROLE_ID}"]'`);
  check('user INSERT', !r.err, r.err);
  const userPost = calls(mark, 'POST', '/v1/users');
  check('user INSERT wire body {firstName, lastName, email, roleIds[]} (snake -> camel)',
    userPost.length === 1 && userPost[0].body?.firstName === 'Stack' && userPost[0].body?.lastName === 'QL' && Array.isArray(userPost[0].body?.roleIds) && userPost[0].body.roleIds[0] === ADMIN_ROLE_ID,
    JSON.stringify(userPost.map((c) => c.body)));
  const newUser = [...state.users.values()].find((u) => u.email === 'stackql-smoke@example.com');
  check('user exists in mock state', !!newUser);
  if (newUser) {
    mark = log.length;
    // booleans are passed as quoted values: stackql's UPDATE parser rejects a
    // bare true/false on the right-hand side of SET
    r = await runSql(`UPDATE sumologic.users.users SET first_name = 'Stack', last_name = 'QL-renamed', is_active = 'false', role_ids = '["${ADMIN_ROLE_ID}"]' WHERE id = '${newUser.id}'`);
    check('user UPDATE (PUT)', !r.err, r.err);
    const userPut = calls(mark, 'PUT', `/v1/users/${newUser.id}`);
    check('user UPDATE wire body {firstName, lastName, isActive, roleIds}', userPut.length === 1 && userPut[0].body?.lastName === 'QL-renamed' && String(userPut[0].body?.isActive) === 'false' && Array.isArray(userPut[0].body?.roleIds), JSON.stringify(userPut.map((c) => c.body)));
    r = await runSql(`SELECT last_name, is_active FROM sumologic.users.users WHERE id = '${newUser.id}'`);
    check('user reflects UPDATE', r.rows && r.rows[0]?.last_name === 'QL-renamed' && (r.rows[0]?.is_active === false || r.rows[0]?.is_active === 0 || r.rows[0]?.is_active === 'false'), r.err || JSON.stringify(r.rows));
    mark = log.length;
    r = await runSql(`EXEC sumologic.users.users.unlock @id = '${newUser.id}'`);
    check('users.unlock EXEC -> POST /v1/users/{id}/unlock', !r.err && calls(mark, 'POST', `/v1/users/${newUser.id}/unlock`).length === 1, r.err || JSON.stringify(log.slice(mark).map((e) => `${e.method} ${e.path}`)));
    mark = log.length;
    r = await runSql(`DELETE FROM sumologic.users.users WHERE id = '${newUser.id}'`);
    check('user DELETE (204)', !r.err && calls(mark, 'DELETE', `/v1/users/${newUser.id}`).length === 1, r.err);
    check('user gone from mock state', !state.users.has(newUser.id));
  }

  // --- role lifecycle with assign_user / remove_user EXECs
  mark = log.length;
  r = await runSql(`INSERT INTO sumologic.roles.roles (name, description, capabilities) SELECT 'stackql-smoke-role', 'smoke', '["viewCollectors"]'`);
  check('role INSERT', !r.err, r.err);
  const newRole = [...state.roles.values()].find((x) => x.name === 'stackql-smoke-role');
  if (newRole) {
    mark = log.length;
    r = await runSql(`EXEC sumologic.roles.roles.assign_user @roleId = '${newRole.id}', @userId = '${USER_ID}'`);
    check('roles.assign_user EXEC -> PUT /v1/roles/{roleId}/users/{userId}', !r.err && calls(mark, 'PUT', `/v1/roles/${newRole.id}/users/${USER_ID}`).length === 1 && newRole.users.includes(USER_ID), r.err || JSON.stringify(log.slice(mark).map((e) => `${e.method} ${e.path}`)));
    r = await runSql(`EXEC sumologic.roles.roles.remove_user @roleId = '${newRole.id}', @userId = '${USER_ID}'`);
    check('roles.remove_user EXEC -> DELETE', !r.err && !newRole.users.includes(USER_ID), r.err);
    r = await runSql(`DELETE FROM sumologic.roles.roles WHERE id = '${newRole.id}'`);
    check('role DELETE', !r.err && !state.roles.has(newRole.id), r.err);
  } else {
    check('role exists in mock state', false, 'INSERT did not create the role');
  }
  r = await runSql("SELECT id, name FROM sumologic.roles.roles WHERE name = 'Administrator'");
  check('roles list filtered by name (pushdown)', r.rows && r.rows.length === 1 && r.rows[0].id === ADMIN_ROLE_ID, r.err || JSON.stringify(r.rows));

  // --- Collector Management API wrappers
  r = await runSql('SELECT id, name, collector_type, alive FROM sumologic.collectors.collectors');
  check('collectors list ($.collectors unwrapped, snake columns)', r.rows && r.rows.length === 1 && r.rows[0].collector_type === 'Hosted', r.err || JSON.stringify(r.rows));
  r = await runSql(`SELECT name, category FROM sumologic.collectors.collectors WHERE id = '${COLLECTOR_ID}'`);
  check('collector get ($.collector unwrapped)', r.rows && r.rows.length === 1 && r.rows[0].name === 'stackql-mock-hosted', r.err || JSON.stringify(r.rows));
  r = await runSql("SELECT id FROM sumologic.collectors.collectors WHERE name = 'stackql-mock-hosted'");
  check('collector get_by_name', r.rows && r.rows.length === 1 && String(r.rows[0].id) === String(COLLECTOR_ID), r.err || JSON.stringify(r.rows));
  mark = log.length;
  r = await runSql(`INSERT INTO sumologic.collectors.collectors (collector) SELECT '{"name": "stackql-smoke-collector", "collectorType": "Hosted", "category": "stackql/smoke", "description": "smoke"}'`);
  check('collector INSERT', !r.err, r.err);
  const collPost = calls(mark, 'POST', '/v1/collectors');
  check('collector INSERT wire body {"collector": {name, collectorType ...}}', collPost.length === 1 && collPost[0].body?.collector?.name === 'stackql-smoke-collector' && collPost[0].body.collector.collectorType === 'Hosted', JSON.stringify(collPost.map((c) => c.body)));
  const newColl = [...state.collectors.values()].find((c) => c.name === 'stackql-smoke-collector');
  if (newColl) {
    mark = log.length;
    r = await runSql(`INSERT INTO sumologic.collectors.sources (collectorId, source) SELECT '${newColl.id}', '{"name": "stackql-smoke-http", "sourceType": "HTTP", "category": "stackql/smoke/http"}'`);
    check('source INSERT under the new collector', !r.err, r.err);
    const srcPost = calls(mark, 'POST', `/v1/collectors/${newColl.id}/sources`);
    check('source INSERT wire body {"source": {...}}', srcPost.length === 1 && srcPost[0].body?.source?.sourceType === 'HTTP', JSON.stringify(srcPost.map((c) => c.body)));
    const newSrc = [...state.sources.values()].find((s) => s.name === 'stackql-smoke-http');
    if (newSrc) {
      r = await runSql(`SELECT id, name, source_type, url FROM sumologic.collectors.sources WHERE collector_id = '${newColl.id}'`);
      check('sources list ($.sources, snake collector_id -> collectorId path param)', r.rows && r.rows.some((s) => s.name === 'stackql-smoke-http') && r.rows[0].source_type === 'HTTP', r.err || JSON.stringify(r.rows));
      r = await runSql(`SELECT name FROM sumologic.collectors.sources WHERE collector_id = '${newColl.id}' AND source_id = '${newSrc.id}'`);
      check('source get ($.source)', r.rows && r.rows.length === 1 && r.rows[0].name === 'stackql-smoke-http', r.err || JSON.stringify(r.rows));
      r = await runSql(`DELETE FROM sumologic.collectors.sources WHERE collector_id = '${newColl.id}' AND source_id = '${newSrc.id}'`);
      check('source DELETE', !r.err && !state.sources.has(newSrc.id), r.err);
    }
    r = await runSql(`DELETE FROM sumologic.collectors.collectors WHERE id = '${newColl.id}'`);
    check('collector DELETE', !r.err && !state.collectors.has(newColl.id), r.err);
  } else {
    check('collector exists in mock state', false, 'INSERT did not create the collector');
  }
  r = await runSql(`SELECT id, name FROM sumologic.collectors.sources WHERE collector_id = '${COLLECTOR_ID}'`);
  check('seed source listed', r.rows && r.rows.length === 1 && String(r.rows[0].id) === String(SOURCE_ID), r.err || JSON.stringify(r.rows));
  r = await runSql('SELECT hosted_collectors_count, hosted_sources_count FROM sumologic.collectors.overview');
  check('collectors overview (singleton)', r.rows && r.rows.length === 1 && String(r.rows[0].hosted_collectors_count) === '1', r.err || JSON.stringify(r.rows));

  // --- partitions list + decommission EXEC
  r = await runSql('SELECT id, name, retention_period, is_active FROM sumologic.partitions.partitions');
  check('partitions list', r.rows && r.rows.length === 1 && r.rows[0].name === 'stackql_mock', r.err || JSON.stringify(r.rows));
  mark = log.length;
  r = await runSql(`EXEC sumologic.partitions.partitions.decommission @id = '${PARTITION_ID}'`);
  check('partitions.decommission EXEC', !r.err && calls(mark, 'POST', `/v1/partitions/${PARTITION_ID}/decommission`).length === 1 && state.partitions.get(PARTITION_ID).isActive === false, r.err);

  // --- other envelopes
  r = await runSql("SELECT json_extract(item, '$.name') AS name, path FROM sumologic.monitors.search WHERE query = 'type:monitor'");
  check('monitors search (bare array wrapped): 2 rows with item/path', r.rows && r.rows.length === 2 && r.rows[0].name === 'High error rate' && r.rows[0].path === '/Monitor/High error rate', r.err || JSON.stringify(r.rows));
  r = await runSql('SELECT id, name, content_type FROM sumologic.monitors.root');
  check('monitors root (singleton get)', r.rows && r.rows.length === 1 && r.rows[0].content_type === 'Folder', r.err || JSON.stringify(r.rows));
  mark = log.length;
  r = await runSql('SELECT id, name, query_string FROM sumologic.log_searches.log_searches');
  check('log searches list: 3 rows across 2 pages via the token cursor override', r.rows && r.rows.length === 3 && calls(mark, 'GET', '/v1/logSearches').length === 2, r.err || `rows=${r.rows?.length} calls=${calls(mark, 'GET', '/v1/logSearches').length}`);
  mark = log.length;
  r = await runSql('SELECT id, destination_name FROM sumologic.data_archiving.destinations');
  check('data archiving destinations: 3 rows across 2 pages via the nextToken override', r.rows && r.rows.length === 3 && calls(mark, 'GET', '/v1/dataarchiving/destinations').length === 2, r.err || `rows=${r.rows?.length} calls=${calls(mark, 'GET', '/v1/dataarchiving/destinations').length}`);
  mark = log.length;
  r = await runSql('SELECT id, name, alive FROM sumologic.ot_collectors.ot_collectors');
  const otCalls = calls(mark, 'POST', '/v1/otCollectors');
  check('ot_collectors list (SELECT over POST, $.data): 3 rows across 2 pages with the cursor in the body', r.rows && r.rows.length === 3 && otCalls.length === 2 && otCalls[1].body?.next === '2', r.err || `rows=${r.rows?.length} calls=${JSON.stringify(otCalls.map((c) => c.body))}`);
  r = await runSql('SELECT id, title, folder_id FROM sumologic.dashboards.dashboards');
  check('dashboards list ($.dashboards)', r.rows && r.rows.length === 2 && r.rows[0].title === 'Dashboard 1', r.err || JSON.stringify(r.rows));
  r = await runSql('SELECT field_name, data_type FROM sumologic.fields.fields');
  check('fields list ($.data, no pagination)', r.rows && r.rows.length === 2 && r.rows[0].field_name === 'service', r.err || JSON.stringify(r.rows));
  r = await runSql('SELECT id, user_name, active FROM sumologic.scim.users');
  check('SCIM users list (application/scim+json, $.Resources)', r.rows && r.rows.length === 3 && r.rows[0].user_name === 'ada@example.com', r.err || JSON.stringify(r.rows));
  r = await runSql('SELECT plan_type, account_activated FROM sumologic.account.status');
  check('account status (singleton)', r.rows && r.rows.length === 1 && r.rows[0].plan_type === 'Enterprise', r.err || JSON.stringify(r.rows));
  r = await runSql('SELECT account_owner FROM sumologic.account.account_owner');
  check('account owner (bare JSON string wrapped by the response transform) returns a row', r.rows && r.rows.length === 1 && r.rows[0].account_owner === 'ada@example.com', r.err || JSON.stringify(r.rows));
  r = await runSql("SELECT name, item_type, json_array_length(children) AS n, json_extract(children, '$[1].itemType') AS second FROM sumologic.content.personal_folder");
  check('personal folder (nested children JSON column)', r.rows && r.rows.length === 1 && String(r.rows[0].n) === '2' && r.rows[0].second === 'Dashboard', r.err || JSON.stringify(r.rows));

  // --- negative path: error envelope surfaces
  r = await runSql("SELECT first_name FROM sumologic.users.users WHERE id = 'does-not-exist'");
  check('404 error envelope surfaced', r.err && /404/.test(r.err), r.err || 'no error');
} finally {
  server.close();
}

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
if (failed.length) {
  console.log('failed:');
  for (const f of failed) console.log(`  - ${f.name}${f.note ? `: ${String(f.note).slice(0, 300)}` : ''}`);
  process.exit(1);
}
