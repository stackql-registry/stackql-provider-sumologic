--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - users
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
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.users.users" /></td></tr>
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

User object that was requested.

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
    <td>Unique identifier for the user. (example: 000000000FE20FE2)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>First name of the user. (example: John) (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Last name of the user. (example: Doe) (wire: lastName)</td>
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
    <td>Email address of the user. (example: johndoe@acme.com)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>True if the user is active. (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="is_locked" /></td>
    <td><code>boolean</code></td>
    <td>This has the value `true` if the user's account has been locked. If a user tries to log into their account several times and fails, his or her account will be locked for security reasons. (wire: isLocked)</td>
</tr>
<tr>
    <td><CopyableCode code="is_mfa_enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if multi factor authentication is enabled for the user. (wire: isMfaEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="last_login_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the last login for the user in UTC. Will be null if the user has never logged in. (wire: lastLoginTimestamp)</td>
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
    <td>List of roleIds associated with the user. (wire: roleIds)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of users in the organization.

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
    <td>Unique identifier for the user. (example: 000000000FE20FE2)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>First name of the user. (example: John) (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Last name of the user. (example: Doe) (wire: lastName)</td>
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
    <td>Email address of the user. (example: johndoe@acme.com)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>True if the user is active. (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="is_locked" /></td>
    <td><code>boolean</code></td>
    <td>This has the value `true` if the user's account has been locked. If a user tries to log into their account several times and fails, his or her account will be locked for security reasons. (wire: isLocked)</td>
</tr>
<tr>
    <td><CopyableCode code="is_mfa_enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if multi factor authentication is enabled for the user. (wire: isMfaEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="last_login_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the last login for the user in UTC. Will be null if the user has never logged in. (wire: lastLoginTimestamp)</td>
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
    <td>List of roleIds associated with the user. (wire: roleIds)</td>
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
    <td>Get a user with the given identifier from the organization.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-include_service_accounts"><code>include_service_accounts</code></a></td>
    <td>Get a list of all users in the organization. The response is paginated with a default limit of 100 users per page.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-first_name"><code>first_name</code></a>, <a href="#parameter-last_name"><code>last_name</code></a>, <a href="#parameter-role_ids"><code>role_ids</code></a></td>
    <td></td>
    <td>Create a new user in the organization.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-first_name"><code>first_name</code></a>, <a href="#parameter-last_name"><code>last_name</code></a></td>
    <td></td>
    <td>Update an existing user in the organization.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-transfer_to"><code>transfer_to</code></a>, <a href="#parameter-delete_content"><code>delete_content</code></a></td>
    <td>Delete a user with the given identifier from the organization and transfer their content to the user with the identifier specified in "transferTo".</td>
</tr>
<tr>
    <td><a href="#request_change_email"><CopyableCode code="request_change_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>An email with an activation link is sent to the user’s new email address. The user must click the link in the email within seven days to complete the email address change, or the link will expire.</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Reset a user's password.</td>
</tr>
<tr>
    <td><a href="#unlock"><CopyableCode code="unlock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Unlock another user's account.</td>
</tr>
<tr>
    <td><a href="#disable_mfa"><CopyableCode code="disable_mfa" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Disable multi-factor authentication for given user.</td>
</tr>
<tr>
    <td><a href="#resend_welcome_email"><CopyableCode code="resend_welcome_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resend the welcome email to a user.</td>
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
    <td>Identifier of the user to resend the welcome email.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-delete_content">
    <td><CopyableCode code="delete_content" /></td>
    <td><code>boolean</code></td>
    <td>Whether to delete content from the deleted user or not. &lt;br /&gt; **Warning:** If `deleteContent` is set to `true`, all of the content for the user being deleted is permanently deleted and cannot be recovered. (wire: deleteContent)</td>
</tr>
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Find user with the given email address.</td>
</tr>
<tr id="parameter-include_service_accounts">
    <td><CopyableCode code="include_service_accounts" /></td>
    <td><code>boolean</code></td>
    <td>Include service accounts while listing users within the organization. (wire: includeServiceAccounts)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of users returned in the response. The number of users returned may be less than the `limit`.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Sort the list of users by the `firstName`, `lastName`, or `email` field. (wire: sortBy)</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results. `token` is set to null when no more pages are left.</td>
</tr>
<tr id="parameter-transfer_to">
    <td><CopyableCode code="transfer_to" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user to receive the transfer of content from the deleted user. &lt;br /&gt; **Note:** If `deleteContent` is not set to `true`, and no user identifier is specified in `transferTo`, content from the deleted user is transferred to the executing user. (wire: transferTo)</td>
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

Get a user with the given identifier from the organization.

```sql
SELECT
id,
first_name,
last_name,
created_at,
created_by,
email,
is_active,
is_locked,
is_mfa_enabled,
last_login_timestamp,
modified_at,
modified_by,
role_ids
FROM sumologic.users.users
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all users in the organization. The response is paginated with a default limit of 100 users per page.

```sql
SELECT
id,
first_name,
last_name,
created_at,
created_by,
email,
is_active,
is_locked,
is_mfa_enabled,
last_login_timestamp,
modified_at,
modified_by,
role_ids
FROM sumologic.users.users
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
AND sort_by = '{{ sort_by }}'
AND email = '{{ email }}'
AND include_service_accounts = '{{ include_service_accounts }}'
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

Create a new user in the organization.

```sql
INSERT INTO sumologic.users.users (
first_name,
last_name,
email,
role_ids,
region
)
SELECT 
'{{ first_name }}' /* required */,
'{{ last_name }}' /* required */,
'{{ email }}' /* required */,
'{{ role_ids }}' /* required */,
'{{ region }}'
RETURNING
id,
first_name,
last_name,
created_at,
created_by,
email,
is_active,
is_locked,
is_mfa_enabled,
last_login_timestamp,
modified_at,
modified_by,
role_ids
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
    - name: first_name
      value: "{{ first_name }}"
      description: |
        First name of the user.
    - name: last_name
      value: "{{ last_name }}"
      description: |
        Last name of the user.
    - name: email
      value: "{{ email }}"
      description: |
        Email address of the user.
    - name: role_ids
      value:
        - "{{ role_ids }}"
      description: |
        List of roleIds associated with the user.
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

Update an existing user in the organization.

```sql
UPDATE sumologic.users.users
SET 
first_name = '{{ first_name }}',
last_name = '{{ last_name }}',
is_active = {{ is_active }},
role_ids = '{{ role_ids }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND first_name = '{{ first_name }}' --required
AND last_name = '{{ last_name }}' --required
RETURNING
id,
first_name,
last_name,
created_at,
created_by,
email,
is_active,
is_locked,
is_mfa_enabled,
last_login_timestamp,
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

Delete a user with the given identifier from the organization and transfer their content to the user with the identifier specified in "transferTo".

```sql
DELETE FROM sumologic.users.users
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND transfer_to = '{{ transfer_to }}'
AND delete_content = '{{ delete_content }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="request_change_email"
    values={[
        { label: 'request_change_email', value: 'request_change_email' },
        { label: 'reset_password', value: 'reset_password' },
        { label: 'unlock', value: 'unlock' },
        { label: 'disable_mfa', value: 'disable_mfa' },
        { label: 'resend_welcome_email', value: 'resend_welcome_email' }
    ]}
>
<TabItem value="request_change_email">

An email with an activation link is sent to the user’s new email address. The user must click the link in the email within seven days to complete the email address change, or the link will expire.

```sql
EXEC sumologic.users.users.request_change_email 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"email": "{{ email }}"
}'
;
```
</TabItem>
<TabItem value="reset_password">

Reset a user's password.

```sql
EXEC sumologic.users.users.reset_password 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="unlock">

Unlock another user's account.

```sql
EXEC sumologic.users.users.unlock 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="disable_mfa">

Disable multi-factor authentication for given user.

```sql
EXEC sumologic.users.users.disable_mfa 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"email": "{{ email }}", 
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="resend_welcome_email">

Resend the welcome email to a user.

```sql
EXEC sumologic.users.users.resend_welcome_email 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
