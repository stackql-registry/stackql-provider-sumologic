--- 
title: consents
hide_title: false
hide_table_of_contents: false
keywords:
  - consents
  - oauth
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

Creates, updates, deletes, gets or lists a <code>consents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="consents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.oauth.consents" /></td></tr>
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

A list of OAuth consents.

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
    <td>Unique identifier for the consent. (example: 0000000006743FDE)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the registered client that was used in granting consent. (example: zVplCFHcpTDwtktBIQmFI2K6s9HEo4HAtcQD1f1M5eQ) (wire: clientId)</td>
</tr>
<tr>
    <td><CopyableCode code="client_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registered client that was used in granting consent. (example: My OAuth App) (wire: clientName)</td>
</tr>
<tr>
    <td><CopyableCode code="authorized_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the consent was authorized in UTC in RFC3339 format. (example: 2018-10-16T09:10:00.000Z) (wire: authorizedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="authorized_user" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who authorized the consent. (example: 0000000006743FDD) (wire: authorizedUser)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the consent was last used to grant an access token in UTC in RFC3339 format. Null if never used. (example: 2018-10-16T09:10:00.000Z) (wire: lastUsedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>The scopes that were granted in the consent.</td>
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
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-authorized_user"><code>authorized_user</code></a>, <a href="#parameter-client_id"><code>client_id</code></a></td>
    <td>Get a list of OAuth consents within the organization. Administrators can list all consents, while others can only list consents that they have authorized.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-consent_id"><code>consent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the OAuth consent with the given Id.</td>
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
<tr id="parameter-consent_id">
    <td><CopyableCode code="consent_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OAuth consent to delete. (wire: consentId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-authorized_user">
    <td><CopyableCode code="authorized_user" /></td>
    <td><code>string</code></td>
    <td>Filter consents by the identifier of the user who authorized the consent. (wire: authorizedUser)</td>
</tr>
<tr id="parameter-client_id">
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>Filter consents by the clientId of a registered OAuth client. (wire: clientId)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of consents returned in the response.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results.</td>
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

Get a list of OAuth consents within the organization. Administrators can list all consents, while others can only list consents that they have authorized.

```sql
SELECT
id,
client_id,
client_name,
authorized_at,
authorized_user,
last_used_at,
scopes
FROM sumologic.oauth.consents
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
AND authorized_user = '{{ authorized_user }}'
AND client_id = '{{ client_id }}'
;
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

Deletes the OAuth consent with the given Id.

```sql
DELETE FROM sumologic.oauth.consents
WHERE consent_id = '{{ consent_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
