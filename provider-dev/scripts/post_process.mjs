#!/usr/bin/env node

// Post-generation fixes for things the provider-utils generator cannot
// express. Idempotent; re-run after every generate. Validates and fails
// without writing.
//
// 1. snake_case surface. `request.nativeCasing: camel` on every method that
//    is not a body-less EXEC (paired with `snake_case_aliases: true` on the
//    provider config): snake_case WHERE / INSERT keys resolve to the
//    camelCase wire parameters and body attributes, and SELECT / DESCRIBE
//    columns present as snake aliases. A body-less EXEC method gets NO
//    request block at all - stackql's EXEC analyzer fails on a request block
//    without a body schema (`no request body for operation`), the google
//    provider finding. Methods with a body also declare the body mediaType
//    (application/json, or application/scim+json for the SCIM surface).
//
// 2. Object keys on non-GET SELECT methods. The generator only carries the
//    CSV stackql_object_key onto GET operations; the POST-backed collection
//    read (ot_collectors.list, POST /v1/otCollectors) needs it too.
//
// 3. Pagination overrides. The service-level config (token query parameter
//    in, `next` body token out) is the Sumo Logic convention; a few list
//    operations deviate and get a method-level pagination block:
//      nextToken body token   - data archiving destinations, log data
//                               forwarding destinations and rules
//      token body token       - saved log searches
//      next in the request BODY - the OpenTelemetry collectors list, a POST
//                               whose page cursor travels in the body
//
// 4. Scalar JSON responses. GET /v1/account/accountOwner returns a bare JSON
//    string, which projects no rows. The response is wrapped into an object
//    with a Go-template transform (the same mechanism the provider-utils
//    normalize pass uses for bare arrays), with a synthesised wrapper schema
//    so DESCRIBE shows the column.
//
// 5. Sanity: every service carries the region server template with the
//    SUMOLOGIC_ENVIRONMENT x-stackQL-envVar, and every skip in the CSV is
//    absent from the resources.
//
// Usage: node provider-dev/scripts/post_process.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import { parseCsv } from './lib/spec_helpers.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const servicesDir = path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'sumologic', 'v00.00.00000', 'services');
const csvPath = path.join(repoRoot, 'provider-dev', 'config', 'all_services.csv');

const PAGINATION_OVERRIDES = [
  { service: 'data_archiving', path: '/v1/dataarchiving/destinations', verb: 'get',
    pagination: { requestToken: { key: 'token', location: 'query' }, responseToken: { key: 'nextToken', location: 'body' } } },
  { service: 'logs_data_forwarding', path: '/v1/logsDataForwarding/destinations', verb: 'get',
    pagination: { requestToken: { key: 'token', location: 'query' }, responseToken: { key: 'nextToken', location: 'body' } } },
  { service: 'logs_data_forwarding', path: '/v1/logsDataForwarding/rules', verb: 'get',
    pagination: { requestToken: { key: 'token', location: 'query' }, responseToken: { key: 'nextToken', location: 'body' } } },
  { service: 'log_searches', path: '/v1/logSearches', verb: 'get',
    pagination: { requestToken: { key: 'token', location: 'query' }, responseToken: { key: 'token', location: 'body' } } },
  { service: 'ot_collectors', path: '/v1/otCollectors', verb: 'post',
    pagination: { requestToken: { key: 'next', location: 'body' }, responseToken: { key: 'next', location: 'body' } } }
];

const SCALAR_WRAPS = [
  { service: 'account', path: '/v1/account/accountOwner', verb: 'get', key: 'accountOwner', schemaName: 'AccountOwnerResponse',
    description: 'Email address of the account owner (the bare JSON string returned by the API, wrapped so it projects as a row).' }
];

if (!fs.existsSync(servicesDir)) {
  console.error(`Error: ${servicesDir} not found - run the generate step first`);
  process.exit(1);
}

// CSV: (service, path, verb) -> row
const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
const col = Object.fromEntries(rows[0].map((h, i) => [h, i]));
const csvByKey = new Map();
for (const r of rows.slice(1)) csvByKey.set(`${r[col.filename].replace(/\.yaml$/, '')}::${r[col.path]}::${r[col.verb]}`, r);

