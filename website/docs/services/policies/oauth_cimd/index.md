--- 
title: oauth_cimd
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_cimd
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

Creates, updates, deletes, gets or lists an <code>oauth_cimd</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth_cimd" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.policies.oauth_cimd" /></td></tr>
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

The OAuth policy for Client ID Metadata Documents (CIMD) authentication.

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
    <td><CopyableCode code="o_auth_cimd_policy" /></td>
    <td><code>string</code></td>
    <td>OAuth CIMD policy. Valid values are: `disabled`, `enabled`, 'enabled-pre-registered-only' (pattern: &lt;code&gt;^(disabled|enabled|enabled-pre-registered-only)$&lt;/code&gt;, example: disabled, x-pattern-message: must be one of the following: `disabled`, `enabled`, 'enabled-pre-registered-only') (wire: oAuthCimdPolicy)</td>
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
    <td>If disabled then authentication with Client ID Metadata Documents (CIMD) is disabled and no new CIMD clients can be created. If set to "enabled" then authentication with CIMD clients is enabled and new CIMD clients can be created automatically as part of authentication. If set to "enabled-pre-registered-only" then authentication with CIMD clients  is enabled but new CIMD clients can only be created manually on the OAuth Clients page in the UI.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-o_auth_cimd_policy"><code>o_auth_cimd_policy</code></a></td>
    <td></td>
    <td>If disabled then authentication with Client ID Metadata Documents (CIMD) is disabled and no new CIMD clients can be created. If set to "enabled" then authentication with CIMD clients is enabled and new CIMD clients can be created automatically as part of authentication. If set to "enabled-pre-registered-only" then authentication with CIMD clients  is enabled but new CIMD clients can only be created manually on the OAuth Clients page in the UI.</td>
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

If disabled then authentication with Client ID Metadata Documents (CIMD) is disabled and no new CIMD clients can be created. If set to "enabled" then authentication with CIMD clients is enabled and new CIMD clients can be created automatically as part of authentication. If set to "enabled-pre-registered-only" then authentication with CIMD clients  is enabled but new CIMD clients can only be created manually on the OAuth Clients page in the UI.

```sql
SELECT
o_auth_cimd_policy
FROM sumologic.policies.oauth_cimd
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

If disabled then authentication with Client ID Metadata Documents (CIMD) is disabled and no new CIMD clients can be created. If set to "enabled" then authentication with CIMD clients is enabled and new CIMD clients can be created automatically as part of authentication. If set to "enabled-pre-registered-only" then authentication with CIMD clients  is enabled but new CIMD clients can only be created manually on the OAuth Clients page in the UI.

```sql
UPDATE sumologic.policies.oauth_cimd
SET 
o_auth_cimd_policy = '{{ o_auth_cimd_policy }}'
WHERE 
region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND o_auth_cimd_policy = '{{ o_auth_cimd_policy }}' --required
RETURNING
o_auth_cimd_policy;
```
</TabItem>
</Tabs>
