--- 
title: access_keys_lifetime
hide_title: false
hide_table_of_contents: false
keywords:
  - access_keys_lifetime
  - policies
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

Creates, updates, deletes, gets or lists an <code>access_keys_lifetime</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_keys_lifetime" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.policies.access_keys_lifetime" /></td></tr>
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

The Access Key Lifetime Policy.

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
    <td><CopyableCode code="access_keys_lifetime_in_days" /></td>
    <td><code>string</code></td>
    <td>The number of days it will take for an access key to expire without being rotated/copied. Setting it to 0 (never) means that access keys will never expire. Valid values are: `0`, `30`, `45`, `60`, `90`, `180`, or `365` (pattern: &lt;code&gt;^(0|30|45|60|90|180|365)$&lt;/code&gt;, example: 60, x-pattern-message: must be one of the following: `0`, `30`, `45`, `60`, `90`, `180`, or `365`) (wire: accessKeysLifetimeInDays)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get access key lifetime policy. This policy defines the maximum time an access key has once it has been created or rotated before it must be rotated. Otherwise, it will no longer be able to be used. The value 0 represents that the access keys will never expire and the time specified can be configured  by the organization.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-access_keys_lifetime_in_days"><code>access_keys_lifetime_in_days</code></a></td>
    <td></td>
    <td>Sets the access keys lifetime policy. By setting this policy, the time  an access key has to live before it is expired or must be rotated is defined based on the period (default = never) configured for the organization. Setting the value to 0 would represent that the access keys never expire.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get access key lifetime policy. This policy defines the maximum time an access key has once it has been created or rotated before it must be rotated. Otherwise, it will no longer be able to be used. The value 0 represents that the access keys will never expire and the time specified can be configured  by the organization.

```sql
SELECT
access_keys_lifetime_in_days
FROM sumologic.policies.access_keys_lifetime
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Sets the access keys lifetime policy. By setting this policy, the time  an access key has to live before it is expired or must be rotated is defined based on the period (default = never) configured for the organization. Setting the value to 0 would represent that the access keys never expire.

```sql
UPDATE sumologic.policies.access_keys_lifetime
SET 
access_keys_lifetime_in_days = '{{ access_keys_lifetime_in_days }}'
WHERE 
region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND access_keys_lifetime_in_days = '{{ access_keys_lifetime_in_days }}' --required
RETURNING
access_keys_lifetime_in_days;
```
</TabItem>
</Tabs>
