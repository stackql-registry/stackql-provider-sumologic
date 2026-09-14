--- 
title: log_searches
hide_title: false
hide_table_of_contents: false
keywords:
  - log_searches
  - log_searches
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

Creates, updates, deletes, gets or lists a <code>log_searches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_searches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.log_searches.log_searches" /></td></tr>
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

Saved log search that was requested.

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
    <td>Identifier of the saved log search. (example: 000000000000001A)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the item in the content library. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 +%-@.,_()\\&#93;+$&lt;/code&gt;, example: Short title)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent element in the content library, such as folder. (example: 0000000000007D2B) (wire: parentId)</td>
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
    <td>Item description in the content library. (example: Long and detailed description)</td>
</tr>
<tr>
    <td><CopyableCode code="interval_time_type" /></td>
    <td><code>string</code></td>
    <td>This parameter defines whether you want to run the search by messageTime, receiptTime, or searchableTime.  By default, the search will run by messageTime. If both runByReceiptTime and intervalTimeType parameters are present then  the preference will be given to the intervalTimeType. (pattern: &lt;code&gt;^(messageTime|receiptTime|searchableTime)$&lt;/code&gt;, example: messageTime, default: messageTime, x-pattern-message: should be either 'messageTime' or 'receiptTime' or 'searchableTime') (wire: intervalTimeType)</td>
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
    <td><CopyableCode code="parsing_mode" /></td>
    <td><code>string</code></td>
    <td>Define the parsing mode to scan the JSON format log messages. Possible values are:   1. `AutoParse`   2. `Manual` In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see &#91;Dynamic Parsing&#93;(https:​//help.sumologic.com/?cid=0011). (pattern: &lt;code&gt;^(AutoParse|Manual)$&lt;/code&gt;, example: AutoParse, default: Manual) (wire: parsingMode)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>string</code></td>
    <td>Aggregate Results Settings and View configurations, Legends settings, and different visualisation settings overrides. Leave this field empty to use the defaults. This property contains JSON object encoded as a string.  (example: &#123; "key": "value" &#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_parameters" /></td>
    <td><code>array</code></td>
    <td>Values for search template used in the search query. Learn more about the search templates here : https:​//help.sumologic.com/docs/search/get-started-with-search/build-search/search-templates/ (wire: queryParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="query_string" /></td>
    <td><code>string</code></td>
    <td>Query to perform. (example: error &#123;&#123;sourceCategory&#125;&#125;| count by _sourceCategory) (wire: queryString)</td>
</tr>
<tr>
    <td><CopyableCode code="run_by_receipt_time" /></td>
    <td><code>boolean</code></td>
    <td>This has the value `true` if the search is to be run by receipt time and `false` if it is to be run by message time. (wire: runByReceiptTime)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Schedule definition for a log search. Exactly one of 'notification' (single notification) or 'notifications' (multiple notification actions) must be provided. Sending both or neither will result in a 400 error.</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Paginated list of log searches under the Personal folder created by the user.

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
    <td>Identifier of the saved log search. (example: 000000000000001A)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the item in the content library. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 +%-@.,_()\\&#93;+$&lt;/code&gt;, example: Short title)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent element in the content library, such as folder. (example: 0000000000007D2B) (wire: parentId)</td>
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
    <td>Item description in the content library. (example: Long and detailed description)</td>
</tr>
<tr>
    <td><CopyableCode code="interval_time_type" /></td>
    <td><code>string</code></td>
    <td>This parameter defines whether you want to run the search by messageTime, receiptTime, or searchableTime.  By default, the search will run by messageTime. If both runByReceiptTime and intervalTimeType parameters are present then  the preference will be given to the intervalTimeType. (pattern: &lt;code&gt;^(messageTime|receiptTime|searchableTime)$&lt;/code&gt;, example: messageTime, default: messageTime, x-pattern-message: should be either 'messageTime' or 'receiptTime' or 'searchableTime') (wire: intervalTimeType)</td>
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
    <td><CopyableCode code="parsing_mode" /></td>
    <td><code>string</code></td>
    <td>Define the parsing mode to scan the JSON format log messages. Possible values are:   1. `AutoParse`   2. `Manual` In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see &#91;Dynamic Parsing&#93;(https:​//help.sumologic.com/?cid=0011). (pattern: &lt;code&gt;^(AutoParse|Manual)$&lt;/code&gt;, example: AutoParse, default: Manual) (wire: parsingMode)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>string</code></td>
    <td>Aggregate Results Settings and View configurations, Legends settings, and different visualisation settings overrides. Leave this field empty to use the defaults. This property contains JSON object encoded as a string.  (example: &#123; "key": "value" &#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_parameters" /></td>
    <td><code>array</code></td>
    <td>Values for search template used in the search query. Learn more about the search templates here : https:​//help.sumologic.com/docs/search/get-started-with-search/build-search/search-templates/ (wire: queryParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="query_string" /></td>
    <td><code>string</code></td>
    <td>Query to perform. (example: error &#123;&#123;sourceCategory&#125;&#125;| count by _sourceCategory) (wire: queryString)</td>
</tr>
<tr>
    <td><CopyableCode code="run_by_receipt_time" /></td>
    <td><code>boolean</code></td>
    <td>This has the value `true` if the search is to be run by receipt time and `false` if it is to be run by message time. (wire: runByReceiptTime)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Schedule definition for a log search. Exactly one of 'notification' (single notification) or 'notifications' (multiple notification actions) must be provided. Sending both or neither will result in a 400 error.</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
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
    <td>Get a saved log search from the content library by identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>List all saved log searches viewable by the user.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-query_string"><code>query_string</code></a>, <a href="#parameter-time_range"><code>time_range</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-parent_id"><code>parent_id</code></a></td>
    <td></td>
    <td>Save the log search in the content library.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-query_string"><code>query_string</code></a>, <a href="#parameter-time_range"><code>time_range</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update the saved log search with the specified identifier. Partial update is not supported, you must provide values for all fields.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the saved log search from the content library.</td>
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
    <td>Identifier of the saved log search.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of log searches returned in the response. The number of log searches returned may be less than the `limit`. (example: 50)</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results. `token` is set to null when no more pages are left. (example: GDCiRv4vebF3UWFJQ1kySXBOR3Bzh69GR0RyWm9vCtc)</td>
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

Get a saved log search from the content library by identifier.

```sql
SELECT
id,
name,
parent_id,
created_at,
created_by,
description,
interval_time_type,
modified_at,
modified_by,
parsing_mode,
properties,
query_parameters,
query_string,
run_by_receipt_time,
schedule,
time_range
FROM sumologic.log_searches.log_searches
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

List all saved log searches viewable by the user.

```sql
SELECT
id,
name,
parent_id,
created_at,
created_by,
description,
interval_time_type,
modified_at,
modified_by,
parsing_mode,
properties,
query_parameters,
query_string,
run_by_receipt_time,
schedule,
time_range
FROM sumologic.log_searches.log_searches
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

Save the log search in the content library.

```sql
INSERT INTO sumologic.log_searches.log_searches (
query_string,
time_range,
run_by_receipt_time,
query_parameters,
interval_time_type,
parsing_mode,
name,
description,
schedule,
properties,
parent_id,
region
)
SELECT 
'{{ query_string }}' /* required */,
'{{ time_range }}' /* required */,
{{ run_by_receipt_time }},
'{{ query_parameters }}',
'{{ interval_time_type }}',
'{{ parsing_mode }}',
'{{ name }}' /* required */,
'{{ description }}',
'{{ schedule }}',
'{{ properties }}',
'{{ parent_id }}' /* required */,
'{{ region }}'
RETURNING
id,
name,
parent_id,
created_at,
created_by,
description,
interval_time_type,
modified_at,
modified_by,
parsing_mode,
properties,
query_parameters,
query_string,
run_by_receipt_time,
schedule,
time_range
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: log_searches
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the log_searches resource.
    - name: query_string
      value: "{{ query_string }}"
      description: |
        Query to perform.
    - name: time_range
      value:
        type: "{{ type }}"
    - name: run_by_receipt_time
      value: {{ run_by_receipt_time }}
      description: |
        This has the value \`true\` if the search is to be run by receipt time and \`false\` if it is to be run by message time.
      default: false
    - name: query_parameters
      description: |
        Values for search template used in the search query. Learn more about the search templates here : https://help.sumologic.com/docs/search/get-started-with-search/build-search/search-templates/
      value:
        - autoComplete:
            type: "{{ type }}"
            autoCompleteKey: "{{ autoCompleteKey }}"
            autoCompleteValues:
              - label: "{{ label }}"
                value: "{{ value }}"
            lookupMetaData:
              fileName: "{{ fileName }}"
              valueColumn: "{{ valueColumn }}"
              labelColumn: "{{ labelColumn }}"
          name: "{{ name }}"
          description: "{{ description }}"
          dataType: "{{ dataType }}"
          value: "{{ value }}"
    - name: interval_time_type
      value: "{{ interval_time_type }}"
      description: |
        This parameter defines whether you want to run the search by messageTime, receiptTime, or searchableTime.  By default, the search will run by messageTime. If both runByReceiptTime and intervalTimeType parameters are present then  the preference will be given to the intervalTimeType.
      default: messageTime
    - name: parsing_mode
      value: "{{ parsing_mode }}"
      description: |
        Define the parsing mode to scan the JSON format log messages. Possible values are:
        1. \`AutoParse\`
        2. \`Manual\`
        In AutoParse mode, the system automatically figures out fields to parse based on the search query. While in the Manual mode, no fields are parsed out automatically. For more information see [Dynamic Parsing](https://help.sumologic.com/?cid=0011).
      default: Manual
    - name: name
      value: "{{ name }}"
      description: |
        Name of the item in the content library.
    - name: description
      value: "{{ description }}"
      description: |
        Item description in the content library.
    - name: schedule
      description: |
        Schedule definition for a log search. Exactly one of 'notification' (single notification) or 'notifications' (multiple notification actions) must be provided. Sending both or neither will result in a 400 error.
      value:
        cronExpression: "{{ cronExpression }}"
        displayableTimeRange: "{{ displayableTimeRange }}"
        parseableTimeRange:
          type: "{{ type }}"
        timeZone: "{{ timeZone }}"
        threshold:
          thresholdType: "{{ thresholdType }}"
          operator: "{{ operator }}"
          count: {{ count }}
        notification:
          taskType: "{{ taskType }}"
        scheduleType: "{{ scheduleType }}"
        muteErrorEmails: {{ muteErrorEmails }}
        parameters:
          - name: "{{ name }}"
            value: "{{ value }}"
        notifications:
          - taskType: "{{ taskType }}"
    - name: properties
      value: "{{ properties }}"
      description: |
        Aggregate Results Settings and View configurations, Legends settings, and different visualisation settings overrides. Leave this field empty to use the defaults.
        This property contains JSON object encoded as a string.
    - name: parent_id
      value: "{{ parent_id }}"
      description: |
        Identifier of a folder where to save the log search.
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

Update the saved log search with the specified identifier. Partial update is not supported, you must provide values for all fields.

```sql
UPDATE sumologic.log_searches.log_searches
SET 
query_string = '{{ query_string }}',
time_range = '{{ time_range }}',
run_by_receipt_time = {{ run_by_receipt_time }},
query_parameters = '{{ query_parameters }}',
interval_time_type = '{{ interval_time_type }}',
parsing_mode = '{{ parsing_mode }}',
name = '{{ name }}',
description = '{{ description }}',
schedule = '{{ schedule }}',
properties = '{{ properties }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND query_string = '{{ query_string }}' --required
AND time_range = '{{ time_range }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
parent_id,
created_at,
created_by,
description,
interval_time_type,
modified_at,
modified_by,
parsing_mode,
properties,
query_parameters,
query_string,
run_by_receipt_time,
schedule,
time_range;
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

Delete the saved log search from the content library.

```sql
DELETE FROM sumologic.log_searches.log_searches
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
