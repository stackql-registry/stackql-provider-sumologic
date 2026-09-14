--- 
title: items
hide_title: false
hide_table_of_contents: false
keywords:
  - items
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

Creates, updates, deletes, gets or lists an <code>items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.content.items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_path"
    values={[
        { label: 'get_by_path', value: 'get_by_path' }
    ]}
>
<TabItem value="get_by_path">

Content item corresponding to the given path.

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
    <td><a href="#get_by_path"><CopyableCode code="get_by_path" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a content item corresponding to the given path.&lt;br /&gt;&lt;br /&gt;_Path is specified in the required query parameter `path`. The path should be URL encoded._ For example, to get "Acme Corp" folder of a user "user@sumo.com" you can use the following curl command:&lt;br /&gt;  ```bash&lt;br /&gt;  curl https:​//api.sumologic.com/api/v2/content/path?path=/Library/Users/user%40sumo.com/Acme%20Corp&lt;br /&gt;  ```&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;The absolute path to a content item should be specified to get the item. The content library has "Library" folder at the root level. For items in "Personal" folder, the base path is "/Library/Users/user@sumo.com" where "user@sumo.com" is the email address of the user. For example if a user with email address `wile@acme.com` has `Rockets` folder inside Personal folder, the path of Rockets folder will be `/Library/Users/wile@acme.com/Rockets`.&lt;br /&gt;&lt;br /&gt;For items in "Admin Recommended" folder, the base path is "/Library/Admin Recommended". For example, given a folder `Acme` in Admin Recommended folder, the path will be `/Library/Admin Recommended/Acme`.</td>
</tr>
<tr>
    <td><a href="#move"><CopyableCode code="move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-destinationFolderId"><code>destinationFolderId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-isAdminMode"><code>isAdminMode</code></a></td>
    <td>Moves an item from its current location to another folder.&lt;br /&gt;</td>
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
<tr id="parameter-destinationFolderId">
    <td><CopyableCode code="destinationFolderId" /></td>
    <td><code>string</code></td>
    <td>Identifier of the destination folder.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the item the user wants to move.</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Path of the content item to retrieve. (example: /Library/Users/user@sumo.com/SampleFolder)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-isAdminMode">
    <td><CopyableCode code="isAdminMode" /></td>
    <td><code>string</code></td>
    <td>Set this to "true" if you want to perform the request as a Content Administrator.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_by_path"
    values={[
        { label: 'get_by_path', value: 'get_by_path' }
    ]}
>
<TabItem value="get_by_path">

Get a content item corresponding to the given path.&lt;br /&gt;&lt;br /&gt;_Path is specified in the required query parameter `path`. The path should be URL encoded._ For example, to get "Acme Corp" folder of a user "user@sumo.com" you can use the following curl command:&lt;br /&gt;  ```bash&lt;br /&gt;  curl https:​//api.sumologic.com/api/v2/content/path?path=/Library/Users/user%40sumo.com/Acme%20Corp&lt;br /&gt;  ```&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;The absolute path to a content item should be specified to get the item. The content library has "Library" folder at the root level. For items in "Personal" folder, the base path is "/Library/Users/user@sumo.com" where "user@sumo.com" is the email address of the user. For example if a user with email address `wile@acme.com` has `Rockets` folder inside Personal folder, the path of Rockets folder will be `/Library/Users/wile@acme.com/Rockets`.&lt;br /&gt;&lt;br /&gt;For items in "Admin Recommended" folder, the base path is "/Library/Admin Recommended". For example, given a folder `Acme` in Admin Recommended folder, the path will be `/Library/Admin Recommended/Acme`.

```sql
SELECT
id,
name,
parent_id,
created_at,
created_by,
description,
is_scheduled,
item_type,
modified_at,
modified_by,
permissions
FROM sumologic.content.items
WHERE path = '{{ path }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="move"
    values={[
        { label: 'move', value: 'move' }
    ]}
>
<TabItem value="move">

Moves an item from its current location to another folder.&lt;br /&gt;

```sql
EXEC sumologic.content.items.move 
@destinationFolderId='{{ destinationFolderId }}' --required, 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set, 
@isAdminMode='{{ isAdminMode }}'
;
```
</TabItem>
</Tabs>
