--- 
title: span_billing_info
hide_title: false
hide_table_of_contents: false
keywords:
  - span_billing_info
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

Creates, updates, deletes, gets or lists a <code>span_billing_info</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="span_billing_info" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.tracing.span_billing_info" /></td></tr>
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

Billing information of the span with the given identifier.

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
    <td><CopyableCode code="billed_bytes" /></td>
    <td><code>integer</code></td>
    <td>Number of bytes that were charged for the span. (wire: billedBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="billed_format" /></td>
    <td><code>string</code></td>
    <td>Billing format of the span. Number of bytes of this representation of the span is equal to `billedBytes`. (example: traceId=2ff9c457b1aa00f4;spanId=97872e33215c4275;parentSpanId=98bcdfc5da874c40;operation=spanId-97872e33215c4275;startTimestamp=1603283111874000000;endTimestamp=1603283112268000000;service=ServiceA;status.code=ERROR;status.message=ERROR;kind=SERVER;custom-tag-2=value2;_sourcehost=127.0.0.1;url.full=https:​//example.com/api/operation-x;message=Some error message;_sourcecategory=Http Input;custom-tag-1=value1;error=true;_sourcename=Http Input;error.kind=InvalidInput;_collector=trace-generator-collector;http.request.method=GET;) (wire: billedFormat)</td>
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
    <td><a href="#parameter-trace_id"><code>trace_id</code></a>, <a href="#parameter-span_id"><code>span_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the billing information of the span.</td>
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
<tr id="parameter-span_id">
    <td><CopyableCode code="span_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the span to get the billing info. (wire: spanId)</td>
</tr>
<tr id="parameter-trace_id">
    <td><CopyableCode code="trace_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the trace the span belongs to. (wire: traceId)</td>
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

Get the billing information of the span.

```sql
SELECT
billed_bytes,
billed_format
FROM sumologic.tracing.span_billing_info
WHERE trace_id = '{{ trace_id }}' -- required
AND span_id = '{{ span_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
