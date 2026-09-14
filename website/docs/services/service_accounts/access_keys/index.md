--- 
title: access_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - access_keys
  - service_accounts
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

Creates, updates, deletes, gets or lists an <code>access_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.service_accounts.access_keys" /></td></tr>
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

Access key object that was requested of a service account.

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
    <td>Identifier of the access key. (example: su0w3Q37CBzHUM)</td>
</tr>
<tr>
    <td><CopyableCode code="service_account_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the service account who owns the access key. (example: 0000000006743FDA) (wire: serviceAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="cors_headers" /></td>
    <td><code>array</code></td>
    <td>An array of domains for which the access key is valid. Whether Sumo Logic accepts or rejects an API request depends on whether it contains an ORIGIN header and the entries in the allowlist. Sumo Logic will reject:   1. Requests with an ORIGIN header but the allowlist is empty.   2. Requests with an ORIGIN header that don't match any entry in the allowlist. (wire: corsHeaders)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the access key. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the access key is disabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_scopes" /></td>
    <td><code>array</code></td>
    <td>Effective scopes based on the intersection of the user's RBAC capabilities and the assigned scopes. (wire: effectiveScopes)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The name of the access key. (example: collector access key)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last used timestamp in UTC.  &lt;br /&gt; **Note:** Property not in use, it is part of an upcoming feature. (example: 2018-10-16T09:10:00.000Z) (wire: lastUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who modified the access key. (example: 0000000006743FDD) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes assigned to the key. ### Alerting   - adminMonitorsV2   - viewMonitorsV2   - manageMonitorsV2  ### Data Management   - manageApps   - viewCollectors   - manageCollectors   - viewConnections   - manageConnections   - contentAdmin   - viewFieldExtractionRules   - manageFieldExtractionRules               - viewFields   - manageFields   - manageBudgets   - viewLibrary   - manageLibrary   - viewPartitions   - managePartitions    - manageS3DataForwarding   - viewScheduledViews   - manageScheduledViews   - manageTokens  ### Logs   - runLogSearch  ### Metrics   - runMetricsQuery   ### Reliability Management   - viewSlos   - manageSlos  ### Security   - manageAccessKeys   - viewPersonalAccessKeys   - managePersonalAccessKeys  ### UserManagement   - viewUsersAndRoles   - manageUsersAndRoles</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of all access keys within the organization of a service account.

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
    <td>Identifier of the access key. (example: su0w3Q37CBzHUM)</td>
