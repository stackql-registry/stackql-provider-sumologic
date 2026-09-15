#!/usr/bin/env node

// Validates a freshly downloaded Sumo Logic spec, compares its content hash
// with provider-dev/config/spec_pin.json and, when they agree (or --update /
// UPDATE=true was given), moves the file into provider-dev/downloaded/ and
// (re)writes the pin. Invoked by bin/fetch-spec.sh with the paths in the
// environment. Fails without writing on validation errors or on drift
// without --update.

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import yaml from 'js-yaml';
import SwaggerParser from '@apidevtools/swagger-parser';

const { TMP_DIR, DOWNLOAD_DIR, PIN_FILE, SPEC_URL, SPEC_FILE } = process.env;
const update = process.env.UPDATE === 'true';
const tmpPath = path.join(TMP_DIR, SPEC_FILE);
const destPath = path.join(DOWNLOAD_DIR, SPEC_FILE);

const raw = fs.readFileSync(tmpPath, 'utf8');
const sha256 = crypto.createHash('sha256').update(raw).digest('hex');
const doc = yaml.load(raw);
if (!doc || !doc.openapi || !doc.paths) {
  console.error('Downloaded file is not an OpenAPI document');
  process.exit(1);
}
try {
  await SwaggerParser.validate(JSON.parse(JSON.stringify(doc)));
} catch (err) {
  console.error(`Spec validation failed: ${err.message}`);
  process.exit(1);
}

let operations = 0;
const tags = new Set();
for (const item of Object.values(doc.paths)) {
  for (const verb of ['get', 'post', 'put', 'patch', 'delete']) {
    if (item[verb]) {
      operations++;
      for (const t of item[verb].tags || []) tags.add(t);
    }
  }
}
const summary = {
  url: SPEC_URL,
  filename: SPEC_FILE,
  openapi: doc.openapi,
  spec_version: doc.info?.version || '',
  paths: Object.keys(doc.paths).length,
  operations,
  tags: tags.size,
  sha256,
  bytes: Buffer.byteLength(raw),
  fetched: new Date().toISOString().slice(0, 10)
};
console.log(`spec: openapi ${summary.openapi}, version ${summary.spec_version}, ${summary.paths} paths, ${summary.operations} operations, ${summary.tags} tags, sha256 ${sha256.slice(0, 12)}...`);

let pin = { specs: {} };
if (fs.existsSync(PIN_FILE)) pin = JSON.parse(fs.readFileSync(PIN_FILE, 'utf8'));
const existing = pin.specs?.['sumologic-api'];
if (existing && existing.sha256 !== sha256 && !update) {
  console.error(`Spec drift: upstream sha256 ${sha256} differs from pinned ${existing.sha256} (fetched ${existing.fetched}, ${existing.operations} operations).`);
  console.error('Re-run with --update to accept the refresh, then rebuild and review the diff.');
  process.exit(1);
}
if (existing && existing.sha256 === sha256) {
  console.log(`Spec matches the pin recorded ${existing.fetched}; download dir refreshed.`);
  fs.copyFileSync(tmpPath, destPath);
  process.exit(0);
}
fs.copyFileSync(tmpPath, destPath);
pin.specs = { ...(pin.specs || {}), 'sumologic-api': summary };
fs.writeFileSync(PIN_FILE, JSON.stringify(pin, null, 2) + '\n');
console.log(existing ? 'Pin updated (drift accepted).' : 'Pin recorded.');
