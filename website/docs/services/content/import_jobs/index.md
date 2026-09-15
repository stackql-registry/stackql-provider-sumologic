--- 
title: import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - import_jobs
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

Creates, updates, deletes, gets or lists an <code>import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.content.import_jobs" /></td></tr>
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

The status of the import job.

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
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Whether or not the request is in progress (`InProgress`), has completed successfully (`Success`), or has completed with an error (`Failed`).</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional status message generated if the status is not `Failed`. (wire: statusMessage)</td>
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
    <td><a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-is_admin_mode"><code>is_admin_mode</code></a></td>
    <td>Get the status of a content import job for the given job identifier.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-folderId"><code>folderId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-isAdminMode"><code>isAdminMode</code></a>, <a href="#parameter-overwrite"><code>overwrite</code></a></td>
    <td>Schedule an asynchronous import of content inside an existing folder with the given identifier. Import requests can be used to create or update content within a folder. Content items need to have a unique name within their folder. If there is already a content item with the same name in the folder, you can set the `overwrite` parameter to `true` to overwrite existing content items. By default, the `overwrite` parameter is set to `false`, where the import will fail if a content item with the same name already exist. Keep in mind when importing large folders that there is a limit of 1000 content objects that can be imported at once. If you want to import more than 1000 content objects, then be sure to split the import into batches of 1000 objects or less.</td>
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
<tr id="parameter-folderId">
    <td><CopyableCode code="folderId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the folder to import into. Identifiers from the Library in the Sumo user interface are provided in decimal format which is incompatible with this API. The identifier needs to be in hexadecimal format.</td>
</tr>
<tr id="parameter-folder_id">
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the folder to import into. (wire: folderId)</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the import request. (wire: jobId)</td>
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
<tr id="parameter-is_admin_mode">
    <td><CopyableCode code="is_admin_mode" /></td>
    <td><code>string</code></td>
    <td>Set this to "true" if you want to perform the request as a Content Administrator. (wire: isAdminMode)</td>
</tr>
<tr id="parameter-overwrite">
    <td><CopyableCode code="overwrite" /></td>
    <td><code>boolean</code></td>
    <td>Set this to "true" to overwrite a content item if the name already exists.</td>
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

Get the status of a content import job for the given job identifier.

```sql
SELECT
error,
status,
status_message
FROM sumologic.content.import_jobs
WHERE folder_id = '{{ folder_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND is_admin_mode = '{{ is_admin_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="start"
    values={[
        { label: 'start', value: 'start' }
    ]}
>
<TabItem value="start">

Schedule an asynchronous import of content inside an existing folder with the given identifier. Import requests can be used to create or update content within a folder. Content items need to have a unique name within their folder. If there is already a content item with the same name in the folder, you can set the `overwrite` parameter to `true` to overwrite existing content items. By default, the `overwrite` parameter is set to `false`, where the import will fail if a content item with the same name already exist. Keep in mind when importing large folders that there is a limit of 1000 content objects that can be imported at once. If you want to import more than 1000 content objects, then be sure to split the import into batches of 1000 objects or less.

```sql
EXEC sumologic.content.import_jobs.start 
@folderId='{{ folderId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set, 
@isAdminMode='{{ isAdminMode }}', 
@overwrite={{ overwrite }} 
@@json=
'{
"type": "{{ type }}", 
"name": "{{ name }}"
}'
;
```
</TabItem>
</Tabs>
