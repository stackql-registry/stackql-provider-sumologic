--- 
title: admin_recommended_folder_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - admin_recommended_folder_jobs
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

Creates, updates, deletes, gets or lists an <code>admin_recommended_folder_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="admin_recommended_folder_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.content.admin_recommended_folder_jobs" /></td></tr>
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

Asynchronous Admin Recommended folder job status.

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
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the status of an asynchronous Admin Recommended folder job for the given job identifier. If job succeeds, use Admin Recommended Job Result endpoint to fetch top-level content items in Admin Recommended folder.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-isAdminMode"><code>isAdminMode</code></a></td>
    <td>Schedule an asynchronous job to get the top-level Admin Recommended content items. You can read more about Admin Recommended folder &#91;here&#93;(https:​//help.sumologic.com/Manage/Content_Sharing/Admin_Mode#move-important-content-to-admin-recommended).&lt;br /&gt;&lt;br /&gt;_You get back a identifier of asynchronous job in response to this endpoint. See Asynchronous-Request section for more details on how to work with asynchronous request._</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asynchronous Admin Recommended folder job. (wire: jobId)</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the status of an asynchronous Admin Recommended folder job for the given job identifier. If job succeeds, use Admin Recommended Job Result endpoint to fetch top-level content items in Admin Recommended folder.

```sql
SELECT
error,
status,
status_message
FROM sumologic.content.admin_recommended_folder_jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
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

Schedule an asynchronous job to get the top-level Admin Recommended content items. You can read more about Admin Recommended folder &#91;here&#93;(https:​//help.sumologic.com/Manage/Content_Sharing/Admin_Mode#move-important-content-to-admin-recommended).&lt;br /&gt;&lt;br /&gt;_You get back a identifier of asynchronous job in response to this endpoint. See Asynchronous-Request section for more details on how to work with asynchronous request._

```sql
EXEC sumologic.content.admin_recommended_folder_jobs.start 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set, 
@isAdminMode='{{ isAdminMode }}'
;
```
</TabItem>
</Tabs>
