--- 
title: span_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - span_queries
  - tracing
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

Creates, updates, deletes, gets or lists a <code>span_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="span_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.tracing.span_queries" /></td></tr>
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

Details about the given span query.

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
    <td><CopyableCode code="query_rows" /></td>
    <td><code>array</code></td>
    <td>A list of span analytics queries. (wire: queryRows)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the query. Possible values: `Processing`, `Finished`, `Error`, `Paused` (pattern: &lt;code&gt;^(Processing|Finished|Error|Paused)$&lt;/code&gt;, example: Processing, x-pattern-message: Should be either `Processing`, `Finished`, `Error`, `Paused`.)</td>
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
    <td><a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a status of a span analytics query with the given id. When the query has been completed, use the Span Query Result endpoint to get the result of the asynchronous query.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-query_rows"><code>query_rows</code></a>, <a href="#parameter-time_range"><code>time_range</code></a></td>
    <td></td>
    <td>Execute a span analytics query and get the id to fetch its status and results. Use the Span Query Status endpoint to check a query status. When the query has been completed, use the Span Query Result endpoint to get the result of the asynchronous query.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancel a currently processed span search query with the given id.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-queryId"><code>queryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Pause a currently processed span search query with the given id.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-queryId"><code>queryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resume a previously paused span search query with the given id.</td>
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
<tr id="parameter-queryId">
    <td><CopyableCode code="queryId" /></td>
    <td><code>string</code></td>
    <td>Identifier of the query to resume.</td>
</tr>
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the query to cancel. (wire: queryId)</td>
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

Get a status of a span analytics query with the given id. When the query has been completed, use the Span Query Result endpoint to get the result of the asynchronous query.

```sql
SELECT
query_rows,
status
FROM sumologic.tracing.span_queries
WHERE query_id = '{{ query_id }}' -- required
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

Execute a span analytics query and get the id to fetch its status and results. Use the Span Query Status endpoint to check a query status. When the query has been completed, use the Span Query Result endpoint to get the result of the asynchronous query.

```sql
INSERT INTO sumologic.tracing.span_queries (
query_rows,
time_range,
time_zone,
region
)
SELECT 
'{{ query_rows }}' /* required */,
'{{ time_range }}' /* required */,
'{{ time_zone }}',
'{{ region }}'
RETURNING
query_id,
has_errors,
query_rows,
time_range
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: span_queries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the span_queries resource.
    - name: query_rows
      description: |
        A list of span analytics queries.
      value:
        - queryString: "{{ queryString }}"
          rowId: "{{ rowId }}"
    - name: time_range
      value:
        type: "{{ type }}"
    - name: time_zone
      value: "{{ time_zone }}"
      description: |
        Time zone for the query time ranges. Follow the format in the [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
      default: UTC
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

Cancel a currently processed span search query with the given id.

```sql
DELETE FROM sumologic.tracing.span_queries
WHERE query_id = '{{ query_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="pause"
    values={[
        { label: 'pause', value: 'pause' },
        { label: 'resume', value: 'resume' }
    ]}
>
<TabItem value="pause">

Pause a currently processed span search query with the given id.

```sql
EXEC sumologic.tracing.span_queries.pause 
@queryId='{{ queryId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="resume">

Resume a previously paused span search query with the given id.

```sql
EXEC sumologic.tracing.span_queries.resume 
@queryId='{{ queryId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
