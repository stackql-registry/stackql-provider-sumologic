--- 
title: span_query_results
hide_title: false
hide_table_of_contents: false
keywords:
  - span_query_results
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

Creates, updates, deletes, gets or lists a <code>span_query_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="span_query_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.tracing.span_query_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="parent_span_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent span, if any. If the span has no parent it's considered a root span. (example: 000000000003C7BE) (wire: parentSpanId)</td>
</tr>
<tr>
    <td><CopyableCode code="span_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the span. (example: 00000000002317A9) (wire: spanId)</td>
</tr>
<tr>
    <td><CopyableCode code="trace_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the trace. (example: 1BB004A0005213C2) (wire: traceId)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_name" /></td>
    <td><code>string</code></td>
    <td>The name of the operation given to the span. (example: retrieveAccount) (wire: operationName)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of nanoseconds the span lasted.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Span kind describes the relationship between the Span, its parents, and its children in a Trace. Possible values: `CLIENT`, `SERVER`, `PRODUCER`, `CONSUMER`, `INTERNAL`. (pattern: &lt;code&gt;^(CLIENT|SERVER|PRODUCER|CONSUMER|INTERNAL)$&lt;/code&gt;, example: SERVER, x-pattern-message: Should be either `CLIENT`, `SERVER`, `PRODUCER`, `CONSUMER` or `INTERNAL`.)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata attached to the span.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_service" /></td>
    <td><code>string</code></td>
    <td>Name of the possible remote span's service. (example: external-service) (wire: remoteService)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The name of the service this span is part of. (example: user-service)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the span was started in &#91;ISO 8601 / RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2019-11-22T09:00:00.000Z) (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tags_json" /></td>
    <td><code>string</code></td>
    <td>Tags attached to this span as JSON. (example: &#123;&lt;br /&gt;  &quot;http.host&quot;:&quot;http:​//example.com&quot;,&lt;br /&gt;  &quot;http.request.method&quot;:&quot;GET&quot;&lt;br /&gt;&#125;) (wire: tagsJSON)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-row_id"><code>row_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of spans matching a query with the specified id. The response is paginated with a default limit of 100 spans per page.</td>
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
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the executed query. (wire: queryId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-row_id">
    <td><CopyableCode code="row_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the query row. (wire: rowId)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit of the number of spans returned in the response.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get a list of spans matching a query with the specified id. The response is paginated with a default limit of 100 spans per page.

```sql
SELECT
parent_span_id,
span_id,
trace_id,
operation_name,
duration,
kind,
metadata,
remote_service,
service,
started_at,
status,
tags_json
FROM sumologic.tracing.span_query_results
WHERE query_id = '{{ query_id }}' -- required
AND row_id = '{{ row_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>