function refToPathVerb(ref) {
  const parts = ref.replace(/^#\/paths\//, '').split('/');
  const verb = parts.pop();
  return { pathKey: parts.join('/').replace(/~1/g, '/'), verb };
}

const errors = [];
const stats = { services: 0, methods: 0, cased: 0, bodyMedia: 0, execNoRequest: 0, objectKeys: 0, pagination: 0 };
const docs = new Map();
const overridesApplied = new Set();

for (const f of fs.readdirSync(servicesDir).filter((x) => x.endsWith('.yaml')).sort()) {
  const service = f.replace(/\.yaml$/, '');
  const doc = yaml.load(fs.readFileSync(path.join(servicesDir, f), 'utf8'));
  stats.services++;
  const srv = doc.servers?.[0];
  if (!srv || !/\{region\}/.test(srv.url) || srv.variables?.region?.['x-stackQL-envVar'] !== 'SUMOLOGIC_ENVIRONMENT') {
    errors.push(`${f}: top-level server is not the region template with x-stackQL-envVar SUMOLOGIC_ENVIRONMENT`);
  }
  const resources = doc.components?.['x-stackQL-resources'] || {};
  if (Object.keys(resources).length === 0) errors.push(`${f}: no x-stackQL-resources`);
  for (const [resName, res] of Object.entries(resources)) {
    const verbByRef = new Map();
    for (const [sqlVerb, refs] of Object.entries(res.sqlVerbs || {})) for (const r of refs || []) verbByRef.set(r.$ref, sqlVerb);
    for (const [methodName, method] of Object.entries(res.methods || {})) {
      stats.methods++;
      const { pathKey, verb } = refToPathVerb(method.operation.$ref);
      const op = doc.paths?.[pathKey]?.[verb];
      if (!op) { errors.push(`${f}: ${resName}.${methodName} references missing operation ${verb.toUpperCase()} ${pathKey}`); continue; }
      const sqlVerb = verbByRef.get(`#/components/x-stackQL-resources/${resName}/methods/${methodName}`) || 'exec';
      const csvRow = csvByKey.get(`${service}::${pathKey}::${verb}`);
      if (!csvRow) { errors.push(`${f}: ${resName}.${methodName} (${verb.toUpperCase()} ${pathKey}) has no CSV row`); continue; }
      if (csvRow[col.stackql_resource_name] === 'skip_this_resource') errors.push(`${f}: ${resName}.${methodName} is marked skip_this_resource in the CSV but was generated`);
      const bodyMediaType = Object.keys(op.requestBody?.content || {})[0] || '';
      // 1. nativeCasing / request block
      if (sqlVerb === 'exec' && !bodyMediaType) {
        if (method.request) { delete method.request; }
        stats.execNoRequest++;
      } else {
        method.request = { ...(method.request || {}) };
        if (bodyMediaType) { method.request.mediaType = bodyMediaType; stats.bodyMedia++; }
        method.request.nativeCasing = 'camel';
        stats.cased++;
      }
      // 2. objectKey on non-GET select methods
      if (sqlVerb === 'select' && verb !== 'get' && csvRow[col.stackql_object_key] && !method.response?.objectKey) {
        method.response = { ...(method.response || {}), objectKey: csvRow[col.stackql_object_key] };
        stats.objectKeys++;
      }
      // 3. pagination overrides
      const ov = PAGINATION_OVERRIDES.find((o) => o.service === service && o.path === pathKey && o.verb === verb);
      if (ov) {
        method.config = { ...(method.config || {}), pagination: ov.pagination };
        overridesApplied.add(`${service}::${pathKey}::${verb}`);
        stats.pagination++;
      }
      // 4. scalar response wrap
      const sw = SCALAR_WRAPS.find((o) => o.service === service && o.path === pathKey && o.verb === verb);
      if (sw) {
        doc.components.schemas = doc.components.schemas || {};
        doc.components.schemas[sw.schemaName] = { type: 'object', properties: { [sw.key]: { type: 'string', description: sw.description } } };
        method.response = {
          ...(method.response || {}),
          mediaType: 'application/json',
          overrideMediaType: 'application/json',
          schema_override: { $ref: `#/components/schemas/${sw.schemaName}` },
          transform: { body: [`{{- $wrapped := printf "{\\"${sw.key}\\":%s}" . -}}`, '{{- $wrapped -}}'].join('\n'), type: 'golang_template_text_v0.3.0' }
        };
        overridesApplied.add(`${service}::${pathKey}::${verb}`);
        stats.scalarWraps = (stats.scalarWraps || 0) + 1;
      }
    }
  }
  docs.set(f, doc);
}
for (const o of [...PAGINATION_OVERRIDES, ...SCALAR_WRAPS]) {
  if (!overridesApplied.has(`${o.service}::${o.path}::${o.verb}`)) errors.push(`override target not found: ${o.service} ${o.verb.toUpperCase()} ${o.path}`);
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
for (const [f, doc] of docs) fs.writeFileSync(path.join(servicesDir, f), yaml.dump(doc, { lineWidth: -1, noRefs: true }));
console.log(`post_process: ${stats.services} services, ${stats.methods} methods; request.nativeCasing: camel on ${stats.cased} (${stats.bodyMedia} with a body mediaType), ${stats.execNoRequest} body-less EXEC methods left without a request block, ${stats.objectKeys} object key(s) added to non-GET SELECT methods, ${stats.pagination} pagination override(s), ${stats.scalarWraps || 0} scalar response wrap(s)`);
