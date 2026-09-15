--- 
title: scheduled_views
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_views
  - scheduled_views
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

Creates, updates, deletes, gets or lists a <code>scheduled_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.scheduled_views.scheduled_views" /></td></tr>
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

Scheduled view object that was requested.

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
    <td>Identifier for the scheduled view.</td>
</tr>
<tr>
    <td><CopyableCode code="data_forwarding_id" /></td>
    <td><code>string</code></td>
    <td>An optional ID of a data forwarding configuration to be used by the scheduled view. (wire: dataForwardingId)</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Index where the output from Scheduled view is stored. (example: 1) (wire: indexId)</td>
</tr>
<tr>
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>Name of the index for the scheduled view. (example: TestScheduledView) (wire: indexName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the scheduled view. (example: 0000000006743FE8) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_optimize_it" /></td>
    <td><code>boolean</code></td>
    <td>If the scheduled view is created by OptimizeIt. (wire: createdByOptimizeIt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the scheduled view. (default: )</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Errors related to the scheduled view.</td>
</tr>
<tr>
    <td><CopyableCode code="filled_ranges" /></td>
    <td><code>array</code></td>
    <td>List of the different units of filled ranges since the autoview has been created. (wire: filledRanges)</td>
</tr>
<tr>
    <td><CopyableCode code="last_accessed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last accessed timestamp in UTC (wire: lastAccessedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="new_retention_period" /></td>
    <td><code>integer (int32)</code></td>
    <td>If the retention period is scheduled to be updated in the future (i.e., if retention period is previously reduced with value of reduceRetentionPeriodImmediately as false), this property gives the future value of retention period while retentionPeriod gives the current value. retentionPeriod will take up the value of newRetentionPeriod after the scheduled time. (wire: newRetentionPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="parsing_mode" /></td>
    <td><code>string</code></td>
    <td>Define the parsing mode to scan the JSON format log messages. Possible values are:   1. `AutoParse`   2. `Manual` In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see &#91;Dynamic Parsing&#93;(https:​//help.sumologic.com/?cid=0011). (pattern: &lt;code&gt;^(AutoParse|Manual)$&lt;/code&gt;, example: AutoParse, default: Manual, x-pattern-message: should be either AutoParse or Manual) (wire: parsingMode)</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The query that defines the data to be included in the scheduled view. (example: _sourceCategory=*/Apache)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_effective_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the newRetentionPeriod will become effective in UTC format. (wire: retentionEffectiveAt)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of days to retain data in the scheduled view, or -1 to use the default value for your account. Only relevant if your account has multi-retention enabled. (wire: retentionPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (wire: startTime)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the scheduled view. Possible values are:   1. `NOT_STARTED`   2. `FILLING`   3. `STOPPED`   4. `COMPLETE`   5. `FAILED`   6. `PAUSED`</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone for ingesting data in scheduled view. Follow the format in the &#91;IANA Time Zone Database&#93;(https:​//en.wikipedia.org/wiki/List_of_tz_database_time_zones#List). (example: America/Los_Angeles, default: UTC) (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="total_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total storage consumed by the scheduled view. (wire: totalBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="total_message_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total number of messages for the scheduled view. (wire: totalMessageCount)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of scheduled views in the organization.

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
    <td>Identifier for the scheduled view.</td>
</tr>
<tr>
    <td><CopyableCode code="data_forwarding_id" /></td>
    <td><code>string</code></td>
    <td>An optional ID of a data forwarding configuration to be used by the scheduled view. (wire: dataForwardingId)</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Index where the output from Scheduled view is stored. (example: 1) (wire: indexId)</td>
</tr>
<tr>
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>Name of the index for the scheduled view. (example: TestScheduledView) (wire: indexName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the scheduled view. (example: 0000000006743FE8) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_optimize_it" /></td>
    <td><code>boolean</code></td>
    <td>If the scheduled view is created by OptimizeIt. (wire: createdByOptimizeIt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the scheduled view. (default: )</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Errors related to the scheduled view.</td>
</tr>
<tr>
    <td><CopyableCode code="filled_ranges" /></td>
    <td><code>array</code></td>
    <td>List of the different units of filled ranges since the autoview has been created. (wire: filledRanges)</td>
</tr>
<tr>
    <td><CopyableCode code="last_accessed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last accessed timestamp in UTC (wire: lastAccessedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="new_retention_period" /></td>
    <td><code>integer (int32)</code></td>
    <td>If the retention period is scheduled to be updated in the future (i.e., if retention period is previously reduced with value of reduceRetentionPeriodImmediately as false), this property gives the future value of retention period while retentionPeriod gives the current value. retentionPeriod will take up the value of newRetentionPeriod after the scheduled time. (wire: newRetentionPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="parsing_mode" /></td>
    <td><code>string</code></td>
    <td>Define the parsing mode to scan the JSON format log messages. Possible values are:   1. `AutoParse`   2. `Manual` In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see &#91;Dynamic Parsing&#93;(https:​//help.sumologic.com/?cid=0011). (pattern: &lt;code&gt;^(AutoParse|Manual)$&lt;/code&gt;, example: AutoParse, default: Manual, x-pattern-message: should be either AutoParse or Manual) (wire: parsingMode)</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The query that defines the data to be included in the scheduled view. (example: _sourceCategory=*/Apache)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_effective_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the newRetentionPeriod will become effective in UTC format. (wire: retentionEffectiveAt)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of days to retain data in the scheduled view, or -1 to use the default value for your account. Only relevant if your account has multi-retention enabled. (wire: retentionPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (wire: startTime)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the scheduled view. Possible values are:   1. `NOT_STARTED`   2. `FILLING`   3. `STOPPED`   4. `COMPLETE`   5. `FAILED`   6. `PAUSED`</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone for ingesting data in scheduled view. Follow the format in the &#91;IANA Time Zone Database&#93;(https:​//en.wikipedia.org/wiki/List_of_tz_database_time_zones#List). (example: America/Los_Angeles, default: UTC) (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="total_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total storage consumed by the scheduled view. (wire: totalBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="total_message_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total number of messages for the scheduled view. (wire: totalMessageCount)</td>
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
    <td>Get a scheduled view with the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all scheduled views in the organization. The response is paginated with a default limit of 100 scheduled views per page.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-start_time"><code>start_time</code></a></td>
    <td></td>
    <td>Creates a new scheduled view in the organization.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing scheduled view.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disable a scheduled view with the given identifier.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Pause a scheduled view with the given identifier.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Start a scheduled view with the given identifier.</td>
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
    <td>Identifier of the scheduled view to start.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of scheduled views returned in the response. The number of scheduled views returned may be less than the `limit`.</td>
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

Get a scheduled view with the given identifier.

```sql
SELECT
id,
data_forwarding_id,
index_id,
index_name,
created_at,
created_by,
created_by_optimize_it,
description,
error,
filled_ranges,
last_accessed_at,
modified_at,
modified_by,
new_retention_period,
parsing_mode,
query,
retention_effective_at,
retention_period,
start_time,
status,
time_zone,
total_bytes,
total_message_count
FROM sumologic.scheduled_views.scheduled_views
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all scheduled views in the organization. The response is paginated with a default limit of 100 scheduled views per page.

```sql
SELECT
id,
data_forwarding_id,
index_id,
index_name,
created_at,
created_by,
created_by_optimize_it,
description,
error,
filled_ranges,
last_accessed_at,
modified_at,
modified_by,
new_retention_period,
parsing_mode,
query,
retention_effective_at,
retention_period,
start_time,
status,
time_zone,
total_bytes,
total_message_count
FROM sumologic.scheduled_views.scheduled_views
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

Creates a new scheduled view in the organization.

```sql
INSERT INTO sumologic.scheduled_views.scheduled_views (
query,
index_name,
start_time,
retention_period,
data_forwarding_id,
parsing_mode,
time_zone,
description,
region
)
SELECT 
'{{ query }}' /* required */,
'{{ index_name }}' /* required */,
'{{ start_time }}' /* required */,
{{ retention_period }},
'{{ data_forwarding_id }}',
'{{ parsing_mode }}',
'{{ time_zone }}',
'{{ description }}',
'{{ region }}'
RETURNING
id,
data_forwarding_id,
index_id,
index_name,
created_at,
created_by,
created_by_optimize_it,
description,
error,
filled_ranges,
last_accessed_at,
modified_at,
modified_by,
new_retention_period,
parsing_mode,
query,
retention_effective_at,
retention_period,
start_time,
status,
time_zone,
total_bytes,
total_message_count
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduled_views
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduled_views resource.
    - name: query
      value: "{{ query }}"
      description: |
        The query that defines the data to be included in the scheduled view.
    - name: index_name
      value: "{{ index_name }}"
      description: |
        Name of the index for the scheduled view.
    - name: start_time
      value: "{{ start_time }}"
      description: |
        Start timestamp in UTC in [RFC3339](https://tools.ietf.org/html/rfc3339) format.
    - name: retention_period
      value: {{ retention_period }}
      description: |
        The number of days to retain data in the scheduled view, or -1 to use the default value for your account. Only relevant if your account has multi-retention enabled.
      default: -1
    - name: data_forwarding_id
      value: "{{ data_forwarding_id }}"
      description: |
        An optional ID of a data forwarding configuration to be used by the scheduled view.
    - name: parsing_mode
      value: "{{ parsing_mode }}"
      description: |
        Define the parsing mode to scan the JSON format log messages. Possible values are:
        1. \`AutoParse\`
        2. \`Manual\`
        In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see [Dynamic Parsing](https://help.sumologic.com/?cid=0011).
      default: Manual
    - name: time_zone
      value: "{{ time_zone }}"
      description: |
        Time zone for ingesting data in scheduled view. Follow the format in the [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
      default: UTC
    - name: description
      value: "{{ description }}"
      description: |
        Description of the scheduled view.
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

Update an existing scheduled view.

```sql
UPDATE sumologic.scheduled_views.scheduled_views
SET 
data_forwarding_id = '{{ data_forwarding_id }}',
retention_period = {{ retention_period }},
reduce_retention_period_immediately = {{ reduce_retention_period_immediately }},
time_zone = '{{ time_zone }}',
description = '{{ description }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
RETURNING
id,
data_forwarding_id,
index_id,
index_name,
created_at,
created_by,
created_by_optimize_it,
description,
error,
filled_ranges,
last_accessed_at,
modified_at,
modified_by,
new_retention_period,
parsing_mode,
query,
retention_effective_at,
retention_period,
start_time,
status,
time_zone,
total_bytes,
total_message_count;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="disable"
    values={[
        { label: 'disable', value: 'disable' },
        { label: 'pause', value: 'pause' },
        { label: 'start', value: 'start' }
    ]}
>
<TabItem value="disable">

Disable a scheduled view with the given identifier.

```sql
EXEC sumologic.scheduled_views.scheduled_views.disable 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="pause">

Pause a scheduled view with the given identifier.

```sql
EXEC sumologic.scheduled_views.scheduled_views.pause 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="start">

Start a scheduled view with the given identifier.

```sql
EXEC sumologic.scheduled_views.scheduled_views.start 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