</tr>
<tr>
    <td><CopyableCode code="service_account_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the service account who owns the access key. (example: 0000000006743FDA) (wire: serviceAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="cors_headers" /></td>
    <td><code>array</code></td>
    <td>An array of domains for which the access key is valid. Whether Sumo Logic accepts or rejects an API request depends on whether it contains an ORIGIN header and the entries in the allowlist. Sumo Logic will reject:   1. Requests with an ORIGIN header but the allowlist is empty.   2. Requests with an ORIGIN header that don't match any entry in the allowlist. (wire: corsHeaders)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the access key. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the access key is disabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_scopes" /></td>
    <td><code>array</code></td>
    <td>Effective scopes based on the intersection of the user's RBAC capabilities and the assigned scopes. (wire: effectiveScopes)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The name of the access key. (example: collector access key)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last used timestamp in UTC.  &lt;br /&gt; **Note:** Property not in use, it is part of an upcoming feature. (example: 2018-10-16T09:10:00.000Z) (wire: lastUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who modified the access key. (example: 0000000006743FDD) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes assigned to the key. ### Alerting   - adminMonitorsV2   - viewMonitorsV2   - manageMonitorsV2  ### Data Management   - manageApps   - viewCollectors   - manageCollectors   - viewConnections   - manageConnections   - contentAdmin   - viewFieldExtractionRules   - manageFieldExtractionRules               - viewFields   - manageFields   - manageBudgets   - viewLibrary   - manageLibrary   - viewPartitions   - managePartitions    - manageS3DataForwarding   - viewScheduledViews   - manageScheduledViews   - manageTokens  ### Logs   - runLogSearch  ### Metrics   - runMetricsQuery   ### Reliability Management   - viewSlos   - manageSlos  ### Security   - manageAccessKeys   - viewPersonalAccessKeys   - managePersonalAccessKeys  ### UserManagement   - viewUsersAndRoles   - manageUsersAndRoles</td>
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
    <td><a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-access_id"><code>access_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get an access key with the given identifier from the organization of a service account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all access keys of a service account.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Creates a new access ID and key pair for a service account.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-access_id"><code>access_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disabled"><code>disabled</code></a></td>
    <td></td>
    <td>Updates the properties of existing accessKey by Id of a service account.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-access_id"><code>access_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the access key with the given Id of a service account.</td>
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
<tr id="parameter-access_id">
    <td><CopyableCode code="access_id" /></td>
    <td><code>string</code></td>
    <td>The Id of the access key to delete of a service account. (wire: accessId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-service_account_id">
    <td><CopyableCode code="service_account_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the service account. (wire: serviceAccountId)</td>
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

Get an access key with the given identifier from the organization of a service account.

```sql
SELECT
id,
service_account_id,
cors_headers,
created_at,
created_by,
disabled,
effective_scopes,
label,
last_used,
modified_at,
modified_by,
scopes
FROM sumologic.service_accounts.access_keys
WHERE service_account_id = '{{ service_account_id }}' -- required
AND access_id = '{{ access_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

List all access keys of a service account.

```sql
SELECT
id,
service_account_id,
cors_headers,
created_at,
created_by,
disabled,
effective_scopes,
label,
last_used,
modified_at,
modified_by,
scopes
FROM sumologic.service_accounts.access_keys
WHERE service_account_id = '{{ service_account_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
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

Creates a new access ID and key pair for a service account.

```sql
INSERT INTO sumologic.service_accounts.access_keys (
label,
cors_headers,
scopes,
service_account_id,
region
)
SELECT 
'{{ label }}' /* required */,
'{{ cors_headers }}',
'{{ scopes }}',
'{{ service_account_id }}',
'{{ region }}'
RETURNING
id,
service_account_id,
cors_headers,
created_at,
created_by,
disabled,
effective_scopes,
key,
label,
last_used,
modified_at,
modified_by,
scopes
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_keys
  props:
    - name: service_account_id
      value: "{{ service_account_id }}"
      description: Required parameter for the access_keys resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_keys resource.
    - name: label
      value: "{{ label }}"
      description: |
        A name for the access key to be created.
    - name: cors_headers
      value:
        - "{{ cors_headers }}"
      description: |
        An array of domains for which the access key is valid. Whether Sumo Logic accepts or rejects an API request
        depends on whether it contains an ORIGIN header and the entries in the allowlist.
        Sumo Logic will reject:
        1. Requests with an ORIGIN header but the allowlist is empty.
        2. Requests with an ORIGIN header that don't match any entry in the allowlist.
    - name: scopes
      value:
        - "{{ scopes }}"
      description: |
        Scopes assigned to the key.
        ### Alerting
        - adminMonitorsV2
        - viewMonitorsV2
        - manageMonitorsV2
        ### Data Management
        - manageApps
        - viewCollectors
        - manageCollectors
        - viewConnections
        - manageConnections
        - contentAdmin
        - viewFieldExtractionRules
        - manageFieldExtractionRules
        - viewFields
        - manageFields
        - manageBudgets
        - viewLibrary
        - manageLibrary
        - viewPartitions
        - managePartitions
        - manageS3DataForwarding
        - viewScheduledViews
        - manageScheduledViews
        - manageTokens
        ### Logs
        - runLogSearch
        ### Metrics
        - runMetricsQuery
        ### Reliability Management
        - viewSlos
        - manageSlos
        ### Security
        - manageAccessKeys
        - viewPersonalAccessKeys
        - managePersonalAccessKeys
        ### UserManagement
        - viewUsersAndRoles
        - manageUsersAndRoles
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

Updates the properties of existing accessKey by Id of a service account.

```sql
UPDATE sumologic.service_accounts.access_keys
SET 
disabled = {{ disabled }},
cors_headers = '{{ cors_headers }}',
scopes = '{{ scopes }}'
WHERE 
service_account_id = '{{ service_account_id }}' --required
AND access_id = '{{ access_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND disabled = {{ disabled }} --required
RETURNING
id,
service_account_id,
cors_headers,
created_at,
created_by,
disabled,
effective_scopes,
label,
last_used,
modified_at,
modified_by,
scopes;
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

Deletes the access key with the given Id of a service account.

```sql
DELETE FROM sumologic.service_accounts.access_keys
WHERE service_account_id = '{{ service_account_id }}' --required
AND access_id = '{{ access_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
