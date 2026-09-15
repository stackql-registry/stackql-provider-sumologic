--- 
title: fields
hide_title: false
hide_table_of_contents: false
keywords:
  - fields
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

Creates, updates, deletes, gets or lists a <code>fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.fields.fields" /></td></tr>
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

The details of the custom field.

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

List of all custom fields.

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
    <td>Get the details of a custom field.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Request a list of all the custom fields configured in your account.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-field_name"><code>field_name</code></a></td>
    <td></td>
    <td>Adding a field will define it in the Fields schema allowing it to be assigned as metadata to your logs.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deleting a field does not delete historical data assigned with that field. If you  delete a field by mistake and one or more of those dependencies break, you can  re-add the field to get things working properly again. You should always disable  a field and ensure things are behaving as expected before deleting a field.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fields have to be enabled to be assigned to your data. This operation ensures that a specified field is enabled and Sumo Logic will treat it as safe to process. All manually created custom fields are  enabled by default.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>After disabling a field Sumo Logic will start dropping its incoming values at ingest. As a result, they won't be searchable or usable. Historical values are not removed and remain searchable.</td>
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
    <td>Identifier of a field to disable. (example: 00000000031D02DA)</td>
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

Get the details of a custom field.

```sql
SELECT
field_id,
field_name,
data_type,
state
FROM sumologic.fields.fields
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Request a list of all the custom fields configured in your account.

```sql
SELECT
field_id,
field_name,
data_type,
state
FROM sumologic.fields.fields
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
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

Adding a field will define it in the Fields schema allowing it to be assigned as metadata to your logs.

```sql
INSERT INTO sumologic.fields.fields (
field_name,
region
)
SELECT 
'{{ field_name }}' /* required */,
'{{ region }}'
RETURNING
field_id,
field_name,
data_type,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fields
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fields resource.
    - name: field_name
      value: "{{ field_name }}"
      description: |
        Field name.
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

Deleting a field does not delete historical data assigned with that field. If you  delete a field by mistake and one or more of those dependencies break, you can  re-add the field to get things working properly again. You should always disable  a field and ensure things are behaving as expected before deleting a field.

```sql
DELETE FROM sumologic.fields.fields
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="enable"
    values={[
        { label: 'enable', value: 'enable' },
        { label: 'disable', value: 'disable' }
    ]}
>
<TabItem value="enable">

Fields have to be enabled to be assigned to your data. This operation ensures that a specified field is enabled and Sumo Logic will treat it as safe to process. All manually created custom fields are  enabled by default.

```sql
EXEC sumologic.fields.fields.enable 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="disable">

After disabling a field Sumo Logic will start dropping its incoming values at ingest. As a result, they won't be searchable or usable. Historical values are not removed and remain searchable.

```sql
EXEC sumologic.fields.fields.disable 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
