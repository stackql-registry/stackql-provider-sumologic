#!/usr/bin/env bash

# Downloads the Sumo Logic API OpenAPI spec into provider-dev/downloaded/
# and records the fetch date and content hash in
# provider-dev/config/spec_pin.json.
#
# The spec is served unversioned from the API reference site of every
# deployment (the Redoc page at https://api.sumologic.com/docs/ loads
# ./sumologic-api.yaml); the content is identical across deployments. The
# pin is the record of what was built. If a download does not match the
# recorded pin the script fails without writing anything; pass --update to
# accept the upstream change and rewrite the pin (review the resulting spec
# diff as a refresh).
#
# The Collector Management API (v1 /collectors, /collectors/{id}/sources) is
# not part of this spec - it is documented separately and maintained by hand
# in provider-dev/downloaded/sumologic-collector-management-api.yaml.
#
# Usage: bin/fetch-spec.sh [--update]

set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
DOWNLOAD_DIR="$REPO_ROOT/provider-dev/downloaded"
PIN_FILE="$REPO_ROOT/provider-dev/config/spec_pin.json"

SPEC_URL="${SUMOLOGIC_SPEC_URL:-https://api.sumologic.com/docs/sumologic-api.yaml}"
SPEC_FILE="sumologic-api.yaml"

UPDATE=false
if [ "${1:-}" = "--update" ]; then
  UPDATE=true
fi

mkdir -p "$DOWNLOAD_DIR"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "Fetching Sumo Logic API spec from $SPEC_URL"
curl -fsSL "$SPEC_URL" -o "$TMP_DIR/$SPEC_FILE"

UPDATE="$UPDATE" TMP_DIR="$TMP_DIR" DOWNLOAD_DIR="$DOWNLOAD_DIR" PIN_FILE="$PIN_FILE" \
SPEC_URL="$SPEC_URL" SPEC_FILE="$SPEC_FILE" \
node "$REPO_ROOT/provider-dev/scripts/record_spec_pin.mjs"

echo "Spec at $DOWNLOAD_DIR/$SPEC_FILE, pin recorded in $PIN_FILE"
