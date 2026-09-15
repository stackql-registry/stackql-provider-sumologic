--- 
title: system_parsers
hide_title: false
hide_table_of_contents: false
keywords:
  - system_parsers
  - parsers
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

Creates, updates, deletes, gets or lists a <code>system_parsers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="system_parsers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.parsers.system_parsers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#lock"><CopyableCode code="lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Locking requires the `LockParsers` capability. When an object is locked, it can't be moved or deleted and only the local fields can be modified. Locking recursively locks all of the objects children.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#unlock"><CopyableCode code="unlock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Unlocking requires the `LockParsers` capability. It is only possible to unlock the highest locked object in a tree of locked objects. Unlocking recursively unlocks all of the objects children.&lt;br /&gt;</td>
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
    <td>The id of the folder or parser that needs to be unlocked.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="lock"
    values={[
        { label: 'lock', value: 'lock' },
        { label: 'unlock', value: 'unlock' }
    ]}
>
<TabItem value="lock">

Locking requires the `LockParsers` capability. When an object is locked, it can't be moved or deleted and only the local fields can be modified. Locking recursively locks all of the objects children.&lt;br /&gt;

```sql
EXEC sumologic.parsers.system_parsers.lock 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="unlock">

Unlocking requires the `LockParsers` capability. It is only possible to unlock the highest locked object in a tree of locked objects. Unlocking recursively unlocks all of the objects children.&lt;br /&gt;

```sql
EXEC sumologic.parsers.system_parsers.unlock 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
