--- 
title: service_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - service_accounts
  - service_accounts
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

Creates, updates, deletes, gets or lists a <code>service_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.service_accounts.service_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Service account object that was requested.

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
    <td>Unique identifier for the service account. (example: 000000000FE20FE2)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the service account. (example: Service Account)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>Email address of the service account. (example: johndoe@acme.com)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>True if the service account is active. (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="role_ids" /></td>
    <td><code>array</code></td>
    <td>List of roleIds associated with the service account. (wire: roleIds)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of service accounts in the organization.

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
    <td>Unique identifier for the service account. (example: 000000000FE20FE2)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the service account. (example: Service Account)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>Email address of the service account. (example: johndoe@acme.com)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>True if the service account is active. (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="role_ids" /></td>
    <td><code>array</code></td>
    <td>List of roleIds associated with the service account. (wire: roleIds)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a service account with the given identifier from the organization.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of all service accounts in the organization.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-role_ids"><code>role_ids</code></a></td>
    <td></td>
    <td>Create a new service account in the organization.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing service account in the organization.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-transfer_to"><code>transfer_to</code></a>, <a href="#parameter-delete_content"><code>delete_content</code></a></td>
    <td>Delete a service account with the given identifier from the organization and transfer its content to a user or  a service account with the identifier specified in "transferTo".</td>
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
    <td>Identifier of the service account to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-delete_content">
    <td><CopyableCode code="delete_content" /></td>
    <td><code>boolean</code></td>
    <td>Whether to delete content from the deleted service account or not. &lt;br /&gt; **Warning:** If `deleteContent` is set to `true`, all of the content for the service account being  deleted is permanently deleted and cannot be recovered. (wire: deleteContent)</td>
</tr>
<tr id="parameter-transfer_to">
    <td><CopyableCode code="transfer_to" /></td>
    <td><code>string</code></td>
    <td>Identifier of a user/service account to receive the transfer of content from the deleted service account. &lt;br /&gt; **Note:** If `deleteContent` is not set to `true`, and no user identifier is specified in `transferTo`, content from the deleted service account is transferred to the executing user. (wire: transferTo)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get a service account with the given identifier from the organization.

```sql
SELECT
id,
name,
created_at,
created_by,
email,
is_active,
modified_at,
modified_by,
role_ids
FROM sumologic.service_accounts.service_accounts
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all service accounts in the organization.

```sql
SELECT
id,
name,
created_at,
created_by,
email,
is_active,
modified_at,
modified_by,
role_ids
FROM sumologic.service_accounts.service_accounts
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

Create a new service account in the organization.

```sql
INSERT INTO sumologic.service_accounts.service_accounts (
name,
email,
role_ids,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ email }}' /* required */,
'{{ role_ids }}' /* required */,
'{{ region }}'
RETURNING
id,
name,
created_at,
created_by,
email,
is_active,
modified_at,
modified_by,
role_ids
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_accounts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_accounts resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the service account.
    - name: email
      value: "{{ email }}"
      description: |
        Email address of the service account.
    - name: role_ids
      value:
        - "{{ role_ids }}"
      description: |
        List of roleIds associated with the service account.
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

Update an existing service account in the organization.

```sql
UPDATE sumologic.service_accounts.service_accounts
SET 
name = '{{ name }}',
is_active = {{ is_active }},
role_ids = '{{ role_ids }}',
email = '{{ email }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
RETURNING
id,
name,
created_at,
created_by,
email,
is_active,
modified_at,
modified_by,
role_ids;
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

Delete a service account with the given identifier from the organization and transfer its content to a user or  a service account with the identifier specified in "transferTo".

```sql
DELETE FROM sumologic.service_accounts.service_accounts
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND transfer_to = '{{ transfer_to }}'
AND delete_content = '{{ delete_content }}'
;
```
</TabItem>
</Tabs>
