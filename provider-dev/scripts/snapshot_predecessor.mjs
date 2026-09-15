#!/usr/bin/env node

// Snapshots the method inventory of a previously generated provider tree
// (the predecessor) into provider-dev/config/predecessor_methods.csv:
// one row per (service, resource, method) with the operation's path, HTTP
// verb and SQL verb. compare_predecessor.mjs diffs the current
// all_services.csv against this snapshot by (path, verb) to produce the
// Breaking Changes table in the README.
//
// Reads the tree from a git ref so the snapshot is reproducible after the
// generated tree has been overwritten:
//
//   node provider-dev/scripts/snapshot_predecessor.mjs --ref b83127f
//
// The default ref is the last commit of the v1 (2025) provider.

import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const args = process.argv.slice(2);
const refIdx = args.indexOf('--ref');
const ref = refIdx !== -1 ? args[refIdx + 1] : 'b83127f';
const treePath = 'provider-dev/openapi/src/sumologic/v00.00.00000/services';
const outPath = path.join(repoRoot, 'provider-dev', 'config', 'predecessor_methods.csv');

const files = execFileSync('git', ['ls-tree', '--name-only', ref, `${treePath}/`], { cwd: repoRoot, encoding: 'utf8' })
  .split('\n').map((s) => s.trim()).filter((s) => s.endsWith('.yaml'));
if (files.length === 0) {
  console.error(`no service yamls found at ${ref}:${treePath}`);
  process.exit(1);
}

const rows = [['service', 'resource', 'method', 'sql_verb', 'path', 'verb']];
for (const f of files) {
  const service = path.basename(f, '.yaml');
  const doc = yaml.load(execFileSync('git', ['show', `${ref}:${f}`], { cwd: repoRoot, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }));
  const resources = doc.components?.['x-stackQL-resources'] || {};
  for (const [resName, res] of Object.entries(resources)) {
    const verbByRef = new Map();
    for (const [sqlVerb, refs] of Object.entries(res.sqlVerbs || {})) {
      for (const r of refs || []) verbByRef.set(r.$ref, sqlVerb);
    }
    for (const [methodName, m] of Object.entries(res.methods || {})) {
      const opRef = m.operation?.$ref || '';
      const parts = opRef.replace(/^#\/paths\//, '').split('/');
      const verb = parts.pop();
      const p = parts.join('/').replace(/~1/g, '/');
      const sqlVerb = verbByRef.get(`#/components/x-stackQL-resources/${resName}/methods/${methodName}`) || 'exec';
      rows.push([service, resName, methodName, sqlVerb, p, verb]);
    }
  }
}
const csv = rows.map((r) => r.map((v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v)).join(',')).join('\n') + '\n';
fs.writeFileSync(outPath, csv);
console.log(`snapshot_predecessor: ${rows.length - 1} methods from ${files.length} services at ${ref} -> ${path.relative(repoRoot, outPath)}`);
