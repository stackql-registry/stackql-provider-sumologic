# StackQL sumologic provider - build, test and docs pipeline.
#
# `make all` runs the full chain from the current upstream spec (no live
# credentials needed):
#
#   deps          npm install (@stackql/provider-utils, @stackql/pgwire-lite)
#   spec          download the Sumo Logic API spec and accept any upstream
#                 change (rewrites provider-dev/config/spec_pin.json; review
#                 the diff). `make spec-check` fails on drift instead.
#   split         per-service specs under provider-dev/source/ from the tag ->
#                 service map, plus the hand-authored Collector Management API
#   pre-normalize Sumo Logic-specific fixes (Redoc anchors) before ...
#   normalize     provider-utils normalize (allOf flatten, oneOf/anyOf lowering,
#                 bare-array wrapping)
#   mappings      refresh provider-dev/config/all_services.csv (analyze keeps
#                 every committed row) then map_operations.mjs fills in NEW
#                 operations only and prunes retired ones - the committed CSV
#                 is the contract that keeps resource names stable. FAILS on an
#                 operation the rules cannot place.
#   generate      generate the provider tree (region server template, basic
#                 auth, snake_case aliases, token/next pagination, naive request
#                 body translate) then post_process.mjs (nativeCasing, object
#                 keys on POST-backed lists, per-method pagination overrides)
#   compare       regenerate the README Breaking Changes section against the
#                 predecessor snapshot
#   test          offline validation, mock-API integration tests and the
#                 SHOW/DESCRIBE meta-route gate over every resource
#   docs          generate the Docusaurus markdown (snake_case surface) and
#                 sanitize it for MDX
#   docs-build    yarn build of website/ (vendors the shared config; needs
#                 GitHub access)
#
# Live smoke tests hit the Sumo Logic API and need credentials, so they are
# NOT part of `all`. Populate .env (SUMOLOGIC_ACCESSID, SUMOLOGIC_ACCESSKEY,
# SUMOLOGIC_ENVIRONMENT) then:
#
#   make smoke-test            # local provider (provider-dev/openapi)
#   make smoke-test-live       # the published provider (REGISTRY PULL sumologic)
#   make smoke-test SMOKE_ARGS="--read-only"
#   make smoke-cleanup         # sweep stackql-smoke-* breadcrumbs
#
# Run from Linux, macOS or WSL (bash, GNU make, Node >= 20, yarn, and a
# stackql binary: $STACKQL, ./stackql or on PATH).

SHELL := /bin/bash
.DEFAULT_GOAL := help

PROVIDER      := sumologic
VERSION       := v00.00.00000
SOURCE_DIR    := provider-dev/source
CONFIG_DIR    := provider-dev/config
OPENAPI_DIR   := provider-dev/openapi
PROVIDER_DIR  := $(OPENAPI_DIR)/src/$(PROVIDER)/$(VERSION)
WEBSITE_DIR   := website
PORT          ?= 5444
SPEC_REFRESH  ?= 1
SMOKE_ARGS    ?=
ENV_FILE      ?= .env

.PHONY: all help deps spec spec-check split pre-normalize normalize mappings mappings-rebuild mappings-check \
        generate post-process compare build test-offline test-integration test-meta test \
        smoke-test smoke-test-live smoke-cleanup docs docs-build docs-serve \
        start-server stop-server server-status clean

all: deps spec build compare test docs docs-build ## deps, spec refresh, full pipeline, all non-live tests, docs, site build
	@echo ""
	@echo "make all complete: provider + docs generated, offline / integration / meta-route gates passed."
	@echo "Live smoke tests are run separately - see 'make help'."

help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-18s %s\n", $$1, $$2}'

deps: ## npm install
	npm install

# ---------------------------------------------------------------- pipeline

spec: ## download the Sumo Logic API spec and accept any upstream change (SPEC_REFRESH=0 to skip)
ifeq ($(SPEC_REFRESH),1)
	bash bin/fetch-spec.sh --update
else
	@echo "SPEC_REFRESH=0 - using the pinned provider-dev/downloaded/sumologic-api.yaml"
endif

spec-check: ## download the spec and FAIL if it differs from the pin (CI drift check)
	bash bin/fetch-spec.sh

split: ## split the spec into per-service specs (tag -> service map) and merge the collectors spec
	node bin/split.mjs --overwrite

pre-normalize: ## Sumo Logic-specific spec adjustments before the generic normalize pass
	node provider-dev/scripts/pre_normalize.mjs

normalize: ## provider-utils normalize (allOf flatten, oneOf/anyOf lowering, bare-array wrap)
	npm run normalize --silent -- --api-dir $(SOURCE_DIR)

mappings: ## refresh all_services.csv (committed rows kept) and map NEW operations only
	npm run generate-mappings --silent -- --input-dir $(SOURCE_DIR) --output-dir $(CONFIG_DIR) > /dev/null
	node provider-dev/scripts/map_operations.mjs

