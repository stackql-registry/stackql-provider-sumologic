--- 
title: folders
hide_title: false
hide_table_of_contents: false
keywords:
  - folders
  - content
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

Creates, updates, deletes, gets or lists a <code>folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.content.folders" /></td></tr>
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

Folder that was requested.

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
    <td>Identifier of the content item. (example: 000000000C1C17C6)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the content item. (example: Personal)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent content item. (example: 0000000001C41EF2) (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="children" /></td>
    <td><code>array</code></td>
    <td>A list of the content items.</td>
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
    <td>Description of the content item. (example: Personal folder for John Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="is_scheduled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the content item refers to scheduled search. This field is only relevant to `Search` content type. (wire: isScheduled)</td>
</tr>
<tr>
    <td><CopyableCode code="item_type" /></td>
    <td><code>string</code></td>
    <td>Type of the content item. Supported values are:   1. Folder   2. Search   3. Report (for old dashboards)   4. Dashboard (for new dashboards)   5. Lookups (example: Folder) (wire: itemType)</td>
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
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>List of permissions the user has on the content item.</td>
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
    <td><a href="#parameter-is_admin_mode"><code>is_admin_mode</code></a></td>
    <td>Get a folder with the given identifier. Set the header parameter `isAdminMode` to `"true"` if fetching a folder inside "Admin Recommended" folder.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-parent_id"><code>parent_id</code></a></td>
    <td><a href="#parameter-is_admin_mode"><code>is_admin_mode</code></a></td>
    <td>Creates a new folder under the given parent folder. Set the header parameter `isAdminMode` to `"true"` to create a folder inside "Admin Recommended" folder.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-is_admin_mode"><code>is_admin_mode</code></a></td>
    <td>Update an existing folder with the given identifier. Set the header parameter `isAdminMode` to `"true"` if updating a folder inside "Admin Recommended" folder.</td>
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
    <td>Identifier of the folder to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-is_admin_mode">
    <td><CopyableCode code="is_admin_mode" /></td>
    <td><code>string</code></td>
    <td>Set this to "true" if you want to perform the request as a Content Administrator. (wire: isAdminMode)</td>
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

Get a folder with the given identifier. Set the header parameter `isAdminMode` to `"true"` if fetching a folder inside "Admin Recommended" folder.

```sql
SELECT
id,
name,
parent_id,
children,
created_at,
created_by,
description,
is_scheduled,
item_type,
modified_at,
modified_by,
permissions
FROM sumologic.content.folders
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND is_admin_mode = '{{ is_admin_mode }}'
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

Creates a new folder under the given parent folder. Set the header parameter `isAdminMode` to `"true"` to create a folder inside "Admin Recommended" folder.

```sql
INSERT INTO sumologic.content.folders (
name,
description,
parent_id,
region,
is_admin_mode
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ parent_id }}' /* required */,
'{{ region }}',
'{{ is_admin_mode }}'
RETURNING
id,
name,
parent_id,
children,
created_at,
created_by,
description,
is_scheduled,
item_type,
modified_at,
modified_by,
permissions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: folders
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the folders resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the folder.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the folder.
    - name: parent_id
      value: "{{ parent_id }}"
      description: |
        The identifier of the parent folder.
    - name: is_admin_mode
      value: "{{ is_admin_mode }}"
      description: Set this to "true" if you want to perform the request as a Content Administrator.
      description: Set this to "true" if you want to perform the request as a Content Administrator.
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

Update an existing folder with the given identifier. Set the header parameter `isAdminMode` to `"true"` if updating a folder inside "Admin Recommended" folder.

```sql
UPDATE sumologic.content.folders
SET 
name = '{{ name }}',
description = '{{ description }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND name = '{{ name }}' --required
AND is_admin_mode = '{{ is_admin_mode}}'
RETURNING
id,
name,
parent_id,
children,
created_at,
created_by,
description,
is_scheduled,
item_type,
modified_at,
modified_by,
permissions;
```
</TabItem>
</Tabs>
