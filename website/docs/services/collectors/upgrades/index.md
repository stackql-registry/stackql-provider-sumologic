--- 
title: upgrades
hide_title: false
hide_table_of_contents: false
keywords:
  - upgrades
  - collectors
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

Creates, updates, deletes, gets or lists a <code>upgrades</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upgrades" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.collectors.upgrades" /></td></tr>
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
    <td>Identifier of the upgrade task.</td>
</tr>
<tr>
    <td><CopyableCode code="collector_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the Collector being upgraded. (wire: collectorId)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Status message.</td>
</tr>
<tr>
    <td><CopyableCode code="request_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Time the upgrade was requested, in milliseconds since epoch. (wire: requestTime)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>Upgrade status: 0 not started, 1 running, 2 succeeded, 3 failed, 6 progressing.</td>
</tr>
<tr>
    <td><CopyableCode code="to_version" /></td>
    <td><code>string</code></td>
    <td>Target version. (wire: toVersion)</td>
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
    <td><a href="#parameter-upgrade_task_id"><code>upgrade_task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the status of a Collector upgrade task.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-collector_id"><code>collector_id</code></a></td>
    <td></td>
    <td>Start an upgrade (or downgrade) task for an Installed Collector. Poll the returned task with the upgrade status method.</td>
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
<tr id="parameter-upgrade_task_id">
    <td><CopyableCode code="upgrade_task_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the upgrade task. (wire: upgradeTaskId)</td>
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

Get the status of a Collector upgrade task.

```sql
SELECT
id,
collector_id,
message,
request_time,
status,
to_version
FROM sumologic.collectors.upgrades
WHERE upgrade_task_id = '{{ upgrade_task_id }}' -- required
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

Start an upgrade (or downgrade) task for an Installed Collector. Poll the returned task with the upgrade status method.

```sql
INSERT INTO sumologic.collectors.upgrades (
collector_id,
to_version,
region
)
SELECT 
{{ collector_id }} /* required */,
'{{ to_version }}',
'{{ region }}'
RETURNING
id,
link
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: upgrades
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the upgrades resource.
    - name: collector_id
      value: {{ collector_id }}
      description: |
        Identifier of the Installed Collector to upgrade.
    - name: to_version
      value: "{{ to_version }}"
      description: |
        Target version. Defaults to the latest version.
`}</CodeBlock>

</TabItem>
</Tabs>