mappings-rebuild: ## re-derive EVERY row of all_services.csv from the rules (deliberate, reviewed renames only)
	npm run generate-mappings --silent -- --input-dir $(SOURCE_DIR) --output-dir $(CONFIG_DIR) > /dev/null
	node provider-dev/scripts/map_operations.mjs --rebuild --summary

mappings-check: ## report committed mappings that differ from what the rules derive today (no write)
	node provider-dev/scripts/map_operations.mjs --check

generate: ## generate the provider tree from the split specs and the mapping CSV, then post-process
	rm -rf $(OPENAPI_DIR)/*
	npm run generate-provider --silent -- \
	  --provider-name $(PROVIDER) \
	  --input-dir $(SOURCE_DIR) \
	  --output-dir $(OPENAPI_DIR)/src/$(PROVIDER) \
	  --config-path $(CONFIG_DIR)/all_services.csv \
	  --servers $(CONFIG_DIR)/servers.json \
	  --provider-config $(CONFIG_DIR)/provider_config.json \
	  --service-config $(CONFIG_DIR)/service_config.json \
	  --naive-req-body-translate \
	  --overwrite > /dev/null
	$(MAKE) post-process

post-process: ## re-apply the generated-provider fixes (nativeCasing, object keys, pagination overrides)
	node provider-dev/scripts/post_process.mjs

compare: ## regenerate the README Breaking Changes section against the predecessor snapshot
	node provider-dev/scripts/compare_predecessor.mjs

build: split pre-normalize normalize mappings generate ## split + pre-normalize + normalize + mappings + generate

# ------------------------------------------------------------------- tests

test-offline: ## SHOW / DESCRIBE assertions against the local file registry (no server, no credentials)
	node tests/offline_validation.mjs

test-integration: ## row-level tests against the mock Sumo Logic API (no credentials)
	node tests/integration/run_integration_tests.mjs

# Go/no-go gate: the server is always torn down and the meta-test's exit
# status is preserved so a failure stops `make all`.
test-meta: ## SHOW/DESCRIBE meta-route gate over every resource via a local stackql server on PORT
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/$(OPENAPI_DIR)" --port $(PORT)
	node bin/test-meta-routes.cjs $(PROVIDER) --port $(PORT); status=$$?; bash bin/stop-server.sh --port $(PORT); exit $$status

test: test-offline test-integration test-meta ## all non-live test layers

# `make smoke-test` sources .env when present so a developer checkout works
# without exporting anything; CI sets the variables from secrets.
with_env = set -a; [ -f $(ENV_FILE) ] && source <(tr -d '\r' < $(ENV_FILE)); set +a;

smoke-test: ## live smoke suite against the LOCAL provider (needs .env / SUMOLOGIC_* vars; SMOKE_ARGS="--read-only" ...)
	@$(with_env) node tests/smoke_test.mjs $(SMOKE_ARGS)

smoke-test-live: ## live smoke suite against the PUBLISHED provider (post-publish verification)
	@$(with_env) node tests/smoke_test.mjs --live $(SMOKE_ARGS)

smoke-cleanup: ## sweep stackql-smoke-* collectors, roles, folders and monitor folders and exit
	@$(with_env) node tests/smoke_test.mjs --cleanup-only $(SMOKE_ARGS)

# -------------------------------------------------------------------- docs

docs: ## generate website/docs (snake_case surface) and sanitize for MDX
	rm -rf $(WEBSITE_DIR)/docs/*
	npm run generate-docs --silent -- \
	  --provider-name $(PROVIDER) \
	  --provider-dir ./$(PROVIDER_DIR) \
	  --output-dir ./$(WEBSITE_DIR) \
	  --provider-data-dir ./provider-dev/docgen/provider-data \
	  --snake-case-aliases > /dev/null
	node $(WEBSITE_DIR)/scripts/sanitize-docs.mjs

docs-build: ## yarn install && yarn build in website/ (vendors the shared Docusaurus config)
	cd $(WEBSITE_DIR) && yarn install --silent && yarn build

docs-serve: ## yarn start in website/
	cd $(WEBSITE_DIR) && yarn start

# ------------------------------------------------------------ local server

start-server: ## start a local stackql server on PORT serving provider-dev/openapi
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/$(OPENAPI_DIR)" --port $(PORT)

stop-server: ## stop the local stackql server on PORT
	bash bin/stop-server.sh --port $(PORT)

server-status: ## status of the local stackql server on PORT
	bash bin/server-status.sh --port $(PORT)

clean: ## remove generated provider, split source, docs, website build and the integration registry copy
	rm -rf $(OPENAPI_DIR)/* $(SOURCE_DIR)/*.yaml $(WEBSITE_DIR)/docs $(WEBSITE_DIR)/build $(WEBSITE_DIR)/.docusaurus tests/integration/.registry-tmp stackql-server.log
