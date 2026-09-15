--- 
title: metrics_searches
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics_searches
  - metrics_searches
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

Creates, updates, deletes, gets or lists a <code>metrics_searches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics_searches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.metrics_searches.metrics_searches" /></td></tr>
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

A metrics search object with metadata.

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
    <td>Identifier of the metrics search. (example: 000000000000001A)</td>
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
    <td><CopyableCode code="desired_quantization_in_secs" /></td>
    <td><code>integer (int32)</code></td>
    <td>Desired quantization in seconds. (wire: desiredQuantizationInSecs)</td>
</tr>
<tr>
    <td><CopyableCode code="log_query" /></td>
    <td><code>string</code></td>
    <td>Log query used to add an overlay to the chart. (example: my_metric | timeslice 1m | count by _timeslice) (wire: logQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_queries" /></td>
    <td><code>array</code></td>
    <td>Metrics queries, up to the maximum of six. (wire: metricsQueries)</td>
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
    <td><CopyableCode code="properties" /></td>
    <td><code>string</code></td>
    <td>Chart properties, like line width, color palette, and the fill missing data method. Leave this field empty to use the defaults. This property contains JSON object encoded as a string.  (example: &#123; \"key\": \"value\" &#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Item title in the content library. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 +%-@.,_()&#93;+$&lt;/code&gt;, example: Short title)</td>
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
    <td>Returns a metrics search with the specified identifier.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-metrics_queries"><code>metrics_queries</code></a>, <a href="#parameter-time_range"><code>time_range</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-parent_id"><code>parent_id</code></a></td>
    <td></td>
    <td>Saves a metrics search in the content library. Metrics search consists of one or more queries, a time range, a quantization period and a set of chart properties like line width.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-metrics_queries"><code>metrics_queries</code></a>, <a href="#parameter-time_range"><code>time_range</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Updates a metrics search with the specified identifier. Partial updates are not supported, you must provide values for all fields.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a metrics search from the content library.</td>
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
    <td>Identifier of the metrics search.</td>
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

Returns a metrics search with the specified identifier.

```sql
SELECT
id,
parent_id,
created_at,
created_by,
description,
desired_quantization_in_secs,
log_query,
metrics_queries,
modified_at,
modified_by,
properties,
time_range,
title
FROM sumologic.metrics_searches.metrics_searches
WHERE id = '{{ id }}' -- required
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

Saves a metrics search in the content library. Metrics search consists of one or more queries, a time range, a quantization period and a set of chart properties like line width.

```sql
INSERT INTO sumologic.metrics_searches.metrics_searches (
title,
description,
time_range,
log_query,
metrics_queries,
desired_quantization_in_secs,
properties,
parent_id,
region
)
SELECT 
'{{ title }}' /* required */,
'{{ description }}' /* required */,
'{{ time_range }}' /* required */,
'{{ log_query }}',
'{{ metrics_queries }}' /* required */,
{{ desired_quantization_in_secs }},
'{{ properties }}',
'{{ parent_id }}' /* required */,
'{{ region }}'
RETURNING
id,
parent_id,
created_at,
created_by,
description,
desired_quantization_in_secs,
log_query,
metrics_queries,
modified_at,
modified_by,
properties,
time_range,
title
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: metrics_searches
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the metrics_searches resource.
    - name: title
      value: "{{ title }}"
      description: |
        Item title in the content library.
    - name: description
      value: "{{ description }}"
      description: |
        Item description in the content library.
    - name: time_range
      value:
        type: "{{ type }}"
    - name: log_query
      value: "{{ log_query }}"
      description: |
        Log query used to add an overlay to the chart.
    - name: metrics_queries
      description: |
        Metrics queries, up to the maximum of six.
      value:
        - rowId: "{{ rowId }}"
          query: "{{ query }}"
    - name: desired_quantization_in_secs
      value: {{ desired_quantization_in_secs }}
      description: |
        Desired quantization in seconds.
      default: 0
    - name: properties
      value: "{{ properties }}"
      description: |
        Chart properties, like line width, color palette, and the fill missing data method. Leave this field empty to use the defaults.
        This property contains JSON object encoded as a string.
    - name: parent_id
      value: "{{ parent_id }}"
      description: |
        Identifier of a folder to which the metrics search should be added.
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

Updates a metrics search with the specified identifier. Partial updates are not supported, you must provide values for all fields.

```sql
UPDATE sumologic.metrics_searches.metrics_searches
SET 
title = '{{ title }}',
description = '{{ description }}',
time_range = '{{ time_range }}',
log_query = '{{ log_query }}',
metrics_queries = '{{ metrics_queries }}',
desired_quantization_in_secs = {{ desired_quantization_in_secs }},
properties = '{{ properties }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND description = '{{ description }}' --required
AND metrics_queries = '{{ metrics_queries }}' --required
AND time_range = '{{ time_range }}' --required
AND title = '{{ title }}' --required
RETURNING
id,
parent_id,
created_at,
created_by,
description,
desired_quantization_in_secs,
log_query,
metrics_queries,
modified_at,
modified_by,
properties,
time_range,
title;
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

Deletes a metrics search from the content library.

```sql
DELETE FROM sumologic.metrics_searches.metrics_searches
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
