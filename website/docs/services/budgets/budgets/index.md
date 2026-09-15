--- 
title: budgets
hide_title: false
hide_table_of_contents: false
keywords:
  - budgets
  - budgets
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

Creates, updates, deletes, gets or lists a <code>budgets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budgets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.budgets.budgets" /></td></tr>
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

The requested budget.

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
    <td>Id of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="org_id" /></td>
    <td><code>string</code></td>
    <td>Org Id of the org for the budget. (wire: orgId)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action to be taken if the budget is breached (pattern: &lt;code&gt;^(StopScan|StopForeGroundScan|Warn)$&lt;/code&gt;, example: Warn)</td>
</tr>
<tr>
    <td><CopyableCode code="applicable_on" /></td>
    <td><code>string</code></td>
    <td>Grouping of the budget. (pattern: &lt;code&gt;^(PerEntity|Sum)$&lt;/code&gt;, example: PerEntity) (wire: applicableOn)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_type" /></td>
    <td><code>string</code></td>
    <td>Type of the budget. (pattern: &lt;code&gt;^(ScanBudget)$&lt;/code&gt;, example: ScanBudget) (wire: budgetType)</td>
</tr>
<tr>
    <td><CopyableCode code="caller_modules" /></td>
    <td><code>array</code></td>
    <td>Caller modules this budget applies to. Empty list means budget applies to all callers. (wire: callerModules)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int64)</code></td>
    <td>Capacity of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date & time when budget was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Id of the user who created the budget. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="group_by" /></td>
    <td><code>string</code></td>
    <td>Grouping Entity of the budget. (pattern: &lt;code&gt;^(User)$&lt;/code&gt;, example: User) (wire: groupBy)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date & time when budget was last modified. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Id of the user who last modified the budget. (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_date_of_month" /></td>
    <td><code>integer (int32)</code></td>
    <td>The date of the month when the budget resets, applicable for time based budgets with a Monthly window. Must be a valid day of the month (1-28). (wire: resetDateOfMonth)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_day_of_week" /></td>
    <td><code>string</code></td>
    <td>The day of the week when the budget resets, applicable for time based budgets with a Weekly window. Must be a valid day of the week. (pattern: &lt;code&gt;^(MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY|SUNDAY)$&lt;/code&gt;, default: MONDAY) (wire: resetDayOfWeek)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_time" /></td>
    <td><code>string</code></td>
    <td>Reset time of the time based scan budget in HH:MM format (example: 23:30, default: 00:00) (wire: resetTime)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone of the reset time for the time based scan budget. Follow the format in the &#91;IANA Time Zone Database&#93;(https:​//en.wikipedia.org/wiki/List_of_tz_database_time_zones#List). (example: America/Los_Angeles, default: Etc/UTC) (wire: resetTimeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Signifies the state of the budget. (Active/Inactive) (pattern: &lt;code&gt;^(active|inactive)$&lt;/code&gt;, example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>Unit of the budget. (pattern: &lt;code&gt;^(GB|MB|TB|KB)$&lt;/code&gt;, example: GB)</td>
</tr>
<tr>
    <td><CopyableCode code="window" /></td>
    <td><code>string</code></td>
    <td>Window of the budget. Use Daily/Weekly/Monthly for creating a time based budget (beta) (pattern: &lt;code&gt;^(Query|Daily|Weekly|Monthly)$&lt;/code&gt;, example: Query)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Budgets assigned to the org.

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
    <td>Id of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="org_id" /></td>
    <td><code>string</code></td>
    <td>Org Id of the org for the budget. (wire: orgId)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action to be taken if the budget is breached (pattern: &lt;code&gt;^(StopScan|StopForeGroundScan|Warn)$&lt;/code&gt;, example: Warn)</td>
</tr>
<tr>
    <td><CopyableCode code="applicable_on" /></td>
    <td><code>string</code></td>
    <td>Grouping of the budget. (pattern: &lt;code&gt;^(PerEntity|Sum)$&lt;/code&gt;, example: PerEntity) (wire: applicableOn)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_type" /></td>
    <td><code>string</code></td>
    <td>Type of the budget. (pattern: &lt;code&gt;^(ScanBudget)$&lt;/code&gt;, example: ScanBudget) (wire: budgetType)</td>
</tr>
<tr>
    <td><CopyableCode code="caller_modules" /></td>
    <td><code>array</code></td>
    <td>Caller modules this budget applies to. Empty list means budget applies to all callers. (wire: callerModules)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int64)</code></td>
    <td>Capacity of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date & time when budget was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Id of the user who created the budget. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="group_by" /></td>
    <td><code>string</code></td>
    <td>Grouping Entity of the budget. (pattern: &lt;code&gt;^(User)$&lt;/code&gt;, example: User) (wire: groupBy)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date & time when budget was last modified. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Id of the user who last modified the budget. (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_date_of_month" /></td>
    <td><code>integer (int32)</code></td>
    <td>The date of the month when the budget resets, applicable for time based budgets with a Monthly window. Must be a valid day of the month (1-28). (wire: resetDateOfMonth)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_day_of_week" /></td>
    <td><code>string</code></td>
    <td>The day of the week when the budget resets, applicable for time based budgets with a Weekly window. Must be a valid day of the week. (pattern: &lt;code&gt;^(MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY|SUNDAY)$&lt;/code&gt;, default: MONDAY) (wire: resetDayOfWeek)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_time" /></td>
    <td><code>string</code></td>
    <td>Reset time of the time based scan budget in HH:MM format (example: 23:30, default: 00:00) (wire: resetTime)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone of the reset time for the time based scan budget. Follow the format in the &#91;IANA Time Zone Database&#93;(https:​//en.wikipedia.org/wiki/List_of_tz_database_time_zones#List). (example: America/Los_Angeles, default: Etc/UTC) (wire: resetTimeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Signifies the state of the budget. (Active/Inactive) (pattern: &lt;code&gt;^(active|inactive)$&lt;/code&gt;, example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>Unit of the budget. (pattern: &lt;code&gt;^(GB|MB|TB|KB)$&lt;/code&gt;, example: GB)</td>
</tr>
<tr>
    <td><CopyableCode code="window" /></td>
    <td><code>string</code></td>
    <td>Window of the budget. Use Daily/Weekly/Monthly for creating a time based budget (beta) (pattern: &lt;code&gt;^(Query|Daily|Weekly|Monthly)$&lt;/code&gt;, example: Query)</td>
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
    <td><a href="#parameter-budget_id"><code>budget_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get budget</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get budgets</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-applicable_on"><code>applicable_on</code></a>, <a href="#parameter-budget_type"><code>budget_type</code></a>, <a href="#parameter-capacity"><code>capacity</code></a>, <a href="#parameter-group_by"><code>group_by</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-unit"><code>unit</code></a>, <a href="#parameter-window"><code>window</code></a></td>
    <td></td>
    <td>Create a budget definition</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-budget_id"><code>budget_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-applicable_on"><code>applicable_on</code></a>, <a href="#parameter-budget_type"><code>budget_type</code></a>, <a href="#parameter-capacity"><code>capacity</code></a>, <a href="#parameter-group_by"><code>group_by</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-unit"><code>unit</code></a>, <a href="#parameter-window"><code>window</code></a></td>
    <td></td>
    <td>Update budget</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-budget_id"><code>budget_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete budget</td>
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
<tr id="parameter-budget_id">
    <td><CopyableCode code="budget_id" /></td>
    <td><code>string</code></td>
    <td>The id of the budget. (wire: budgetId)</td>
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

Get budget

```sql
SELECT
id,
name,
org_id,
action,
applicable_on,
budget_type,
caller_modules,
capacity,
created_at,
created_by,
group_by,
modified_at,
modified_by,
reset_date_of_month,
reset_day_of_week,
reset_time,
reset_time_zone,
scope,
status,
unit,
window
FROM sumologic.budgets.budgets
WHERE budget_id = '{{ budget_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get budgets

```sql
SELECT
id,
name,
org_id,
action,
applicable_on,
budget_type,
caller_modules,
capacity,
created_at,
created_by,
group_by,
modified_at,
modified_by,
reset_date_of_month,
reset_day_of_week,
reset_time,
reset_time_zone,
scope,
status,
unit,
window
FROM sumologic.budgets.budgets
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

Create a budget definition

```sql
INSERT INTO sumologic.budgets.budgets (
name,
capacity,
unit,
budget_type,
scope,
window,
applicable_on,
group_by,
action,
caller_modules,
status,
region
)
SELECT 
'{{ name }}' /* required */,
{{ capacity }} /* required */,
'{{ unit }}' /* required */,
'{{ budget_type }}' /* required */,
'{{ scope }}' /* required */,
'{{ window }}' /* required */,
'{{ applicable_on }}' /* required */,
'{{ group_by }}' /* required */,
'{{ action }}' /* required */,
'{{ caller_modules }}',
'{{ status }}',
'{{ region }}'
RETURNING
id,
name,
org_id,
action,
applicable_on,
budget_type,
caller_modules,
capacity,
created_at,
created_by,
group_by,
modified_at,
modified_by,
reset_date_of_month,
reset_day_of_week,
reset_time,
reset_time_zone,
scope,
status,
unit,
window
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: budgets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the budgets resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the budget.
    - name: capacity
      value: {{ capacity }}
      description: |
        Capacity of the budget.
    - name: unit
      value: "{{ unit }}"
      description: |
        Unit of the budget.
    - name: budget_type
      value: "{{ budget_type }}"
      description: |
        Type of the budget.
    - name: scope
      value:
        includedUsers:
          - "{{ includedUsers }}"
        excludedUsers:
          - "{{ excludedUsers }}"
        includedRoles:
          - "{{ includedRoles }}"
        excludedRoles:
          - "{{ excludedRoles }}"
    - name: window
      value: "{{ window }}"
      description: |
        Window of the budget. Use Daily/Weekly/Monthly for creating a time based budget (beta)
    - name: applicable_on
      value: "{{ applicable_on }}"
      description: |
        Grouping of the budget.
    - name: group_by
      value: "{{ group_by }}"
      description: |
        Grouping Entity of the budget.
    - name: action
      value: "{{ action }}"
      description: |
        Action to be taken if the budget is breached
    - name: caller_modules
      value:
        - "{{ caller_modules }}"
      description: |
        Caller modules this budget applies to. Empty list means budget applies to all callers.
    - name: status
      value: "{{ status }}"
      description: |
        Signifies the state of the budget. (Active/Inactive)
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

Update budget

```sql
UPDATE sumologic.budgets.budgets
SET 
name = '{{ name }}',
capacity = {{ capacity }},
unit = '{{ unit }}',
budget_type = '{{ budget_type }}',
scope = '{{ scope }}',
window = '{{ window }}',
applicable_on = '{{ applicable_on }}',
group_by = '{{ group_by }}',
action = '{{ action }}',
caller_modules = '{{ caller_modules }}',
status = '{{ status }}'
WHERE 
budget_id = '{{ budget_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND action = '{{ action }}' --required
AND applicable_on = '{{ applicable_on }}' --required
AND budget_type = '{{ budget_type }}' --required
AND capacity = '{{ capacity }}' --required
AND group_by = '{{ group_by }}' --required
AND name = '{{ name }}' --required
AND scope = '{{ scope }}' --required
AND unit = '{{ unit }}' --required
AND window = '{{ window }}' --required
RETURNING
id,
name,
org_id,
action,
applicable_on,
budget_type,
caller_modules,
capacity,
created_at,
created_by,
group_by,
modified_at,
modified_by,
reset_date_of_month,
reset_day_of_week,
reset_time,
reset_time_zone,
scope,
status,
unit,
window;
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

Delete budget

```sql
DELETE FROM sumologic.budgets.budgets
WHERE budget_id = '{{ budget_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
