--- 
title: job_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - job_counts
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

Creates, updates, deletes, gets or lists a <code>job_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.archive.job_counts" /></td></tr>
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

A list of Archive Sources with ingestion jobs.

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
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>Identifier for the archive source. (example: 000000000606C009) (wire: sourceId)</td>
</tr>
<tr>
    <td><CopyableCode code="failed" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of archive jobs with failed status for the archive source.</td>
</tr>
<tr>
    <td><CopyableCode code="ingesting" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of archive jobs with ingesting status for the archive source.</td>
</tr>
<tr>
    <td><CopyableCode code="pending" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of archive jobs with pending status for the archive source.</td>
</tr>
<tr>
    <td><CopyableCode code="scanning" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of archive jobs with scanning status for the archive source.</td>
</tr>
<tr>
    <td><CopyableCode code="succeeded" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of archive jobs with succeeded status for the archive source.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of all Archive Sources with the count and status of ingestion jobs.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
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

Get a list of all Archive Sources with the count and status of ingestion jobs.

```sql
SELECT
source_id,
failed,
ingesting,
pending,
scanning,
succeeded
FROM sumologic.archive.job_counts
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
