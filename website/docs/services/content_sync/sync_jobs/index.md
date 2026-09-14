--- 
title: sync_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - sync_jobs
  - content_sync
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

Creates, updates, deletes, gets or lists a <code>sync_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sync_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.content_sync.sync_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'get_current', value: 'get_current' }
    ]}
>
<TabItem value="get">

Content Sync Job Status

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
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Content Sync Job progress percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Content Sync Job status. (example: Success)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_current">

Last triggered Content Sync Job Details.

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
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>Content Sync Job Id. (example: 68B6D772B616DC06) (wire: jobId)</td>
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
    <td>Get Status of Content Sync Job.</td>
</tr>
<tr>
    <td><a href="#get_current"><CopyableCode code="get_current" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get Content Sync Job Id of last triggered job.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-content_list"><code>content_list</code></a>, <a href="#parameter-destination_child_org_info"><code>destination_child_org_info</code></a>, <a href="#parameter-source_child_org_info"><code>source_child_org_info</code></a></td>
    <td></td>
    <td>Sync Content and Configuration across Organization.</td>
</tr>
<tr>
    <td><a href="#retry"><CopyableCode code="retry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-retryOptions"><code>retryOptions</code></a></td>
    <td>Retry Content Sync Job by ID to re-execute job.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancel In Progress Sync Job by ID..</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>Id of Content Sync Job</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>Id of Content Sync Job (wire: jobId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-retryOptions">
    <td><CopyableCode code="retryOptions" /></td>
    <td><code>string</code></td>
    <td>Controls which contents to retry</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'get_current', value: 'get_current' }
    ]}
>
<TabItem value="get">

Get Status of Content Sync Job.

```sql
SELECT
progress,
status
FROM sumologic.content_sync.sync_jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="get_current">

Get Content Sync Job Id of last triggered job.

```sql
SELECT
job_id
FROM sumologic.content_sync.sync_jobs
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

Sync Content and Configuration across Organization.

```sql
INSERT INTO sumologic.content_sync.sync_jobs (
source_child_org_info,
destination_child_org_info,
content_list,
region
)
SELECT 
'{{ source_child_org_info }}' /* required */,
'{{ destination_child_org_info }}' /* required */,
'{{ content_list }}' /* required */,
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sync_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sync_jobs resource.
    - name: source_child_org_info
      value:
        orgId: "{{ orgId }}"
        orgName: "{{ orgName }}"
    - name: destination_child_org_info
      value:
        included:
          - orgId: "{{ orgId }}"
            orgName: "{{ orgName }}"
        excluded:
          - orgId: "{{ orgId }}"
            orgName: "{{ orgName }}"
    - name: content_list
      description: |
        List of Content and Configuration Information.
      value:
        - id: "{{ id }}"
          type: "{{ type }}"
          name: "{{ name }}"
          options: "{{ options }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="retry"
    values={[
        { label: 'retry', value: 'retry' },
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="retry">

Retry Content Sync Job by ID to re-execute job.

```sql
EXEC sumologic.content_sync.sync_jobs.retry 
@jobId='{{ jobId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set, 
@retryOptions='{{ retryOptions }}'
;
```
</TabItem>
<TabItem value="cancel">

Cancel In Progress Sync Job by ID..

```sql
EXEC sumologic.content_sync.sync_jobs.cancel 
@jobId='{{ jobId }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
