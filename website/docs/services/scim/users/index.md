--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - scim
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.scim.users" /></td></tr>
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

User details retrieved successfully

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
    <td>Unique SCIM identifier for the user (example: 000000000FE20FE2)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the user (email) (example: jdoe@example.com) (wire: userName)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>True if the user is active</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td>Sumo logic accepts only one email address</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Resource meta data of a user</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>roles should exactly match with role names within sumologic. `roles` can be either `Array of strings` or `Array of objects` as shown in the payload. `primary` always set to 'true' as sumologic doesn't have a concept of primary/secondary roles</td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>array</code></td>
    <td>Defines the SCIM schemas for the user</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of users in the organization

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
    <td>Unique SCIM identifier for the user (example: 000000000FE20FE2)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the user (email) (example: jdoe@example.com) (wire: userName)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>True if the user is active</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td>Sumo logic accepts only one email address</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Resource meta data of a user</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>roles should exactly match with role names within sumologic. `roles` can be either `Array of strings` or `Array of objects` as shown in the payload. `primary` always set to 'true' as sumologic doesn't have a concept of primary/secondary roles</td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>array</code></td>
    <td>Defines the SCIM schemas for the user</td>
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
    <td>Fetches the details of a SCIM user by their unique identifier</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-start_index"><code>start_index</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-sort_order"><code>sort_order</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a></td>
    <td>Retrieves a list of users in the SCIM system, with optional pagination</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-emails"><code>emails</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roles"><code>roles</code></a>, <a href="#parameter-schemas"><code>schemas</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td></td>
    <td>Creates a new user in the SCIM system</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-operations"><code>operations</code></a>, <a href="#parameter-schemas"><code>schemas</code></a></td>
    <td></td>
    <td>Updates specific attributes of an existing user in the SCIM system</td>
</tr>
<tr>
    <td><a href="#replace"><CopyableCode code="replace" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-active"><code>active</code></a>, <a href="#parameter-emails"><code>emails</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roles"><code>roles</code></a>, <a href="#parameter-schemas"><code>schemas</code></a></td>
    <td></td>
    <td>Updates an existing user's attributes in the SCIM system</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a SCIM user by their unique identifier</td>
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
    <td>Unique identifier of the SCIM user to delete</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Defaults to 100</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Find user with the given email address</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Sort the list of users by the `givenName`, `familyName`, or `emails` field (wire: sortBy)</td>
</tr>
<tr id="parameter-sort_order">
    <td><CopyableCode code="sort_order" /></td>
    <td><code>string</code></td>
    <td>The sort order. Use "ascending" or "descending" (wire: sortOrder)</td>
</tr>
<tr id="parameter-start_index">
    <td><CopyableCode code="start_index" /></td>
    <td><code>integer (int32)</code></td>
    <td>The index of the first result to return. Defaults to 1 if not specified, a value less than 1 SHALL be interpreted as 1 (wire: startIndex)</td>
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

Fetches the details of a SCIM user by their unique identifier

```sql
SELECT
id,
name,
user_name,
active,
emails,
meta,
roles,
schemas
FROM sumologic.scim.users
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of users in the SCIM system, with optional pagination

```sql
SELECT
id,
name,
user_name,
active,
emails,
meta,
roles,
schemas
FROM sumologic.scim.users
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND start_index = '{{ start_index }}'
AND count = '{{ count }}'
AND filter = '{{ filter }}'
AND sort_order = '{{ sort_order }}'
AND sort_by = '{{ sort_by }}'
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

Creates a new user in the SCIM system

```sql
INSERT INTO sumologic.scim.users (
schemas,
user_name,
name,
emails,
roles,
region
)
SELECT 
'{{ schemas }}' /* required */,
'{{ user_name }}' /* required */,
'{{ name }}' /* required */,
'{{ emails }}' /* required */,
'{{ roles }}' /* required */,
'{{ region }}'
RETURNING
id,
name,
user_name,
active,
emails,
meta,
roles,
schemas
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: schemas
      value:
        - "{{ schemas }}"
      description: |
        Defines the SCIM schemas for the user
    - name: user_name
      value: "{{ user_name }}"
      description: |
        Unique identifier for the user (email)
    - name: name
      value:
        givenName: "{{ givenName }}"
        familyName: "{{ familyName }}"
    - name: emails
      description: |
        Sumo logic accepts only one email address
      value:
        - value: "{{ value }}"
          type: "{{ type }}"
          primary: {{ primary }}
    - name: roles
      value: "{{ roles }}"
      description: |
        roles should exactly match with role names within sumologic. \`roles\` can be either \`Array of strings\` or \`Array of objects\` as shown in the payload. \`primary\` always set to 'true' as sumologic doesn't have a concept of primary/secondary roles
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

Updates specific attributes of an existing user in the SCIM system

```sql
UPDATE sumologic.scim.users
SET 
schemas = '{{ schemas }}',
operations = '{{ operations }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND operations = '{{ operations }}' --required
AND schemas = '{{ schemas }}' --required
RETURNING
id,
name,
user_name,
active,
emails,
meta,
roles,
schemas;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace"
    values={[
        { label: 'replace', value: 'replace' }
    ]}
>
<TabItem value="replace">

Updates an existing user's attributes in the SCIM system

```sql
REPLACE sumologic.scim.users
SET 
schemas = '{{ schemas }}',
name = '{{ name }}',
active = {{ active }},
emails = '{{ emails }}',
roles = '{{ roles }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND active = {{ active }} --required
AND emails = '{{ emails }}' --required
AND name = '{{ name }}' --required
AND roles = '{{ roles }}' --required
AND schemas = '{{ schemas }}' --required
RETURNING
id,
name,
user_name,
active,
emails,
meta,
roles,
schemas;
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

Deletes a SCIM user by their unique identifier

```sql
DELETE FROM sumologic.scim.users
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
