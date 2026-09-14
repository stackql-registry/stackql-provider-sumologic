#!/usr/bin/env node

// Splits the pinned Sumo Logic API spec into per-service StackQL service
// specs under provider-dev/source/, then merges in the hand-authored
// Collector Management API spec as the collectors service.
//
// Services are decided by the vendor's OpenAPI tags through the explicit
// tag -> service map in provider-dev/config/service_names.json (tags that
// share a service name are merged into one service document). An operation
// whose tag is not in the map fails the run without writing anything, so a
// spec refresh that introduces a new tag is a deliberate mapping decision,
// never a silently generated service.
//
// provider-utils split() cleans its output dir on every call, so the spec is
// split into a temp dir and copied into --output-dir once the run validated.
//
// Usage:
//   node bin/split.mjs [--api-doc provider-dev/downloaded/sumologic-api.yaml]
//     [--collectors-doc provider-dev/downloaded/sumologic-collector-management-api.yaml]
//     [--output-dir provider-dev/source] [--overwrite] [--verbose]

import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import { providerdev } from '@stackql/provider-utils';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const getArg = (flag) => {
  const index = args.indexOf(flag);
  return index !== -1 ? args[index + 1] : null;
};

const providerName = 'sumologic';
const apiDoc = getArg('--api-doc') || path.join(repoRoot, 'provider-dev', 'downloaded', 'sumologic-api.yaml');
const collectorsDoc = getArg('--collectors-doc') || path.join(repoRoot, 'provider-dev', 'downloaded', 'sumologic-collector-management-api.yaml');
const outputDir = getArg('--output-dir') || path.join(repoRoot, 'provider-dev', 'source');
const overwrite = args.includes('--overwrite');
const verbose = args.includes('--verbose');

for (const f of [apiDoc, collectorsDoc]) {
  if (!fs.existsSync(f)) {
    console.error(`Error: spec not found at ${f} (run npm run fetch-spec first)`);
    process.exit(1);
  }
}
const serviceNames = JSON.parse(fs.readFileSync(path.join(repoRoot, 'provider-dev', 'config', 'service_names.json'), 'utf8'));
const overrides = serviceNames.overrides;
const descriptions = serviceNames.descriptions || {};
const COLLECTORS_SERVICE = 'collectors';

// mirrors provider-utils' normalizeServiceName so map keys match what split sees
const normalizeTag = (raw) => String(raw).toLowerCase().replace(/-/g, '_').replace(/ /g, '_').replace(/\./g, '_');
const titleCase = (s) => s.split('_').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

fs.mkdirSync(outputDir, { recursive: true });
const existing = fs.readdirSync(outputDir).filter((f) => /\.(yaml|yml|json)$/.test(f));
if (existing.length > 0 && !overwrite) {
  console.error(`Error: output directory ${outputDir} is not empty. Use --overwrite to replace existing service specs.`);
  process.exit(1);
}

const unmappedTags = new Map();
const untagged = [];
const svcDiscriminatorFn = (pathKey, operationId, tags) => {
  if (!tags || tags.length === 0) {
    untagged.push(`${pathKey} (${operationId})`);
    return 'unmapped_service';
  }
  const key = normalizeTag(tags[0]);
  const service = overrides[key];
  if (!service) {
    if (!unmappedTags.has(tags[0])) unmappedTags.set(tags[0], []);
    unmappedTags.get(tags[0]).push(`${pathKey} (${operationId})`);
    return 'unmapped_service';
  }
  return service;
};

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'stackql-split-'));
const written = [];
try {
  const result = await providerdev.split({
    apiDoc,
    providerName,
    outputDir: tmpDir,
    svcDiscriminator: 'function',
    svcDiscriminatorFn,
    overwrite: true,
    verbose,
    svcNameOverrides: {}
  });
  if (!result) {
    console.error('Error: split failed');
    process.exit(1);
  }
  if (unmappedTags.size > 0 || untagged.length > 0) {
    console.error('Error: operations with no service in provider-dev/config/service_names.json (add the tag to the overrides map):');
    for (const [tag, ops] of [...unmappedTags.entries()].sort()) console.error(`  tag ${tag}: ${ops.length} operation(s), e.g. ${ops[0]}`);
    for (const op of untagged) console.error(`  untagged: ${op}`);
    process.exit(1);
  }
  const produced = fs.readdirSync(tmpDir).filter((f) => f.endsWith('.yaml'));
  if (produced.includes(`${COLLECTORS_SERVICE}.yaml`)) {
    console.error(`Error: the vendor spec now produces a ${COLLECTORS_SERVICE} service; reconcile it with the hand-authored Collector Management spec before continuing`);
    process.exit(1);
  }

  // Clear previous service specs only after the split validated
  for (const f of existing) fs.rmSync(path.join(outputDir, f));
  for (const outFile of produced) {
    const service = outFile.replace(/\.yaml$/, '');
    const doc = yaml.load(fs.readFileSync(path.join(tmpDir, outFile), 'utf8'));
    doc.info = doc.info || {};
    doc.info.title = `Sumo Logic ${titleCase(service)} API`;
    doc.info.description = descriptions[service] || doc.info.description || `${providerName} ${service} API`;
    // the per-deployment vendor servers list is replaced by the region
    // template in provider-dev/config/servers.json at generate time
    delete doc.servers;
    fs.writeFileSync(path.join(outputDir, outFile), yaml.dump(doc, { lineWidth: -1, noRefs: true }));
    written.push(outFile);
  }
  // the hand-authored Collector Management API spec becomes the collectors service
  const cdoc = yaml.load(fs.readFileSync(collectorsDoc, 'utf8'));
  cdoc.info.title = `Sumo Logic ${titleCase(COLLECTORS_SERVICE)} API`;
  cdoc.info.description = descriptions[COLLECTORS_SERVICE] || cdoc.info.description;
  fs.writeFileSync(path.join(outputDir, `${COLLECTORS_SERVICE}.yaml`), yaml.dump(cdoc, { lineWidth: -1, noRefs: true }));
  written.push(`${COLLECTORS_SERVICE}.yaml`);
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

const missingDesc = written.map((f) => f.replace(/\.yaml$/, '')).filter((s) => !descriptions[s]);
console.log(`Split completed: ${written.length} service specs written to ${outputDir}`);
for (const f of written.sort()) console.log(`  ${f}`);
if (missingDesc.length > 0) console.log(`note: no description in service_names.json for: ${missingDesc.join(', ')}`);
