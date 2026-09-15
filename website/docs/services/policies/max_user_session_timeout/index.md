--- 
title: max_user_session_timeout
hide_title: false
hide_table_of_contents: false
keywords:
  - max_user_session_timeout
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

Creates, updates, deletes, gets or lists a <code>max_user_session_timeout</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="max_user_session_timeout" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.policies.max_user_session_timeout" /></td></tr>
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

The Max User Session Timeout policy.

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
    <td><CopyableCode code="max_user_session_timeout" /></td>
    <td><code>string</code></td>
    <td>Maximum web session timeout users are able to configure within their user preferences. Valid values are: `5m`, `15m`, `30m`, `1h`, `2h`, `6h`, `12h`, `1d`, `2d`, `3d`, `5d`, or `7d` (pattern: &lt;code&gt;^(5m|15m|30m|1h|2h|6h|12h|1d|2d|3d|5d|7d)$&lt;/code&gt;, example: 1d, x-pattern-message: must be one of the following: `5m`, `15m`, `30m`, `1h`, `2h`, `6h`, `12h`, `1d`, `2d`, `3d`, `5d`, or `7d`) (wire: maxUserSessionTimeout)</td>
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
    <td>Get the Max User Session Timeout policy. When enabled, this policy sets the maximum web session timeout users are able to configure within their user preferences. Users preferences will be updated to match this value only if their current preference is set to a higher value. &#91;Learn More&#93;(https:​//help.sumologic.com/Manage/Security/Set_a_Maximum_Web_Session_Timeout)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-max_user_session_timeout"><code>max_user_session_timeout</code></a></td>
    <td></td>
    <td>Set the Max User Session Timeout policy. When enabled, this policy sets the maximum web session timeout users are able to configure within their user preferences. Users preferences will be updated to match this value only if their current preference is set to a higher value. &#91;Learn More&#93;(https:​//help.sumologic.com/Manage/Security/Set_a_Maximum_Web_Session_Timeout)</td>
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

Get the Max User Session Timeout policy. When enabled, this policy sets the maximum web session timeout users are able to configure within their user preferences. Users preferences will be updated to match this value only if their current preference is set to a higher value. [Learn More](https://help.sumologic.com/Manage/Security/Set_a_Maximum_Web_Session_Timeout)

```sql
SELECT
max_user_session_timeout
FROM sumologic.policies.max_user_session_timeout
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

Set the Max User Session Timeout policy. When enabled, this policy sets the maximum web session timeout users are able to configure within their user preferences. Users preferences will be updated to match this value only if their current preference is set to a higher value. [Learn More](https://help.sumologic.com/Manage/Security/Set_a_Maximum_Web_Session_Timeout)

```sql
UPDATE sumologic.policies.max_user_session_timeout
SET 
max_user_session_timeout = '{{ max_user_session_timeout }}'
WHERE 
region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND max_user_session_timeout = '{{ max_user_session_timeout }}' --required
RETURNING
max_user_session_timeout;
```
</TabItem>
</Tabs>
