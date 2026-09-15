// Shared helpers for the sumologic provider scripts (map_operations.mjs,
// post_process.mjs, compare_predecessor.mjs): spec walking, $ref
// resolution, response envelope classification and naming utilities.

import fs from 'fs';
import path from 'path';

export const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete'];

export function camelToSnake(s) {
  return String(s)
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/[-. ]/g, '_')
    .toLowerCase();
}

export function pathParams(pathKey) {
  return (pathKey.match(/\{[^}]+\}/g) || []).map((s) => s.slice(1, -1));
}

// version-stripped path with every {param} collapsed to {}
export function normalizePath(pathKey) {
  return pathKey.replace(/^\/v\d+/, '').replace(/\{[^}]+\}/g, '{}');
}

export function apiVersion(pathKey) {
  const m = pathKey.match(/^\/(v\d+)\//);
  return m ? m[1] : '';
}

// Resolves local $refs against the containing spec document
export function makeResolver(spec) {
  return function resolve(schema, depth = 0) {
    if (!schema || depth > 10) return schema;
    if (schema.$ref) {
      const parts = schema.$ref.replace(/^#\//, '').split('/');
      let node = spec;
      for (const p of parts) node = node?.[p.replace(/~1/g, '/').replace(/~0/g, '~')];
      return resolve(node, depth + 1);
    }
    return schema;
  };
}

export function success2xx(op) {
  const codes = Object.keys(op.responses || {}).filter((c) => /^2/.test(c)).sort();
  for (const code of codes) {
    const content = op.responses[code].content || {};
    const jsonType = Object.keys(content).find((m) => /json/.test(m));
    if (jsonType && content[jsonType].schema) return { code, schema: content[jsonType].schema, mediaTypes: Object.keys(content) };
    if (Object.keys(content).length > 0) return { code, schema: null, mediaTypes: Object.keys(content) };
  }
  return { code: codes[0] || null, schema: null, mediaTypes: [] };
}

// Response envelope classification for the Sumo Logic API:
//   list        - an object with an array property (data[] + next on the
//                 paginated lists; apps[], dashboards[], collectors[] ... on
//                 the others); key = the array property to project
//   wrapped     - an object with exactly one object-valued property
//                 (collector, source, upgrade) - key = that property
//   object      - a plain object (single reads, singletons, writes)
//   bare-array  - a top-level array (wrapped by the normalize pass)
//   scalar      - a bare string / number
//   non-json    - application/pdf, application/xml ...
//   none        - no 2xx content
const PAGINATION_PROPS = new Set(['next', 'nextToken', 'token', 'totalCount', 'count', 'warnings', 'warning', 'startIndex', 'itemsPerPage', 'totalResults', 'idleTime', 'autoPauseLimitReached']);

export function classifyEnvelope(op, resolve, hint = '') {
  const { schema, mediaTypes } = success2xx(op);
  if (!schema) {
    if (mediaTypes.length > 0) return { envelope: 'non-json', key: '', mediaTypes };
    return { envelope: 'none', key: '', mediaTypes };
  }
  const s = resolve(schema);
  if (!s) return { envelope: 'none', key: '', mediaTypes };
  if (s.type === 'array') return { envelope: 'bare-array', key: '', mediaTypes };
  if (s.type && s.type !== 'object' && !s.properties) return { envelope: 'scalar', key: '', mediaTypes };
  const props = s.properties || {};
  const arrays = Object.entries(props).filter(([, p]) => { const r = resolve(p); return r && r.type === 'array'; }).map(([k]) => k);
  // a list envelope is an array property plus, at most, pagination / count /
  // warning scalars; an object that merely contains an array among real
  // attributes (threat intel datastore: diskSize, indicatorCount, sourceStatus[])
  // is a single object
  const nonArrays = Object.keys(props).filter((k) => !arrays.includes(k));
  const isListEnvelope = arrays.length > 0 && (arrays.includes('data') || nonArrays.every((k) => PAGINATION_PROPS.has(k)));
  if (isListEnvelope) {
    let key = arrays.includes('data') ? 'data' : null;
    if (!key && hint) {
      const h = hint.toLowerCase().replace(/_/g, '');
      key = arrays.find((a) => a.toLowerCase() === h) || arrays.find((a) => h.endsWith(a.toLowerCase()) || a.toLowerCase().endsWith(h)) || null;
    }
    if (!key) key = arrays[0];
    return { envelope: 'list', key: `$.${key}`, mediaTypes, arrays };
  }
  const keys = Object.keys(props);
  if (keys.length === 1) {
    const only = resolve(props[keys[0]]);
    if (only && (only.type === 'object' || only.properties)) return { envelope: 'wrapped', key: `$.${keys[0]}`, mediaTypes };
  }
  return { envelope: 'object', key: '', mediaTypes };
}

export function hasRequestBody(op) {
  return !!(op.requestBody && Object.keys(op.requestBody.content || {}).length > 0);
}

export function requestBodyMediaType(op) {
  return Object.keys(op.requestBody?.content || {})[0] || '';
}

// Index every operation of every split service spec in a directory
export function indexOperations(sourceDir, yaml) {
  const ops = new Map(); // `${filename}::${path}::${verb}` -> { op, pathItem, resolve, service, filename }
  const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.yaml')).sort();
  for (const filename of files) {
    const spec = yaml.load(fs.readFileSync(path.join(sourceDir, filename), 'utf8'));
    const resolve = makeResolver(spec);
    const service = filename.replace(/\.yaml$/, '');
    for (const [pathKey, pathItem] of Object.entries(spec.paths || {})) {
      for (const verb of HTTP_VERBS) {
        if (!pathItem[verb]) continue;
        ops.set(`${filename}::${pathKey}::${verb}`, { op: pathItem[verb], pathItem, resolve, service, filename, pathKey, verb });
      }
    }
  }
  return { ops, files };
}

// RFC 4180 CSV helpers (column order preserved)
export function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else { field += c; }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else { field += c; }
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

export function csvField(v) {
  v = v == null ? '' : String(v);
  return /[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

export function writeCsv(rows) {
  return rows.map((r) => r.map(csvField).join(',')).join('\n') + '\n';
}
