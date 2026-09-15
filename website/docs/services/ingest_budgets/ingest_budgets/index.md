--- 
title: ingest_budgets
hide_title: false
hide_table_of_contents: false
keywords:
  - ingest_budgets
  - ingest_budgets
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

Creates, updates, deletes, gets or lists an <code>ingest_budgets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ingest_budgets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.ingest_budgets.ingest_budgets" /></td></tr>
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

Ingest budget object that was requested.

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
    <td>Unique identifier for the ingest budget. (example: 0000000003343FDD)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name of the ingest budget. (example: Developer Budget)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action to take when ingest budget's capacity is reached. All actions are audited. Supported values are:   * `stopCollecting`   * `keepCollecting` (pattern: &lt;code&gt;^(keepCollecting|stopCollecting)$&lt;/code&gt;, example: stopCollecting, x-pattern-message: must be either `keepCollecting` or `stopCollecting`)</td>
</tr>
<tr>
    <td><CopyableCode code="audit_threshold" /></td>
    <td><code>integer (int32)</code></td>
    <td>The threshold as a percentage of when an ingest budget's capacity usage is logged in the Audit Index. (wire: auditThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_version" /></td>
    <td><code>integer (int32)</code></td>
    <td>The version of the Ingest Budget (wire: budgetVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Capacity of the ingest budget, in bytes. It takes a few minutes for Collectors to stop collecting when capacity is reached. We recommend setting a soft limit that is lower than your needed hard limit. The capacity bytes unit varies based on the budgetType field. For `dailyVolume` budgetType the capacity specified is in bytes/day whereas for `minuteVolume` budgetType its bytes/min. (wire: capacityBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation timestamp in UTC of the Ingest Budget. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the Ingest Budget. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the ingest budget.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modified timestamp in UTC of the Ingest Budget. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who modified the Ingest Budget. (example: 0000000001243FDD) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_time" /></td>
    <td><code>string</code></td>
    <td>Reset time of the ingest budget in HH:MM format. (example: 23:30, default: 00:00) (wire: resetTime)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>A scope is a constraint that will be used to identify the messages on which budget needs to be applied. A scope is consists of key and value separated by =. The field must be enabled in the fields table. Value supports wildcard. e.g. _sourceCategory=*prod*payment*, cluster=kafka. If the scope is defined _sourceCategory=*nginx* in this budget will be applied on messages having fields _sourceCategory=prod/nginx, _sourceCategory=dev/nginx, or _sourceCategory=dev/nginx/error (example: _sourceCategory=*prod*nginx*)</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>Time zone of the reset time for the ingest budget. Follow the format in the &#91;IANA Time Zone Database&#93;(https:​//en.wikipedia.org/wiki/List_of_tz_database_time_zones#List). (example: America/Los_Angeles, default: Etc/UTC)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Current usage since the last reset, in bytes. (wire: usageBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_status" /></td>
    <td><code>string</code></td>
    <td>Status of the current usage. Can be `Normal`, `Approaching`, `Exceeded`, or `Unknown` (unable to retrieve usage). (pattern: &lt;code&gt;^(Normal|Approaching|Exceeded|Unknown)$&lt;/code&gt;, example: Approaching, x-pattern-message: must be either `Normal`, `Approaching`, `Exceeded`, or `Unknown`) (wire: usageStatus)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of budgets.

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
    <td>Unique identifier for the ingest budget. (example: 0000000003343FDD)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name of the ingest budget. (example: Developer Budget)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action to take when ingest budget's capacity is reached. All actions are audited. Supported values are:   * `stopCollecting`   * `keepCollecting` (pattern: &lt;code&gt;^(keepCollecting|stopCollecting)$&lt;/code&gt;, example: stopCollecting, x-pattern-message: must be either `keepCollecting` or `stopCollecting`)</td>
</tr>
<tr>
    <td><CopyableCode code="audit_threshold" /></td>
    <td><code>integer (int32)</code></td>
    <td>The threshold as a percentage of when an ingest budget's capacity usage is logged in the Audit Index. (wire: auditThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_version" /></td>
    <td><code>integer (int32)</code></td>
    <td>The version of the Ingest Budget (wire: budgetVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Capacity of the ingest budget, in bytes. It takes a few minutes for Collectors to stop collecting when capacity is reached. We recommend setting a soft limit that is lower than your needed hard limit. The capacity bytes unit varies based on the budgetType field. For `dailyVolume` budgetType the capacity specified is in bytes/day whereas for `minuteVolume` budgetType its bytes/min. (wire: capacityBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation timestamp in UTC of the Ingest Budget. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the Ingest Budget. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the ingest budget.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modified timestamp in UTC of the Ingest Budget. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who modified the Ingest Budget. (example: 0000000001243FDD) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_time" /></td>
    <td><code>string</code></td>
    <td>Reset time of the ingest budget in HH:MM format. (example: 23:30, default: 00:00) (wire: resetTime)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>A scope is a constraint that will be used to identify the messages on which budget needs to be applied. A scope is consists of key and value separated by =. The field must be enabled in the fields table. Value supports wildcard. e.g. _sourceCategory=*prod*payment*, cluster=kafka. If the scope is defined _sourceCategory=*nginx* in this budget will be applied on messages having fields _sourceCategory=prod/nginx, _sourceCategory=dev/nginx, or _sourceCategory=dev/nginx/error (example: _sourceCategory=*prod*nginx*)</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>Time zone of the reset time for the ingest budget. Follow the format in the &#91;IANA Time Zone Database&#93;(https:​//en.wikipedia.org/wiki/List_of_tz_database_time_zones#List). (example: America/Los_Angeles, default: Etc/UTC)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Current usage since the last reset, in bytes. (wire: usageBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_status" /></td>
    <td><code>string</code></td>
    <td>Status of the current usage. Can be `Normal`, `Approaching`, `Exceeded`, or `Unknown` (unable to retrieve usage). (pattern: &lt;code&gt;^(Normal|Approaching|Exceeded|Unknown)$&lt;/code&gt;, example: Approaching, x-pattern-message: must be either `Normal`, `Approaching`, `Exceeded`, or `Unknown`) (wire: usageStatus)</td>
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
    <td>Get an ingest budget by the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all ingest budgets. The response is paginated with a default limit of 100 budgets per page.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-capacity_bytes"><code>capacity_bytes</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Create a new ingest budget.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-capacity_bytes"><code>capacity_bytes</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Update an existing ingest budget. All properties specified in the request are required.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an ingest budget with the given identifier.</td>
</tr>
<tr>
    <td><a href="#reset_usage"><CopyableCode code="reset_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Reset ingest budget's current usage to 0 before the scheduled reset time. This is only applicable to `dailyVolume` budgetType.</td>
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
    <td>Identifier of the ingest budget to reset usage.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of budgets returned in the response. The number of budgets returned may be less than the `limit`.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results.</td>
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

Get an ingest budget by the given identifier.

```sql
SELECT
id,
name,
action,
audit_threshold,
budget_version,
capacity_bytes,
created_at,
created_by,
description,
modified_at,
modified_by,
reset_time,
scope,
timezone,
usage_bytes,
usage_status
FROM sumologic.ingest_budgets.ingest_budgets
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all ingest budgets. The response is paginated with a default limit of 100 budgets per page.

```sql
SELECT
id,
name,
action,
audit_threshold,
budget_version,
capacity_bytes,
created_at,
created_by,
description,
modified_at,
modified_by,
reset_time,
scope,
timezone,
usage_bytes,
usage_status
FROM sumologic.ingest_budgets.ingest_budgets
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
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

Create a new ingest budget.

```sql
INSERT INTO sumologic.ingest_budgets.ingest_budgets (
name,
scope,
capacity_bytes,
timezone,
reset_time,
description,
action,
audit_threshold,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ scope }}' /* required */,
{{ capacity_bytes }} /* required */,
'{{ timezone }}',
'{{ reset_time }}',
'{{ description }}',
'{{ action }}' /* required */,
{{ audit_threshold }},
'{{ region }}'
RETURNING
id,
name,
action,
audit_threshold,
budget_version,
capacity_bytes,
created_at,
created_by,
description,
modified_at,
modified_by,
reset_time,
scope,
timezone,
usage_bytes,
usage_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ingest_budgets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ingest_budgets resource.
    - name: name
      value: "{{ name }}"
      description: |
        Display name of the ingest budget.
    - name: scope
      value: "{{ scope }}"
      description: |
        A scope is a constraint that will be used to identify the messages on which budget needs to be applied. A scope is consists of key and value separated by =. The field must be enabled in the fields table. Value supports wildcard. e.g. _sourceCategory=*prod*payment*, cluster=kafka. If the scope is defined _sourceCategory=*nginx* in this budget will be applied on messages having fields _sourceCategory=prod/nginx, _sourceCategory=dev/nginx, or _sourceCategory=dev/nginx/error
    - name: capacity_bytes
      value: {{ capacity_bytes }}
      description: |
        Capacity of the ingest budget, in bytes. It takes a few minutes for Collectors to stop collecting when capacity is reached. We recommend setting a soft limit that is lower than your needed hard limit. The capacity bytes unit varies based on the budgetType field. For \`dailyVolume\` budgetType the capacity specified is in bytes/day whereas for \`minuteVolume\` budgetType its bytes/min.
    - name: timezone
      value: "{{ timezone }}"
      description: |
        Time zone of the reset time for the ingest budget. Follow the format in the [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
      default: Etc/UTC
    - name: reset_time
      value: "{{ reset_time }}"
      description: |
        Reset time of the ingest budget in HH:MM format.
      default: 00:00
    - name: description
      value: "{{ description }}"
      description: |
        Description of the ingest budget.
    - name: action
      value: "{{ action }}"
      description: |
        Action to take when ingest budget's capacity is reached. All actions are audited. Supported values are:
        * \`stopCollecting\`
        * \`keepCollecting\`
    - name: audit_threshold
      value: {{ audit_threshold }}
      description: |
        The threshold as a percentage of when an ingest budget's capacity usage is logged in the Audit Index.
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

Update an existing ingest budget. All properties specified in the request are required.

```sql
UPDATE sumologic.ingest_budgets.ingest_budgets
SET 
name = '{{ name }}',
scope = '{{ scope }}',
capacity_bytes = {{ capacity_bytes }},
timezone = '{{ timezone }}',
reset_time = '{{ reset_time }}',
description = '{{ description }}',
action = '{{ action }}',
audit_threshold = {{ audit_threshold }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND action = '{{ action }}' --required
AND capacity_bytes = '{{ capacity_bytes }}' --required
AND name = '{{ name }}' --required
AND scope = '{{ scope }}' --required
RETURNING
id,
name,
action,
audit_threshold,
budget_version,
capacity_bytes,
created_at,
created_by,
description,
modified_at,
modified_by,
reset_time,
scope,
timezone,
usage_bytes,
usage_status;
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

Delete an ingest budget with the given identifier.

```sql
DELETE FROM sumologic.ingest_budgets.ingest_budgets
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reset_usage"
    values={[
        { label: 'reset_usage', value: 'reset_usage' }
    ]}
>
<TabItem value="reset_usage">

Reset ingest budget's current usage to 0 before the scheduled reset time. This is only applicable to `dailyVolume` budgetType.

```sql
EXEC sumologic.ingest_budgets.ingest_budgets.reset_usage 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
