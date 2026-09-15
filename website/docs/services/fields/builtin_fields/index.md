--- 
title: builtin_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - builtin_fields
  - fields
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

Creates, updates, deletes, gets or lists a <code>builtin_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="builtin_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.fields.builtin_fields" /></td></tr>
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

The details of the built-in field.

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
    <td><CopyableCode code="field_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the field. (example: 00000000031D02DA) (wire: fieldId)</td>
</tr>
<tr>
    <td><CopyableCode code="field_name" /></td>
    <td><code>string</code></td>
    <td>Field name. (example: hostIP) (wire: fieldName)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>Field type. Possible values are `String`, `Long`, `Int`, `Double`, and `Boolean`. (pattern: &lt;code&gt;^(String|Long|Int|Double|Boolean)$&lt;/code&gt;, example: String, x-pattern-message: Must be `String`, `Long`, `Int`, `Double` or `Boolean`) (wire: dataType)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the field is enabled and its values are being accepted. Possible values are `Enabled` and `Disabled`. (pattern: &lt;code&gt;^(Enabled|Disabled)$&lt;/code&gt;, example: Enabled, x-pattern-message: Must be `Enabled` or `Disabled`)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of all built-in fields.

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
    <td><CopyableCode code="field_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the field. (example: 00000000031D02DA) (wire: fieldId)</td>
</tr>
<tr>
    <td><CopyableCode code="field_name" /></td>
    <td><code>string</code></td>
    <td>Field name. (example: hostIP) (wire: fieldName)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>Field type. Possible values are `String`, `Long`, `Int`, `Double`, and `Boolean`. (pattern: &lt;code&gt;^(String|Long|Int|Double|Boolean)$&lt;/code&gt;, example: String, x-pattern-message: Must be `String`, `Long`, `Int`, `Double` or `Boolean`) (wire: dataType)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the field is enabled and its values are being accepted. Possible values are `Enabled` and `Disabled`. (pattern: &lt;code&gt;^(Enabled|Disabled)$&lt;/code&gt;, example: Enabled, x-pattern-message: Must be `Enabled` or `Disabled`)</td>
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
    <td>Get the details of a built-in field.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Built-in fields are created automatically by Sumo Logic for standard configuration purposes. They include `_sourceHost` and `_sourceCategory`. Built-in fields can't be deleted or disabled.</td>
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
    <td>Identifier of a built-in field. (example: 000000000000000A)</td>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get the details of a built-in field.

```sql
SELECT
field_id,
field_name,
data_type,
state
FROM sumologic.fields.builtin_fields
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Built-in fields are created automatically by Sumo Logic for standard configuration purposes. They include `_sourceHost` and `_sourceCategory`. Built-in fields can't be deleted or disabled.

```sql
SELECT
field_id,
field_name,
data_type,
state
FROM sumologic.fields.builtin_fields
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
