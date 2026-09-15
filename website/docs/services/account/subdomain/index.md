--- 
title: subdomain
hide_title: false
hide_table_of_contents: false
keywords:
  - subdomain
  - account
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

Creates, updates, deletes, gets or lists a <code>subdomain</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subdomain" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.account.subdomain" /></td></tr>
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

The subdomain's definition.

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format.  (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="subdomain" /></td>
    <td><code>string</code></td>
    <td>The new subdomain. (example: my-company)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Login URL corresponding to the subdomain. (example: https:​//your-company.sumologic.com)</td>
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
    <td>Get the configured subdomain.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subdomain"><code>subdomain</code></a></td>
    <td></td>
    <td>Create a subdomain. Only the Account Owner can create a subdomain.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subdomain"><code>subdomain</code></a></td>
    <td></td>
    <td>Update a subdomain. Only the Account Owner can update the subdomain.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the configured subdomain.</td>
</tr>
<tr>
    <td><a href="#recover"><CopyableCode code="recover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Send an email with the subdomain information for a user with the given email address.</td>
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
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email address of the user to get subdomain information.</td>
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

Get the configured subdomain.

```sql
SELECT
created_at,
created_by,
modified_at,
modified_by,
subdomain,
url
FROM sumologic.account.subdomain
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
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

Create a subdomain. Only the Account Owner can create a subdomain.

```sql
INSERT INTO sumologic.account.subdomain (
subdomain,
region
)
SELECT 
'{{ subdomain }}' /* required */,
'{{ region }}'
RETURNING
created_at,
created_by,
modified_at,
modified_by,
subdomain,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subdomain
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subdomain resource.
    - name: subdomain
      value: "{{ subdomain }}"
      description: |
        The new subdomain.
`}</CodeBlock>

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

Update a subdomain. Only the Account Owner can update the subdomain.

```sql
UPDATE sumologic.account.subdomain
SET 
subdomain = '{{ subdomain }}'
WHERE 
region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND subdomain = '{{ subdomain }}' --required
RETURNING
created_at,
created_by,
modified_at,
modified_by,
subdomain,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete the configured subdomain.

```sql
DELETE FROM sumologic.account.subdomain
WHERE region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="recover"
    values={[
        { label: 'recover', value: 'recover' }
    ]}
>
<TabItem value="recover">

Send an email with the subdomain information for a user with the given email address.

```sql
EXEC sumologic.account.subdomain.recover 
@email='{{ email }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
