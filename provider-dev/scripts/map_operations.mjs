#!/usr/bin/env node

// Populates stackql_resource_name, stackql_method_name, stackql_verb and
// stackql_object_key in provider-dev/config/all_services.csv from the split
// service specs in provider-dev/source.
//
// provider-dev/config/all_services.csv is the durable record of every
// operation mapping - the contract that keeps resource and method names
// stable between provider versions. So this script is FILL-ONLY by default:
// rows that already carry a mapping are left exactly as committed, only rows
// with an empty stackql_resource_name (operations added by a spec refresh)
// are derived, and rows whose operation has disappeared from the spec are
// pruned with a warning. `--rebuild` re-derives every row (used for the
// initial build and for deliberate, reviewed renames); `--check` derives
// without writing and reports rows whose committed mapping differs from what
// the rules would produce today (informational - the committed mapping wins).
//
// Derivation = generic CRUD heuristics (below) + the explicit RULES table
// (path-regex, first match wins). Manual mapping decisions are rules here,
// never hand-edits to the CSV.
//
// Conventions:
//   GET collection                -> SELECT <resource>.list   objectKey $.data / $.<array>
//   GET /{id}                     -> SELECT <resource>.get    (objectKey $.<wrapper> where the
//                                    Collector API wraps the object)
//   GET singleton                 -> SELECT <resource>.get
//   POST collection (with body)   -> INSERT <resource>.create
//   PUT /{id}, PUT singleton      -> UPDATE <resource>.update (Sumo Logic PUTs replace the
//                                    object: all required fields must be supplied)
//   PATCH                         -> UPDATE, PUT alongside a PATCH -> REPLACE (SCIM)
//   DELETE                        -> DELETE <resource>.delete
//   lifecycle / action operations -> EXEC on the parent resource (users.unlock,
//                                    partitions.decommission, scheduled_views.pause ...)
//   async job triads              -> <x>_jobs (start EXEC + get = status) and
//                                    <x>_results (get)
//   POST without a request body   -> EXEC (the registry tests require an INSERT
//                                    method to carry a request schema)
//   skipped (reason-coded)        -> stackql_resource_name = skip_this_resource
//
// Validates before writing: every row mapped or skipped with a reason, every
// spec operation present in the CSV, (resource, method) unique per service,
// unique required-parameter signatures per (resource, sqlVerb), and no INSERT
// without a request body. Fails without writing on any violation.
//
// Usage: npm run map-operations [-- --rebuild | --check] [-- --out other.csv]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import pluralize from 'pluralize';
import {
  camelToSnake, pathParams, normalizePath, apiVersion, classifyEnvelope, hasRequestBody,
  requestBodyMediaType, indexOperations, parseCsv, writeCsv
} from './lib/spec_helpers.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const sourceDir = path.join(repoRoot, 'provider-dev', 'source');
const csvPath = path.join(repoRoot, 'provider-dev', 'config', 'all_services.csv');
const args = process.argv.slice(2);
const rebuild = args.includes('--rebuild');
const checkOnly = args.includes('--check');

// ---------------------------------------------------------------------------
// Explicit rules: { service?, verb?, re (on the version-stripped path with
// params collapsed to {}), resource, method, sqlVerb, objectKey?, skip? }
// First match wins. `re` matches against normalizePath(pathKey); use the
// `v` field to pin an API version where v1 and v2 share a path shape.
// ---------------------------------------------------------------------------
const SKIP = (reason) => ({ resource: 'skip_this_resource', skip: reason });

