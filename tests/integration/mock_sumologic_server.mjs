#!/usr/bin/env node

// Mock Sumo Logic API for integration-testing the generated sumologic
// provider without an account. Serves canned JSON in the wire shapes the
// real API produces (from the vendor's published examples): paginated lists
// as {"data": [...], "next": "<token>"|null}, the Collector Management API
// wrappers ({"collectors": [...]}, {"collector": {...}}, {"sources": [...]},
// {"source": {...}}), bare-array responses (monitors search), the log
// search list with its `token` cursor, the data archiving list with
// `nextToken`, the POST-driven OpenTelemetry collectors list with the cursor
// in the request body, SCIM JSON, a JSON-string scalar (account owner) and
// the {"id", "errors": [{"code", "message"}]} error envelope. Mutable
// in-memory stores make the user / role / collector / source lifecycles
// round-trip.
//
// The deployment (region) is the FIRST path segment: the integration runner
// rewrites every service server URL to http://localhost:<port>/{region}/api,
// so the mock records which region each request addressed - proving the
// SUMOLOGIC_ENVIRONMENT resolution and the WHERE region override.
//
// Every request must carry `Authorization: Basic base64(ACCESS_ID:ACCESS_KEY)`
// matching EXPECTED_ACCESS_ID / EXPECTED_ACCESS_KEY or it is rejected 401.
//
// Exports startMockServer() for the test runner; also runnable standalone:
//   node tests/integration/mock_sumologic_server.mjs [port]

import http from 'http';
import { URL } from 'url';

export const EXPECTED_ACCESS_ID = 'suAbCdEfGhIjKl';
export const EXPECTED_ACCESS_KEY = 'mock-access-key-secret';
export const USER_ID = '000000000000ABCD';
export const ADMIN_ROLE_ID = '00000000000001AB';
export const COLLECTOR_ID = 100000001;
export const SOURCE_ID = 200000001;
export const PARTITION_ID = '0000000000000A01';

const REQUEST_ID = 'D3AF4B2B-6C30-46C6-A7B4-FC9A7CFAD0F7';

let idCounter = 0;
const newHexId = () => { idCounter++; return (0x1000000 + idCounter).toString(16).toUpperCase().padStart(16, '0'); };
const newIntId = (base) => { idCounter++; return base + idCounter; };

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function userObj(id, firstName, lastName, email, extra = {}) {
  return {
    firstName, lastName, email, roleIds: [ADMIN_ROLE_ID], id,
    createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-06-01T08:00:00Z', modifiedBy: USER_ID,
    isActive: true, isLocked: false, isMfaEnabled: false, lastLoginTimestamp: '2026-09-01T00:00:00Z', ...extra
  };
}
function roleObj(id, name, extra = {}) {
  return {
    name, description: `${name} role`, filterPredicate: '', users: [USER_ID], capabilities: ['viewCollectors'], autofillDependencies: true,
    id, createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID, systemDefined: false, ...extra
  };
}
function collectorObj(id, name, extra = {}) {
  return {
    id, name, description: `${name} description`, category: 'stackql/test', collectorType: 'Hosted', collectorVersion: '', alive: true,
    lastSeenAlive: 1757900000000, ephemeral: false, timeZone: 'UTC', fields: { _budget: 'default' },
    links: [{ rel: 'sources', href: `/v1/collectors/${id}/sources` }], ...extra
  };
}
function sourceObj(id, collectorId, name, extra = {}) {
  return {
    id, name, category: 'stackql/test/http', hostName: '', sourceType: 'HTTP', alive: true, automaticDateParsing: true,
    multilineProcessingEnabled: true, useAutolineMatching: true, forceTimeZone: false, messagePerRequest: false, encoding: 'UTF-8',
    url: `https://collectors.mock.sumologic.com/receiver/v1/http/${collectorId}${id}`, fields: {}, filters: [], cutoffTimestamp: 0, ...extra
  };
}
function partitionObj(id, name) {
  return {
    name, routingExpression: `_sourceCategory=${name}`, analyticsTier: 'continuous', retentionPeriod: 30, isCompliant: false, isIncludedInDefaultSearch: true,
    id, totalBytes: 123456789, isActive: true, newRetentionPeriod: null, retentionEffectiveAt: null, dataForwardingId: null, isSearchable: true,
    indexType: 'Partition', reduceRetentionPeriodImmediately: false
  };
}

