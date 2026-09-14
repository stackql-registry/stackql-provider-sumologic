#!/usr/bin/env node

// Sumo Logic-specific spec adjustments applied to provider-dev/source before
// the generic provider-utils normalize pass. Deterministic and idempotent;
// fails without writing on any unexpected shape.
//
// 1. Redoc-relative anchors. Descriptions link to other operations and
//    sections of the vendor's Redoc site as [text](#operation/getFolder),
//    [text](#section/API-Endpoints) and [text](#tag/...). Those anchors do
//    not exist on the generated docs site (Docusaurus reports them as broken
//    anchors), so the link syntax is unwrapped to its plain text. Absolute
//    links (https://help.sumologic.com/...) are kept.
//
// 2. Request-body sanity. Every JSON-ish request body must carry a schema so
//    the generator can build the DESCRIBE / INSERT surfaces; the SCIM media
//    type (application/scim+json) is kept as-is - any-sdk reads and writes
//    SCIM JSON as JSON.
//
// Usage: node provider-dev/scripts/pre_normalize.mjs [--dry-run]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const sourceDir = path.join(repoRoot, 'provider-dev', 'source');
const dryRun = process.argv.includes('--dry-run');

const ANCHOR_LINK = /\[([^\]]+)\]\(#(?:operation|section|tag)\/[^)]*\)/g;

function unwrapAnchors(node, stats) {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) node[i] = unwrapAnchors(node[i], stats);
    return node;
  }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) node[k] = unwrapAnchors(v, stats);
    return node;
  }
  if (typeof node === 'string' && node.includes('](#')) {
    return node.replace(ANCHOR_LINK, (_, text) => { stats.anchors++; return text; });
  }
  return node;
}

const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.yaml')).sort();
if (files.length === 0) {
  console.error(`Error: no service specs in ${sourceDir} - run npm run split first`);
  process.exit(1);
}
const errors = [];
const pending = [];
const totals = { anchors: 0 };
for (const f of files) {
  const fp = path.join(sourceDir, f);
  const doc = yaml.load(fs.readFileSync(fp, 'utf8'));
  const stats = { anchors: 0 };
  unwrapAnchors(doc, stats);
  totals.anchors += stats.anchors;
  for (const [p, item] of Object.entries(doc.paths || {})) {
    for (const verb of ['get', 'post', 'put', 'patch', 'delete']) {
      const op = item[verb];
      if (!op?.requestBody?.content) continue;
      for (const [mt, media] of Object.entries(op.requestBody.content)) {
        if (/json/.test(mt) && !media.schema) errors.push(`${f}: ${verb.toUpperCase()} ${p} ${mt} request body has no schema`);
      }
    }
  }
  pending.push({ fp, doc });
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
if (!dryRun) for (const { fp, doc } of pending) fs.writeFileSync(fp, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
console.log(`pre_normalize: unwrapped ${totals.anchors} Redoc anchor link(s) across ${files.length} service specs${dryRun ? ' (dry run)' : ''}`);
