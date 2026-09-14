--- 
title: roles_v2
hide_title: false
hide_table_of_contents: false
keywords:
  - roles_v2
  - roles
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

Creates, updates, deletes, gets or lists a <code>roles_v2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="roles_v2" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.roles.roles_v2" /></td></tr>
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

Role object that was requested.

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
    <td>Unique identifier for the role. (example: 0000000000E20FE3)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the role. (example: DataAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="audit_data_filter" /></td>
    <td><code>string</code></td>
    <td>A search filter which would be applied on partitions which belong to Audit Data product area. Help Doc : (https:​//help.sumologic.com/docs/manage/security/audit-index/). (example: info) (wire: auditDataFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="autofill_dependencies" /></td>
    <td><code>boolean</code></td>
    <td>Set this to true if you want to automatically append all missing capability requirements. If set to false an error will be thrown if any capabilities are missing their dependencies. (wire: autofillDependencies)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>List of &#91;capabilities&#93;(https:​//help.sumologic.com/Manage/Users-and-Roles/Manage-Roles/Role-Capabilities) associated with this role. Valid values are ### Data Management   - viewCollectors   - manageCollectors   - manageBudgets   - manageDataVolumeFeed   - viewFieldExtraction   - manageFieldExtractionRules   - manageS3DataForwarding   - manageContent   - manageApps   - dataVolumeIndex   - manageConnections   - viewScheduledViews   - manageScheduledViews   - viewPartitions   - managePartitions   - viewFields   - manageFields   - viewAccountOverview   - manageTokens   - downloadSearchResults   - viewPipelines   - managePipelines ### Entity management   - manageEntityTypeConfig  ### Metrics   - metricsTransformation   - metricsExtraction   - metricsRules  ### Security   - managePasswordPolicy   - ipAllowlisting   - createAccessKeys   - manageAccessKeys   - manageSupportAccountAccess   - manageAuditDataFeed   - manageSaml   - shareDashboardOutsideOrg   - manageOrgSettings   - changeDataAccessLevel  ### Dashboards   - shareDashboardWorld   - shareDashboardAllowlist  ### UserManagement   - manageUsersAndRoles  ### Observability   - searchAuditIndex   - auditEventIndex  ### Cloud SIEM Enterprise   - viewCse  ### Alerting   - viewMonitorsV2   - manageMonitorsV2   - viewAlerts</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the role. (example: Manage data of the org.)</td>
</tr>
<tr>
    <td><CopyableCode code="log_analytics_filter" /></td>
    <td><code>string</code></td>
    <td>A search filter which would be applied on partitions which belong to Log Analytics product area. (example: !_sourceCategory=collector) (wire: logAnalyticsFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="security_data_filter" /></td>
    <td><code>string</code></td>
    <td>A search filter which would be applied on partitions which belong to Security Data product area. (example: error) (wire: securityDataFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="selected_views" /></td>
    <td><code>array</code></td>
    <td>List of views which with specific view level filters in accordance to the selectionType chosen. (wire: selectedViews)</td>
</tr>
<tr>
    <td><CopyableCode code="selection_type" /></td>
    <td><code>string</code></td>
    <td>Describes the Permission Construct for the list of views in "selectedViews" parameter.  ### Valid Values are :    - `All` selectionType would allow access to all views in the org.   - `Allow` selectionType would allow access to specific views mentioned in "selectedViews" parameter.   - `Deny` selectionType would deny access to specific views mentioned in "selectedViews" parameter. (example: All) (wire: selectionType)</td>
</tr>
<tr>
    <td><CopyableCode code="system_defined" /></td>
    <td><code>boolean</code></td>
    <td>Role is system or user defined. (wire: systemDefined)</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>List of user identifiers to assign the role to.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of roles in the organization.

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
    <td>Unique identifier for the role. (example: 0000000000E20FE3)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the role. (example: DataAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="audit_data_filter" /></td>
    <td><code>string</code></td>
    <td>A search filter which would be applied on partitions which belong to Audit Data product area. Help Doc : (https:​//help.sumologic.com/docs/manage/security/audit-index/). (example: info) (wire: auditDataFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="autofill_dependencies" /></td>
    <td><code>boolean</code></td>
    <td>Set this to true if you want to automatically append all missing capability requirements. If set to false an error will be thrown if any capabilities are missing their dependencies. (wire: autofillDependencies)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>List of &#91;capabilities&#93;(https:​//help.sumologic.com/Manage/Users-and-Roles/Manage-Roles/Role-Capabilities) associated with this role. Valid values are ### Data Management   - viewCollectors   - manageCollectors   - manageBudgets   - manageDataVolumeFeed   - viewFieldExtraction   - manageFieldExtractionRules   - manageS3DataForwarding   - manageContent   - manageApps   - dataVolumeIndex   - manageConnections   - viewScheduledViews   - manageScheduledViews   - viewPartitions   - managePartitions   - viewFields   - manageFields   - viewAccountOverview   - manageTokens   - downloadSearchResults   - viewPipelines   - managePipelines ### Entity management   - manageEntityTypeConfig  ### Metrics   - metricsTransformation   - metricsExtraction   - metricsRules  ### Security   - managePasswordPolicy   - ipAllowlisting   - createAccessKeys   - manageAccessKeys   - manageSupportAccountAccess   - manageAuditDataFeed   - manageSaml   - shareDashboardOutsideOrg   - manageOrgSettings   - changeDataAccessLevel  ### Dashboards   - shareDashboardWorld   - shareDashboardAllowlist  ### UserManagement   - manageUsersAndRoles  ### Observability   - searchAuditIndex   - auditEventIndex  ### Cloud SIEM Enterprise   - viewCse  ### Alerting   - viewMonitorsV2   - manageMonitorsV2   - viewAlerts</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the role. (example: Manage data of the org.)</td>
</tr>
<tr>
    <td><CopyableCode code="log_analytics_filter" /></td>
    <td><code>string</code></td>
    <td>A search filter which would be applied on partitions which belong to Log Analytics product area. (example: !_sourceCategory=collector) (wire: logAnalyticsFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="security_data_filter" /></td>
    <td><code>string</code></td>
    <td>A search filter which would be applied on partitions which belong to Security Data product area. (example: error) (wire: securityDataFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="selected_views" /></td>
    <td><code>array</code></td>
    <td>List of views which with specific view level filters in accordance to the selectionType chosen. (wire: selectedViews)</td>
</tr>
<tr>
    <td><CopyableCode code="selection_type" /></td>
    <td><code>string</code></td>
    <td>Describes the Permission Construct for the list of views in "selectedViews" parameter.  ### Valid Values are :    - `All` selectionType would allow access to all views in the org.   - `Allow` selectionType would allow access to specific views mentioned in "selectedViews" parameter.   - `Deny` selectionType would deny access to specific views mentioned in "selectedViews" parameter. (example: All) (wire: selectionType)</td>
</tr>
<tr>
    <td><CopyableCode code="system_defined" /></td>
    <td><code>boolean</code></td>
    <td>Role is system or user defined. (wire: systemDefined)</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>List of user identifiers to assign the role to.</td>
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
    <td>Get a role with the given identifier in the organization.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Get a list of all the roles in the organization. The response is paginated with a default limit of 100 roles per page.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a new role in the organization.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-audit_data_filter"><code>audit_data_filter</code></a>, <a href="#parameter-capabilities"><code>capabilities</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-log_analytics_filter"><code>log_analytics_filter</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-security_data_filter"><code>security_data_filter</code></a>, <a href="#parameter-selected_views"><code>selected_views</code></a>, <a href="#parameter-selection_type"><code>selection_type</code></a>, <a href="#parameter-users"><code>users</code></a></td>
    <td></td>
    <td>Update an existing role in the organization.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a role with the given identifier from the organization.</td>
</tr>
<tr>
    <td><a href="#assign_user"><CopyableCode code="assign_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-roleId"><code>roleId</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Assign a role to a user in the organization.</td>
</tr>
<tr>
    <td><a href="#remove_user"><CopyableCode code="remove_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-roleId"><code>roleId</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove a role from a user in the organization.</td>
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
    <td>Identifier of the role to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-roleId">
    <td><CopyableCode code="roleId" /></td>
    <td><code>string</code></td>
    <td>Identifier of the role to delete.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user to remove the role from.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of roles returned in the response. The number of roles returned may be less than the `limit`.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Only return roles matching the given name.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Sort the list of roles by the `name` field. (wire: sortBy)</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results. `token` is set to null when no more pages are left.</td>
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

Get a role with the given identifier in the organization.

```sql
SELECT
id,
name,
audit_data_filter,
autofill_dependencies,
capabilities,
created_at,
created_by,
description,
log_analytics_filter,
modified_at,
modified_by,
security_data_filter,
selected_views,
selection_type,
system_defined,
users
FROM sumologic.roles.roles_v2
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all the roles in the organization. The response is paginated with a default limit of 100 roles per page.

```sql
SELECT
id,
name,
audit_data_filter,
autofill_dependencies,
capabilities,
created_at,
created_by,
description,
log_analytics_filter,
modified_at,
modified_by,
security_data_filter,
selected_views,
selection_type,
system_defined,
users
FROM sumologic.roles.roles_v2
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
AND sort_by = '{{ sort_by }}'
AND name = '{{ name }}'
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

Create a new role in the organization.

```sql
INSERT INTO sumologic.roles.roles_v2 (
name,
description,
log_analytics_filter,
audit_data_filter,
security_data_filter,
selection_type,
selected_views,
users,
capabilities,
autofill_dependencies,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ log_analytics_filter }}',
'{{ audit_data_filter }}',
'{{ security_data_filter }}',
'{{ selection_type }}',
'{{ selected_views }}',
'{{ users }}',
'{{ capabilities }}',
{{ autofill_dependencies }},
'{{ region }}'
RETURNING
id,
name,
audit_data_filter,
autofill_dependencies,
capabilities,
created_at,
created_by,
description,
log_analytics_filter,
modified_at,
modified_by,
security_data_filter,
selected_views,
selection_type,
system_defined,
users
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: roles_v2
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the roles_v2 resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the role.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the role.
    - name: log_analytics_filter
      value: "{{ log_analytics_filter }}"
      description: |
        A search filter which would be applied on partitions which belong to Log Analytics product area.
    - name: audit_data_filter
      value: "{{ audit_data_filter }}"
      description: |
        A search filter which would be applied on partitions which belong to Audit Data product area. Help Doc : (https://help.sumologic.com/docs/manage/security/audit-index/).
    - name: security_data_filter
      value: "{{ security_data_filter }}"
      description: |
        A search filter which would be applied on partitions which belong to Security Data product area.
    - name: selection_type
      value: "{{ selection_type }}"
      description: |
        Describes the Permission Construct for the list of views in "selectedViews" parameter.
        ### Valid Values are :
        - \`All\` selectionType would allow access to all views in the org.
        - \`Allow\` selectionType would allow access to specific views mentioned in "selectedViews" parameter.
        - \`Deny\` selectionType would deny access to specific views mentioned in "selectedViews" parameter.
    - name: selected_views
      description: |
        List of views which with specific view level filters in accordance to the selectionType chosen.
      value:
        - viewName: "{{ viewName }}"
    - name: users
      value:
        - "{{ users }}"
      description: |
        List of user identifiers to assign the role to.
    - name: capabilities
      value:
        - "{{ capabilities }}"
      description: |
        List of [capabilities](https://help.sumologic.com/docs/manage/users-roles/roles/role-capabilities/) associated with this role. Valid values are
        ### Data Management
        - viewCollectors
        - manageCollectors
        - manageBudgets
        - manageDataVolumeFeed
        - viewFieldExtraction
        - manageFieldExtractionRules
        - manageS3DataForwarding
        - manageContent
        - manageApps
        - dataVolumeIndex
        - manageConnections
        - viewScheduledViews
        - manageScheduledViews
        - viewPartitions
        - managePartitions
        - viewFields
        - manageFields
        - viewAccountOverview
        - manageTokens
        - downloadSearchResults
        - manageIndexes
        - manageDataStreams
        - viewParsers
        - viewDataStreams
        - viewPipelines
        - managePipelines
        ### Entity management
        - manageEntityTypeConfig
        ### Metrics
        - metricsTransformation
        - metricsExtraction
        - metricsRules
        ### Security
        - managePasswordPolicy
        - ipAllowlisting
        - ipWhitelisting
        - createAccessKeys
        - manageAccessKeys
        - manageSupportAccountAccess
        - manageAuditDataFeed
        - manageSaml
        - shareDashboardOutsideOrg
        - manageOrgSettings
        - changeDataAccessLevel
        ### Dashboards
        - shareDashboardWorld
        - shareDashboardAllowlist
        - shareDashboardWhitelist
        ### UserManagement
        - manageUsersAndRoles
        ### Observability
        - searchAuditIndex
        - auditEventIndex
        ### Cloud SIEM Enterprise
        - viewCse
        - cseViewAutomations
        - cseManageContextActions
        - cseViewNetworkBlocks
        - cseManageInsightTags
        - cseViewRules
        - cseViewThreatIntelligence
        - cseCommentOnInsights
        - cseViewEntityGroups
        - cseManageEntityConfiguration
        - cseManageNetworkBlocks
        - cseManageMatchLists
        - cseViewCustomInsights
        - cseManageActions
        - cseManageAutomations
        - cseManageMappings
        - cseManageThreatIntelligence
        - cseViewActions
        - cseCreateInsights
        - cseManageTagSchemas
        - cseInvokeInsights
        - cseManageCustomEntityType
        - cseViewTagSchemas
        - cseDeleteInsights
        - cseManageCustomInsights
        - cseViewFileAnalysis
        - cseManageFileAnalysis
        - cseManageEntityCriticality
        - cseViewEntityCriticality
        - cseViewEntity
        - cseManageCustomInsightStatuses
        - cseViewContextActions
        - cseViewMappings
        - cseViewCustomEntityType
        - cseManageEntityGroups
        - cseViewCustomInsightStatuses
        - cseViewEnrichments
        - cseManageInsightSignals
        - cseManageRules
        - cseManageArtifacts
        - cseViewMatchLists
        - cseManageInsightPolicy
        - cseManageEnrichments
        - cseViewEntityConfiguration
        - cseManageEntity
        - cseExecuteAutomations
        - cseManageSuppressedEntities
        - cseManageInsightStatus
        - cseManageInsightAssignee
        - cseManageFavoriteFields
        - cseViewSuppressedEntities
        ### Alerting
        - viewMonitorsV2
        - manageMonitorsV2
        - viewAlerts
        - viewMutingSchedules
        - manageMutingSchedules
        - adminMonitorsV2
        ### SLO
        - viewSlos
        - manageSlos
        ### CloudSoar
        - cloudSoarPlaybooksAccess
        - cloudSoarNotificationConfigure
        - cloudSoarReportAll
        - cloudSoarIncidentTriageAccess
        - cloudSoarIncidentTaskView
        - cloudSoarIncidentChangeOwnership
        - cloudSoarIncidentNotesEdit
        - cloudSoarAPIEmailEdit
        - cloudSoarIncidentTemplatesAccess
        - cloudSoarIncidentPlaybooksManage
        - cloudSoarGeneralConfigure
        - cloudSoarEntitiesAccess
        - cloudSoarEntitiesBulkPhysicalDelete
        - cloudSoarIncidentAttachmentsAccess
        - cloudSoarAppCentralAccess
        - cloudSoarBridgeMonitoringAccess
        - viewCloudSoar
        - cloudSoarIncidentView
        - cloudSoarObservabilityAccess
        - cloudSoarAPIEmailRead
        - cloudSoarAppCentralExport
        - cloudSoarWidgetsAll
        - cloudSoarIncidentTaskReassign
        - cloudSoarIntegrationsAccess
        - cloudSoarCustomizationIncidentLabels
        - cloudSoarAutomationRulesConfigure
        - cloudSoarIncidentTaskAccessAll
        - cloudSoarAuditAndInformationConfigureAuditTrail
        - cloudSoarIncidentTriageEdit
        - cloudSoarIncidentEdit
        - cloudSoarNotificationTriage
        - cloudSoarIncidentTriageBulkPhysicalDelete
        - cloudSoarIncidentNotesAccess
        - cloudSoarAPIUse
        - cloudSoarIncidentPlaybooksEdit
        - cloudSoarDashboardAll
        - cloudSoarEntitiesManage
        - cloudSoarIncidentTemplatesConfigure
        - cloudSoarIncidentTriageAccessAll
        - cloudSoarPlaybooksConfigure
        - cloudSoarIncidentAccessAll
        - cloudSoarCustomizationLogo
        - cloudSoarIncidentTaskAccess
        - cloudSoarIncidentTriageView
        - cloudSoarIntegrationsConfigure
        - cloudSoarIncidentManageInvestigators
        - cloudSoarIncidentAccess
        - cloudSoarAuditAndInformationLicenseInformation
        - cloudSoarIncidentBulkOperations
        - cloudSoarCustomizationFields
        - cloudSoarIncidentTaskEdit
        - cloudSoarDashboardAccess
        - cloudSoarIncidentAttachmentsEdit
        - cloudSoarIncidentFoldersEdit
        - cloudSoarUserManagementGroups
        - cloudSoarIncidentPlaybooksAccess
        - cloudSoarIncidentWarRoomUse
        - cloudSoarReportAccess
        - cloudSoarAuditAndInformationAuditTrail
        - cloudSoarAutomationRulesAccess
        - cloudSoarIncidentTriageChangeOwnership
        - cloudSoarObservabilityManagement
    - name: autofill_dependencies
      value: {{ autofill_dependencies }}
      description: |
        Set this to true if you want to automatically append all missing capability requirements. If set to false an error will be thrown if any capabilities are missing their dependencies.
      default: true
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

Update an existing role in the organization.

```sql
UPDATE sumologic.roles.roles_v2
SET 
name = '{{ name }}',
description = '{{ description }}',
log_analytics_filter = '{{ log_analytics_filter }}',
audit_data_filter = '{{ audit_data_filter }}',
security_data_filter = '{{ security_data_filter }}',
selection_type = '{{ selection_type }}',
selected_views = '{{ selected_views }}',
users = '{{ users }}',
capabilities = '{{ capabilities }}',
autofill_dependencies = {{ autofill_dependencies }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND audit_data_filter = '{{ audit_data_filter }}' --required
AND capabilities = '{{ capabilities }}' --required
AND description = '{{ description }}' --required
AND log_analytics_filter = '{{ log_analytics_filter }}' --required
AND name = '{{ name }}' --required
AND security_data_filter = '{{ security_data_filter }}' --required
AND selected_views = '{{ selected_views }}' --required
AND selection_type = '{{ selection_type }}' --required
AND users = '{{ users }}' --required
RETURNING
id,
name,
audit_data_filter,
autofill_dependencies,
capabilities,
created_at,
created_by,
description,
log_analytics_filter,
modified_at,
modified_by,
security_data_filter,
selected_views,
selection_type,
system_defined,
users;
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

Delete a role with the given identifier from the organization.

```sql
DELETE FROM sumologic.roles.roles_v2
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="assign_user"
    values={[
        { label: 'assign_user', value: 'assign_user' },
        { label: 'remove_user', value: 'remove_user' }
    ]}
>
<TabItem value="assign_user">

Assign a role to a user in the organization.

```sql
EXEC sumologic.roles.roles_v2.assign_user 
@roleId='{{ roleId }}' --required, 
@userId='{{ userId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="remove_user">

Remove a role from a user in the organization.

```sql
EXEC sumologic.roles.roles_v2.remove_user 
@roleId='{{ roleId }}' --required, 
@userId='{{ userId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
