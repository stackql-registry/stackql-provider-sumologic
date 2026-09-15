# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this repo does

Generates and documents the `sumologic` provider for [StackQL](https://github.com/stackql/stackql): the Sumo Logic API reference (every deployment) plus the Collector Management API, exposed as SQL. It is a type 1 (direct) provider built from the vendor's published OpenAPI document with `@stackql/provider-utils`, following the repository pattern of the `clickhouse` and `github` provider repos. The generated tree in `provider-dev/openapi/` is what gets published to [stackql-provider-registry](https://github.com/stackql/stackql-provider-registry) (`providers/src/sumologic`), and `website/` is the Docusaurus microsite at `sumologic-provider.stackql.io`.

## Commands

Every pipeline step is a `make` target (GNU make, bash; run from WSL, Linux or macOS - the server lifecycle scripts need pgrep/ps). `make help` lists them.

- `make all` - deps, spec refresh (accepts upstream drift), full build, Breaking Changes section, offline + integration + meta-route tests, docs generation, site build
- `make spec` / `make spec-check` - download the spec and accept the refresh (pin rewritten) / fail on drift
- `make build` - split, pre-normalize, normalize, mappings, generate (+ post-process)
- `make mappings` - fills mappings for NEW operations only and prunes retired ones; `make mappings-rebuild` re-derives every row (deliberate renames only); `make mappings-check` reports rule drift without writing
- `make test` - `test-offline` (SHOW/DESCRIBE against the file registry), `test-integration` (mock Sumo Logic API, row-level), `test-meta` (SHOW/DESCRIBE gate over every resource through a local `stackql srv`)
- `make smoke-test` / `make smoke-test-live` / `make smoke-cleanup` - live suite against the local or the published provider; sources `.env` (`SUMOLOGIC_ACCESSID`, `SUMOLOGIC_ACCESSKEY`, `SUMOLOGIC_ENVIRONMENT`). Nothing it creates is billable and everything is named `stackql-smoke-*` and swept
- `make docs` / `make docs-build` / `make docs-serve` - generate `website/docs` (snake_case surface, then `website/scripts/sanitize-docs.mjs`), build, serve. The site needs Node >= 22.12 (`mermaid` 12 via Docusaurus 3.10); the web workflows run Node 22, the provider pipeline works on Node >= 20
- `make compare` - regenerate the README Breaking Changes section from `provider-dev/config/predecessor_methods.csv`

A stackql binary is needed for the tests: `$STACKQL`, `./stackql`, or `stackql` on PATH (on this machine the WSL binary is `/home/javen/.local/bin/stackql`; `STACKQL=/home/javen/.local/bin/stackql make test`).

## Architecture

- `provider-dev/downloaded/sumologic-api.yaml` - the pinned vendor spec (443 operations, served unversioned at `https://api.sumologic.com/docs/sumologic-api.yaml`; hash in `provider-dev/config/spec_pin.json`)
- `provider-dev/downloaded/sumologic-collector-management-api.yaml` - hand-authored OpenAPI for the Collector Management API (collectors, sources, upgrades - 18 operations, not in the vendor document). Edit this file to change the collectors service
- `bin/split.mjs` - tag -> service split through `provider-dev/config/service_names.json` (tags sharing a name merge; an unmapped tag fails the run), sets service titles/descriptions, drops the vendor's per-deployment servers list, merges the collectors spec
- `provider-dev/scripts/pre_normalize.mjs` - unwraps the spec's Redoc-relative anchor links (`[text](#operation/...)`) that would be broken anchors on the docs site
- `provider-dev/scripts/map_operations.mjs` - generic CRUD heuristics plus the explicit `RULES` table (path regex per service). Mapping decisions are rules here, never CSV edits. FILL-ONLY by default: `provider-dev/config/all_services.csv` is the durable contract for resource and method names between releases
- `provider-dev/scripts/post_process.mjs` - `request.nativeCasing: camel` on every method except body-less EXECs, object keys on POST-backed SELECTs, per-method pagination overrides (`nextToken`, `token`, body cursor)
- `provider-dev/scripts/compare_predecessor.mjs` - disposition of every method of the previous release against this build, written into the README between the `BEGIN:BREAKING-CHANGES` markers
- `tests/` - `offline_validation.mjs`, `integration/` (mock server + runner), `smoke_test.mjs`
- `bin/` - `fetch-spec.sh`, server lifecycle scripts, `test-meta-routes.cjs`
- `website/` - Docusaurus 3.10 microsite on the shared `stackql/docusaurus-config` (vendored into `.shared-config/` at build time). Site-local files: `provider.js`, thin `docusaurus.config.js` (adds `showLastUpdateTime`), `sidebars.js`, `scripts/sanitize-docs.mjs`, `src/`, `static/`. The landing page is mastered in `provider-dev/docgen/provider-data/headerContent1.txt` and `headerContent2.txt` - never edit `website/docs/index.md` directly. Deployed with GitHub Pages via `.github/workflows/prod-web-deploy.yml` (pushes to `main` touching `website/**`; Pages source = GitHub Actions; `static/CNAME` pins `sumologic-provider.stackql.io`) - not Netlify, no `gh-pages` branch

## Design decisions

- **Auth and region.** HTTP basic with `SUMOLOGIC_ACCESSID` / `SUMOLOGIC_ACCESSKEY` (Terraform parity). The deployment is the `region` server variable of every service, template `https://api.{region}.sumologic.com/api`, enum of the 11 deployments (`us1` resolves to `api.us1.sumologic.com`, which the vendor serves), `x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT` (Terraform's variable), default `us2` (the previous release's default - keeps existing queries working). A `WHERE region` value wins over the environment
- **snake_case surface.** `snake_case_aliases: true` on the provider config plus `request.nativeCasing: camel` per method (post-process). Columns and WHERE/INSERT/UPDATE keys are snake; the wire stays camelCase; nested JSON keeps wire casing. A body-less EXEC method gets no `request` block at all - stackql's EXEC analyzer fails on a request block without a body schema (`no request body for operation`)
- **Request bodies.** `--naive-req-body-translate`: top-level body properties are INSERT/UPDATE columns. The Collector Management API wraps bodies in `collector` / `source` objects, so those INSERTs take one JSON-valued column (`INSERT INTO sumologic.collectors.collectors (collector) SELECT '{...}'`) - the edge case where naive translate cannot flatten
- **Verbs.** GET collection -> `list`, GET /{id} -> `get`, POST with body -> `create` (INSERT), PUT -> `update` (UPDATE; Sumo Logic PUTs replace the object, documented), PATCH -> UPDATE with the sibling PUT as REPLACE (SCIM only), DELETE -> `delete`. Lifecycle and action operations are EXEC methods on the resource they act on (`users.unlock`, `partitions.decommission`, `scheduled_views.pause`, `roles.assign_user`) rather than separate non-selectable resources. Async job triads are `<x>_jobs` (EXEC `start` + SELECT `get` = status) and `<x>_results` (SELECT). A POST without a request body is always EXEC - the registry tests require an INSERT method to carry a request schema
- **Naming.** Plural snake_case resources; where the vendor has a v1 and a v2 surface for the same entity both exist, v2 gets a `_v2` suffix (`roles_v2`, `apps_v2`, `metrics_searches_v2`) matching the Terraform resource names; where only v2 exists it takes the plain name (`ingest_budgets`)
- **Pagination.** Service-level `x-stackQL-config.pagination`: `token` query parameter in, `next` body token out (the Sumo Logic convention). Overrides in post-process for `nextToken` (data archiving, logs data forwarding), `token` (saved log searches) and the POST-driven OpenTelemetry collectors list whose cursor travels in the request body. The Collector Management API pages by limit/offset (default limit 1000) and has no cursor, so the service config never triggers there
- **Pushdown.** Every declared query/header parameter is usable in the WHERE clause and sent on the wire (`email`, `name`, `filter`, `query`, `ids`, `sort_by`, `mode`, `If-Match`...). No `queryParamPushdown` blocks are configured: `limit` interacts with the pagination loop and `sortBy` values are wire-cased
- **Skips (reason-coded in the CSV):** the deprecated v1 source-template surface (superseded by v2), the multipart lookup table upload, the PDF dashboard report result
- **Scalar responses.** `account.account_owner` (a JSON string) and `saml.identity_provider_metadata` (XML) legitimately have no DESCRIBE columns; `bin/test-meta-routes.cjs` lists them in `SCALAR_RESPONSE_RESOURCES`

## Refreshing from upstream

`make all`, or step by step: `make spec` (accept drift) -> `make build` -> review `git diff provider-dev/config/all_services.csv` (only NEW rows are derived; a new tag fails the split until it is added to `service_names.json`) -> `make compare` -> `make test` -> `make docs docs-build`. Then `make smoke-test` with credentials, publish per the README, `make smoke-test-live`.

## Gotchas

- Windows: the shell tool truncates very long commands; use the file tools for large files. `node` on Windows does not resolve `/c/...` paths - use `C:/...`
- WSL: pass the binary as `STACKQL=/home/javen/.local/bin/stackql` rather than editing PATH inside `wsl.exe bash -c` (the Windows PATH is interpolated and contains parentheses)
- `provider-dev/source/*.yaml`, `provider-dev/openapi/**` and `website/docs/**` are generated and committed (reviewable diffs, `showLastUpdateTime` stamps from git history). Regenerate; never hand-edit
- The docgen `--snake-case-aliases` flag renders the snake surface; body columns are rendered snake because naive translate plus nativeCasing resolves them (verified in the integration suite)
- `website/static/CNAME` pins `sumologic-provider.stackql.io` (the 2025 repo carried a wrong hostname)

## Writing conventions

Measured and factual, no hyperbole. No em dashes (use `-`), `->` for arrows, QWERTY-only characters. Runnable SQL examples with `json_extract` for nested fields. Commit messages end with the attribution line given in the session.
