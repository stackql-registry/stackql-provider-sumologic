--- 
title: muting_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - muting_schedules
  - muting_schedules
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

Creates, updates, deletes, gets or lists a <code>muting_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="muting_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.muting_schedules.muting_schedules" /></td></tr>
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

Requested mutingschedule or folder.

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
    <td>Identifier of the mutingschedule or folder.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier of the mutingschedule or folder.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent folder. (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>Type of the content. Valid values:   1) Mutingschedule   2) Folder (wire: contentType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the mutingschedule or folder.</td>
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
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>Aggregated permission summary for the calling user. If detailed permission statements are required, please call list permissions endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the object model.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version of the mutingschedule or folder.</td>
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
    <td>Get a mutingschedule or folder from the mutingSchedules library.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parent_id"><code>parent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a mutingschedule or folder in the mutingSchedules library.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Update a mutingschedule or folder in the mutingSchedules library.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a mutingschedule or folder from the mutingSchedules library.</td>
</tr>
<tr>
    <td><a href="#read_by_ids"><CopyableCode code="read_by_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipChildren"><code>skipChildren</code></a></td>
    <td>Bulk read a mutingschedule or folder by the given identifiers from the mutingSchedules library.</td>
</tr>
<tr>
    <td><a href="#delete_by_ids"><CopyableCode code="delete_by_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Bulk delete a mutingschedule or folder by the given identifiers in the mutingSchedules library.</td>
</tr>
<tr>
    <td><a href="#copy"><CopyableCode code="copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-parentId"><code>parentId</code></a></td>
    <td></td>
    <td>Copy a mutingschedule or folder in the mutingSchedules library.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Export a mutingschedule or folder. If the given identifier is a folder, everything under the folder is exported recursively with folder as the root.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-parentId"><code>parentId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Import a mutingschedule or folder.</td>
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
    <td>Identifier of the mutingschedule or folder to export.</td>
</tr>
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>array</code></td>
    <td>A comma-separated list of identifiers. (example: 0000000000000001,0000000000000002,0000000000000003)</td>
</tr>
<tr id="parameter-parentId">
    <td><CopyableCode code="parentId" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent folder in which to import the mutingschedule or folder.</td>
</tr>
<tr id="parameter-parent_id">
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent folder in which to create the mutingschedule or folder. (wire: parentId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-skipChildren">
    <td><CopyableCode code="skipChildren" /></td>
    <td><code>boolean</code></td>
    <td>a boolean parameter to control skipping fetching children of requested folder(s)</td>
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

Get a mutingschedule or folder from the mutingSchedules library.

```sql
SELECT
id,
name,
parent_id,
content_type,
created_at,
created_by,
description,
is_mutable,
is_system,
modified_at,
modified_by,
permissions,
type,
version
FROM sumologic.muting_schedules.muting_schedules
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

Create a mutingschedule or folder in the mutingSchedules library.

```sql
INSERT INTO sumologic.muting_schedules.muting_schedules (
name,
description,
type,
parent_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ type }}' /* required */,
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
is_mutable,
is_system,
modified_at,
modified_by,
permissions,
type,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: muting_schedules
  props:
    - name: parent_id
      value: "{{ parent_id }}"
      description: Required parameter for the muting_schedules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the muting_schedules resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the mutingschedule or folder.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the mutingschedule or folder.
      default: 
    - name: type
      value: "{{ type }}"
      description: |
        Type of the object model. Valid values:
        1) MutingSchedulesLibraryMutingschedule
        2) MutingSchedulesLibraryFolder
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

Update a mutingschedule or folder in the mutingSchedules library.

```sql
UPDATE sumologic.muting_schedules.muting_schedules
SET 
name = '{{ name }}',
description = '{{ description }}',
version = {{ version }},
type = '{{ type }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND name = '{{ name }}' --required
AND type = '{{ type }}' --required
AND version = '{{ version }}' --required
RETURNING
id,
name,
parent_id,
content_type,
created_at,
created_by,
description,
is_mutable,
is_system,
modified_at,
modified_by,
permissions,
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

Delete a mutingschedule or folder from the mutingSchedules library.

```sql
DELETE FROM sumologic.muting_schedules.muting_schedules
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
        { label: 'copy', value: 'copy' },
        { label: 'export', value: 'export' },
        { label: 'import', value: 'import' }
    ]}
>
<TabItem value="read_by_ids">

Bulk read a mutingschedule or folder by the given identifiers from the mutingSchedules library.

```sql
EXEC sumologic.muting_schedules.muting_schedules.read_by_ids 
@ids='{{ ids }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set, 
@skipChildren={{ skipChildren }}
;
```
</TabItem>
<TabItem value="delete_by_ids">

Bulk delete a mutingschedule or folder by the given identifiers in the mutingSchedules library.

```sql
EXEC sumologic.muting_schedules.muting_schedules.delete_by_ids 
@ids='{{ ids }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="copy">

Copy a mutingschedule or folder in the mutingSchedules library.

```sql
EXEC sumologic.muting_schedules.muting_schedules.copy 
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

Export a mutingschedule or folder. If the given identifier is a folder, everything under the folder is exported recursively with folder as the root.

```sql
EXEC sumologic.muting_schedules.muting_schedules.export 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="import">

Import a mutingschedule or folder.

```sql
EXEC sumologic.muting_schedules.muting_schedules.import 
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
