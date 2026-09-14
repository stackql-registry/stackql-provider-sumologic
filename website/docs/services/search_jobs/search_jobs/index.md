--- 
title: search_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - search_jobs
  - search_jobs
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

Creates, updates, deletes, gets or lists a <code>search_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="search_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.search_jobs.search_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

The search job's status.

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
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job identifier for this search job. (wire: jobId)</td>
</tr>
<tr>
    <td><CopyableCode code="histogram_buckets" /></td>
    <td><code>array</code></td>
    <td>Histogram buckets for the query. (wire: histogramBuckets)</td>
</tr>
<tr>
    <td><CopyableCode code="message_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of messages found or produced so far. (wire: messageCount)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_errors" /></td>
    <td><code>array</code></td>
    <td>Pending errors that have accumulated since the last time the status was requested. (wire: pendingErrors)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_message_locators_and_offsets" /></td>
    <td><code>array</code></td>
    <td>Pending message locators and offsets accumulated since the last status request. (wire: pendingMessageLocatorsAndOffsets)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_warnings" /></td>
    <td><code>array</code></td>
    <td>Pending warnings that have accumulated since the last time the status was requested. (wire: pendingWarnings)</td>
</tr>
<tr>
    <td><CopyableCode code="performance" /></td>
    <td><code>object</code></td>
    <td>Performance characteristics of this search job.</td>
</tr>
<tr>
    <td><CopyableCode code="record_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of records found or produced so far. (wire: recordCount)</td>
</tr>
<tr>
    <td><CopyableCode code="searched_time_range" /></td>
    <td><code>object</code></td>
    <td>The time range that has been searched so far. (wire: searchedTimeRange)</td>
</tr>
<tr>
    <td><CopyableCode code="show_log_levels" /></td>
    <td><code>boolean</code></td>
    <td>Whether log level distribution data is available for this search job. (wire: showLogLevels)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Search job state. In case you are checking status for a multi child org query, you might see another status as 'Done Gathering Partial Results' which means that the query failed for some of the child orgs. You can check their reasons in audit logs with the query Id. (example: DONE GATHERING RESULTS)</td>
</tr>
<tr>
    <td><CopyableCode code="time_elapsed" /></td>
    <td><code>integer (int64)</code></td>
    <td>Time elapsed in milliseconds since the search job started. (wire: timeElapsed)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_details" /></td>
    <td><code>object</code></td>
    <td>Usage details about the search job api. It includes data scanned in bytes during the search. (wire: usageDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_details_by_metering_type" /></td>
    <td><code>array</code></td>
    <td>Usage details broken down by metering type. Each element contains dataScannedInBytes, meteringType, tier, and isChargeable. (wire: usageDetailsByMeteringType)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_details_by_tier" /></td>
    <td><code>array</code></td>
    <td>Usage details broken down by analytics tier. Each element contains dataScannedInBytes and tier. (wire: usageDetailsByTier)</td>
</tr>
<tr>
    <td><CopyableCode code="user_messages" /></td>
    <td><code>array</code></td>
    <td>Informational user messages generated during the search. Each element contains type, key, and data. (wire: userMessages)</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>string</code></td>
    <td>Warnings value contains the detailed information about the warning while obtaining the current status of a search job.</td>
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
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use the search job identifier to obtain the current status of a search job.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-timezone"><code>timezone</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td></td>
    <td>Create a new search job.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use the search job identifier to delete the search job.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the search job to be deleted. (wire: jobId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Use the search job identifier to obtain the current status of a search job.

```sql
SELECT
job_id,
histogram_buckets,
message_count,
pending_errors,
pending_message_locators_and_offsets,
pending_warnings,
performance,
record_count,
searched_time_range,
show_log_levels,
state,
time_elapsed,
usage_details,
usage_details_by_metering_type,
usage_details_by_tier,
user_messages,
warning
FROM sumologic.search_jobs.search_jobs
WHERE job_id = '{{ job_id }}' -- required
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

Create a new search job.

```sql
INSERT INTO sumologic.search_jobs.search_jobs (
query,
from,
to,
timezone,
auto_parsing_mode,
requires_raw_messages,
max_raw_records,
interval_time_type,
child_org_ids,
include_all_child_orgs,
region
)
SELECT 
'{{ query }}' /* required */,
'{{ from }}' /* required */,
'{{ to }}' /* required */,
'{{ timezone }}' /* required */,
'{{ auto_parsing_mode }}',
'{{ requires_raw_messages }}',
'{{ max_raw_records }}',
'{{ interval_time_type }}',
'{{ child_org_ids }}',
{{ include_all_child_orgs }},
'{{ region }}'
RETURNING
id,
is_aggregation,
is_sortable,
is_summary,
link,
operators,
runnable_query,
tiers_in_query,
user_referenced_fields_sortable,
warning
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: search_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the search_jobs resource.
    - name: query
      value: "{{ query }}"
      description: |
        The actual search expression. Ensure your query follows [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259) and is valid JSON format,  you may need to escape certain characters to follow the [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259).
    - name: from
      value: "{{ from }}"
      description: |
        The start date and time of the search. This follows the [ISO 8601](https://www.w3.org/TR/NOTE-datetime) date and time format.
    - name: to
      value: "{{ to }}"
      description: |
        The end date and time of the search. This follows the [ISO 8601](https://www.w3.org/TR/NOTE-datetime) date and time format.
    - name: timezone
      value: "{{ timezone }}"
      description: |
        The time zone if from/to is not in milliseconds. See this [Wikipedia article](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for a list of time zone codes.
      default: UTC
    - name: auto_parsing_mode
      value: "{{ auto_parsing_mode }}"
      description: |
        Define the parsing mode to scan the JSON format log messages. Possible values are:
        AutoParse - System automatically figures out the fields to parse based on the search query.
        Manual - No fields are parsed out automatically. For more information, refer to the [Dynamic Parsing](https://help.sumologic.com/docs/manage/field-extractions/create-field-extraction-rule/).
      default: Manual
    - name: requires_raw_messages
      value: "{{ requires_raw_messages }}"
      description: |
        On enabling this field, the log messages applicable to the search are returned. Maximum value is 100,000. This is only applicable for aggregate queries.
      default: false
    - name: max_raw_records
      value: "{{ max_raw_records }}"
      description: |
        Maximum number of raw records to finish the search.
    - name: interval_time_type
      value: "{{ interval_time_type }}"
      description: |
        This parameter defines whether you want to run the search by messageTime, receiptTime or searchableTime.
      default: messageTime
    - name: child_org_ids
      value:
        - "{{ child_org_ids }}"
      description: |
        List of child organization ids to run the search on.
    - name: include_all_child_orgs
      value: {{ include_all_child_orgs }}
      description: |
        When true, automatically resolves all child orgs of the authenticated parent and fans the search out across all of them. If this is set, it takes precedence over childOrgIds field. Default value is false.
      default: false
`}</CodeBlock>

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

Use the search job identifier to delete the search job.

```sql
DELETE FROM sumologic.search_jobs.search_jobs
WHERE job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
