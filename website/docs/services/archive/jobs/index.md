--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - archive
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.archive.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A paginated list of ingestion jobs for an Archive Source.

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
    <td>The unique identifier of the ingestion job. (example: 4e214571-cf27-4114-93e6-69a98c017f3)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation timestamp in UTC of the ingestion job. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the ingestion job. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ending timestamp of the ingestion job. (example: 2018-10-16T10:10:00.000Z) (wire: endTime)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The starting timestamp of the ingestion job. (example: 2018-10-16T09:10:00.000Z) (wire: startTime)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ingestion job, either `Pending`,`Scanning`,`Ingesting`,`Failed`, or `Succeeded`. (example: Scanning)</td>
</tr>
<tr>
    <td><CopyableCode code="total_bytes_ingested" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total bytes ingested by the ingestion job. (wire: totalBytesIngested)</td>
</tr>
<tr>
    <td><CopyableCode code="total_objects_ingested" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of objects ingested by the ingestion job. (wire: totalObjectsIngested)</td>
</tr>
<tr>
    <td><CopyableCode code="total_objects_scanned" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of objects scanned by the ingestion job. (wire: totalObjectsScanned)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-source_id"><code>source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all the ingestion jobs created on an Archive Source. The response is paginated with a default limit of 10 jobs per page.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-source_id"><code>source_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-end_time"><code>end_time</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-start_time"><code>start_time</code></a></td>
    <td></td>
    <td>Create an ingestion job to pull data from your S3 bucket.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-source_id"><code>source_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an ingestion job with the given identifier from the organization. The delete operation is only possible for jobs with a Succeeded or Failed status.</td>
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
    <td>The identifier of the ingestion job to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-source_id">
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Archive Source. (wire: sourceId)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of jobs returned in the response. The number of jobs returned may be less than the `limit`.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results. `token` is set to null when no more pages are left.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get a list of all the ingestion jobs created on an Archive Source. The response is paginated with a default limit of 10 jobs per page.

```sql
SELECT
id,
name,
created_at,
created_by,
end_time,
start_time,
status,
total_bytes_ingested,
total_objects_ingested,
total_objects_scanned
FROM sumologic.archive.jobs
WHERE source_id = '{{ source_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
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

Create an ingestion job to pull data from your S3 bucket.

```sql
INSERT INTO sumologic.archive.jobs (
name,
start_time,
end_time,
source_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ start_time }}' /* required */,
'{{ end_time }}' /* required */,
'{{ source_id }}',
'{{ region }}'
RETURNING
id,
name,
created_at,
created_by,
end_time,
start_time,
status,
total_bytes_ingested,
total_objects_ingested,
total_objects_scanned
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: source_id
      value: "{{ source_id }}"
      description: Required parameter for the jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the ingestion job.
    - name: start_time
      value: "{{ start_time }}"
      description: |
        The starting timestamp of the ingestion job.
    - name: end_time
      value: "{{ end_time }}"
      description: |
        The ending timestamp of the ingestion job.
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

Delete an ingestion job with the given identifier from the organization. The delete operation is only possible for jobs with a Succeeded or Failed status.

```sql
DELETE FROM sumologic.archive.jobs
WHERE source_id = '{{ source_id }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