export async function startMockServer(port = 0) {
  const log = [];
  const state = {
    authFailures: 0,
    users: new Map([
      [USER_ID, userObj(USER_ID, 'Ada', 'Lovelace', 'ada@example.com')],
      ['000000000000ABCE', userObj('000000000000ABCE', 'Grace', 'Hopper', 'grace@example.com')],
      ['000000000000ABCF', userObj('000000000000ABCF', 'Alan', 'Turing', 'alan@example.com', { isActive: false })]
    ]),
    roles: new Map([
      [ADMIN_ROLE_ID, roleObj(ADMIN_ROLE_ID, 'Administrator', { systemDefined: true })],
      ['00000000000001AC', roleObj('00000000000001AC', 'Analyst')]
    ]),
    collectors: new Map([[COLLECTOR_ID, collectorObj(COLLECTOR_ID, 'stackql-mock-hosted')]]),
    sources: new Map([[SOURCE_ID, sourceObj(SOURCE_ID, COLLECTOR_ID, 'stackql-mock-http')]]),
    partitions: new Map([[PARTITION_ID, partitionObj(PARTITION_ID, 'stackql_mock')]])
  };

  function send(res, status, body, headers = {}) {
    const isString = typeof body === 'string';
    const payload = body === undefined ? '' : (isString ? body : JSON.stringify(body));
    res.writeHead(status, { 'Content-Type': headers['Content-Type'] || 'application/json', ...headers });
    res.end(payload);
  }
  function err(res, status, code, message) {
    send(res, status, { id: REQUEST_ID, errors: [{ code, message }] });
  }
  // paginate an array with limit/token (token = start index)
  function page(items, limit, token, key = 'data', nextKey = 'next') {
    const start = token ? parseInt(token, 10) : 0;
    const size = limit ? parseInt(limit, 10) : 2;
    const slice = items.slice(start, start + size);
    const next = start + size < items.length ? String(start + size) : null;
    return { [key]: slice, [nextKey]: next };
  }

  const server = http.createServer((req, res) => {
    let raw = '';
    req.on('data', (c) => { raw += c; });
    req.on('end', () => {
      const url = new URL(req.url, `http://${req.headers.host}`);
      const segs = url.pathname.split('/').filter(Boolean);
      const region = segs.shift(); // /{region}/api/v1/...
      if (segs.shift() !== 'api') return err(res, 404, 'not_found', `unexpected path ${url.pathname}`);
      const p = '/' + segs.join('/');
      const q = Object.fromEntries(url.searchParams.entries());
      let body = null;
      if (raw) { try { body = JSON.parse(raw); } catch { body = raw; } }
      const entry = { method: req.method, region, path: p, query: q, body, authorization: req.headers.authorization || '', ifMatch: req.headers['if-match'] || '', contentType: req.headers['content-type'] || '' };
      log.push(entry);

      // basic auth
      const expected = 'Basic ' + Buffer.from(`${EXPECTED_ACCESS_ID}:${EXPECTED_ACCESS_KEY}`).toString('base64');
      if (!entry.authorization || entry.authorization.split(/\s+/)[1] !== expected.split(' ')[1] || !/^basic$/i.test(entry.authorization.split(/\s+/)[0])) {
        state.authFailures++;
        return err(res, 401, 'unauthorized', 'Credential could not be verified.');
      }
      const m = req.method;
      let match;

      // ---- users
      if (m === 'GET' && p === '/v1/users') {
        let items = [...state.users.values()];
        if (q.email) items = items.filter((u) => u.email === q.email);
        if (q.sortBy) items = [...items].sort((a, b) => String(a[q.sortBy]).localeCompare(String(b[q.sortBy])));
        return send(res, 200, page(items, q.limit, q.token));
      }
      if (m === 'POST' && p === '/v1/users') {
        const id = newHexId();
        const u = userObj(id, body.firstName, body.lastName, body.email, { roleIds: body.roleIds || [] });
        state.users.set(id, u);
        return send(res, 200, u);
      }
      if ((match = p.match(/^\/v1\/users\/([^/]+)$/))) {
        const u = state.users.get(match[1]);
        if (!u) return err(res, 404, 'user:doesnt_exist', 'User does not exist.');
        if (m === 'GET') return send(res, 200, u);
        if (m === 'PUT') { Object.assign(u, body); return send(res, 200, u); }
        if (m === 'DELETE') { state.users.delete(match[1]); return send(res, 204); }
      }
      if ((match = p.match(/^\/v1\/users\/([^/]+)\/unlock$/)) && m === 'POST') {
        const u = state.users.get(match[1]);
        if (!u) return err(res, 404, 'user:doesnt_exist', 'User does not exist.');
        u.isLocked = false;
        return send(res, 204);
      }
      // ---- roles
      if (m === 'GET' && p === '/v1/roles') {
        let items = [...state.roles.values()];
        if (q.name) items = items.filter((r) => r.name === q.name);
        return send(res, 200, page(items, q.limit, q.token));
      }
      if (m === 'POST' && p === '/v1/roles') {
        const id = newHexId();
        const r = roleObj(id, body.name, { description: body.description, capabilities: body.capabilities || [], users: body.users || [] });
        state.roles.set(id, r);
        return send(res, 200, r);
      }
      if ((match = p.match(/^\/v1\/roles\/([^/]+)$/))) {
        const r = state.roles.get(match[1]);
        if (!r) return err(res, 404, 'role:doesnt_exist', 'Role does not exist.');
        if (m === 'GET') return send(res, 200, r);
        if (m === 'PUT') { Object.assign(r, body); return send(res, 200, r); }
        if (m === 'DELETE') { state.roles.delete(match[1]); return send(res, 204); }
      }
      if ((match = p.match(/^\/v1\/roles\/([^/]+)\/users\/([^/]+)$/))) {
        const r = state.roles.get(match[1]);
        if (!r) return err(res, 404, 'role:doesnt_exist', 'Role does not exist.');
        if (m === 'PUT') { if (!r.users.includes(match[2])) r.users.push(match[2]); return send(res, 200, r); }
        if (m === 'DELETE') { r.users = r.users.filter((u) => u !== match[2]); return send(res, 204); }
      }
      // ---- collectors (Collector Management API)
      if (m === 'GET' && p === '/v1/collectors') {
        let items = [...state.collectors.values()];
        if (q.filter === 'hosted') items = items.filter((c) => c.collectorType === 'Hosted');
        return send(res, 200, { collectors: items });
      }
      if (m === 'POST' && p === '/v1/collectors') {
        if (!body || !body.collector) return err(res, 400, 'collectors.invalid.request', 'collector wrapper missing');
        const id = newIntId(COLLECTOR_ID);
        const c = collectorObj(id, body.collector.name, { description: body.collector.description || '', category: body.collector.category || '', collectorType: body.collector.collectorType || 'Hosted', fields: body.collector.fields || {} });
        state.collectors.set(id, c);
        return send(res, 200, { collector: c });
      }
      if (m === 'GET' && p === '/v1/collectors/overview') {
        return send(res, 200, { installedCollectorsCount: 0, installedSourcesCount: 0, hostedCollectorsCount: state.collectors.size, hostedSourcesCount: state.sources.size, offlineCollectorsCount: 0, errors: 0, warnings: 0 });
      }
      if ((match = p.match(/^\/v1\/collectors\/name\/([^/]+)$/)) && m === 'GET') {
        const c = [...state.collectors.values()].find((x) => x.name === decodeURIComponent(match[1]));
        if (!c) return err(res, 404, 'collectors.collector.invalid', 'The specified collector ID or name is invalid.');
        return send(res, 200, { collector: c }, { ETag: `"${c.id}-1"` });
      }
      if ((match = p.match(/^\/v1\/collectors\/(\d+)$/))) {
        const c = state.collectors.get(parseInt(match[1], 10));
        if (!c) return err(res, 404, 'collectors.collector.invalid', 'The specified collector ID or name is invalid.');
        if (m === 'GET') return send(res, 200, { collector: c }, { ETag: `"${c.id}-1"` });
        if (m === 'PUT') { Object.assign(c, body.collector || {}); return send(res, 200, { collector: c }); }
        if (m === 'DELETE') { state.collectors.delete(c.id); return send(res, 200); }
      }
      if ((match = p.match(/^\/v1\/collectors\/(\d+)\/sources$/))) {
        const cid = parseInt(match[1], 10);
        if (!state.collectors.has(cid)) return err(res, 404, 'collectors.collector.invalid', 'The specified collector ID or name is invalid.');
        if (m === 'GET') return send(res, 200, { sources: [...state.sources.values()].filter((s) => s.collectorId === cid || cid === COLLECTOR_ID) });
        if (m === 'POST') {
          if (!body || !body.source) return err(res, 400, 'collectors.invalid.request', 'source wrapper missing');
          const id = newIntId(SOURCE_ID);
          const s = sourceObj(id, cid, body.source.name, { category: body.source.category || '', sourceType: body.source.sourceType || 'HTTP', collectorId: cid });
          state.sources.set(id, s);
          return send(res, 200, { source: s });
        }
      }
      if ((match = p.match(/^\/v1\/collectors\/(\d+)\/sources\/(\d+)$/))) {
        const s = state.sources.get(parseInt(match[2], 10));
        if (!s) return err(res, 404, 'collectors.source.invalid', 'The specified source ID is invalid.');
        if (m === 'GET') return send(res, 200, { source: s }, { ETag: `"${s.id}-1"` });
        if (m === 'PUT') { Object.assign(s, body.source || {}); return send(res, 200, { source: s }); }
        if (m === 'DELETE') { state.sources.delete(s.id); return send(res, 200); }
      }
      // ---- partitions
      if (m === 'GET' && p === '/v1/partitions') return send(res, 200, page([...state.partitions.values()], q.limit, q.token));
      if ((match = p.match(/^\/v1\/partitions\/([^/]+)$/)) && m === 'GET') {
        const pt = state.partitions.get(match[1]);
        if (!pt) return err(res, 404, 'partition:not_found', 'Partition not found');
        return send(res, 200, pt);
      }
      if ((match = p.match(/^\/v1\/partitions\/([^/]+)\/decommission$/)) && m === 'POST') {
        const pt = state.partitions.get(match[1]);
        if (!pt) return err(res, 404, 'partition:not_found', 'Partition not found');
        pt.isActive = false;
        return send(res, 200);
      }
      // ---- content: personal folder
      if (m === 'GET' && p === '/v2/content/folders/personal') {
        return send(res, 200, {
          createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID,
          id: '0000000000A1B2C3', name: 'Personal', itemType: 'Folder', parentId: '0000000000000000', permissions: ['View', 'Edit', 'Manage'],
          description: 'Personal folder', children: [
            { id: '0000000000A1B2C4', name: 'My Searches', itemType: 'Folder', parentId: '0000000000A1B2C3', permissions: ['View'], createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID },
            { id: '0000000000A1B2C5', name: 'Errors dashboard', itemType: 'Dashboard', parentId: '0000000000A1B2C3', permissions: ['View'], createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID }
          ]
        });
      }
      // ---- monitors: search (bare array) and root
      if (m === 'GET' && p === '/v1/monitors/search') {
        if (!q.query) return err(res, 400, 'monitors:invalid_query', 'query is required');
        return send(res, 200, [
          { item: { id: '0000000000000101', name: 'High error rate', description: '', version: 3, createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID, parentId: '0000000000000100', contentType: 'Monitor', type: 'MonitorsLibraryMonitor', monitorType: 'Logs', isDisabled: false }, path: '/Monitor/High error rate' },
          { item: { id: '0000000000000102', name: 'Latency', description: '', version: 1, createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID, parentId: '0000000000000100', contentType: 'Monitor', type: 'MonitorsLibraryMonitor', monitorType: 'Metrics', isDisabled: true }, path: '/Monitor/Latency' }
        ]);
      }
      if (m === 'GET' && p === '/v1/monitors/root') {
        return send(res, 200, { id: '0000000000000100', name: 'Monitor', description: '', version: 1, createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID, parentId: '0000000000000000', contentType: 'Folder', type: 'MonitorsLibraryFolder', isSystem: true, isMutable: false, permissions: ['Read'], children: [] });
      }
      // ---- log searches: list with a `token` cursor
      if (m === 'GET' && p === '/v1/logSearches') {
        const items = [1, 2, 3].map((i) => ({ id: `00000000000000L${i}`, name: `saved search ${i}`, description: '', queryString: `_sourceCategory=app${i} | count`, parsingMode: 'Manual', timeZone: 'UTC', schedule: null, createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID, queryParameters: [] }));
        const pg = page(items, q.limit, q.token, 'logSearches', 'token');
        return send(res, 200, { ...pg, warnings: [] });
      }
      // ---- data archiving destinations: nextToken cursor
      if (m === 'GET' && p === '/v1/dataarchiving/destinations') {
        const items = [1, 2, 3].map((i) => ({ id: `00000000000000D${i}`, destinationName: `archive-bucket-${i}`, description: '', authenticationMode: 'RoleBased', roleArn: `arn:aws:iam::123456789012:role/archive${i}`, bucketName: `archive-${i}`, createdAt: '2024-01-15T10:20:30Z', createdBy: USER_ID, modifiedAt: '2024-01-15T10:20:30Z', modifiedBy: USER_ID }));
        return send(res, 200, page(items, q.limit, q.token, 'data', 'nextToken'));
      }
      // ---- OpenTelemetry collectors: POST list with the cursor in the body
      if (m === 'POST' && p === '/v1/otCollectors') {
        const items = [1, 2, 3].map((i) => ({ id: `00000000000000O${i}`, name: `otel-${i}`, version: '1.2.3', category: 'otel', description: '', tags: { env: 'test' }, fleetId: null, ephemeral: false, alive: i !== 3, healthIncidentsTracker: null }));
        const pg = page(items, body?.limit, body?.next);
        return send(res, 200, { ...pg, count: items.length });
      }
      // ---- account
      if (m === 'GET' && p === '/v1/account/status') {
        return send(res, 200, { pricingModel: 'credits', canUpdatePlan: true, planType: 'Enterprise', planExpirationDays: 300, applicationUse: 'Production', accountActivated: true, totalCredits: 100000, logModel: 'Continuous', isSubscriptionV2: true });
      }
      if (m === 'GET' && p === '/v1/account/accountOwner') return send(res, 200, JSON.stringify('ada@example.com'));
      // ---- SCIM
      if (m === 'GET' && p === '/v1/scim/Users') {
        const users = [...state.users.values()].map((u) => ({ schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'], id: u.id, userName: u.email, name: { givenName: u.firstName, familyName: u.lastName }, emails: [{ value: u.email, primary: true }], active: u.isActive, roles: u.roleIds.map((r) => ({ value: r })) }));
        return send(res, 200, { schemas: ['urn:ietf:params:scim:api:messages:2.0:ListResponse'], totalResults: users.length, startIndex: 1, itemsPerPage: users.length, Resources: users }, { 'Content-Type': 'application/scim+json' });
      }
      // ---- fields, dashboards
      if (m === 'GET' && p === '/v1/fields') return send(res, 200, { data: [{ fieldName: 'service', fieldId: '000000000000F001', dataType: 'String', state: 'Enabled' }, { fieldName: 'env', fieldId: '000000000000F002', dataType: 'String', state: 'Enabled' }] });
      if (m === 'GET' && p === '/v2/dashboards') {
        const items = [1, 2].map((i) => ({ id: `0000000000000DA${i}`, title: `Dashboard ${i}`, description: '', folderId: '0000000000A1B2C3', topologyLabelMap: { data: {} }, domain: 'app', refreshInterval: 120, timeRange: { type: 'BeginBoundedTimeRange', from: { type: 'RelativeTimeRangeBoundary', relativeTime: '-15m' } }, panels: [], layout: { layoutType: 'Grid', layoutStructures: [] }, variables: [], theme: 'Light', contentId: `0000000000000CA${i}`, scheduleId: null }));
        return send(res, 200, page(items, q.limit, q.token, 'dashboards', 'next'));
      }

      return err(res, 404, 'not_found', `no mock route for ${m} ${p}`);
    });
  });

  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  return { server, port: server.address().port, log, state };
}

if (process.argv[1] && process.argv[1].endsWith('mock_sumologic_server.mjs')) {
  const { port } = await startMockServer(parseInt(process.argv[2] || '0', 10));
  console.log(`mock Sumo Logic API listening on http://127.0.0.1:${port}/{region}/api  (Basic ${EXPECTED_ACCESS_ID}:${EXPECTED_ACCESS_KEY})`);
}
