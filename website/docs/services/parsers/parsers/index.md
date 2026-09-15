--- 
title: parsers
hide_title: false
hide_table_of_contents: false
keywords:
  - parsers
  - parsers
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

Creates, updates, deletes, gets or lists a <code>parsers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parsers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.parsers.parsers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'get_by_path', value: 'get_by_path' }
    ]}
>
<TabItem value="get">

Requested folder or parser.

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
    <td>Identifier of the folder or parser.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the folder or parser.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent folder. (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>Type of the content. Valid values:   1) Folder   2) Parser  (wire: contentType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format.  (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the folder or parser.</td>
</tr>
<tr>
    <td><CopyableCode code="is_locked" /></td>
    <td><code>boolean</code></td>
    <td>Whether the object is locked. (wire: isLocked)</td>
</tr>
<tr>
    <td><CopyableCode code="is_mutable" /></td>
    <td><code>boolean</code></td>
    <td>Immutable objects are "READ-ONLY". (wire: isMutable)</td>
</tr>
<tr>
    <td><CopyableCode code="is_system" /></td>
    <td><code>boolean</code></td>
    <td>System objects are objects provided by Sumo Logic. System objects can only be localized. Non-local fields can't be updated. (wire: isSystem)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the object model.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version of the folder or parser.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_by_path">

Requested folder or parser.

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
    <td>Identifier of the folder or parser.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the folder or parser.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent folder. (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>Type of the content. Valid values:   1) Folder   2) Parser  (wire: contentType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format.  (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the folder or parser.</td>
</tr>
<tr>
    <td><CopyableCode code="is_locked" /></td>
    <td><code>boolean</code></td>
    <td>Whether the object is locked. (wire: isLocked)</td>
</tr>
<tr>
    <td><CopyableCode code="is_mutable" /></td>
    <td><code>boolean</code></td>
    <td>Immutable objects are "READ-ONLY". (wire: isMutable)</td>
</tr>
<tr>
    <td><CopyableCode code="is_system" /></td>
    <td><code>boolean</code></td>
    <td>System objects are objects provided by Sumo Logic. System objects can only be localized. Non-local fields can't be updated. (wire: isSystem)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the object model.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version of the folder or parser.</td>
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
    <td>Read a folder or parser.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#get_by_path"><CopyableCode code="get_by_path" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Read a folder or parser by its path.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parent_id"><code>parent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a folder or parser.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Update a folder or parser.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a folder or parser.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#read_by_ids"><CopyableCode code="read_by_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Bulk read folders and parsers by the given identifiers from the library.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete_by_ids"><CopyableCode code="delete_by_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Bulk delete folders and parsers by the given identifiers from the library.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#lock"><CopyableCode code="lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Locking requires the `LockParsers` capability. When an object is locked, it can't be moved or deleted and only the local fields can be modified. Locking recursively locks all of the objects children.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#unlock"><CopyableCode code="unlock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Unlocking requires the `LockParsers` capability. It is only possible to unlock the highest locked object in a tree of locked objects. Unlocking recursively unlocks all of the objects children.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#move"><CopyableCode code="move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-parentId"><code>parentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Move a folder or parser.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#copy"><CopyableCode code="copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-parentId"><code>parentId</code></a></td>
    <td></td>
    <td>Copy a folder or parser.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-preserveLock"><code>preserveLock</code></a></td>
    <td>Export a folder or parser.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-parentId"><code>parentId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Import a folder or parser&lt;br /&gt;</td>
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
    <td>Identifier of the folder or parser to export.</td>
</tr>
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>array</code></td>
    <td>A comma-separated list of identifiers.</td>
</tr>
<tr id="parameter-parentId">
    <td><CopyableCode code="parentId" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent folder in which to import the folder or parser.</td>
</tr>
<tr id="parameter-parent_id">
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent folder in which to create the folder or parser. (wire: parentId)</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path of the folder or parser.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-preserveLock">
    <td><CopyableCode code="preserveLock" /></td>
    <td><code>boolean</code></td>
    <td>Set this to true if you want to export an object and preserve the locked status. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'get_by_path', value: 'get_by_path' }
    ]}
>
<TabItem value="get">

Read a folder or parser.&lt;br /&gt;

