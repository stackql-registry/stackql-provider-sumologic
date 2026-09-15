--- 
title: span_query_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - span_query_fields
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

Creates, updates, deletes, gets or lists a <code>span_query_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="span_query_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.tracing.span_query_fields" /></td></tr>
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

List of available fields.

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description of the field. (example: A piece of the workflow represented by a span)</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code>string</code></td>
    <td>Filter field name. (example: operation)</td>
</tr>
<tr>
    <td><CopyableCode code="field_type" /></td>
    <td><code>string</code></td>
    <td>Indicates the kind of a field. Possible values: `SpanAttribute`, `SpanEventAttribute`. (pattern: &lt;code&gt;^(SpanAttribute|SpanEventAttribute)$&lt;/code&gt;, example: SpanEventAttribute, default: SpanAttribute, x-pattern-message: Should be one of: `SpanAttribute`, `SpanEventAttribute`.) (wire: fieldType)</td>
</tr>
<tr>
    <td><CopyableCode code="in_schema" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the field is available in the schema. (wire: inSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="no_values_reason" /></td>
    <td><code>object</code></td>
    <td> (wire: noValuesReason)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type the values of this field will have. Possible values: `DoubleTracingValue`, `IntegerTracingValue`, `StringTracingValue`, `DateTimeTracingValue`. (example: StringTracingValue)</td>
</tr>
<tr>
    <td><CopyableCode code="value_listing" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether values for this field can be listed. (wire: valueListing)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of available fields which can be used in span analytics queries.</td>
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

Get a list of available fields which can be used in span analytics queries.

```sql
SELECT
description,
field,
field_type,
in_schema,
no_values_reason,
type,
value_listing
FROM sumologic.tracing.span_query_fields
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