const RULES = [
  // ---- access_keys
  { service: 'access_keys', verb: 'put', re: /^\/accessKeys\/\{\}\/rotate$/, resource: 'access_keys', method: 'rotate_secret', sqlVerb: 'exec' },
  { service: 'access_keys', re: /^\/accessKeys\/personal$/, resource: 'personal_access_keys', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { service: 'access_keys', re: /^\/accessKeys\/scopes$/, resource: 'scopes', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  // ---- account
  { service: 'account', re: /^\/account\/accountOwner$/, resource: 'account_owner', method: 'get', sqlVerb: 'select' },
  { service: 'account', re: /^\/account\/status$/, resource: 'status', method: 'get', sqlVerb: 'select' },
  { service: 'account', verb: 'post', re: /^\/account\/subdomain\/recover$/, resource: 'subdomain', method: 'recover', sqlVerb: 'exec' },
  { service: 'account', re: /^\/account\/subdomain$/, resource: 'subdomain' },
  { service: 'account', verb: 'post', re: /^\/account\/usage\/report$/, resource: 'usage_reports', method: 'create', sqlVerb: 'insert' },
  { service: 'account', re: /^\/account\/usage\/report\/\{\}\/status$/, resource: 'usage_reports', method: 'get', sqlVerb: 'select' },
  { service: 'account', re: /^\/account\/usageForecast$/, resource: 'usage_forecast', method: 'get', sqlVerb: 'select' },
  { service: 'account', re: /^\/plan\/pendingUpdateRequest$/, resource: 'pending_update_request' },
  // ---- apps (v1 + v2)
  { service: 'apps', v: 'v1', re: /^\/apps$/, resource: 'apps', method: 'list', sqlVerb: 'select', objectKey: '$.apps' },
  { service: 'apps', v: 'v1', re: /^\/apps\/\{\}$/, resource: 'apps', method: 'get', sqlVerb: 'select' },
  { service: 'apps', v: 'v1', re: /^\/apps\/\{\}\/install$/, resource: 'apps', method: 'install', sqlVerb: 'exec' },
  { service: 'apps', v: 'v1', re: /^\/apps\/install\/\{\}\/status$/, resource: 'install_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'apps', v: 'v2', re: /^\/apps$/, resource: 'apps_v2', method: 'list', sqlVerb: 'select', objectKey: '$.apps' },
  { service: 'apps', v: 'v2', re: /^\/apps\/\{\}\/details$/, resource: 'apps_v2', method: 'get', sqlVerb: 'select' },
  { service: 'apps', v: 'v2', re: /^\/apps\/\{\}\/install$/, resource: 'apps_v2', method: 'install', sqlVerb: 'exec' },
  { service: 'apps', v: 'v2', re: /^\/apps\/\{\}\/uninstall$/, resource: 'apps_v2', method: 'uninstall', sqlVerb: 'exec' },
  { service: 'apps', v: 'v2', re: /^\/apps\/\{\}\/upgrade$/, resource: 'apps_v2', method: 'upgrade', sqlVerb: 'exec' },
  { service: 'apps', v: 'v2', verb: 'get', re: /^\/apps\/\{\}\/subscription$/, resource: 'app_subscriptions', method: 'get', sqlVerb: 'select' },
  { service: 'apps', v: 'v2', verb: 'post', re: /^\/apps\/\{\}\/subscription$/, resource: 'app_subscriptions', method: 'subscribe', sqlVerb: 'exec' },
  { service: 'apps', v: 'v2', verb: 'delete', re: /^\/apps\/\{\}\/subscription$/, resource: 'app_subscriptions', method: 'delete', sqlVerb: 'delete' },
  { service: 'apps', v: 'v2', re: /^\/apps\/install\/\{\}\/status$/, resource: 'install_jobs_v2', method: 'get', sqlVerb: 'select' },
  { service: 'apps', v: 'v2', re: /^\/apps\/uninstall\/\{\}\/status$/, resource: 'uninstall_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'apps', v: 'v2', re: /^\/apps\/upgrade\/\{\}\/status$/, resource: 'upgrade_jobs', method: 'get', sqlVerb: 'select' },
  // ---- archive
  { service: 'archive', re: /^\/archive\/jobs\/count$/, resource: 'job_counts', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { service: 'archive', re: /^\/archive\/\{\}\/jobs(\/\{\})?$/, resource: 'jobs' },
  // ---- budgets
  { service: 'budgets', re: /^\/budgets\/usage$/, resource: 'usages', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { service: 'budgets', re: /^\/budgets\/\{\}\/usage$/, resource: 'usages', method: 'get', sqlVerb: 'select' },
  // ---- collectors (hand-authored Collector Management API)
  { service: 'collectors', re: /^\/collectors\/name\/\{\}$/, resource: 'collectors', method: 'get_by_name', sqlVerb: 'select', objectKey: '$.collector' },
  { service: 'collectors', verb: 'get', re: /^\/collectors\/offline$/, resource: 'offline_collectors', method: 'list', sqlVerb: 'select', objectKey: '$.collectors' },
  { service: 'collectors', verb: 'delete', re: /^\/collectors\/offline$/, resource: 'offline_collectors', method: 'delete', sqlVerb: 'delete' },
  { service: 'collectors', re: /^\/collectors\/overview$/, resource: 'overview', method: 'get', sqlVerb: 'select' },
  { service: 'collectors', re: /^\/collectors\/upgrades\/targets$/, resource: 'upgrade_targets', method: 'list', sqlVerb: 'select', objectKey: '$.targets' },
  { service: 'collectors', re: /^\/collectors\/upgrades\/collectors$/, resource: 'upgradable_collectors', method: 'list', sqlVerb: 'select', objectKey: '$.collectors' },
  { service: 'collectors', verb: 'post', re: /^\/collectors\/upgrades$/, resource: 'upgrades', method: 'create', sqlVerb: 'insert' },
  { service: 'collectors', re: /^\/collectors\/upgrades\/\{\}$/, resource: 'upgrades', method: 'get', sqlVerb: 'select', objectKey: '$.upgrade' },
  { service: 'collectors', re: /^\/collectors\/\{\}\/sources(\/\{\})?$/, resource: 'sources' },
  { service: 'collectors', re: /^\/collectors(\/\{\})?$/, resource: 'collectors' },
  // ---- connections
  { service: 'connections', re: /^\/connections\/incidentTemplates$/, resource: 'connections', method: 'get_incident_templates', sqlVerb: 'exec' },
  { service: 'connections', re: /^\/connections\/test$/, resource: 'connections', method: 'test', sqlVerb: 'exec' },
  // ---- content (folders, content items, permissions, async jobs)
  { service: 'content', re: /^\/content\/folders\/personal$/, resource: 'personal_folder', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/folders\/global$/, resource: 'global_folder_jobs', method: 'start', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/folders\/global\/\{\}\/status$/, resource: 'global_folder_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/folders\/global\/\{\}\/result$/, resource: 'global_folder_results', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { service: 'content', re: /^\/content\/folders\/adminRecommended$/, resource: 'admin_recommended_folder_jobs', method: 'start', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/folders\/adminRecommended\/\{\}\/status$/, resource: 'admin_recommended_folder_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/folders\/adminRecommended\/\{\}\/result$/, resource: 'admin_recommended_folder_results', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/folders\/installedApps$/, resource: 'installed_apps_folder_jobs', method: 'start', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/folders\/installedApps\/\{\}\/status$/, resource: 'installed_apps_folder_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/folders\/installedApps\/\{\}\/result$/, resource: 'installed_apps_folder_results', method: 'get', sqlVerb: 'select' },
  { service: 'content', verb: 'post', re: /^\/content\/folders\/\{\}\/import$/, resource: 'import_jobs', method: 'start', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/folders\/\{\}\/import\/\{\}\/status$/, resource: 'import_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/folders\/\{\}\/import\/\{\}\/result$/, resource: 'import_results', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/folders(\/\{\})?$/, resource: 'folders' },
  { service: 'content', verb: 'post', re: /^\/content\/\{\}\/export$/, resource: 'export_jobs', method: 'start', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/\{\}\/export\/\{\}\/status$/, resource: 'export_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/\{\}\/export\/\{\}\/result$/, resource: 'export_results', method: 'get', sqlVerb: 'select' },
  { service: 'content', verb: 'post', re: /^\/content\/\{\}\/copy$/, resource: 'copy_jobs', method: 'start', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/\{\}\/copy\/\{\}\/status$/, resource: 'copy_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'content', verb: 'delete', re: /^\/content\/\{\}\/delete$/, resource: 'delete_jobs', method: 'start', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/\{\}\/delete\/\{\}\/status$/, resource: 'delete_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'content', verb: 'post', re: /^\/content\/\{\}\/move$/, resource: 'items', method: 'move', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/path$/, resource: 'items', method: 'get_by_path', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/\{\}\/path$/, resource: 'paths', method: 'get', sqlVerb: 'select' },
  { service: 'content', verb: 'get', re: /^\/content\/\{\}\/permissions$/, resource: 'permissions', method: 'get', sqlVerb: 'select' },
  { service: 'content', re: /^\/content\/\{\}\/permissions\/add$/, resource: 'permissions', method: 'add', sqlVerb: 'exec' },
  { service: 'content', re: /^\/content\/\{\}\/permissions\/remove$/, resource: 'permissions', method: 'remove', sqlVerb: 'exec' },
  // ---- content_sync (multi-account content sync jobs)
  { service: 'content_sync', verb: 'get', re: /^\/multi-account-management\/content\/sync$/, resource: 'sync_jobs', method: 'get_current', sqlVerb: 'select' },
  { service: 'content_sync', verb: 'post', re: /^\/multi-account-management\/content\/sync$/, resource: 'sync_jobs', method: 'create', sqlVerb: 'insert' },
  { service: 'content_sync', re: /^\/multi-account-management\/content\/sync\/\{\}\/cancel$/, resource: 'sync_jobs', method: 'cancel', sqlVerb: 'exec' },
  { service: 'content_sync', re: /^\/multi-account-management\/content\/sync\/\{\}\/retry$/, resource: 'sync_jobs', method: 'retry', sqlVerb: 'exec' },
  { service: 'content_sync', re: /^\/multi-account-management\/content\/sync\/\{\}\/status$/, resource: 'sync_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'content_sync', re: /^\/multi-account-management\/content\/sync\/\{\}\/info$/, resource: 'sync_job_info', method: 'get', sqlVerb: 'select' },
  { service: 'content_sync', re: /^\/multi-account-management\/content\/sync\/\{\}\/result$/, resource: 'sync_job_results', method: 'list', sqlVerb: 'select', objectKey: '$.contentList' },
  // ---- dashboards
  { service: 'dashboards', re: /^\/dashboards\/reportSchedules(\/\{\})?$/, resource: 'report_schedules', listKey: '$.reportSchedules' },
  { service: 'dashboards', verb: 'post', re: /^\/dashboards\/migrate$/, resource: 'migrations', method: 'create', sqlVerb: 'insert' },
  { service: 'dashboards', re: /^\/dashboards\/migrate\/preview$/, resource: 'migrations', method: 'preview', sqlVerb: 'exec' },
  { service: 'dashboards', re: /^\/dashboards\/migrate\/\{\}\/status$/, resource: 'migrations', method: 'get', sqlVerb: 'select' },
  { service: 'dashboards', re: /^\/dashboards\/migrate\/\{\}\/result$/, resource: 'migration_results', method: 'get', sqlVerb: 'select' },
  { service: 'dashboards', verb: 'post', re: /^\/dashboards\/reportJobs$/, resource: 'report_jobs', method: 'create', sqlVerb: 'insert' },
  { service: 'dashboards', re: /^\/dashboards\/reportJobs\/\{\}\/status$/, resource: 'report_jobs', method: 'get', sqlVerb: 'select' },
  { service: 'dashboards', re: /^\/dashboards\/reportJobs\/\{\}\/result$/, ...SKIP('binary_pdf_response') },
  { service: 'dashboards', re: /^\/dashboards(\/\{\})?$/, resource: 'dashboards', listKey: '$.dashboards' },
  // ---- data_deletion_rules
  { service: 'data_deletion_rules', re: /^\/dataDeletionRules\/\{\}\/cancel$/, resource: 'data_deletion_rules', method: 'cancel', sqlVerb: 'exec' },
  { service: 'data_deletion_rules', re: /^\/dataDeletionRules\/\{\}\/delete$/, resource: 'data_deletion_rules', method: 'delete', sqlVerb: 'delete' },
  { service: 'data_deletion_rules', re: /^\/dataDeletionRules(\/\{\})?$/, resource: 'data_deletion_rules', listKey: '$.deletionRulesList' },
  // ---- data_masking_rules
  { service: 'data_masking_rules', re: /^\/dataMaskingRules\/evaluate$/, resource: 'data_masking_rules', method: 'evaluate', sqlVerb: 'exec' },
  // ---- event_extraction_rules / extraction_rules / fields / partitions / scheduled_views quotas
  { re: /\/quota$/, resource: 'quota', method: 'get', sqlVerb: 'select' },
  // ---- fields
  { service: 'fields', re: /^\/fields\/\{\}\/disable$/, resource: 'fields', method: 'disable', sqlVerb: 'exec' },
  { service: 'fields', re: /^\/fields\/\{\}\/enable$/, resource: 'fields', method: 'enable', sqlVerb: 'exec' },
  { service: 'fields', re: /^\/fields\/builtin(\/\{\})?$/, resource: 'builtin_fields' },
  { service: 'fields', re: /^\/fields\/dropped$/, resource: 'dropped_fields', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { service: 'fields', re: /^\/fields(\/\{\})?$/, resource: 'fields' },
  // ---- feature_settings (singleton list + update)
  { service: 'feature_settings', verb: 'get', re: /^\/featureSettings$/, resource: 'feature_settings', method: 'list', sqlVerb: 'select', objectKey: '$.featureSettings' },
  { service: 'feature_settings', verb: 'put', re: /^\/featureSettings$/, resource: 'feature_settings', method: 'update', sqlVerb: 'update' },
  // ---- health_events
  { service: 'health_events', verb: 'post', re: /^\/healthEvents\/resources$/, resource: 'health_events', method: 'list_for_resources', sqlVerb: 'exec' },
  // ---- ingest_budgets
  { service: 'ingest_budgets', re: /^\/ingestBudgets\/\{\}\/usage\/reset$/, resource: 'ingest_budgets', method: 'reset_usage', sqlVerb: 'exec' },
  // ---- log_searches
  { service: 'log_searches', re: /^\/logSearches\/estimatedUsage$/, resource: 'estimated_usage', method: 'estimate', sqlVerb: 'exec' },
  { service: 'log_searches', re: /^\/logSearches\/estimatedUsageByMeteringType$/, resource: 'estimated_usage', method: 'estimate_by_metering_type', sqlVerb: 'exec' },
  { service: 'log_searches', re: /^\/logSearches\/estimatedUsageByTier$/, resource: 'estimated_usage', method: 'estimate_by_tier', sqlVerb: 'exec' },
  { service: 'log_searches', re: /^\/logSearches\/estimatedUsageByView$/, resource: 'estimated_usage', method: 'estimate_by_view', sqlVerb: 'exec' },
  { service: 'log_searches', re: /^\/logSearches(\/\{\})?$/, resource: 'log_searches', listKey: '$.logSearches' },
  // ---- logs_data_forwarding
  { service: 'logs_data_forwarding', re: /^\/logsDataForwarding\/destinations(\/\{\})?$/, resource: 'destinations' },
  { service: 'logs_data_forwarding', re: /^\/logsDataForwarding\/rules(\/\{\})?$/, resource: 'rules' },
  // ---- lookup_tables
  { service: 'lookup_tables', re: /^\/lookupTables\/\{\}\/deleteTableRow$/, resource: 'lookup_tables', method: 'delete_row', sqlVerb: 'exec' },
  { service: 'lookup_tables', re: /^\/lookupTables\/\{\}\/row$/, resource: 'lookup_tables', method: 'upsert_row', sqlVerb: 'exec' },
  { service: 'lookup_tables', re: /^\/lookupTables\/\{\}\/truncate$/, resource: 'lookup_tables', method: 'truncate', sqlVerb: 'exec' },
  { service: 'lookup_tables', re: /^\/lookupTables\/\{\}\/upload$/, ...SKIP('multipart_file_upload') },
  { service: 'lookup_tables', re: /^\/lookupTables\/jobs\/\{\}\/status$/, resource: 'jobs', method: 'get', sqlVerb: 'select' },
  { service: 'lookup_tables', re: /^\/lookupTables(\/\{\})?$/, resource: 'lookup_tables' },
  // ---- metrics_queries
  { service: 'metrics_queries', re: /^\/metricsQueries$/, resource: 'metrics_queries', method: 'run', sqlVerb: 'exec' },
  // ---- metrics_searches (v1 + v2)
  { service: 'metrics_searches', v: 'v1', re: /^\/metricsSearches(\/\{\})?$/, resource: 'metrics_searches' },
  { service: 'metrics_searches', v: 'v2', re: /^\/metricsSearches(\/\{\})?$/, resource: 'metrics_searches_v2', listKey: '$.metricsSearches' },
  // ---- library-style services: monitors, muting_schedules, parsers, slos
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/root$/, resource: 'root', method: 'get', sqlVerb: 'select' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/path$/, resource: '@library', method: 'get_by_path', sqlVerb: 'select' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/search$/, resource: 'search', method: 'list', sqlVerb: 'select' },
  { verb: 'get', re: /^\/(monitors|mutingSchedules|parsers|slos)$/, resource: '@library', method: 'read_by_ids', sqlVerb: 'exec' },
  { verb: 'delete', re: /^\/(monitors|mutingSchedules|parsers|slos)$/, resource: '@library', method: 'delete_by_ids', sqlVerb: 'exec' },
  { verb: 'post', re: /^\/(monitors|mutingSchedules|parsers|slos)$/, resource: '@library', method: 'create', sqlVerb: 'insert' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/\{\}\/copy$/, resource: '@library', method: 'copy', sqlVerb: 'exec' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/\{\}\/move$/, resource: '@library', method: 'move', sqlVerb: 'exec' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/\{\}\/export$/, resource: '@library', method: 'export', sqlVerb: 'exec' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/\{\}\/import$/, resource: '@library', method: 'import', sqlVerb: 'exec' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/\{\}\/lock$/, resource: '@library', method: 'lock', sqlVerb: 'exec' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/\{\}\/unlock$/, resource: '@library', method: 'unlock', sqlVerb: 'exec' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/\{\}\/path$/, resource: 'paths', method: 'get', sqlVerb: 'select' },
  { re: /^\/(monitors|mutingSchedules|parsers|slos)\/\{\}$/, resource: '@library' },
  { service: 'monitors', re: /^\/monitors\/disable$/, resource: 'monitors', method: 'disable_by_ids', sqlVerb: 'exec' },
  { service: 'monitors', verb: 'get', re: /^\/monitors\/\{\}\/permissions$/, resource: 'permissions', method: 'list', sqlVerb: 'select', objectKey: '$.permissionStatements' },
  { service: 'monitors', re: /^\/monitors\/\{\}\/permissionSummariesBySubjects$/, resource: 'permission_summaries', method: 'list', sqlVerb: 'select', objectKey: '$.permissionSummariesBySubjects' },
  { service: 'monitors', re: /^\/monitors\/permissions\/set$/, resource: 'permissions', method: 'set', sqlVerb: 'exec' },
  { service: 'monitors', re: /^\/monitors\/permissions\/revoke$/, resource: 'permissions', method: 'revoke', sqlVerb: 'exec' },
  { service: 'monitors', re: /^\/monitors\/playbooks$/, resource: 'playbooks', method: 'list', sqlVerb: 'select' },
  { service: 'monitors', re: /^\/monitors\/playbooksDetails$/, resource: 'playbook_details', method: 'list', sqlVerb: 'select' },
  { service: 'monitors', re: /^\/monitors\/usageInfo$/, resource: 'usage_info', method: 'list', sqlVerb: 'select' },
  { service: 'slos', re: /^\/slos\/sli$/, resource: 'slos', method: 'get_sli', sqlVerb: 'exec' },
  { service: 'slos', re: /^\/slos\/usageInfo$/, resource: 'usage_info', method: 'list', sqlVerb: 'select' },
  { service: 'parsers', re: /^\/system\/parsers\/\{\}\/lock$/, resource: 'system_parsers', method: 'lock', sqlVerb: 'exec' },
  { service: 'parsers', re: /^\/system\/parsers\/\{\}\/unlock$/, resource: 'system_parsers', method: 'unlock', sqlVerb: 'exec' },
  // ---- oauth
  { service: 'oauth', re: /^\/oauth\/clients\/\{\}\/rotate$/, resource: 'clients', method: 'rotate_secret', sqlVerb: 'exec' },
  { service: 'oauth', re: /^\/oauth\/clients(\/\{\})?$/, resource: 'clients' },
  { service: 'oauth', re: /^\/oauth\/consents(\/\{\})?$/, resource: 'consents' },
  { service: 'oauth', re: /^\/oauth\/scopes$/, resource: 'scopes', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  // ---- organizations
  // EXEC-only resource: the method must not be named get/list (any-sdk infers
  // SELECT from those names when a resource declares no SQL verbs)
  { service: 'organizations', re: /^\/organizations\/usages$/, resource: 'child_usages', method: 'get_usages', sqlVerb: 'exec' },
  // ---- ot_collectors
  { service: 'ot_collectors', verb: 'post', re: /^\/otCollectors$/, resource: 'ot_collectors', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { service: 'ot_collectors', re: /^\/otCollectors\/offline$/, resource: 'ot_collectors', method: 'delete_offline', sqlVerb: 'exec' },
  { service: 'ot_collectors', re: /^\/otCollectors\/otCollectorsByName$/, resource: 'ot_collectors', method: 'get_by_names', sqlVerb: 'select', objectKey: '$.data' },
  { service: 'ot_collectors', re: /^\/otCollectors\/totalCount$/, resource: 'total_count', method: 'get', sqlVerb: 'select' },
  { service: 'ot_collectors', re: /^\/otCollectors\/\{\}$/, resource: 'ot_collectors' },
  // ---- partitions
  { service: 'partitions', re: /^\/partitions\/\{\}\/cancelRetentionUpdate$/, resource: 'partitions', method: 'cancel_retention_update', sqlVerb: 'exec' },
  { service: 'partitions', re: /^\/partitions\/\{\}\/decommission$/, resource: 'partitions', method: 'decommission', sqlVerb: 'exec' },
  // ---- password_policy / policies (singletons)
  { service: 'password_policy', re: /^\/passwordPolicy$/, resource: 'password_policy' },
  { service: 'policies', re: /^\/policies\/oAuthCimd$/, resource: 'oauth_cimd', singleton: true },
  { service: 'policies', re: /^\/policies\/([A-Za-z]+)$/, resource: '@last', singleton: true },
  // ---- roles (v1 + v2)
  { service: 'roles', v: 'v1', re: /^\/roles\/\{\}\/users\/\{\}$/, verb: 'put', resource: 'roles', method: 'assign_user', sqlVerb: 'exec' },
  { service: 'roles', v: 'v1', re: /^\/roles\/\{\}\/users\/\{\}$/, verb: 'delete', resource: 'roles', method: 'remove_user', sqlVerb: 'exec' },
  { service: 'roles', v: 'v1', re: /^\/roles(\/\{\})?$/, resource: 'roles' },
  { service: 'roles', v: 'v2', re: /^\/roles\/\{\}\/users\/\{\}$/, verb: 'put', resource: 'roles_v2', method: 'assign_user', sqlVerb: 'exec' },
  { service: 'roles', v: 'v2', re: /^\/roles\/\{\}\/users\/\{\}$/, verb: 'delete', resource: 'roles_v2', method: 'remove_user', sqlVerb: 'exec' },
  { service: 'roles', v: 'v2', re: /^\/roles(\/\{\})?$/, resource: 'roles_v2' },
  // ---- saml
  { service: 'saml', verb: 'post', re: /^\/saml\/allowlistedUsers\/\{\}$/, resource: 'allowlisted_users', method: 'add', sqlVerb: 'exec' },
  { service: 'saml', re: /^\/saml\/allowlistedUsers(\/\{\})?$/, resource: 'allowlisted_users' },
  { service: 'saml', re: /^\/saml\/identityProviders\/\{\}\/metadata$/, resource: 'identity_provider_metadata', method: 'get', sqlVerb: 'select' },
  { service: 'saml', re: /^\/saml\/identityProviders(\/\{\})?$/, resource: 'identity_providers' },
  { service: 'saml', re: /^\/saml\/lockdown\/enable$/, resource: 'lockdown', method: 'enable', sqlVerb: 'exec' },
  { service: 'saml', re: /^\/saml\/lockdown\/disable$/, resource: 'lockdown', method: 'disable', sqlVerb: 'exec' },
  // ---- scheduled_views
  { service: 'scheduled_views', re: /^\/scheduledViews\/\{\}\/disable$/, resource: 'scheduled_views', method: 'disable', sqlVerb: 'exec' },
  { service: 'scheduled_views', re: /^\/scheduledViews\/\{\}\/pause$/, resource: 'scheduled_views', method: 'pause', sqlVerb: 'exec' },
  { service: 'scheduled_views', re: /^\/scheduledViews\/\{\}\/start$/, resource: 'scheduled_views', method: 'start', sqlVerb: 'exec' },
  // ---- schemas
  { service: 'schemas', re: /^\/schemaIdentitiesGrouped$/, resource: 'schema_identities', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  // ---- scim
  { service: 'scim', verb: 'get', re: /^\/scim\/Users$/, resource: 'users', method: 'list', sqlVerb: 'select', objectKey: '$.Resources' },
  { service: 'scim', verb: 'patch', re: /^\/scim\/Users\/\{\}$/, resource: 'users', method: 'update', sqlVerb: 'update' },
  { service: 'scim', verb: 'put', re: /^\/scim\/Users\/\{\}$/, resource: 'users', method: 'replace', sqlVerb: 'replace' },
  { service: 'scim', re: /^\/scim\/Users(\/\{\})?$/, resource: 'users' },
  // ---- search_jobs
  { service: 'search_jobs', re: /^\/search\/jobs\/\{\}\/messages$/, resource: 'messages', method: 'list', sqlVerb: 'select', objectKey: '$.messages' },
  { service: 'search_jobs', re: /^\/search\/jobs\/\{\}\/records$/, resource: 'records', method: 'list', sqlVerb: 'select', objectKey: '$.records' },
  { service: 'search_jobs', re: /^\/search\/jobs(\/\{\})?$/, resource: 'search_jobs' },
  // ---- service_accounts
  { service: 'service_accounts', re: /^\/serviceAccounts\/\{\}\/accessKeys(\/\{\})?$/, resource: 'access_keys' },
  { service: 'service_accounts', re: /^\/serviceAccounts(\/\{\})?$/, resource: 'service_accounts' },
  // ---- service_allowlist
  { service: 'service_allowlist', re: /^\/serviceAllowlist\/addresses\/add$/, resource: 'addresses', method: 'add', sqlVerb: 'exec' },
  { service: 'service_allowlist', re: /^\/serviceAllowlist\/addresses\/remove$/, resource: 'addresses', method: 'remove', sqlVerb: 'exec' },
  { service: 'service_allowlist', re: /^\/serviceAllowlist\/addresses$/, resource: 'addresses', method: 'list', sqlVerb: 'select', objectKey: '$.data' },
  { service: 'service_allowlist', re: /^\/serviceAllowlist\/status$/, resource: 'status', method: 'get', sqlVerb: 'select' },
  { service: 'service_allowlist', re: /^\/serviceAllowlist\/enable$/, resource: 'status', method: 'enable', sqlVerb: 'exec' },
  { service: 'service_allowlist', re: /^\/serviceAllowlist\/disable$/, resource: 'status', method: 'disable', sqlVerb: 'exec' },
  // ---- source_templates (v1 deprecated surface skipped, v2 mapped)
  { service: 'source_templates', re: /^\/sourceTemplate(\/|$)/, ...SKIP('deprecated_superseded_by_v2') },
  { service: 'source_templates', re: /^\/upgrade\/sourceTemplate\/\{\}$/, ...SKIP('deprecated_superseded_by_v2') },
  { service: 'source_templates', re: /^\/sourceTemplates\/getLinkedSourceTemplatesImpact$/, resource: 'source_templates', method: 'get_linked_impact', sqlVerb: 'exec' },
  { service: 'source_templates', re: /^\/sourceTemplates\/\{\}\/status$/, resource: 'source_templates', method: 'update_status', sqlVerb: 'exec' },
  { service: 'source_templates', re: /^\/sourceTemplates\/\{\}\/upgrade$/, resource: 'source_templates', method: 'upgrade', sqlVerb: 'exec' },
  { service: 'source_templates', verb: 'post', re: /^\/sourceTemplates\/\{\}$/, resource: 'source_templates', method: 'update', sqlVerb: 'update' },
  { service: 'source_templates', re: /^\/sourceTemplates(\/\{\})?$/, resource: 'source_templates' },
  // ---- threat_intel
  { service: 'threat_intel', re: /^\/threatIntel\/datastore\/dataSource\/\{\}$/, resource: 'data_sources', method: 'update', sqlVerb: 'update' },
  { service: 'threat_intel', re: /^\/threatIntel\/datastore\/db$/, resource: 'datastore', singleton: true },
  { service: 'threat_intel', verb: 'get', re: /^\/threatIntel\/datastore\/retentionPeriod$/, resource: 'retention_period', method: 'get', sqlVerb: 'select' },
  { service: 'threat_intel', verb: 'post', re: /^\/threatIntel\/datastore\/retentionPeriod$/, resource: 'retention_period', method: 'update', sqlVerb: 'update' },
  { service: 'threat_intel', verb: 'delete', re: /^\/threatIntel\/datastore\/indicators$/, resource: 'indicators', method: 'remove', sqlVerb: 'exec' },
  { service: 'threat_intel', re: /^\/threatIntel\/datastore\/indicators\/normalized$/, resource: 'indicators', method: 'upload_normalized', sqlVerb: 'exec' },
  { service: 'threat_intel', re: /^\/threatIntel\/datastore\/indicators\/stix$/, resource: 'indicators', method: 'upload_stix', sqlVerb: 'exec' },
  // ---- tracing
  { service: 'tracing', re: /^\/tracing\/serviceMap$/, resource: 'service_map', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/metrics$/, resource: 'metrics', method: 'list', sqlVerb: 'select', objectKey: '$.metrics' },
  { service: 'tracing', verb: 'post', re: /^\/tracing\/tracequery$/, resource: 'trace_queries', method: 'create', sqlVerb: 'insert' },
  { service: 'tracing', verb: 'delete', re: /^\/tracing\/tracequery\/\{\}$/, resource: 'trace_queries', method: 'delete', sqlVerb: 'delete' },
  { service: 'tracing', re: /^\/tracing\/tracequery\/\{\}\/status$/, resource: 'trace_queries', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/tracequery\/\{\}\/rows\/\{\}\/traces$/, resource: 'trace_query_results', method: 'list', sqlVerb: 'select', objectKey: '$.results' },
  { service: 'tracing', re: /^\/tracing\/tracequery\/fields$/, resource: 'trace_query_fields', method: 'list', sqlVerb: 'select', objectKey: '$.fields' },
  { service: 'tracing', re: /^\/tracing\/tracequery\/fields\/\{\}\/values$/, resource: 'trace_query_field_values', method: 'list', sqlVerb: 'select', objectKey: '$.fieldValues' },
  { service: 'tracing', verb: 'post', re: /^\/tracing\/spanquery$/, resource: 'span_queries', method: 'create', sqlVerb: 'insert' },
  { service: 'tracing', verb: 'delete', re: /^\/tracing\/spanquery\/\{\}$/, resource: 'span_queries', method: 'delete', sqlVerb: 'delete' },
  { service: 'tracing', re: /^\/tracing\/spanquery\/\{\}\/status$/, resource: 'span_queries', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/spanquery\/\{\}\/pause$/, resource: 'span_queries', method: 'pause', sqlVerb: 'exec' },
  { service: 'tracing', re: /^\/tracing\/spanquery\/\{\}\/resume$/, resource: 'span_queries', method: 'resume', sqlVerb: 'exec' },
  { service: 'tracing', re: /^\/tracing\/spanquery\/\{\}\/aggregates$/, resource: 'span_query_aggregates', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/spanquery\/\{\}\/rows\/\{\}\/facets$/, resource: 'span_query_facets', method: 'list', sqlVerb: 'select', objectKey: '$.facets' },
  { service: 'tracing', re: /^\/tracing\/spanquery\/\{\}\/rows\/\{\}\/spans$/, resource: 'span_query_results', method: 'list', sqlVerb: 'select', objectKey: '$.spanPage' },
  { service: 'tracing', re: /^\/tracing\/spanquery\/fields$/, resource: 'span_query_fields', method: 'list', sqlVerb: 'select', objectKey: '$.fields' },
  { service: 'tracing', re: /^\/tracing\/spanquery\/fields\/\{\}\/values$/, resource: 'span_query_field_values', method: 'list', sqlVerb: 'select', objectKey: '$.fieldValues' },
  { service: 'tracing', re: /^\/tracing\/traces\/\{\}$/, resource: 'traces', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/traces\/\{\}\/exists$/, resource: 'trace_existence', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/traces\/\{\}\/spans$/, resource: 'spans', method: 'list', sqlVerb: 'select', objectKey: '$.spanPage' },
  { service: 'tracing', re: /^\/tracing\/traces\/\{\}\/spans\/\{\}$/, resource: 'spans', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/traces\/\{\}\/spans\/\{\}\/billingInfo$/, resource: 'span_billing_info', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/traces\/\{\}\/traceEvents$/, resource: 'trace_events', method: 'get', sqlVerb: 'select' },
  { service: 'tracing', re: /^\/tracing\/traces\/\{\}\/criticalPath$/, resource: 'critical_paths', method: 'list', sqlVerb: 'select', objectKey: '$.segments' },
  { service: 'tracing', re: /^\/tracing\/traces\/\{\}\/criticalPath\/breakdown\/service$/, resource: 'critical_path_service_breakdowns', method: 'list', sqlVerb: 'select', objectKey: '$.elements' },
  // ---- users lifecycle
  { service: 'users', re: /^\/users\/\{\}\/email\/requestChange$/, resource: 'users', method: 'request_change_email', sqlVerb: 'exec' },
  { service: 'users', re: /^\/users\/\{\}\/mfa\/disable$/, resource: 'users', method: 'disable_mfa', sqlVerb: 'exec' },
  { service: 'users', re: /^\/users\/\{\}\/password\/reset$/, resource: 'users', method: 'reset_password', sqlVerb: 'exec' },
  { service: 'users', re: /^\/users\/\{\}\/resendWelcomeEmail$/, resource: 'users', method: 'resend_welcome_email', sqlVerb: 'exec' },
  { service: 'users', re: /^\/users\/\{\}\/unlock$/, resource: 'users', method: 'unlock', sqlVerb: 'exec' }
];

// The library-style services (monitors, muting_schedules, parsers, slos)
// name their main resource after the service.
function libraryResource(service) {
  return service;
}

// ---------------------------------------------------------------------------
// Generic derivation for standard CRUD shapes:
//   /<collection>            GET list / POST create
//   /<collection>/{id}       GET get / PUT update / PATCH update / DELETE delete
//   singleton paths          GET get / PUT update / DELETE delete
// ---------------------------------------------------------------------------
function genericVerb(entry, rule) {
  const { op, verb, pathKey, resolve } = entry;
  const norm = normalizePath(pathKey);
  const lastIsParam = /\{\}$/.test(norm);
  const hint = rule?.resource && !rule.resource.startsWith('@') ? rule.resource : '';
  const env = classifyEnvelope(op, resolve, hint);
  const singleton = !!rule?.singleton || (!lastIsParam && verb !== 'post' && env.envelope !== 'list' && env.envelope !== 'bare-array');
  if (verb === 'get') {
    if (lastIsParam) return { method: 'get', sqlVerb: 'select', objectKey: env.envelope === 'wrapped' ? env.key : '' };
    if (env.envelope === 'list') return { method: 'list', sqlVerb: 'select', objectKey: rule?.listKey || env.key };
    if (env.envelope === 'bare-array') return { method: 'list', sqlVerb: 'select', objectKey: '' };
    return { method: 'get', sqlVerb: 'select', objectKey: env.envelope === 'wrapped' ? env.key : '' };
  }
  if (verb === 'post') {
    if (!hasRequestBody(op)) return { error: 'POST without a request body has no generic mapping (needs an explicit EXEC rule)' };
    if (lastIsParam) return { error: 'POST on an id path has no generic mapping (needs an explicit rule)' };
    return { method: 'create', sqlVerb: 'insert', objectKey: '' };
  }
  if (verb === 'put' || verb === 'patch') {
    if (lastIsParam || singleton) return { method: 'update', sqlVerb: 'update', objectKey: '' };
    return { error: `${verb.toUpperCase()} on a collection path has no generic mapping (needs an explicit rule)` };
  }
  if (verb === 'delete') {
    if (lastIsParam || singleton) return { method: 'delete', sqlVerb: 'delete', objectKey: '' };
    return { error: 'DELETE on a collection path has no generic mapping (needs an explicit rule)' };
  }
  return { error: `unhandled verb ${verb}` };
}

function genericResource(entry) {
  const norm = normalizePath(entry.pathKey);
  const statics = norm.split('/').filter((s) => s && s !== '{}');
  const last = statics[statics.length - 1];
  const lastIsParam = /\{\}$/.test(norm);
  const env = classifyEnvelope(entry.op, entry.resolve);
  const name = camelToSnake(last);
  if (lastIsParam || env.envelope === 'list' || entry.verb === 'post') return pluralize(name);
  return name;
}

function mapOperation(entry) {
  const { service, pathKey, verb, op } = entry;
  const norm = normalizePath(pathKey);
  const version = apiVersion(pathKey);
  const rule = RULES.find((r) =>
    (!r.service || r.service === service) &&
    (!r.verb || r.verb === verb) &&
    (!r.v || r.v === version) &&
    r.re.test(norm));
  if (rule?.skip) return { resource: 'skip_this_resource', method: '', sqlVerb: '', objectKey: '', skip: rule.skip };
  let resource = rule?.resource;
  if (resource === '@library') resource = libraryResource(service);
  else if (resource === '@last') resource = camelToSnake(norm.split('/').filter((s) => s && s !== '{}').pop());
  else if (!resource) resource = genericResource(entry);
  if (rule?.method) {
    return { resource, method: rule.method, sqlVerb: rule.sqlVerb, objectKey: rule.objectKey || '' };
  }
  const g = genericVerb(entry, rule);
  if (g.error) return { error: g.error };
  return { resource, method: g.method, sqlVerb: g.sqlVerb, objectKey: g.objectKey || '' };
}

// ---------------------------------------------------------------------------
// Load spec operations and the CSV
// ---------------------------------------------------------------------------
const { ops } = indexOperations(sourceDir, yaml);
if (ops.size === 0) {
  console.error(`Error: no operations found in ${sourceDir} - run npm run split first`);
  process.exit(1);
}
if (!fs.existsSync(csvPath)) {
  console.error(`Error: ${csvPath} not found - run npm run generate-mappings first`);
  process.exit(1);
}
let rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
const header = rows[0];
const col = Object.fromEntries(header.map((h, i) => [h, i]));
for (const required of ['filename', 'path', 'verb', 'operationId', 'stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key']) {
  if (!(required in col)) {
    console.error(`Missing expected CSV column: ${required}`);
    process.exit(1);
  }
}

const errors = [];
const stats = { select: 0, insert: 0, update: 0, replace: 0, delete: 0, exec: 0, skipped: 0, kept: 0, derived: 0, pruned: 0, drift: 0, deduped: 0 };
const skipsByReason = {};
const driftReport = [];
const seenKeys = new Set();
const keptRows = [];

// provider-utils analyze treats a row whose method / verb is empty as
// unmapped and appends it again on every refresh, which is exactly the shape
// of a reason-coded skip row - keep the first row per operation key and drop
// the later duplicates
const firstRowByKey = new Map();
const dedupedRows = [];
for (const row of rows.slice(1)) {
  const key = `${row[col.filename]}::${row[col.path]}::${row[col.verb]}`;
  if (firstRowByKey.has(key)) { stats.deduped++; continue; }
  firstRowByKey.set(key, row);
  dedupedRows.push(row);
}

for (const row of dedupedRows) {
  const key = `${row[col.filename]}::${row[col.path]}::${row[col.verb]}`;
  const entry = ops.get(key);
  if (!entry) {
    console.warn(`pruned retired operation: ${row[col.filename]} ${row[col.verb].toUpperCase()} ${row[col.path]} (${row[col.operationId]})`);
    stats.pruned++;
    continue;
  }
  seenKeys.add(key);
  const committed = row[col.stackql_resource_name];
  const derived = mapOperation(entry);
  if (derived.error) {
    if (!committed || rebuild) errors.push(`${entry.filename} ${entry.verb.toUpperCase()} ${entry.pathKey} (${entry.op.operationId}): ${derived.error}`);
  }
  if (committed && !rebuild) {
    stats.kept++;
    if (!derived.error && (derived.resource !== committed || derived.method !== row[col.stackql_method_name] || derived.sqlVerb !== row[col.stackql_verb] || (derived.objectKey || '') !== (row[col.stackql_object_key] || ''))) {
      stats.drift++;
      driftReport.push(`${entry.filename} ${entry.verb.toUpperCase()} ${entry.pathKey}: committed ${committed}.${row[col.stackql_method_name]} [${row[col.stackql_verb]}${row[col.stackql_object_key] ? ' ' + row[col.stackql_object_key] : ''}] vs rules ${derived.resource}.${derived.method} [${derived.sqlVerb}${derived.objectKey ? ' ' + derived.objectKey : ''}]`);
    }
  } else if (!derived.error) {
    stats.derived++;
    row[col.stackql_resource_name] = derived.resource;
    row[col.stackql_method_name] = derived.method;
    row[col.stackql_verb] = derived.sqlVerb;
    row[col.stackql_object_key] = derived.objectKey || '';
  }
  keptRows.push(row);
}
rows = [header, ...keptRows];

// every spec operation must have a CSV row (else generate-provider misses it)
for (const key of ops.keys()) {
  if (!seenKeys.has(key)) errors.push(`in spec but not in CSV (run npm run generate-mappings): ${key}`);
}

// ---------------------------------------------------------------------------
// Consistency checks over the final rows
// ---------------------------------------------------------------------------
const methodSeen = new Map();
const sigSeen = new Map();
for (const row of rows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  const key = `${row[col.filename]}::${row[col.path]}::${row[col.verb]}`;
  const entry = ops.get(key);
  if (!resource) { errors.push(`unmapped: ${key}`); continue; }
  if (resource === 'skip_this_resource') {
    stats.skipped++;
    const reason = (RULES.find((r) => r.skip && (!r.service || r.service === entry.service) && r.re.test(normalizePath(entry.pathKey))) || {}).skip || 'unspecified';
    skipsByReason[reason] = (skipsByReason[reason] || 0) + 1;
    continue;
  }
  const method = row[col.stackql_method_name];
  const sqlVerb = row[col.stackql_verb];
  if (!method || !sqlVerb) { errors.push(`${key}: mapped to ${resource} but method/verb empty`); continue; }
  if (!/^[a-z][a-z0-9_]*$/.test(resource) || !/^[a-z][a-z0-9_]*$/.test(method)) errors.push(`${key}: resource/method must be snake_case (${resource}.${method})`);
  if (!['select', 'insert', 'update', 'replace', 'delete', 'exec'].includes(sqlVerb)) errors.push(`${key}: unknown sql verb ${sqlVerb}`);
  stats[sqlVerb] = (stats[sqlVerb] || 0) + 1;
  if (sqlVerb === 'insert' && !hasRequestBody(entry.op)) errors.push(`${key}: INSERT method ${resource}.${method} has no request body (registry tests require a request schema)`);
  // any-sdk infers SELECT from the method names select / list / aggregatedList / get
  // when a resource declares no SQL verbs (resource.go), so an EXEC method may not use them
  if (sqlVerb === 'exec' && ['select', 'list', 'aggregatedList', 'get'].includes(method)) errors.push(`${key}: EXEC method ${resource}.${method} uses a name any-sdk infers as SELECT`);
  if (['insert', 'update', 'replace'].includes(sqlVerb) && hasRequestBody(entry.op) && !/json/.test(requestBodyMediaType(entry.op))) {
    errors.push(`${key}: ${sqlVerb.toUpperCase()} method ${resource}.${method} has a non-JSON request body (${requestBodyMediaType(entry.op)})`);
  }
  const service = entry.service;
  const methodKey = `${service}.${resource}.${method}`;
  if (methodSeen.has(methodKey)) errors.push(`duplicate method ${methodKey} (${methodSeen.get(methodKey)} and ${entry.pathKey}:${entry.verb})`);
  methodSeen.set(methodKey, `${entry.pathKey}:${entry.verb}`);
  if (sqlVerb === 'exec') continue;
  // signature = required inputs: path params plus required query/header params
  const requiredExtra = [...(entry.pathItem?.parameters || []), ...(entry.op.parameters || [])]
    .map((p) => entry.resolve(p))
    .filter((p) => p && (p.in === 'query' || p.in === 'header') && p.required)
    .map((p) => p.name);
  const sig = [...pathParams(entry.pathKey), ...requiredExtra].sort().join(',');
  const sigKey = `${service}.${resource}.${sqlVerb}::${sig}`;
  if (sigSeen.has(sigKey)) errors.push(`signature clash on ${service}.${resource} ${sqlVerb} [${sig}] (${sigSeen.get(sigKey)} and ${method})`);
  sigSeen.set(sigKey, method);
}

if (driftReport.length > 0) {
  console.log(`note: ${driftReport.length} committed mapping(s) differ from what the rules derive today (the committed CSV wins; use --rebuild to re-derive everything):`);
  for (const d of driftReport) console.log(`  ${d}`);
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

const outArgIdx = args.indexOf('--out');
const outPath = outArgIdx !== -1 ? path.resolve(args[outArgIdx + 1]) : csvPath;
if (!checkOnly) fs.writeFileSync(outPath, writeCsv(rows));

const resourcesByService = new Map();
for (const row of rows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  if (!resourcesByService.has(service)) resourcesByService.set(service, new Set());
  resourcesByService.get(service).add(resource);
}
let resourceCount = 0;
for (const s of resourcesByService.values()) resourceCount += s.size;
console.log(`${checkOnly ? 'check' : rebuild ? 'rebuild' : 'fill'}: ${stats.kept} kept, ${stats.derived} derived, ${stats.pruned} pruned, ${stats.deduped} duplicate row(s) dropped; select ${stats.select}, insert ${stats.insert}, update ${stats.update}, replace ${stats.replace}, delete ${stats.delete}, exec ${stats.exec}; skipped ${stats.skipped} (${Object.entries(skipsByReason).map(([k, v]) => `${k}: ${v}`).join(', ') || 'none'}); ${resourceCount} resources across ${resourcesByService.size} services`);
if (args.includes('--summary')) {
  for (const [service, resources] of [...resourcesByService.entries()].sort()) console.log(`  ${service}: ${[...resources].sort().join(', ')}`);
}
