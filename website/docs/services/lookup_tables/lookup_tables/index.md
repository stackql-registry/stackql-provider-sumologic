--- 
title: lookup_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - lookup_tables
  - lookup_tables
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

Creates, updates, deletes, gets or lists a <code>lookup_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lookup_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.lookup_tables.lookup_tables" /></td></tr>
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

Definition of the lookup table.

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
    <td>Identifier of the lookup table as a content item. (example: 0000000001C41EE4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the lookup table. (example: SampleLookupTable)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_folder_id" /></td>
    <td><code>string</code></td>
    <td>The parent-folder-path identifier of the lookup table in the Library. (example: 0000000001C41EE4) (wire: parentFolderId)</td>
</tr>
<tr>
    <td><CopyableCode code="content_path" /></td>
    <td><code>string</code></td>
    <td>Address/path of the parent folder of this lookup table in content library. For example, a lookup table existing  in the personal/lookupTable folder for user johndoe would be: /Library/Users/johndoe@acme.com/lookupTable (example: /Library/Users/johndoe@acme.com/lookupTable) (wire: contentPath)</td>
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
    <td>The description of the lookup table. (example: This is a sample lookup table description.)</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The list of fields in the lookup table.</td>
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
    <td><CopyableCode code="primary_keys" /></td>
    <td><code>array</code></td>
    <td>The names of the fields that make up the primary key for the lookup table. These will be a subset of the fields that the table will contain. (wire: primaryKeys)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current size of the lookup table in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="size_limit_action" /></td>
    <td><code>string</code></td>
    <td>The action that needs to be taken when the size limit is reached for the table. The possible values can be `StopIncomingMessages` or `DeleteOldData`. DeleteOldData will start deleting old data once size limit is reached whereas StopIncomingMessages will discard all the updates made to the lookup table once size limit is reached. (pattern: &lt;code&gt;^(StopIncomingMessages|DeleteOldData)$&lt;/code&gt;, example: DeleteOldData, default: StopIncomingMessages, x-pattern-message: must be either `StopIncomingMessages` or `DeleteOldData`) (wire: sizeLimitAction)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer (int32)</code></td>
    <td>A time to live for each entry in the lookup table (in minutes). 365 days is the maximum time to live for each entry that you can specify. Setting it to 0 means that the records will not expire automatically.</td>
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
    <td>Get a lookup table for the given identifier.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-parent_folder_id"><code>parent_folder_id</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-primary_keys"><code>primary_keys</code></a></td>
    <td></td>
    <td>Create a new lookup table by providing a schema and specifying its configuration. Providing parentFolderId&lt;br /&gt; is mandatory. Use the getItemByPath endpoint to get content id of a path.&lt;br /&gt;Please check Content management API and Folder management API for all available options.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-ttl"><code>ttl</code></a></td>
    <td></td>
    <td>Edit the lookup table data. All the fields are mandatory in the request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a lookup table completely. &lt;br /&gt; **Warning:** `This operation cannot be undone`.</td>
</tr>
<tr>
    <td><a href="#truncate"><CopyableCode code="truncate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete all data from a lookup table.</td>
</tr>
<tr>
    <td><a href="#upsert_row"><CopyableCode code="upsert_row" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-row"><code>row</code></a></td>
    <td></td>
    <td>Insert or update a row of a lookup table with the given identifier. A new row is inserted if the primary key does not exist already, otherwise the existing row with the specified primary key is updated. All the fields of the lookup table are required and will be updated to the given values. In case a field is not specified then it will be assumed to be set to null. If the table size exceeds the maximum limit of 100MB then based on the size limit action of the table the update will be processed or discarded.</td>
</tr>
<tr>
    <td><a href="#delete_row"><CopyableCode code="delete_row" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-primaryKey"><code>primaryKey</code></a></td>
    <td></td>
    <td>Delete a row from lookup table by providing the row's primary keys' values. The complete set of primary key fields of the lookup table should be provided.</td>
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
    <td>Identifier of the lookup table.</td>
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

Get a lookup table for the given identifier.

```sql
SELECT
id,
name,
parent_folder_id,
content_path,
created_at,
created_by,
description,
fields,
modified_at,
modified_by,
primary_keys,
size,
size_limit_action,
ttl
FROM sumologic.lookup_tables.lookup_tables
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

Create a new lookup table by providing a schema and specifying its configuration. Providing parentFolderId&lt;br /&gt; is mandatory. Use the getItemByPath endpoint to get content id of a path.&lt;br /&gt;Please check Content management API and Folder management API for all available options.

```sql
INSERT INTO sumologic.lookup_tables.lookup_tables (
description,
fields,
primary_keys,
ttl,
size_limit_action,
name,
parent_folder_id,
region
)
SELECT 
'{{ description }}' /* required */,
'{{ fields }}' /* required */,
'{{ primary_keys }}' /* required */,
{{ ttl }},
'{{ size_limit_action }}',
'{{ name }}' /* required */,
'{{ parent_folder_id }}' /* required */,
'{{ region }}'
RETURNING
id,
name,
parent_folder_id,
content_path,
created_at,
created_by,
description,
fields,
modified_at,
modified_by,
primary_keys,
size,
size_limit_action,
ttl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lookup_tables
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lookup_tables resource.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the lookup table.
    - name: fields
      description: |
        The list of fields in the lookup table.
      value:
        - fieldName: "{{ fieldName }}"
          fieldType: "{{ fieldType }}"
    - name: primary_keys
      value:
        - "{{ primary_keys }}"
      description: |
        The names of the fields that make up the primary key for the lookup table. These will be a subset of the fields that the table will contain.
    - name: ttl
      value: {{ ttl }}
      description: |
        A time to live for each entry in the lookup table (in minutes). 365 days is the maximum time to live for each entry that you can specify. Setting it to 0 means that the records will not expire automatically.
      default: 0
    - name: size_limit_action
      value: "{{ size_limit_action }}"
      description: |
        The action that needs to be taken when the size limit is reached for the table. The possible values can be \`StopIncomingMessages\` or \`DeleteOldData\`. DeleteOldData will start deleting old data once size limit is reached whereas StopIncomingMessages will discard all the updates made to the lookup table once size limit is reached.
      default: StopIncomingMessages
    - name: name
      value: "{{ name }}"
      description: |
        The name of the lookup table.
    - name: parent_folder_id
      value: "{{ parent_folder_id }}"
      description: |
        The parent-folder-path identifier of the lookup table in the Library.
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

Edit the lookup table data. All the fields are mandatory in the request.

```sql
UPDATE sumologic.lookup_tables.lookup_tables
SET 
ttl = {{ ttl }},
description = '{{ description }}',
size_limit_action = '{{ size_limit_action }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND description = '{{ description }}' --required
AND ttl = '{{ ttl }}' --required
RETURNING
id,
name,
parent_folder_id,
content_path,
created_at,
created_by,
description,
fields,
modified_at,
modified_by,
primary_keys,
size,
size_limit_action,
ttl;
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

Delete a lookup table completely. &lt;br /&gt; **Warning:** `This operation cannot be undone`.

```sql
DELETE FROM sumologic.lookup_tables.lookup_tables
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="truncate"
    values={[
        { label: 'truncate', value: 'truncate' },
        { label: 'upsert_row', value: 'upsert_row' },
        { label: 'delete_row', value: 'delete_row' }
    ]}
>
<TabItem value="truncate">

Delete all data from a lookup table.

```sql
EXEC sumologic.lookup_tables.lookup_tables.truncate 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="upsert_row">

Insert or update a row of a lookup table with the given identifier. A new row is inserted if the primary key does not exist already, otherwise the existing row with the specified primary key is updated. All the fields of the lookup table are required and will be updated to the given values. In case a field is not specified then it will be assumed to be set to null. If the table size exceeds the maximum limit of 100MB then based on the size limit action of the table the update will be processed or discarded.

```sql
EXEC sumologic.lookup_tables.lookup_tables.upsert_row 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"row": "{{ row }}"
}'
;
```
</TabItem>
<TabItem value="delete_row">

Delete a row from lookup table by providing the row's primary keys' values. The complete set of primary key fields of the lookup table should be provided.

```sql
EXEC sumologic.lookup_tables.lookup_tables.delete_row 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"primaryKey": "{{ primaryKey }}"
}'
;
```
</TabItem>
</Tabs>