```sql
SELECT
id,
name,
parent_id,
content_type,
created_at,
created_by,
description,
is_locked,
is_mutable,
is_system,
modified_at,
modified_by,
type,
version
FROM sumologic.parsers.parsers
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="get_by_path">

Read a folder or parser by its path.&lt;br /&gt;

```sql
SELECT
id,
name,
parent_id,
content_type,
created_at,
created_by,
description,
is_locked,
is_mutable,
is_system,
modified_at,
modified_by,
type,
version
FROM sumologic.parsers.parsers
WHERE path = '{{ path }}' -- required
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

Create a folder or parser.&lt;br /&gt;

```sql
INSERT INTO sumologic.parsers.parsers (
name,
description,
type,
is_locked,
parent_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}' /* required */,
'{{ type }}' /* required */,
{{ is_locked }},
'{{ parent_id }}',
'{{ region }}'
RETURNING
id,
name,
parent_id,
content_type,
created_at,
created_by,
description,
is_locked,
is_mutable,
is_system,
modified_at,
modified_by,
type,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: parsers
  props:
    - name: parent_id
      value: "{{ parent_id }}"
      description: Required parameter for the parsers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the parsers resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the folder or parser.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the folder or parser.
    - name: type
      value: "{{ type }}"
      description: |
        Type of the object model.
    - name: is_locked
      value: {{ is_locked }}
      description: |
        Locking/Unlocking requires the \`LockParsers\` capability. Locked objects can only be \`Localized\`. Updating or moving requires unlocking the object. Locking/Unlocking recursively locks all of the objects children. All children of a locked object must be locked.
      default: false
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

Update a folder or parser.&lt;br /&gt;

```sql
UPDATE sumologic.parsers.parsers
SET 
name = '{{ name }}',
description = '{{ description }}',
version = {{ version }},
type = '{{ type }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND description = '{{ description }}' --required
AND name = '{{ name }}' --required
AND version = '{{ version }}' --required
RETURNING
id,
name,
parent_id,
content_type,
created_at,
created_by,
description,
is_locked,
is_mutable,
is_system,
modified_at,
modified_by,
type,
version;
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

Delete a folder or parser.&lt;br /&gt;

```sql
DELETE FROM sumologic.parsers.parsers
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="read_by_ids"
    values={[
        { label: 'read_by_ids', value: 'read_by_ids' },
        { label: 'delete_by_ids', value: 'delete_by_ids' },
        { label: 'lock', value: 'lock' },
        { label: 'unlock', value: 'unlock' },
        { label: 'move', value: 'move' },
        { label: 'copy', value: 'copy' },
        { label: 'export', value: 'export' },
        { label: 'import', value: 'import' }
    ]}
>
<TabItem value="read_by_ids">

Bulk read folders and parsers by the given identifiers from the library.&lt;br /&gt;

```sql
EXEC sumologic.parsers.parsers.read_by_ids 
@ids='{{ ids }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="delete_by_ids">

Bulk delete folders and parsers by the given identifiers from the library.&lt;br /&gt;

```sql
EXEC sumologic.parsers.parsers.delete_by_ids 
@ids='{{ ids }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="lock">

Locking requires the `LockParsers` capability. When an object is locked, it can't be moved or deleted and only the local fields can be modified. Locking recursively locks all of the objects children.&lt;br /&gt;

```sql
EXEC sumologic.parsers.parsers.lock 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="unlock">

Unlocking requires the `LockParsers` capability. It is only possible to unlock the highest locked object in a tree of locked objects. Unlocking recursively unlocks all of the objects children.&lt;br /&gt;

```sql
EXEC sumologic.parsers.parsers.unlock 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="move">

Move a folder or parser.&lt;br /&gt;

```sql
EXEC sumologic.parsers.parsers.move 
@id='{{ id }}' --required, 
@parentId='{{ parentId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="copy">

Copy a folder or parser.&lt;br /&gt;

```sql
EXEC sumologic.parsers.parsers.copy 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"parentId": "{{ parentId }}", 
"name": "{{ name }}", 
"description": "{{ description }}"
}'
;
```
</TabItem>
<TabItem value="export">

Export a folder or parser.

```sql
EXEC sumologic.parsers.parsers.export 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set, 
@preserveLock={{ preserveLock }}
;
```
</TabItem>
<TabItem value="import">

Import a folder or parser&lt;br /&gt;

```sql
EXEC sumologic.parsers.parsers.import 
@parentId='{{ parentId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"name": "{{ name }}", 
"description": "{{ description }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
</Tabs>
