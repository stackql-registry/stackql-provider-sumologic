--- 
title: extraction_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - extraction_rules
  - extraction_rules
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

Creates, updates, deletes, gets or lists an <code>extraction_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="extraction_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.extraction_rules.extraction_rules" /></td></tr>
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

Extraction rule object that was requested.

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
    <td>Unique identifier for the field extraction rule.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the field extraction rule. Use a name that makes it easy to identify the rule. (example: ExtractionRule123)</td>
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
    <td>Is the field extraction rule enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="field_names" /></td>
    <td><code>array</code></td>
    <td>List of extracted fields from "parseExpression". (wire: fieldNames)</td>
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
    <td><CopyableCode code="parse_expression" /></td>
    <td><code>string</code></td>
    <td>Describes the fields to be parsed. (example: csv _raw extract 1 as f1) (wire: parseExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Scope of the field extraction rule. This could be a sourceCategory, sourceHost, or any other metadata that describes the data you want to extract from. Think of the Scope as the first portion of an ad hoc search, before the first pipe ( | ). You'll use the Scope to run a search against the rule. (example: _sourceHost=127.0.0.1)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of field extraction rules.

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
    <td>Unique identifier for the field extraction rule.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the field extraction rule. Use a name that makes it easy to identify the rule. (example: ExtractionRule123)</td>
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
    <td>Is the field extraction rule enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="field_names" /></td>
    <td><code>array</code></td>
    <td>List of extracted fields from "parseExpression". (wire: fieldNames)</td>
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
    <td><CopyableCode code="parse_expression" /></td>
    <td><code>string</code></td>
    <td>Describes the fields to be parsed. (example: csv _raw extract 1 as f1) (wire: parseExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Scope of the field extraction rule. This could be a sourceCategory, sourceHost, or any other metadata that describes the data you want to extract from. Think of the Scope as the first portion of an ad hoc search, before the first pipe ( | ). You'll use the Scope to run a search against the rule. (example: _sourceHost=127.0.0.1)</td>
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
    <td>Get a field extraction rule with the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all field extraction rules. The response is paginated with a default limit of 100 field extraction rules per page.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-parse_expression"><code>parse_expression</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Create a new field extraction rule.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-parse_expression"><code>parse_expression</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Update an existing field extraction rule. All properties specified in the request are replaced. Missing properties are set to their default values.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a field extraction rule with the given identifier.</td>
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
    <td>Identifier of the field extraction rule to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of field extraction rules returned in the response. The number of field extraction rules returned may be less than the `limit`.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results.</td>
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

Get a field extraction rule with the given identifier.

```sql
SELECT
id,
name,
created_at,
created_by,
enabled,
field_names,
modified_at,
modified_by,
parse_expression,
scope
FROM sumologic.extraction_rules.extraction_rules
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all field extraction rules. The response is paginated with a default limit of 100 field extraction rules per page.

```sql
SELECT
id,
name,
created_at,
created_by,
enabled,
field_names,
modified_at,
modified_by,
parse_expression,
scope
FROM sumologic.extraction_rules.extraction_rules
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

Create a new field extraction rule.

```sql
INSERT INTO sumologic.extraction_rules.extraction_rules (
name,
scope,
parse_expression,
enabled,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ scope }}' /* required */,
'{{ parse_expression }}' /* required */,
{{ enabled }},
'{{ region }}'
RETURNING
id,
name,
created_at,
created_by,
enabled,
field_names,
modified_at,
modified_by,
parse_expression,
scope
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: extraction_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the extraction_rules resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the field extraction rule. Use a name that makes it easy to identify the rule.
    - name: scope
      value: "{{ scope }}"
      description: |
        Scope of the field extraction rule. This could be a sourceCategory, sourceHost, or any other metadata that describes the data you want to extract from. Think of the Scope as the first portion of an ad hoc search, before the first pipe ( | ). You'll use the Scope to run a search against the rule.
    - name: parse_expression
      value: "{{ parse_expression }}"
      description: |
        Describes the fields to be parsed.
    - name: enabled
      value: {{ enabled }}
      description: |
        Is the field extraction rule enabled.
      default: true
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

Update an existing field extraction rule. All properties specified in the request are replaced. Missing properties are set to their default values.

```sql
UPDATE sumologic.extraction_rules.extraction_rules
SET 
name = '{{ name }}',
scope = '{{ scope }}',
parse_expression = '{{ parse_expression }}',
enabled = {{ enabled }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND name = '{{ name }}' --required
AND parse_expression = '{{ parse_expression }}' --required
AND scope = '{{ scope }}' --required
AND enabled = {{ enabled }} --required
RETURNING
id,
name,
created_at,
created_by,
enabled,
field_names,
modified_at,
modified_by,
parse_expression,
scope;
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

Delete a field extraction rule with the given identifier.

```sql
DELETE FROM sumologic.extraction_rules.extraction_rules
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
