--- 
title: data_deletion_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - data_deletion_rules
  - data_deletion_rules
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

Creates, updates, deletes, gets or lists a <code>data_deletion_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_deletion_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.data_deletion_rules.data_deletion_rules" /></td></tr>
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

The data deletion Rule Definition that was requested

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
    <td>Identifier for the deletion rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>Name of the deletion rule. (wire: ruleName)</td>
</tr>
<tr>
    <td><CopyableCode code="by_receipt_time" /></td>
    <td><code>boolean</code></td>
    <td>Flag to order the search results in the order collector received it. This has the value `true` if the search is to be run by receipt time and `false` if it is to be run by message time. (wire: byReceiptTime)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the deletion rule. (example: 0000000006743FE8) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_ranges" /></td>
    <td><code>array</code></td>
    <td>List of the different units of deleted ranges since the deletion rule has been created. (wire: deletedRanges)</td>
</tr>
<tr>
    <td><CopyableCode code="end_millis" /></td>
    <td><code>integer (int64)</code></td>
    <td>End time of the search as a number of milliseconds. (wire: endMillis)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Errors related to the deletion rule.</td>
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
    <td><CopyableCode code="parsing_mode" /></td>
    <td><code>string</code></td>
    <td>Define the parsing mode to scan the JSON format log messages. Possible values are:   1. `AutoParse`   2. `Manual` In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see &#91;Dynamic Parsing&#93;(https:​//help.sumologic.com/?cid=0011). (pattern: &lt;code&gt;^(AutoParse|Manual)$&lt;/code&gt;, example: AutoParse, default: Manual) (wire: parsingMode)</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>query to filter out the logs that need to be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_reason" /></td>
    <td><code>string</code></td>
    <td>Reason mentioning what data is being deleted and why. (wire: ruleReason)</td>
</tr>
<tr>
    <td><CopyableCode code="start_millis" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start time of the search as a number of milliseconds. (wire: startMillis)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the deletion rule.</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>Timezone for the resolving timerange from startMillis,endMillis (default: UTC)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of data deletion Rules

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
    <td>Identifier for the deletion rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>Name of the deletion rule. (wire: ruleName)</td>
</tr>
<tr>
    <td><CopyableCode code="by_receipt_time" /></td>
    <td><code>boolean</code></td>
    <td>Flag to order the search results in the order collector received it. This has the value `true` if the search is to be run by receipt time and `false` if it is to be run by message time. (wire: byReceiptTime)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the deletion rule. (example: 0000000006743FE8) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_ranges" /></td>
    <td><code>array</code></td>
    <td>List of the different units of deleted ranges since the deletion rule has been created. (wire: deletedRanges)</td>
</tr>
<tr>
    <td><CopyableCode code="end_millis" /></td>
    <td><code>integer (int64)</code></td>
    <td>End time of the search as a number of milliseconds. (wire: endMillis)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Errors related to the deletion rule.</td>
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
    <td><CopyableCode code="parsing_mode" /></td>
    <td><code>string</code></td>
    <td>Define the parsing mode to scan the JSON format log messages. Possible values are:   1. `AutoParse`   2. `Manual` In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see &#91;Dynamic Parsing&#93;(https:​//help.sumologic.com/?cid=0011). (pattern: &lt;code&gt;^(AutoParse|Manual)$&lt;/code&gt;, example: AutoParse, default: Manual) (wire: parsingMode)</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>query to filter out the logs that need to be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_reason" /></td>
    <td><code>string</code></td>
    <td>Reason mentioning what data is being deleted and why. (wire: ruleReason)</td>
