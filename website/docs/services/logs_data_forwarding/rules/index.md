--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.logs_data_forwarding.rules" /></td></tr>
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

Data forwarding rule that was requested.

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
    <td>The unique identifier of the data forwarding rule. (example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_id" /></td>
    <td><code>string</code></td>
    <td>The data forwarding destination id. (example: 1) (wire: destinationId)</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Partition or Scheduled View the rule applies to. (example: 1) (wire: indexId)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>(opaque JSON object)</td>
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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>True when the data forwarding rule is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="file_format" /></td>
    <td><code>string</code></td>
    <td>Specify the path prefix to a directory in the S3 bucket and how to format the file name. (example: &#123;index&#125;&#95;&#123;day&#125;&#95;&#123;hour&#125;&#95;&#123;minute&#125;&#95;&#123;second&#125;) (wire: fileFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Format of the payload. Default format will be "csv". "text" format should be used in conjunction with "raw" payloadSchema and vice-versa. (pattern: &lt;code&gt;^(csv|json|text)$&lt;/code&gt;, example: csv, x-pattern-message: should be one of the following: 'csv', 'json' or 'text')</td>
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
    <td><CopyableCode code="payload_schema" /></td>
    <td><code>string</code></td>
    <td>Schema for the payload. Default value of the payload schema is "allFields" for scheduled view, and "builtInFields" for partition. "raw" payloadSchema should be used in conjunction with "text" format and vice-versa. (pattern: &lt;code&gt;^(builtInFields|allFields|raw)$&lt;/code&gt;, example: builtInFields, x-pattern-message: should be one of the following: 'builtInFields', 'allFields' or 'raw') (wire: payloadSchema)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of all S3 data forwarding rules.

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
    <td>The unique identifier of the data forwarding rule. (example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_id" /></td>
    <td><code>string</code></td>
    <td>The data forwarding destination id. (example: 1) (wire: destinationId)</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Partition or Scheduled View the rule applies to. (example: 1) (wire: indexId)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>(opaque JSON object)</td>
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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>True when the data forwarding rule is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="file_format" /></td>
    <td><code>string</code></td>
    <td>Specify the path prefix to a directory in the S3 bucket and how to format the file name. (example: &#123;index&#125;&#95;&#123;day&#125;&#95;&#123;hour&#125;&#95;&#123;minute&#125;&#95;&#123;second&#125;) (wire: fileFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Format of the payload. Default format will be "csv". "text" format should be used in conjunction with "raw" payloadSchema and vice-versa. (pattern: &lt;code&gt;^(csv|json|text)$&lt;/code&gt;, example: csv, x-pattern-message: should be one of the following: 'csv', 'json' or 'text')</td>
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
    <td><CopyableCode code="payload_schema" /></td>
    <td><code>string</code></td>
    <td>Schema for the payload. Default value of the payload schema is "allFields" for scheduled view, and "builtInFields" for partition. "raw" payloadSchema should be used in conjunction with "text" format and vice-versa. (pattern: &lt;code&gt;^(builtInFields|allFields|raw)$&lt;/code&gt;, example: builtInFields, x-pattern-message: should be one of the following: 'builtInFields', 'allFields' or 'raw') (wire: payloadSchema)</td>
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
    <td><a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the details of an S3 data forwarding rule by its Partition or Scheduled View identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all S3 data forwarding rules.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destination_id"><code>destination_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a></td>
    <td></td>
    <td>Create a data forwarding rule to send data from a Partition or Scheduled View to an S3 bucket.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an S3 data forwarding rule by its Partition or Scheduled View identifier.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an S3 data forwarding rule by its Partition or Scheduled View identifier.</td>
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
<tr id="parameter-index_id">
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The `id` of the Partition or Scheduled View with the data forwarding rule to delete. (example: 1) (wire: indexId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of data forwarding rules returned in the response. The number of data forwarding rules returned may be less than the `limit`.</td>
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

Get the details of an S3 data forwarding rule by its Partition or Scheduled View identifier.

```sql
SELECT
id,
destination_id,
index_id,
bucket,
created_at,
created_by,
enabled,
file_format,
format,
modified_at,
modified_by,
payload_schema
FROM sumologic.logs_data_forwarding.rules
WHERE index_id = '{{ index_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all S3 data forwarding rules.

```sql
SELECT
id,
destination_id,
index_id,
bucket,
created_at,
created_by,
enabled,
file_format,
format,
modified_at,
modified_by,
payload_schema
FROM sumologic.logs_data_forwarding.rules
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

Create a data forwarding rule to send data from a Partition or Scheduled View to an S3 bucket.

```sql
INSERT INTO sumologic.logs_data_forwarding.rules (
index_id,
destination_id,
enabled,
file_format,
payload_schema,
format,
region
)
SELECT 
'{{ index_id }}' /* required */,
'{{ destination_id }}' /* required */,
{{ enabled }},
'{{ file_format }}',
'{{ payload_schema }}',
'{{ format }}',
'{{ region }}'
RETURNING
id,
destination_id,
index_id,
created_at,
created_by,
enabled,
file_format,
format,
modified_at,
modified_by,
payload_schema
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rules resource.
    - name: index_id
      value: "{{ index_id }}"
      description: |
        The \`id\` of the Partition or Scheduled View the rule applies to.
    - name: destination_id
      value: "{{ destination_id }}"
      description: |
        The data forwarding destination id.
    - name: enabled
      value: {{ enabled }}
      description: |
        True when the data forwarding rule is enabled.
    - name: file_format
      value: "{{ file_format }}"
      description: |
        Specify the path prefix to a directory in the S3 bucket and how to format the file name.
    - name: payload_schema
      value: "{{ payload_schema }}"
      description: |
        Schema for the payload. Default value of the payload schema is "allFields" for scheduled view, and "builtInFields" for partition. "raw" payloadSchema should be used in conjunction with "text" format and vice-versa.
    - name: format
      value: "{{ format }}"
      description: |
        Format of the payload. Default format will be "csv". "text" format should be used in conjunction with "raw" payloadSchema and vice-versa.
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

Update an S3 data forwarding rule by its Partition or Scheduled View identifier.

```sql
UPDATE sumologic.logs_data_forwarding.rules
SET 
destination_id = '{{ destination_id }}',
enabled = {{ enabled }},
file_format = '{{ file_format }}',
payload_schema = '{{ payload_schema }}',
format = '{{ format }}'
WHERE 
index_id = '{{ index_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
RETURNING
id,
destination_id,
index_id,
created_at,
created_by,
enabled,
file_format,
format,
modified_at,
modified_by,
payload_schema;
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

Delete an S3 data forwarding rule by its Partition or Scheduled View identifier.

```sql
DELETE FROM sumologic.logs_data_forwarding.rules
WHERE index_id = '{{ index_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
