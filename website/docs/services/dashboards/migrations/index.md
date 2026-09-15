--- 
title: migrations
hide_title: false
hide_table_of_contents: false
keywords:
  - migrations
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>migrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.dashboards.migrations" /></td></tr>
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

Dashboard migration job status.

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
    <td>Get the status of an asynchronous Dashboard Migration job for the given job identifier. If job succeeds, use Dashboard Migration Result endpoint to see results of the migration.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-content_ids"><code>content_ids</code></a></td>
    <td></td>
    <td>Schedule an asynchronous job to migrate a list of legacy Dashboards to Dashboard(New). Once migration is finished, the migrated dashboards will be in the same folder as the corresponding legacy Dashboard.&lt;br /&gt;Note: This feature is in beta and may not support all existing features of legacy dashboards.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#preview"><CopyableCode code="preview" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-contentIds"><code>contentIds</code></a></td>
    <td></td>
    <td>Get a preview of migrating Legacy Dashboards to Dashboard(New)</td>
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
    <td>The identifier of the asynchronous Dashboard Migration job. (wire: jobId)</td>
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

Get the status of an asynchronous Dashboard Migration job for the given job identifier. If job succeeds, use Dashboard Migration Result endpoint to see results of the migration.

```sql
SELECT
error,
status,
status_message
FROM sumologic.dashboards.migrations
WHERE job_id = '{{ job_id }}' -- required
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

Schedule an asynchronous job to migrate a list of legacy Dashboards to Dashboard(New). Once migration is finished, the migrated dashboards will be in the same folder as the corresponding legacy Dashboard.&lt;br /&gt;Note: This feature is in beta and may not support all existing features of legacy dashboards.&lt;br /&gt;

```sql
INSERT INTO sumologic.dashboards.migrations (
content_ids,
region
)
SELECT 
'{{ content_ids }}' /* required */,
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: migrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the migrations resource.
    - name: content_ids
      value:
        - "{{ content_ids }}"
      description: |
        Content identifiers of the Legacy dashboards.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="preview"
    values={[
        { label: 'preview', value: 'preview' }
    ]}
>
<TabItem value="preview">

Get a preview of migrating Legacy Dashboards to Dashboard(New)

```sql
EXEC sumologic.dashboards.migrations.preview 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"contentIds": "{{ contentIds }}"
}'
;
```
</TabItem>
</Tabs>
