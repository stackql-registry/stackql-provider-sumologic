--- 
title: critical_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - critical_paths
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

Creates, updates, deletes, gets or lists a <code>critical_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="critical_paths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.tracing.critical_paths" /></td></tr>
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

List of span segments composing the critical path.

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
    <td><CopyableCode code="span_id" /></td>
    <td><code>string</code></td>
    <td>Span identifier. (example: 00000000000120CB) (wire: spanId)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of nanoseconds the span segment lasted.</td>
</tr>
<tr>
    <td><CopyableCode code="fraction" /></td>
    <td><code>number (double)</code></td>
    <td>The fraction (value between 0.0 and 1.0) from the trace duration time this segment took.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The name of the service this span is part of. (example: user-service)</td>
</tr>
<tr>
    <td><CopyableCode code="service_color" /></td>
    <td><code>string</code></td>
    <td>Color hex code assigned to the service. (example: #fa41c6) (wire: serviceColor)</td>
</tr>
<tr>
    <td><CopyableCode code="start_offset" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of nanoseconds from the span startedAt the segment started. (wire: startOffset)</td>
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
    <td><a href="#parameter-trace_id"><code>trace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of span segments composing the critical path of the trace. A span segment represents the processing time that was consumed within the span itself and does not incorporate the processing time of its children. The critical path is the sequence of span segments that contribute to the total trace duration. An increase of the processing time of any segment from the critical path would result in an increase of the total trace processing time.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-trace_id">
    <td><CopyableCode code="trace_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the trace. (wire: traceId)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of results to fetch.</td>
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

Get a list of span segments composing the critical path of the trace. A span segment represents the processing time that was consumed within the span itself and does not incorporate the processing time of its children. The critical path is the sequence of span segments that contribute to the total trace duration. An increase of the processing time of any segment from the critical path would result in an increase of the total trace processing time.

```sql
SELECT
span_id,
duration,
fraction,
service,
service_color,
start_offset
FROM sumologic.tracing.critical_paths
WHERE trace_id = '{{ trace_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>
