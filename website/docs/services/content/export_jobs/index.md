--- 
title: export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - export_jobs
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

Creates, updates, deletes, gets or lists an <code>export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.content.export_jobs" /></td></tr>
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

The status of the export job.

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
    <td><a href="#parameter-content_id"><code>content_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-is_admin_mode"><code>is_admin_mode</code></a></td>
    <td>Get the status of an asynchronous content export request for the given job identifier. On success, use the getExportResult endpoint to get the result of the export job.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-isAdminMode"><code>isAdminMode</code></a></td>
    <td>Schedule an _asynchronous_ export of content with the given identifier. You will get back an asynchronous job identifier on success. Use the getAsyncExportStatus endpoint and the job identifier you got back in the response to track the status of an asynchronous export job.&lt;br /&gt;If the content item is a folder, everything under the folder is exported recursively. Keep in mind when exporting large folders that there is a limit of 1000 content objects that can be exported at once. If you want to import more than 1000 content objects, then be sure to split the import into batches of 1000 objects or less.&lt;br /&gt;The results from the export are compatible with the Library import feature in the Sumo Logic user interface as well as the API content import job.</td>
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
<tr id="parameter-content_id">
    <td><CopyableCode code="content_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the exported content item. (wire: contentId)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the content item to export. Identifiers from the Library in the Sumo user interface are provided in decimal format which is incompatible with this API. The identifier needs to be in hexadecimal format.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asynchronous export job. (wire: jobId)</td>
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

Get the status of an asynchronous content export request for the given job identifier. On success, use the getExportResult endpoint to get the result of the export job.

```sql
SELECT
error,
status,
status_message
FROM sumologic.content.export_jobs
WHERE content_id = '{{ content_id }}' -- required
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

Schedule an _asynchronous_ export of content with the given identifier. You will get back an asynchronous job identifier on success. Use the getAsyncExportStatus endpoint and the job identifier you got back in the response to track the status of an asynchronous export job.&lt;br /&gt;If the content item is a folder, everything under the folder is exported recursively. Keep in mind when exporting large folders that there is a limit of 1000 content objects that can be exported at once. If you want to import more than 1000 content objects, then be sure to split the import into batches of 1000 objects or less.&lt;br /&gt;The results from the export are compatible with the Library import feature in the Sumo Logic user interface as well as the API content import job.

```sql
EXEC sumologic.content.export_jobs.start 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set, 
@isAdminMode='{{ isAdminMode }}'
;
```
</TabItem>
</Tabs>
