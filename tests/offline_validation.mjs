#!/usr/bin/env node

// Quick offline validation of the generated provider against the local file
// registry - no network, no server, no credentials. Runs SHOW SERVICES /
// SHOW RESOURCES / SHOW METHODS and DESCRIBE EXTENDED over representative
// resources and asserts the expected shape of this build: the service
// split, the resource inventory per service, the region server variable
// (SUMOLOGIC_ENVIRONMENT via x-stackQL-envVar, default us2), the snake_case
// column surface, the lifecycle EXEC methods on their parent resources, the
// SCIM REPLACE method and the reason-coded skips. Exit 1 on any failure.
//
// Usage: node tests/offline_validation.mjs
// Binary resolution: $STACKQL, ./stackql(.exe), then PATH.

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const regPath = path.join(repoRoot, 'provider-dev', 'openapi').replace(/\\/g, '/');
const registry = JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });

function findBinary() {
  if (process.env.STACKQL && fs.existsSync(process.env.STACKQL)) return process.env.STACKQL;
  for (const name of ['stackql', 'stackql.exe']) {
    const local = path.join(repoRoot, name);
    if (fs.existsSync(local)) return local;
  }
  return 'stackql'; // PATH
}
const bin = findBinary();

function runSql(sql, envOverrides = {}) {
  return new Promise((resolve) => {
    const env = { ...process.env, ...envOverrides };
    for (const [k, v] of Object.entries(envOverrides)) if (v === undefined) delete env[k];
    const child = spawn(bin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env });
    let stdout = '', stderr = '';
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      let rows = [];
      try { rows = JSON.parse(stdout) ?? []; } catch { rows = []; }
      resolve({ code, rows, stdout, stderr });
    });
    child.on('error', (err) => resolve({ code: -1, rows: [], stdout: '', stderr: String(err) }));
  });
}

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : `  [${String(note).slice(0, 200)}]`}`);
}

const EXPECTED_SERVICES = ['access_keys', 'account', 'apps', 'archive', 'budgets', 'collectors', 'connections', 'content', 'content_sync', 'dashboards',
  'data_archiving', 'data_deletion_rules', 'data_masking_rules', 'dynamic_parsing_rules', 'event_extraction_rules', 'extraction_rules', 'feature_settings',
  'fields', 'health_events', 'ingest_budgets', 'log_searches', 'logs_data_forwarding', 'lookup_tables', 'macros', 'metrics_queries', 'metrics_searches',
  'monitors', 'muting_schedules', 'oauth', 'organizations', 'ot_collectors', 'parsers', 'partitions', 'password_policy', 'policies', 'roles', 'saml',
  'scheduled_views', 'schemas', 'scim', 'search_jobs', 'service_accounts', 'service_allowlist', 'slos', 'source_templates', 'threat_intel', 'tokens',
  'tracing', 'transformation_rules', 'users'];
const EXPECTED_RESOURCES = {
  users: ['users'],
  collectors: ['collectors', 'offline_collectors', 'overview', 'sources', 'upgradable_collectors', 'upgrade_targets', 'upgrades'],
  content: ['admin_recommended_folder_jobs', 'admin_recommended_folder_results', 'copy_jobs', 'delete_jobs', 'export_jobs', 'export_results', 'folders',
    'global_folder_jobs', 'global_folder_results', 'import_jobs', 'import_results', 'installed_apps_folder_jobs', 'installed_apps_folder_results', 'items',
    'paths', 'permissions', 'personal_folder'],
  monitors: ['monitors', 'paths', 'permission_summaries', 'permissions', 'playbook_details', 'playbooks', 'root', 'search', 'usage_info'],
  policies: ['access_keys_lifetime', 'audit', 'data_access_level', 'data_deletion', 'max_user_session_timeout', 'oauth_cimd', 'search_audit',
    'share_dashboards_outside_organization', 'timestamp_format', 'user_concurrent_sessions_limit'],
  roles: ['roles', 'roles_v2'],
  apps: ['app_subscriptions', 'apps', 'apps_v2', 'install_jobs', 'install_jobs_v2', 'uninstall_jobs', 'upgrade_jobs'],
  tracing: ['critical_path_service_breakdowns', 'critical_paths', 'metrics', 'service_map', 'span_billing_info', 'span_queries', 'span_query_aggregates',
    'span_query_facets', 'span_query_field_values', 'span_query_fields', 'span_query_results', 'spans', 'trace_events', 'trace_existence', 'trace_queries',
    'trace_query_field_values', 'trace_query_fields', 'trace_query_results', 'traces']
};

console.log(`offline validation against ${regPath} using ${bin}`);
const t0 = Date.now();

// --- provider document
const providerDoc = yaml.load(fs.readFileSync(path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'sumologic', 'v00.00.00000', 'provider.yaml'), 'utf8'));
check('provider.yaml: basic auth on SUMOLOGIC_ACCESSID / SUMOLOGIC_ACCESSKEY',
  providerDoc.config?.auth?.type === 'basic' && providerDoc.config.auth.username_var === 'SUMOLOGIC_ACCESSID' && providerDoc.config.auth.password_var === 'SUMOLOGIC_ACCESSKEY',
  JSON.stringify(providerDoc.config));
check('provider.yaml: snake_case_aliases enabled', providerDoc.config?.snake_case_aliases === true);
check(`provider.yaml: ${EXPECTED_SERVICES.length} services`, Object.keys(providerDoc.providerServices || {}).sort().join(',') === EXPECTED_SERVICES.join(','),
  Object.keys(providerDoc.providerServices || {}).sort().join(','));

// --- SHOW SERVICES / RESOURCES
let r = await runSql('SHOW SERVICES IN sumologic');
check(`SHOW SERVICES: ${EXPECTED_SERVICES.length} services`, r.rows.length === EXPECTED_SERVICES.length && EXPECTED_SERVICES.every((s) => r.rows.some((x) => x.name === s)),
  r.stderr || r.rows.map((x) => x.name).join(','));
for (const [service, expected] of Object.entries(EXPECTED_RESOURCES)) {
  r = await runSql(`SHOW RESOURCES IN sumologic.${service}`);
  const got = r.rows.map((x) => x.name).sort();
  check(`SHOW RESOURCES IN sumologic.${service}: ${expected.length} resources`, got.join(',') === expected.join(','), r.stderr || got.join(','));
}

// --- region server variable: default us2, env-resolved, never listed as required
r = await runSql('SHOW METHODS IN sumologic.users.users', { SUMOLOGIC_ENVIRONMENT: undefined });
const methodNames = r.rows.map((m) => m.MethodName).sort();
check('users.users methods: list, get, create, update, delete + lifecycle EXECs',
  ['create', 'delete', 'disable_mfa', 'get', 'list', 'request_change_email', 'resend_welcome_email', 'reset_password', 'unlock', 'update'].every((m) => methodNames.includes(m)),
  r.stderr || methodNames.join(','));
// any-sdk lists a server variable as required whenever its env var is unset
// (the default only applies at request time), so SHOW METHODS reports region
// with SUMOLOGIC_ENVIRONMENT unset and drops it once the variable is set
const listMethod = r.rows.find((m) => m.MethodName === 'list');
check('users.list: region listed as required while SUMOLOGIC_ENVIRONMENT is unset', listMethod && String(listMethod.RequiredParams || '').includes('region'), JSON.stringify(listMethod));
r = await runSql('SHOW METHODS IN sumologic.users.users', { SUMOLOGIC_ENVIRONMENT: 'au' });
check('users.list: region not required once SUMOLOGIC_ENVIRONMENT is set', r.rows.some((m) => m.MethodName === 'list' && !String(m.RequiredParams || '').includes('region')), r.stderr);
const usersDoc = yaml.load(fs.readFileSync(path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'sumologic', 'v00.00.00000', 'services', 'users.yaml'), 'utf8'));
check('users.yaml: region server variable carries x-stackQL-envVar SUMOLOGIC_ENVIRONMENT with default us2 and the 11 deployments',
  usersDoc.servers?.[0]?.variables?.region?.['x-stackQL-envVar'] === 'SUMOLOGIC_ENVIRONMENT' && usersDoc.servers[0].variables.region.default === 'us2' && usersDoc.servers[0].variables.region.enum.length === 11,
  JSON.stringify(usersDoc.servers));
check('users.yaml: service-level pagination config (token query / next body)',
  usersDoc['x-stackQL-config']?.pagination?.requestToken?.key === 'token' && usersDoc['x-stackQL-config'].pagination.responseToken?.key === 'next',
  JSON.stringify(usersDoc['x-stackQL-config']));

// --- snake_case surface
r = await runSql('DESCRIBE EXTENDED sumologic.users.users');
let cols = r.rows.map((c) => c.name);
check('DESCRIBE users.users: snake_case columns (first_name, is_active, role_ids)', ['first_name', 'is_active', 'role_ids', 'email'].every((c) => cols.includes(c)), r.stderr || cols.join(','));
r = await runSql('DESCRIBE EXTENDED sumologic.collectors.collectors');
cols = r.rows.map((c) => c.name);
check('DESCRIBE collectors.collectors: unwrapped $.collector columns (collector_type, last_seen_alive)', ['collector_type', 'last_seen_alive', 'alive', 'name'].every((c) => cols.includes(c)), r.stderr || cols.join(','));
r = await runSql('DESCRIBE EXTENDED sumologic.partitions.partitions');
cols = r.rows.map((c) => c.name);
check('DESCRIBE partitions.partitions: routing_expression, retention_period, analytics_tier', ['routing_expression', 'retention_period', 'analytics_tier'].every((c) => cols.includes(c)), r.stderr || cols.join(','));

// --- method shapes
r = await runSql('SHOW EXTENDED METHODS IN sumologic.monitors.search');
check('monitors.search.list requires query', r.rows.some((m) => m.MethodName === 'list' && String(m.RequiredParams || '').includes('query')), r.stderr || JSON.stringify(r.rows));
r = await runSql('SHOW EXTENDED METHODS IN sumologic.monitors.monitors');
check('monitors.monitors: get / get_by_path / create / update / delete + copy, move, export, import, disable_by_ids EXECs',
  ['get', 'get_by_path', 'create', 'update', 'delete', 'copy', 'move', 'export', 'import', 'disable_by_ids', 'read_by_ids', 'delete_by_ids'].every((m) => r.rows.some((x) => x.MethodName === m)),
  r.stderr || r.rows.map((x) => x.MethodName).join(','));
check('monitors.monitors.create requires parentId (query) - snake alias parent_id', r.rows.some((m) => m.MethodName === 'create' && /parentId|parent_id/.test(String(m.RequiredParams))), JSON.stringify(r.rows.find((m) => m.MethodName === 'create')));
r = await runSql('SHOW EXTENDED METHODS IN sumologic.scim.users');
check('scim.users: update (PATCH) and replace (PUT) both present', r.rows.some((m) => m.MethodName === 'update' && m.SQLVerb === 'UPDATE') && r.rows.some((m) => m.MethodName === 'replace' && m.SQLVerb === 'REPLACE'), r.stderr || JSON.stringify(r.rows.map((m) => [m.MethodName, m.SQLVerb])));
r = await runSql('SHOW EXTENDED METHODS IN sumologic.lookup_tables.lookup_tables');
check('lookup_tables: upload (multipart) is skipped, truncate / upsert_row / delete_row are EXECs', !r.rows.some((m) => m.MethodName === 'upload') && ['truncate', 'upsert_row', 'delete_row'].every((m) => r.rows.some((x) => x.MethodName === m && x.SQLVerb === 'EXEC')), r.stderr || r.rows.map((x) => x.MethodName).join(','));
r = await runSql('SHOW EXTENDED METHODS IN sumologic.scheduled_views.scheduled_views');
check('scheduled_views: pause / start / disable EXECs on the resource', ['pause', 'start', 'disable'].every((m) => r.rows.some((x) => x.MethodName === m && x.SQLVerb === 'EXEC')), r.stderr || r.rows.map((x) => x.MethodName).join(','));
r = await runSql('SHOW EXTENDED METHODS IN sumologic.source_templates.source_templates');
check('source_templates: only the v2 surface (deprecated v1 skipped)', r.rows.length === 8 && r.rows.every((m) => !/sourceTemplate\//.test(String(m.MethodName))), r.stderr || r.rows.map((x) => x.MethodName).join(','));
r = await runSql('SHOW INSERT INTO sumologic.users.users', { SUMOLOGIC_ENVIRONMENT: 'us2' });
check('SHOW INSERT users.users renders snake body columns (first_name, role_ids)', /first_name/.test(r.stdout) && /role_ids/.test(r.stdout), r.stderr || r.stdout.slice(0, 200));
r = await runSql('SHOW INSERT INTO sumologic.collectors.collectors', { SUMOLOGIC_ENVIRONMENT: 'us2' });
check('SHOW INSERT collectors.collectors renders the collector wrapper column', /collector/.test(r.stdout), r.stderr || r.stdout.slice(0, 200));
r = await runSql('DESCRIBE EXTENDED sumologic.account.account_owner');
check('DESCRIBE account.account_owner: account_owner column (scalar response wrapped)', r.rows.some((c) => c.name === 'account_owner'), r.stderr || JSON.stringify(r.rows));

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
if (failed.length) {
  console.log('failed:');
  for (const f of failed) console.log(`  - ${f.name}${f.note ? `: ${String(f.note).slice(0, 300)}` : ''}`);
  process.exit(1);
}
