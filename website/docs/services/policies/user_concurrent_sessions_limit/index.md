--- 
title: user_concurrent_sessions_limit
hide_title: false
hide_table_of_contents: false
keywords:
  - user_concurrent_sessions_limit
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

Creates, updates, deletes, gets or lists a <code>user_concurrent_sessions_limit</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_concurrent_sessions_limit" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.policies.user_concurrent_sessions_limit" /></td></tr>
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

The User Concurrent Sessions Limit policy.

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the User Concurrent Sessions Limit policy is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="max_concurrent_sessions" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of concurrent sessions a user may have. (wire: maxConcurrentSessions)</td>
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
    <td>Get the User Concurrent Sessions Limit policy. When enabled, the number of concurrent sessions a user may have is limited to the value entered. If a user exceeds the allowed number of sessions, the user's oldest session will be logged out to accommodate the new one. Disabling this policy means a user may have an unlimited number of concurrent sessions. &#91;Learn More&#93;(https:​//help.sumologic.com/Manage/Security/Set_a_Limit_for_User_Concurrent_Sessions)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Set the User Concurrent Sessions Limit policy. When enabled, the number of concurrent sessions a user may have is limited to the value entered. If a user exceeds the allowed number of sessions, the user's oldest session will be logged out to accommodate the new one. Disabling this policy means a user may have an unlimited number of concurrent sessions. &#91;Learn More&#93;(https:​//help.sumologic.com/Manage/Security/Set_a_Limit_for_User_Concurrent_Sessions)</td>
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

Get the User Concurrent Sessions Limit policy. When enabled, the number of concurrent sessions a user may have is limited to the value entered. If a user exceeds the allowed number of sessions, the user's oldest session will be logged out to accommodate the new one. Disabling this policy means a user may have an unlimited number of concurrent sessions. [Learn More](https://help.sumologic.com/Manage/Security/Set_a_Limit_for_User_Concurrent_Sessions)

```sql
SELECT
enabled,
max_concurrent_sessions
FROM sumologic.policies.user_concurrent_sessions_limit
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

Set the User Concurrent Sessions Limit policy. When enabled, the number of concurrent sessions a user may have is limited to the value entered. If a user exceeds the allowed number of sessions, the user's oldest session will be logged out to accommodate the new one. Disabling this policy means a user may have an unlimited number of concurrent sessions. [Learn More](https://help.sumologic.com/Manage/Security/Set_a_Limit_for_User_Concurrent_Sessions)

```sql
UPDATE sumologic.policies.user_concurrent_sessions_limit
SET 
enabled = {{ enabled }},
max_concurrent_sessions = {{ max_concurrent_sessions }}
WHERE 
region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND enabled = {{ enabled }} --required
RETURNING
enabled,
max_concurrent_sessions;
```
</TabItem>
</Tabs>
