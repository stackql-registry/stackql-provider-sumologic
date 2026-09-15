--- 
title: trace_query_results
hide_title: false
hide_table_of_contents: false
keywords:
  - trace_query_results
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

Creates, updates, deletes, gets or lists a <code>trace_query_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trace_query_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.tracing.trace_query_results" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Trace identifier. (example: 00000000000120CB)</td>
</tr>
<tr>
    <td><CopyableCode code="root_operation_name" /></td>
    <td><code>string</code></td>
    <td>The name of the operation given to the root span. (example: retrieveAccount) (wire: rootOperationName)</td>
</tr>
<tr>
    <td><CopyableCode code="critical_path_service_breakdown_summary" /></td>
    <td><code>object</code></td>
    <td> (wire: criticalPathServiceBreakdownSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Calculated trace metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="root_resource" /></td>
    <td><code>string</code></td>
    <td>Root resource on which the trace was started. Examples: `db.query`, `http.request`, `rpc.call`, `container` (example: http.request) (wire: rootResource)</td>
</tr>
<tr>
    <td><CopyableCode code="root_service" /></td>
    <td><code>string</code></td>
    <td>Root service which started the trace. Examples: `user-service`, `authentication-service`, `payment-service`, `/shopping-cart` (example: user-service) (wire: rootService)</td>
</tr>
<tr>
    <td><CopyableCode code="root_status" /></td>
    <td><code>object</code></td>
    <td> (wire: rootStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the trace was started in &#91;ISO 8601 / RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2019-11-22T09:00:00.000Z) (wire: startedAt)</td>
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
    <td>Get a list of traces matching a query with the specified id. The response is paginated with a default limit of 100 traces per page.</td>
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
    <td>Limit of the number of traces returned in the response.</td>
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

Get a list of traces matching a query with the specified id. The response is paginated with a default limit of 100 traces per page.

```sql
SELECT
id,
root_operation_name,
critical_path_service_breakdown_summary,
metrics,
root_resource,
root_service,
root_status,
started_at
FROM sumologic.tracing.trace_query_results
WHERE query_id = '{{ query_id }}' -- required
AND row_id = '{{ row_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>
