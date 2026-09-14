--- 
title: addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - addresses
  - service_allowlist
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

Creates, updates, deletes, gets or lists an <code>addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.service_allowlist.addresses" /></td></tr>
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

List of all allowlisted CIDR notations and/or IP addresses for the organization.

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
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The string representation of the CIDR notation or IP address. (pattern: &lt;code&gt;^((&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#123;2&#125;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)\.)&#123;3&#125;(&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#123;2&#125;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)(\/(&#91;0-9&#93;|&#91;1-2&#93;&#91;0-9&#93;|3&#91;0-2&#93;))?$&lt;/code&gt;, example: 192.35.24.1, x-pattern-message: Invalid CIDR/IP)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the CIDR notation or IP address. (example: Accountant)</td>
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
    <td>Get a list of all allowlisted CIDR notations and/or IP addresses for the organization.</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Add CIDR notations and/or IP addresses to the allowlist of the organization if not already there. When service allowlisting functionality is enabled, CIDRs/IP addresses that are allowlisted will have access to Sumo Logic and/or content sharing.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Remove allowlisted CIDR notations and/or IP addresses from the organization. Removed CIDRs/IPs will immediately lose access to Sumo Logic and content sharing.</td>
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

Get a list of all allowlisted CIDR notations and/or IP addresses for the organization.

```sql
SELECT
cidr,
description
FROM sumologic.service_allowlist.addresses
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' },
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="add">

Add CIDR notations and/or IP addresses to the allowlist of the organization if not already there. When service allowlisting functionality is enabled, CIDRs/IP addresses that are allowlisted will have access to Sumo Logic and/or content sharing.

```sql
EXEC sumologic.service_allowlist.addresses.add 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="remove">

Remove allowlisted CIDR notations and/or IP addresses from the organization. Removed CIDRs/IPs will immediately lose access to Sumo Logic and content sharing.

```sql
EXEC sumologic.service_allowlist.addresses.remove 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
