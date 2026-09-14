--- 
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
  - logs_data_forwarding
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

Creates, updates, deletes, gets or lists a <code>destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.logs_data_forwarding.destinations" /></td></tr>
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

Data forwarding destination object requested.

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
    <td>The unique identifier of the data forwarding destination. (example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="access_key_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Access ID to access the S3 bucket. (example: accessKeyId) (wire: accessKeyId)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket. (pattern: &lt;code&gt;(?!(^xn--|-s3alias$))^&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;$&lt;/code&gt;, example: df-bucket, x-pattern-message: Must be a valid AWS S3 Bucket name.) (wire: bucketName)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_name" /></td>
    <td><code>string</code></td>
    <td>Name of the S3 data forwarding destination. (example: df-destination) (wire: destinationName)</td>
</tr>
<tr>
    <td><CopyableCode code="authentication_mode" /></td>
    <td><code>string</code></td>
    <td>AWS IAM authentication method used for access. Possible values are: 1. `AccessKey` 2. `RoleBased` (example: RoleBased) (wire: authenticationMode)</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the S3 data forwarding destination.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if the destination is Active.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Enable S3 server-side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="invalidated_by_system" /></td>
    <td><code>boolean</code></td>
    <td>True if invalidated by the system. (wire: invalidatedBySystem)</td>
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
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the S3 bucket is located. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The AWS Role ARN to access the S3 bucket. (example: roleArn) (wire: roleArn)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_access_key" /></td>
    <td><code>string</code></td>
    <td>The AWS Secret Key to access the S3 bucket. (example: secretAccessKey) (wire: secretAccessKey)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of all S3 data forwarding destinations.

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
    <td>The unique identifier of the data forwarding destination. (example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="access_key_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Access ID to access the S3 bucket. (example: accessKeyId) (wire: accessKeyId)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket. (pattern: &lt;code&gt;(?!(^xn--|-s3alias$))^&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;$&lt;/code&gt;, example: df-bucket, x-pattern-message: Must be a valid AWS S3 Bucket name.) (wire: bucketName)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_name" /></td>
    <td><code>string</code></td>
    <td>Name of the S3 data forwarding destination. (example: df-destination) (wire: destinationName)</td>
</tr>
<tr>
    <td><CopyableCode code="authentication_mode" /></td>
    <td><code>string</code></td>
    <td>AWS IAM authentication method used for access. Possible values are: 1. `AccessKey` 2. `RoleBased` (example: RoleBased) (wire: authenticationMode)</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the S3 data forwarding destination.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if the destination is Active.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Enable S3 server-side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="invalidated_by_system" /></td>
    <td><code>boolean</code></td>
    <td>True if invalidated by the system. (wire: invalidatedBySystem)</td>
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
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the S3 bucket is located. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The AWS Role ARN to access the S3 bucket. (example: roleArn) (wire: roleArn)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_access_key" /></td>
    <td><code>string</code></td>
    <td>The AWS Secret Key to access the S3 bucket. (example: secretAccessKey) (wire: secretAccessKey)</td>
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
    <td>Get an S3 data forwarding destination by the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all Amazon S3 data forwarding destinations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-authentication_mode"><code>authentication_mode</code></a>, <a href="#parameter-bucket_name"><code>bucket_name</code></a>, <a href="#parameter-destination_name"><code>destination_name</code></a></td>
    <td></td>
    <td>Create a new Amazon S3 data forwarding destination.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-authentication_mode"><code>authentication_mode</code></a></td>
    <td></td>
    <td>Update an S3 data forwarding destination by the given identifier.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an existing Amazon S3 data forwarding destination with the given identifier.</td>
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
    <td>Identifier of the data forwarding destination to delete. (example: 1)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of data forwarding destinations returned in the response. The number of data forwarding destinations returned may be less than the `limit`.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results. `token` is set to null when no more pages are left.</td>
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

Get an S3 data forwarding destination by the given identifier.

```sql
SELECT
id,
access_key_id,
bucket_name,
destination_name,
authentication_mode,
created_at,
created_by,
description,
enabled,
encrypted,
invalidated_by_system,
modified_at,
modified_by,
region,
role_arn,
secret_access_key
FROM sumologic.logs_data_forwarding.destinations
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all Amazon S3 data forwarding destinations.

```sql
SELECT
id,
access_key_id,
bucket_name,
destination_name,
authentication_mode,
created_at,
created_by,
description,
enabled,
encrypted,
invalidated_by_system,
modified_at,
modified_by,
region,
role_arn,
secret_access_key
FROM sumologic.logs_data_forwarding.destinations
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
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

Create a new Amazon S3 data forwarding destination.

```sql
INSERT INTO sumologic.logs_data_forwarding.destinations (
destination_name,
description,
authentication_mode,
access_key_id,
secret_access_key,
role_arn,
region,
encrypted,
enabled,
bucket_name,
region
)
SELECT 
'{{ destination_name }}' /* required */,
'{{ description }}',
'{{ authentication_mode }}' /* required */,
'{{ access_key_id }}',
'{{ secret_access_key }}',
'{{ role_arn }}',
'{{ region }}',
{{ encrypted }},
{{ enabled }},
'{{ bucket_name }}' /* required */,
'{{ region }}'
RETURNING
id,
access_key_id,
bucket_name,
destination_name,
authentication_mode,
created_at,
created_by,
description,
enabled,
encrypted,
invalidated_by_system,
modified_at,
modified_by,
region,
role_arn,
secret_access_key
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: destinations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the destinations resource.
    - name: destination_name
      value: "{{ destination_name }}"
      description: |
        Name of the S3 data forwarding destination.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the S3 data forwarding destination.
    - name: authentication_mode
      value: "{{ authentication_mode }}"
      description: |
        AWS IAM authentication method used for access. Possible values are: 1. \`AccessKey\` 2. \`RoleBased\`
    - name: access_key_id
      value: "{{ access_key_id }}"
      description: |
        The AWS Access ID to access the S3 bucket.
    - name: secret_access_key
      value: "{{ secret_access_key }}"
      description: |
        The AWS Secret Key to access the S3 bucket.
    - name: role_arn
      value: "{{ role_arn }}"
      description: |
        The AWS Role ARN to access the S3 bucket.
    - name: region
      value: "{{ region }}"
      description: |
        The region where the S3 bucket is located.
    - name: encrypted
      value: {{ encrypted }}
      description: |
        Enable S3 server-side encryption.
    - name: enabled
      value: {{ enabled }}
      description: |
        True if the destination is Active.
    - name: bucket_name
      value: "{{ bucket_name }}"
      description: |
        The name of the Amazon S3 bucket.
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

Update an S3 data forwarding destination by the given identifier.

```sql
UPDATE sumologic.logs_data_forwarding.destinations
SET 
destination_name = '{{ destination_name }}',
description = '{{ description }}',
authentication_mode = '{{ authentication_mode }}',
access_key_id = '{{ access_key_id }}',
secret_access_key = '{{ secret_access_key }}',
role_arn = '{{ role_arn }}',
region = '{{ region }}',
encrypted = {{ encrypted }},
enabled = {{ enabled }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND authentication_mode = '{{ authentication_mode }}' --required
RETURNING
id,
access_key_id,
bucket_name,
destination_name,
authentication_mode,
created_at,
created_by,
description,
enabled,
encrypted,
invalidated_by_system,
modified_at,
modified_by,
region,
role_arn,
secret_access_key;
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

Delete an existing Amazon S3 data forwarding destination with the given identifier.

```sql
DELETE FROM sumologic.logs_data_forwarding.destinations
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
