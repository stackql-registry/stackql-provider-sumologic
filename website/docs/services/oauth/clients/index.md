--- 
title: clients
hide_title: false
hide_table_of_contents: false
keywords:
  - clients
  - oauth
  - sumologic
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage sumologic resources using SQL
custom_edit_url: null
image: /img/stackql-sumologic-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.oauth.clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

OAuth client object that was requested.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the OAuth client. (example: 0000000006743FDE)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the OAuth client. (example: My OAuth Client)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the OAuth client. Unique within each organization. Will be a URL for dynamically generated clients. (example: zVplCFHcpTDwtktBIQmFI2K6s9HEo4HAtcQD1f1M5eQ) (wire: clientId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the OAuth client. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the OAuth client. (example: OAuth client for data ingestion)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the OAuth client is disabled. Disabled OAuth clients cannot be used to authenticate users.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who modified the OAuth client. (example: 0000000006743FDD) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes assigned to the client.  **MCP Server Required Scopes:** For full access to all MCP Server tools, the following scopes are required. Each tool lists the scopes it needs.    - `alerts___alertsReadById` — viewAlerts   - `alerts___alertsSearch` — viewAlerts   - `dashboards___getDashboard` — viewLibrary   - `dashboards___listDashboards` — viewLibrary   - `dashboards___createDashboard` — manageLibrary   - `dashboards___updateDashboard` — manageLibrary   - `discovery___listPartitions` — viewPartitions   - `discovery___listExtractionRules` — viewFieldExtractionRules   - `discovery___listCustomFields` — viewFields   - `log-search___runLogSearch` — runLogSearch   - `insights___getAllInsights` — viewCse   - `insights___getInsight` — viewCse   - `insights___getInsights` — viewCse   - `insights___updateInsightAssignee` — viewCse, cseManageInsightAssignee   - `insights___updateInsightStatus` — viewCse, cseManageInsightStatus   - `rules___getRule` — viewCse, cseViewRules   - `rules___getRules` — viewCse, cseViewRules   - `rules___createTemplatedMatchRule` — viewCse, cseManageRules   - `rules___createThresholdRule` — viewCse, cseManageRules  ### Alerting   - viewAlerts *(MCP Server)*   - adminMonitorsV2   - viewMonitorsV2   - manageMonitorsV2   - viewMutingSchedules   - manageMutingSchedules  ### Audit Event Management   - searchAuditIndex   - dataVolumeIndex   - auditEventIndex  ### Cloud SIEM   - viewCse *(MCP Server)*   - cseViewRules *(MCP Server)*   - cseManageRules *(MCP Server)*   - cseManageInsightAssignee *(MCP Server)*   - cseManageInsightStatus *(MCP Server)*   - cseCommentOnInsights   - cseCreateInsights   - cseDeleteInsights   - cseInvokeInsights   - cseManageInsightPolicy   - cseManageInsightSignals   - cseManageInsightTags   - cseViewThreatIntelligence   - cseManageThreatIntelligence   - cseViewMatchLists   - cseManageMatchLists   - cseViewFileAnalysis   - cseManageFileAnalysis   - cseViewCustomInsights   - cseManageCustomInsights   - cseViewNetworkBlocks   - cseManageNetworkBlocks   - cseViewSuppressedEntities   - cseManageSuppressedEntities   - cseViewMappings   - cseManageMappings   - cseManageArtifacts   - cseViewCustomInsightStatuses   - cseManageCustomInsightStatuses   - cseViewContextActions   - cseManageContextActions   - cseViewActions   - cseManageActions   - cseViewEnrichments   - cseManageEnrichments   - cseViewCustomEntityType   - cseManageCustomEntityType   - cseViewEntity   - cseManageEntity   - cseViewEntityConfiguration   - cseManageEntityConfiguration   - cseViewEntityCriticality   - cseManageEntityCriticality   - cseViewTagSchemas   - cseManageTagSchemas   - cseManageFavoriteFields   - cseViewEntityGroups   - cseManageEntityGroups   - cseViewAutomations   - cseManageAutomations   - cseExecuteAutomations  ### Cloud SOAR   - viewCloudSoar   - cloudSoarAPIAdmin   - cloudSoarAPIEmailEdit   - cloudSoarAPIEmailRead   - cloudSoarAPIUse   - cloudSoarAppCentralAccess   - cloudSoarAppCentralExport   - cloudSoarAuditAndInformationAuditTrail   - cloudSoarAuditAndInformationConfigureAuditTrail   - cloudSoarAuditAndInformationLicenseInformation   - cloudSoarAutomationRulesAccess   - cloudSoarAutomationRulesConfigure   - cloudSoarBridgeMonitoringAccess   - cloudSoarCustomizationFields   - cloudSoarCustomizationIncidentLabels   - cloudSoarCustomizationLogo   - cloudSoarDashboardAccess   - cloudSoarDashboardAll   - cloudSoarEntitiesAccess   - cloudSoarEntitiesBulkPhysicalDelete   - cloudSoarEntitiesManage   - cloudSoarGeneralConfigure   - cloudSoarIncidentAccess   - cloudSoarIncidentAccessAll   - cloudSoarIncidentAttachmentsAccess   - cloudSoarIncidentAttachmentsEdit   - cloudSoarIncidentBulkOperations   - cloudSoarIncidentChangeOwnership   - cloudSoarIncidentEdit   - cloudSoarIncidentFoldersEdit   - cloudSoarIncidentManageInvestigators   - cloudSoarIncidentNotesAccess   - cloudSoarIncidentNotesEdit   - cloudSoarIncidentPlaybooksAccess   - cloudSoarIncidentPlaybooksEdit   - cloudSoarIncidentPlaybooksManage   - cloudSoarIncidentTaskAccess   - cloudSoarIncidentTaskAccessAll   - cloudSoarIncidentTaskEdit   - cloudSoarIncidentTaskReassign   - cloudSoarIncidentTaskView   - cloudSoarIncidentTemplatesAccess   - cloudSoarIncidentTemplatesConfigure   - cloudSoarIncidentTriageAccess   - cloudSoarIncidentTriageAccessAll   - cloudSoarIncidentTriageChangeOwnership   - cloudSoarIncidentTriageEdit   - cloudSoarIncidentTriageView   - cloudSoarIncidentView   - cloudSoarIncidentWarRoomUse   - cloudSoarIntegrationsAccess   - cloudSoarIntegrationsConfigure   - cloudSoarNotificationConfigure   - cloudSoarNotificationTriage   - cloudSoarObservabilityAccess   - cloudSoarObservabilityManagement   - cloudSoarPlaybooksAccess   - cloudSoarPlaybooksConfigure   - cloudSoarReportAccess   - cloudSoarReportAll   - cloudSoarUserManagementGroups   - cloudSoarWidgetsAll  ### Dashboards   - worldDashboards   - whitelistDashboards   - shareDashboardAllowlist   - manageDashboardExecutionControls  ### Data Management   - manageApps   - viewCollectors   - manageCollectors   - viewConnections   - manageConnections   - contentAdmin   - viewFieldExtractionRules *(MCP Server)*   - manageFieldExtractionRules   - viewFields *(MCP Server)*   - manageFields   - manageBudgets   - viewLibrary *(MCP Server)*   - manageLibrary *(MCP Server)*   - viewPartitions *(MCP Server)*   - managePartitions   - manageS3DataForwarding   - viewScheduledViews   - manageScheduledViews   - manageTokens   - viewPipelines   - managePipelines   - viewAccountOverview   - dataVolume   - downloadSearchResults   - viewDeletionRules   - manageDeletionRules   - reviewDeletionRequest   - viewEventExtractionRules   - manageEventExtractionRules   - viewParsers  ### Data Masking   - viewUnmaskedData   - manageDataMasking  ### Entity Management   - manageEntityTypeConfig  ### Logs   - runLogSearch *(MCP Server)*  ### Macros   - manageMacros  ### Metrics   - runMetricsQuery   - metricsTransformation   - metricsExtraction   - metricsRules  ### Open Analytics   - manageOpenAnalyticsEndpoint  ### Organizations   - viewOrganizations   - createTrialOrganizations   - createOrganizations   - upgradeTrialOrganizations   - changeCreditsAllocation   - deactivateOrganizations   - manageOrganizations  ### Reliability Management   - viewSlos   - manageSlos  ### Security   - manageAccessKeys   - viewPersonalAccessKeys   - managePersonalAccessKeys   - manageOAuthClients   - changeDataAccessLevel   - passwordPolicy   - ipWhitelisting   - ipAllowlisting   - supportAccount   - audit   - saml   - worldDashboardMaster   - orgSettings  ### Threat Intelligence   - viewThreatIntelDataStore   - manageThreatIntelDataStore  ### Usage Management   - viewUsageManagement   - manageUsageManagement  ### User Management   - viewUsersAndRoles   - manageUsersAndRoles</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the object model.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of all OAuth clients within the organization.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the OAuth client. (example: 0000000006743FDE)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the OAuth client. (example: My OAuth Client)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the OAuth client. Unique within each organization. Will be a URL for dynamically generated clients. (example: zVplCFHcpTDwtktBIQmFI2K6s9HEo4HAtcQD1f1M5eQ) (wire: clientId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the OAuth client. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the OAuth client. (example: OAuth client for data ingestion)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the OAuth client is disabled. Disabled OAuth clients cannot be used to authenticate users.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who modified the OAuth client. (example: 0000000006743FDD) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes assigned to the client.  **MCP Server Required Scopes:** For full access to all MCP Server tools, the following scopes are required. Each tool lists the scopes it needs.    - `alerts___alertsReadById` — viewAlerts   - `alerts___alertsSearch` — viewAlerts   - `dashboards___getDashboard` — viewLibrary   - `dashboards___listDashboards` — viewLibrary   - `dashboards___createDashboard` — manageLibrary   - `dashboards___updateDashboard` — manageLibrary   - `discovery___listPartitions` — viewPartitions   - `discovery___listExtractionRules` — viewFieldExtractionRules   - `discovery___listCustomFields` — viewFields   - `log-search___runLogSearch` — runLogSearch   - `insights___getAllInsights` — viewCse   - `insights___getInsight` — viewCse   - `insights___getInsights` — viewCse   - `insights___updateInsightAssignee` — viewCse, cseManageInsightAssignee   - `insights___updateInsightStatus` — viewCse, cseManageInsightStatus   - `rules___getRule` — viewCse, cseViewRules   - `rules___getRules` — viewCse, cseViewRules   - `rules___createTemplatedMatchRule` — viewCse, cseManageRules   - `rules___createThresholdRule` — viewCse, cseManageRules  ### Alerting   - viewAlerts *(MCP Server)*   - adminMonitorsV2   - viewMonitorsV2   - manageMonitorsV2   - viewMutingSchedules   - manageMutingSchedules  ### Audit Event Management   - searchAuditIndex   - dataVolumeIndex   - auditEventIndex  ### Cloud SIEM   - viewCse *(MCP Server)*   - cseViewRules *(MCP Server)*   - cseManageRules *(MCP Server)*   - cseManageInsightAssignee *(MCP Server)*   - cseManageInsightStatus *(MCP Server)*   - cseCommentOnInsights   - cseCreateInsights   - cseDeleteInsights   - cseInvokeInsights   - cseManageInsightPolicy   - cseManageInsightSignals   - cseManageInsightTags   - cseViewThreatIntelligence   - cseManageThreatIntelligence   - cseViewMatchLists   - cseManageMatchLists   - cseViewFileAnalysis   - cseManageFileAnalysis   - cseViewCustomInsights   - cseManageCustomInsights   - cseViewNetworkBlocks   - cseManageNetworkBlocks   - cseViewSuppressedEntities   - cseManageSuppressedEntities   - cseViewMappings   - cseManageMappings   - cseManageArtifacts   - cseViewCustomInsightStatuses   - cseManageCustomInsightStatuses   - cseViewContextActions   - cseManageContextActions   - cseViewActions   - cseManageActions   - cseViewEnrichments   - cseManageEnrichments   - cseViewCustomEntityType   - cseManageCustomEntityType   - cseViewEntity   - cseManageEntity   - cseViewEntityConfiguration   - cseManageEntityConfiguration   - cseViewEntityCriticality   - cseManageEntityCriticality   - cseViewTagSchemas   - cseManageTagSchemas   - cseManageFavoriteFields   - cseViewEntityGroups   - cseManageEntityGroups   - cseViewAutomations   - cseManageAutomations   - cseExecuteAutomations  ### Cloud SOAR   - viewCloudSoar   - cloudSoarAPIAdmin   - cloudSoarAPIEmailEdit   - cloudSoarAPIEmailRead   - cloudSoarAPIUse   - cloudSoarAppCentralAccess   - cloudSoarAppCentralExport   - cloudSoarAuditAndInformationAuditTrail   - cloudSoarAuditAndInformationConfigureAuditTrail   - cloudSoarAuditAndInformationLicenseInformation   - cloudSoarAutomationRulesAccess   - cloudSoarAutomationRulesConfigure   - cloudSoarBridgeMonitoringAccess   - cloudSoarCustomizationFields   - cloudSoarCustomizationIncidentLabels   - cloudSoarCustomizationLogo   - cloudSoarDashboardAccess   - cloudSoarDashboardAll   - cloudSoarEntitiesAccess   - cloudSoarEntitiesBulkPhysicalDelete   - cloudSoarEntitiesManage   - cloudSoarGeneralConfigure   - cloudSoarIncidentAccess   - cloudSoarIncidentAccessAll   - cloudSoarIncidentAttachmentsAccess   - cloudSoarIncidentAttachmentsEdit   - cloudSoarIncidentBulkOperations   - cloudSoarIncidentChangeOwnership   - cloudSoarIncidentEdit   - cloudSoarIncidentFoldersEdit   - cloudSoarIncidentManageInvestigators   - cloudSoarIncidentNotesAccess   - cloudSoarIncidentNotesEdit   - cloudSoarIncidentPlaybooksAccess   - cloudSoarIncidentPlaybooksEdit   - cloudSoarIncidentPlaybooksManage   - cloudSoarIncidentTaskAccess   - cloudSoarIncidentTaskAccessAll   - cloudSoarIncidentTaskEdit   - cloudSoarIncidentTaskReassign   - cloudSoarIncidentTaskView   - cloudSoarIncidentTemplatesAccess   - cloudSoarIncidentTemplatesConfigure   - cloudSoarIncidentTriageAccess   - cloudSoarIncidentTriageAccessAll   - cloudSoarIncidentTriageChangeOwnership   - cloudSoarIncidentTriageEdit   - cloudSoarIncidentTriageView   - cloudSoarIncidentView   - cloudSoarIncidentWarRoomUse   - cloudSoarIntegrationsAccess   - cloudSoarIntegrationsConfigure   - cloudSoarNotificationConfigure   - cloudSoarNotificationTriage   - cloudSoarObservabilityAccess   - cloudSoarObservabilityManagement   - cloudSoarPlaybooksAccess   - cloudSoarPlaybooksConfigure   - cloudSoarReportAccess   - cloudSoarReportAll   - cloudSoarUserManagementGroups   - cloudSoarWidgetsAll  ### Dashboards   - worldDashboards   - whitelistDashboards   - shareDashboardAllowlist   - manageDashboardExecutionControls  ### Data Management   - manageApps   - viewCollectors   - manageCollectors   - viewConnections   - manageConnections   - contentAdmin   - viewFieldExtractionRules *(MCP Server)*   - manageFieldExtractionRules   - viewFields *(MCP Server)*   - manageFields   - manageBudgets   - viewLibrary *(MCP Server)*   - manageLibrary *(MCP Server)*   - viewPartitions *(MCP Server)*   - managePartitions   - manageS3DataForwarding   - viewScheduledViews   - manageScheduledViews   - manageTokens   - viewPipelines   - managePipelines   - viewAccountOverview   - dataVolume   - downloadSearchResults   - viewDeletionRules   - manageDeletionRules   - reviewDeletionRequest   - viewEventExtractionRules   - manageEventExtractionRules   - viewParsers  ### Data Masking   - viewUnmaskedData   - manageDataMasking  ### Entity Management   - manageEntityTypeConfig  ### Logs   - runLogSearch *(MCP Server)*  ### Macros   - manageMacros  ### Metrics   - runMetricsQuery   - metricsTransformation   - metricsExtraction   - metricsRules  ### Open Analytics   - manageOpenAnalyticsEndpoint  ### Organizations   - viewOrganizations   - createTrialOrganizations   - createOrganizations   - upgradeTrialOrganizations   - changeCreditsAllocation   - deactivateOrganizations   - manageOrganizations  ### Reliability Management   - viewSlos   - manageSlos  ### Security   - manageAccessKeys   - viewPersonalAccessKeys   - managePersonalAccessKeys   - manageOAuthClients   - changeDataAccessLevel   - passwordPolicy   - ipWhitelisting   - ipAllowlisting   - supportAccount   - audit   - saml   - worldDashboardMaster   - orgSettings  ### Threat Intelligence   - viewThreatIntelDataStore   - manageThreatIntelDataStore  ### Usage Management   - viewUsageManagement   - manageUsageManagement  ### User Management   - viewUsersAndRoles   - manageUsersAndRoles</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the object model.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get an OAuth client with the given identifier from the organization.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-run_as_id"><code>run_as_id</code></a>, <a href="#parameter-client_id"><code>client_id</code></a></td>
    <td>List all OAuth clients.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scopes"><code>scopes</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a new OAuth clientId and clientSecret.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disabled"><code>disabled</code></a>, <a href="#parameter-scopes"><code>scopes</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Updates the properties of existing OAuth client by Id.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the OAuth client with the given Id.</td>
</tr>
<tr>
    <td><a href="#rotate_secret"><CopyableCode code="rotate_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a new secret for the oauth client that is passed in the call, keeping the same client ID.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the oauth client to rotate the secret for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-client_id">
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>Filter clients by exact client ID. When specified, returns only the client matching this ID. Supports URL-based client identifiers (URL-encode the value). (wire: clientId)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of OAuth clients returned in the response. The number of OAuth clients returned may be  less than the `limit`.</td>
</tr>
<tr id="parameter-run_as_id">
    <td><CopyableCode code="run_as_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the service account that the OAuth Client runs as. (wire: runAsId)</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is  returned in the response body. Subsequent GET requests should specify the continuation token to get the  next page of results. `token` is set to null when no more pages are left.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get an OAuth client with the given identifier from the organization.

```sql
SELECT
id,
name,
client_id,
created_at,
created_by,
description,
disabled,
modified_at,
modified_by,
scopes,
type
FROM sumologic.oauth.clients
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

List all OAuth clients.

```sql
SELECT
id,
name,
client_id,
created_at,
created_by,
description,
disabled,
modified_at,
modified_by,
scopes,
type
FROM sumologic.oauth.clients
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
AND run_as_id = '{{ run_as_id }}'
AND client_id = '{{ client_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new OAuth clientId and clientSecret.

```sql
INSERT INTO sumologic.oauth.clients (
type,
scopes,
region
)
SELECT 
'{{ type }}' /* required */,
'{{ scopes }}' /* required */,
'{{ region }}'
RETURNING
id,
name,
client_id,
created_at,
created_by,
description,
disabled,
modified_at,
modified_by,
scopes,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clients
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clients resource.
    - name: type
      value: "{{ type }}"
      description: |
        Type of the object model.
    - name: scopes
      value:
        - "{{ scopes }}"
      description: |
        Scopes assigned to the client.
        **MCP Server Required Scopes:** For full access to all MCP Server tools, the following scopes are required. Each tool lists the scopes it needs.
        - \`alerts___alertsReadById\` — viewAlerts
        - \`alerts___alertsSearch\` — viewAlerts
        - \`dashboards___getDashboard\` — viewLibrary
        - \`dashboards___listDashboards\` — viewLibrary
        - \`dashboards___createDashboard\` — manageLibrary
        - \`dashboards___updateDashboard\` — manageLibrary
        - \`discovery___listPartitions\` — viewPartitions
        - \`discovery___listExtractionRules\` — viewFieldExtractionRules
        - \`discovery___listCustomFields\` — viewFields
        - \`log-search___runLogSearch\` — runLogSearch
        - \`insights___getAllInsights\` — viewCse
        - \`insights___getInsight\` — viewCse
        - \`insights___getInsights\` — viewCse
        - \`insights___updateInsightAssignee\` — viewCse, cseManageInsightAssignee
        - \`insights___updateInsightStatus\` — viewCse, cseManageInsightStatus
        - \`rules___getRule\` — viewCse, cseViewRules
        - \`rules___getRules\` — viewCse, cseViewRules
        - \`rules___createTemplatedMatchRule\` — viewCse, cseManageRules
        - \`rules___createThresholdRule\` — viewCse, cseManageRules
        ### Alerting
        - viewAlerts *(MCP Server)*
        - adminMonitorsV2
        - viewMonitorsV2
        - manageMonitorsV2
        - viewMutingSchedules
        - manageMutingSchedules
        ### Audit Event Management
        - searchAuditIndex
        - dataVolumeIndex
        - auditEventIndex
        ### Cloud SIEM
        - viewCse *(MCP Server)*
        - cseViewRules *(MCP Server)*
        - cseManageRules *(MCP Server)*
        - cseManageInsightAssignee *(MCP Server)*
        - cseManageInsightStatus *(MCP Server)*
        - cseCommentOnInsights
        - cseCreateInsights
        - cseDeleteInsights
        - cseInvokeInsights
        - cseManageInsightPolicy
        - cseManageInsightSignals
        - cseManageInsightTags
        - cseViewThreatIntelligence
        - cseManageThreatIntelligence
        - cseViewMatchLists
        - cseManageMatchLists
        - cseViewFileAnalysis
        - cseManageFileAnalysis
        - cseViewCustomInsights
        - cseManageCustomInsights
        - cseViewNetworkBlocks
        - cseManageNetworkBlocks
        - cseViewSuppressedEntities
        - cseManageSuppressedEntities
        - cseViewMappings
        - cseManageMappings
        - cseManageArtifacts
        - cseViewCustomInsightStatuses
        - cseManageCustomInsightStatuses
        - cseViewContextActions
        - cseManageContextActions
        - cseViewActions
        - cseManageActions
        - cseViewEnrichments
        - cseManageEnrichments
        - cseViewCustomEntityType
        - cseManageCustomEntityType
        - cseViewEntity
        - cseManageEntity
        - cseViewEntityConfiguration
        - cseManageEntityConfiguration
        - cseViewEntityCriticality
        - cseManageEntityCriticality
        - cseViewTagSchemas
        - cseManageTagSchemas
        - cseManageFavoriteFields
        - cseViewEntityGroups
        - cseManageEntityGroups
        - cseViewAutomations
        - cseManageAutomations
        - cseExecuteAutomations
        ### Cloud SOAR
        - viewCloudSoar
        - cloudSoarAPIAdmin
        - cloudSoarAPIEmailEdit
        - cloudSoarAPIEmailRead
        - cloudSoarAPIUse
        - cloudSoarAppCentralAccess
        - cloudSoarAppCentralExport
        - cloudSoarAuditAndInformationAuditTrail
        - cloudSoarAuditAndInformationConfigureAuditTrail
        - cloudSoarAuditAndInformationLicenseInformation
        - cloudSoarAutomationRulesAccess
        - cloudSoarAutomationRulesConfigure
        - cloudSoarBridgeMonitoringAccess
        - cloudSoarCustomizationFields
        - cloudSoarCustomizationIncidentLabels
        - cloudSoarCustomizationLogo
        - cloudSoarDashboardAccess
        - cloudSoarDashboardAll
        - cloudSoarEntitiesAccess
        - cloudSoarEntitiesBulkPhysicalDelete
        - cloudSoarEntitiesManage
        - cloudSoarGeneralConfigure
        - cloudSoarIncidentAccess
        - cloudSoarIncidentAccessAll
        - cloudSoarIncidentAttachmentsAccess
        - cloudSoarIncidentAttachmentsEdit
        - cloudSoarIncidentBulkOperations
        - cloudSoarIncidentChangeOwnership
        - cloudSoarIncidentEdit
        - cloudSoarIncidentFoldersEdit
        - cloudSoarIncidentManageInvestigators
        - cloudSoarIncidentNotesAccess
        - cloudSoarIncidentNotesEdit
        - cloudSoarIncidentPlaybooksAccess
        - cloudSoarIncidentPlaybooksEdit
        - cloudSoarIncidentPlaybooksManage
        - cloudSoarIncidentTaskAccess
        - cloudSoarIncidentTaskAccessAll
        - cloudSoarIncidentTaskEdit
        - cloudSoarIncidentTaskReassign
        - cloudSoarIncidentTaskView
        - cloudSoarIncidentTemplatesAccess
        - cloudSoarIncidentTemplatesConfigure
        - cloudSoarIncidentTriageAccess
        - cloudSoarIncidentTriageAccessAll
        - cloudSoarIncidentTriageChangeOwnership
        - cloudSoarIncidentTriageEdit
        - cloudSoarIncidentTriageView
        - cloudSoarIncidentView
        - cloudSoarIncidentWarRoomUse
        - cloudSoarIntegrationsAccess
        - cloudSoarIntegrationsConfigure
        - cloudSoarNotificationConfigure
        - cloudSoarNotificationTriage
        - cloudSoarObservabilityAccess
        - cloudSoarObservabilityManagement
        - cloudSoarPlaybooksAccess
        - cloudSoarPlaybooksConfigure
        - cloudSoarReportAccess
        - cloudSoarReportAll
        - cloudSoarUserManagementGroups
        - cloudSoarWidgetsAll
        ### Dashboards
        - worldDashboards
        - whitelistDashboards
        - shareDashboardAllowlist
        - manageDashboardExecutionControls
        ### Data Management
        - manageApps
        - viewCollectors
        - manageCollectors
        - viewConnections
        - manageConnections
        - contentAdmin
        - viewFieldExtractionRules *(MCP Server)*
        - manageFieldExtractionRules
        - viewFields *(MCP Server)*
        - manageFields
        - manageBudgets
        - viewLibrary *(MCP Server)*
        - manageLibrary *(MCP Server)*
        - viewPartitions *(MCP Server)*
        - managePartitions
        - manageS3DataForwarding
        - viewScheduledViews
        - manageScheduledViews
        - manageTokens
        - viewPipelines
        - managePipelines
        - viewAccountOverview
        - dataVolume
        - downloadSearchResults
        - viewDeletionRules
        - manageDeletionRules
        - reviewDeletionRequest
        - viewEventExtractionRules
        - manageEventExtractionRules
        - viewParsers
        ### Data Masking
        - viewUnmaskedData
        - manageDataMasking
        ### Entity Management
        - manageEntityTypeConfig
        ### Logs
        - runLogSearch *(MCP Server)*
        ### Macros
        - manageMacros
        ### Metrics
        - runMetricsQuery
        - metricsTransformation
        - metricsExtraction
        - metricsRules
        ### Open Analytics
        - manageOpenAnalyticsEndpoint
        ### Organizations
        - viewOrganizations
        - createTrialOrganizations
        - createOrganizations
        - upgradeTrialOrganizations
        - changeCreditsAllocation
        - deactivateOrganizations
        - manageOrganizations
        ### Reliability Management
        - viewSlos
        - manageSlos
        ### Security
        - manageAccessKeys
        - viewPersonalAccessKeys
        - managePersonalAccessKeys
        - manageOAuthClients
        - changeDataAccessLevel
        - passwordPolicy
        - ipWhitelisting
        - ipAllowlisting
        - supportAccount
        - audit
        - saml
        - worldDashboardMaster
        - orgSettings
        ### Threat Intelligence
        - viewThreatIntelDataStore
        - manageThreatIntelDataStore
        ### Usage Management
        - viewUsageManagement
        - manageUsageManagement
        ### User Management
        - viewUsersAndRoles
        - manageUsersAndRoles
      default: 
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the properties of existing OAuth client by Id.

```sql
UPDATE sumologic.oauth.clients
SET 
type = '{{ type }}',
disabled = {{ disabled }},
scopes = '{{ scopes }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND disabled = {{ disabled }} --required
AND scopes = '{{ scopes }}' --required
AND type = '{{ type }}' --required
RETURNING
id,
name,
client_id,
created_at,
created_by,
description,
disabled,
modified_at,
modified_by,
scopes,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the OAuth client with the given Id.

```sql
DELETE FROM sumologic.oauth.clients
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="rotate_secret"
    values={[
        { label: 'rotate_secret', value: 'rotate_secret' }
    ]}
>
<TabItem value="rotate_secret">

Generates a new secret for the oauth client that is passed in the call, keeping the same client ID.

```sql
EXEC sumologic.oauth.clients.rotate_secret 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