</tr>
<tr>
    <td><CopyableCode code="start_millis" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start time of the search as a number of milliseconds. (wire: startMillis)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the deletion rule.</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>Timezone for the resolving timerange from startMillis,endMillis (default: UTC)</td>
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
    <td>Get Data Deletion Rule information for the given Id with updated fields.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of data deletion rules in the organization. The response is paginated with a default limit of 50 rules.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-end_millis"><code>end_millis</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-rule_reason"><code>rule_reason</code></a>, <a href="#parameter-start_millis"><code>start_millis</code></a></td>
    <td></td>
    <td>Create a new data deletion rule to delete logs.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the data Deletion Rule with the given Id. Allowed only if the rule is cancelled.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancel the data Deletion Rule with the given Id. Allowed only if the rule is waiting for approval.</td>
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
    <td>Identifier of the Deletion Rule to cancel</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of deletion Rules returned in the response (example: 100)</td>
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

Get Data Deletion Rule information for the given Id with updated fields.

```sql
SELECT
id,
rule_name,
by_receipt_time,
created_at,
created_by,
deleted_ranges,
end_millis,
error,
modified_at,
modified_by,
parsing_mode,
query,
rule_reason,
start_millis,
status,
timezone
FROM sumologic.data_deletion_rules.data_deletion_rules
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of data deletion rules in the organization. The response is paginated with a default limit of 50 rules.

```sql
SELECT
id,
rule_name,
by_receipt_time,
created_at,
created_by,
deleted_ranges,
end_millis,
error,
modified_at,
modified_by,
parsing_mode,
query,
rule_reason,
start_millis,
status,
timezone
FROM sumologic.data_deletion_rules.data_deletion_rules
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

Create a new data deletion rule to delete logs.

```sql
INSERT INTO sumologic.data_deletion_rules.data_deletion_rules (
rule_name,
rule_reason,
query,
start_millis,
end_millis,
by_receipt_time,
timezone,
parsing_mode,
region
)
SELECT 
'{{ rule_name }}' /* required */,
'{{ rule_reason }}' /* required */,
'{{ query }}' /* required */,
{{ start_millis }} /* required */,
{{ end_millis }} /* required */,
{{ by_receipt_time }},
'{{ timezone }}',
'{{ parsing_mode }}',
'{{ region }}'
RETURNING
id,
rule_name,
by_receipt_time,
created_at,
created_by,
deleted_ranges,
end_millis,
error,
modified_at,
modified_by,
parsing_mode,
query,
rule_reason,
start_millis,
status,
timezone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_deletion_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_deletion_rules resource.
    - name: rule_name
      value: "{{ rule_name }}"
      description: |
        Name of the deletion rule.
    - name: rule_reason
      value: "{{ rule_reason }}"
      description: |
        Reason mentioning what data is being deleted and why.
    - name: query
      value: "{{ query }}"
      description: |
        query to filter out the logs that need to be deleted.
    - name: start_millis
      value: {{ start_millis }}
      description: |
        Start time of the search as a number of milliseconds.
    - name: end_millis
      value: {{ end_millis }}
      description: |
        End time of the search as a number of milliseconds.
    - name: by_receipt_time
      value: {{ by_receipt_time }}
      description: |
        Flag to order the search results in the order collector received it. This has the value \`true\` if the search is to be run by receipt time and \`false\` if it is to be run by message time.
      default: false
    - name: timezone
      value: "{{ timezone }}"
      description: |
        Timezone for the resolving timerange from startMillis,endMillis
      default: UTC
    - name: parsing_mode
      value: "{{ parsing_mode }}"
      description: |
        Define the parsing mode to scan the JSON format log messages. Possible values are:
        1. \`AutoParse\`
        2. \`Manual\`
        In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see [Dynamic Parsing](https://help.sumologic.com/?cid=0011).
      default: Manual
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

Delete the data Deletion Rule with the given Id. Allowed only if the rule is cancelled.

```sql
DELETE FROM sumologic.data_deletion_rules.data_deletion_rules
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancel the data Deletion Rule with the given Id. Allowed only if the rule is waiting for approval.

```sql
EXEC sumologic.data_deletion_rules.data_deletion_rules.cancel 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
