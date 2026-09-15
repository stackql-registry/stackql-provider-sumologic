--- 
title: critical_path_service_breakdowns
hide_title: false
hide_table_of_contents: false
keywords:
  - critical_path_service_breakdowns
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

Creates, updates, deletes, gets or lists a <code>critical_path_service_breakdowns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="critical_path_service_breakdowns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.tracing.critical_path_service_breakdowns" /></td></tr>
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

List of elements representing the critical path service breakdown.

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
    <td><CopyableCode code="duration" /></td>
    <td><code>integer (int64)</code></td>
    <td>Overall processing time in nanoseconds consumed by the spans belonging to this service in the critical path (a sum of the duration times of the spans' critical path segments).</td>
</tr>
<tr>
    <td><CopyableCode code="longest_segment_duration" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of nanoseconds the longest span segment in the critical path lasted. (wire: longestSegmentDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="num_spans" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of spans that are part of this service. (wire: numSpans)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (example: user-service)</td>
</tr>
<tr>
    <td><CopyableCode code="service_color" /></td>
    <td><code>string</code></td>
    <td>Color hex code assigned to the service. (example: #fa41c6) (wire: serviceColor)</td>
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
    <td></td>
    <td>Get a critical path breakdown by services of the spans contributing to the critical path of a trace with the given identifier.</td>
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

Get a critical path breakdown by services of the spans contributing to the critical path of a trace with the given identifier.

```sql
SELECT
duration,
longest_segment_duration,
num_spans,
service,
service_color
FROM sumologic.tracing.critical_path_service_breakdowns
WHERE trace_id = '{{ trace_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
