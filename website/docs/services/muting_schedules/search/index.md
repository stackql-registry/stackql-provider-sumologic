--- 
title: search
hide_title: false
hide_table_of_contents: false
keywords:
  - search
  - muting_schedules
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

Creates, updates, deletes, gets or lists a <code>search</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="search" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.muting_schedules.search" /></td></tr>
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
    <td><CopyableCode code="item" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Path of the mutingschedule or folder. (example: /MutingSchedules/SampleFolder/TestMutingschedule)</td>
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
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-skip_children"><code>skip_children</code></a></td>
    <td>Search for a mutingschedule or folder in the mutingSchedules library structure.</td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The search query to find mutingschedule or folder. Below is the list of different filters with examples:   - **createdBy** : Filter by the user's identifier who created the content. Example: `createdBy:000000000000968B`.   - **createdBefore** : Filter by the content objects created before the given timestamp(in milliseconds). Example: `createdBefore:1457997222`.   - **createdAfter** : Filter by the content objects created after the given timestamp(in milliseconds). Example: `createdAfter:1457997111`.   - **modifiedBefore** : Filter by the content objects modified before the given timestamp(in milliseconds). Example: `modifiedBefore:1457997222`.   - **modifiedAfter** : Filter by the content objects modified after the given timestamp(in milliseconds). Example: `modifiedAfter:1457997111`.   - **type** : Filter by the type of the content object. Example: `type:folder`.  You can also use multiple filters in one query. For example to search for all content objects created by user with identifier 000000000000968B with creation timestamp after 1457997222 containing the text Test, the query would look like:    `createdBy:000000000000968B createdAfter:1457997222 Test` (example: createdBy:000000000000968B Test)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of items you want in the response. (example: 10)</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>The position or row from where to start the search operation. (example: 5)</td>
</tr>
<tr id="parameter-skip_children">
    <td><CopyableCode code="skip_children" /></td>
    <td><code>boolean</code></td>
    <td>a boolean parameter to control skipping fetching children of requested folder(s) (wire: skipChildren)</td>
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

Search for a mutingschedule or folder in the mutingSchedules library structure.

```sql
SELECT
item,
path
FROM sumologic.muting_schedules.search
WHERE query = '{{ query }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND skip_children = '{{ skip_children }}'
;
```
</TabItem>
</Tabs>
