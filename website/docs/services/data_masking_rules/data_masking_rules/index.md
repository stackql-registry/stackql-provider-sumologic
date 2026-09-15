--- 
title: data_masking_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - data_masking_rules
  - data_masking_rules
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

Creates, updates, deletes, gets or lists a <code>data_masking_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_masking_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.data_masking_rules.data_masking_rules" /></td></tr>
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

Data masking rule object that was requested.

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
    <td>Unique identifier for the data masking rule. (example: 00000000FF42A0C3)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the data masking rule. Use a name that makes it easy to identify the rule. Must be unique within the organization. This field is immutable and cannot be changed after creation. (example: Email Masking)</td>
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
    <td>Optional description of the data masking rule. Provide context about what PII this rule masks and why it's needed. (example: Masks email addresses in application logs)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the data masking rule is active. Only enabled rules are applied to search results. Set to false to temporarily disable a rule without deleting it.</td>
</tr>
<tr>
    <td><CopyableCode code="mask_string" /></td>
    <td><code>string</code></td>
    <td>The string to replace matched PII with. Defaults to '##redactedPII##' if not specified. Use descriptive mask strings like 'EMAIL_REDACTED' or 'PHONE_REDACTED' for clarity. (example: EMAIL_REDACTED, default: ##redactedPII##) (wire: maskString)</td>
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
    <td><CopyableCode code="regex_pattern" /></td>
    <td><code>string</code></td>
    <td>Regular expression pattern to match PII data that should be masked. The pattern must be valid according to Java regex syntax. All matches in search results will be replaced with the mask string. Required when creating a rule. When updating, if omitted the existing pattern is retained. (example: \b&#91;A-Za-z0-9._%+-&#93;+@&#91;A-Za-z0-9.-&#93;+\.&#91;A-Za-z&#93;&#123;2,6&#125;\b) (wire: regexPattern)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of data masking rules.

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
    <td>Unique identifier for the data masking rule. (example: 00000000FF42A0C3)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the data masking rule. Use a name that makes it easy to identify the rule. Must be unique within the organization. This field is immutable and cannot be changed after creation. (example: Email Masking)</td>
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
    <td>Optional description of the data masking rule. Provide context about what PII this rule masks and why it's needed. (example: Masks email addresses in application logs)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the data masking rule is active. Only enabled rules are applied to search results. Set to false to temporarily disable a rule without deleting it.</td>
</tr>
<tr>
    <td><CopyableCode code="mask_string" /></td>
    <td><code>string</code></td>
    <td>The string to replace matched PII with. Defaults to '##redactedPII##' if not specified. Use descriptive mask strings like 'EMAIL_REDACTED' or 'PHONE_REDACTED' for clarity. (example: EMAIL_REDACTED, default: ##redactedPII##) (wire: maskString)</td>
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
    <td><CopyableCode code="regex_pattern" /></td>
    <td><code>string</code></td>
    <td>Regular expression pattern to match PII data that should be masked. The pattern must be valid according to Java regex syntax. All matches in search results will be replaced with the mask string. Required when creating a rule. When updating, if omitted the existing pattern is retained. (example: \b&#91;A-Za-z0-9._%+-&#93;+@&#91;A-Za-z0-9.-&#93;+\.&#91;A-Za-z&#93;&#123;2,6&#125;\b) (wire: regexPattern)</td>
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
    <td>Get a data masking rule with the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all data masking rules for the current organization. The response is paginated with a default limit of 100 rules per page.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regex_pattern"><code>regex_pattern</code></a></td>
    <td></td>
    <td>Create a new data masking rule. The rule will be applied to search results at query time, replacing matches of the regex pattern with the specified mask string.&lt;br /&gt;**Note:** Changes to data masking rules may take up to 30 seconds to take effect.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Update an existing data masking rule. Only the fields provided in the request are updated; omitted fields retain their current values. The rule name is immutable and cannot be changed after creation.&lt;br /&gt;**Note:** Changes to data masking rules may take up to 30 seconds to take effect.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a data masking rule with the given identifier.&lt;br /&gt;**Note:** Changes to data masking rules may take up to 30 seconds to take effect.</td>
</tr>
<tr>
    <td><a href="#evaluate"><CopyableCode code="evaluate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-regexPattern"><code>regexPattern</code></a>, <a href="#parameter-text"><code>text</code></a></td>
    <td></td>
    <td>Evaluate a regex pattern against input text. This endpoint can be used to test regex patterns for data masking rules. You can provide your own mask string which will be used for masking, otherwise it will be masked with default value of ##redactedPII##. The response includes the masked text, match count, and positions of matches in the masked output text.</td>
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
    <td>Identifier of the data masking rule to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of data masking rules returned in the response. The number of rules returned may be less than the `limit`.</td>
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

Get a data masking rule with the given identifier.

```sql
SELECT
id,
name,
created_at,
created_by,
description,
enabled,
mask_string,
modified_at,
modified_by,
regex_pattern
FROM sumologic.data_masking_rules.data_masking_rules
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all data masking rules for the current organization. The response is paginated with a default limit of 100 rules per page.

```sql
SELECT
id,
name,
created_at,
created_by,
description,
enabled,
mask_string,
modified_at,
modified_by,
regex_pattern
FROM sumologic.data_masking_rules.data_masking_rules
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

Create a new data masking rule. The rule will be applied to search results at query time, replacing matches of the regex pattern with the specified mask string.&lt;br /&gt;**Note:** Changes to data masking rules may take up to 30 seconds to take effect.

```sql
INSERT INTO sumologic.data_masking_rules.data_masking_rules (
description,
regex_pattern,
mask_string,
enabled,
name,
region
)
SELECT 
'{{ description }}',
'{{ regex_pattern }}' /* required */,
'{{ mask_string }}',
{{ enabled }} /* required */,
'{{ name }}' /* required */,
'{{ region }}'
RETURNING
id,
name,
created_at,
created_by,
description,
enabled,
mask_string,
modified_at,
modified_by,
regex_pattern
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_masking_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_masking_rules resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional description of the data masking rule. Provide context about what PII this rule masks and why it's needed.
    - name: regex_pattern
      value: "{{ regex_pattern }}"
      description: |
        Regular expression pattern to match PII data that should be masked. The pattern must be valid according to Java regex syntax. All matches in search results will be replaced with the mask string. Required when creating a rule. When updating, if omitted the existing pattern is retained.
    - name: mask_string
      value: "{{ mask_string }}"
      description: |
        The string to replace matched PII with. Defaults to '##redactedPII##' if not specified. Use descriptive mask strings like 'EMAIL_REDACTED' or 'PHONE_REDACTED' for clarity.
      default: ##redactedPII##
    - name: enabled
      value: {{ enabled }}
      description: |
        Whether the data masking rule is active. Only enabled rules are applied to search results. Set to false to temporarily disable a rule without deleting it.
      default: true
    - name: name
      value: "{{ name }}"
      description: |
        Name of the data masking rule. Use a name that makes it easy to identify the rule. Must be unique within the organization. This field is immutable and cannot be changed after creation.
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

Update an existing data masking rule. Only the fields provided in the request are updated; omitted fields retain their current values. The rule name is immutable and cannot be changed after creation.&lt;br /&gt;**Note:** Changes to data masking rules may take up to 30 seconds to take effect.

```sql
UPDATE sumologic.data_masking_rules.data_masking_rules
SET 
description = '{{ description }}',
regex_pattern = '{{ regex_pattern }}',
mask_string = '{{ mask_string }}',
enabled = {{ enabled }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND enabled = {{ enabled }} --required
RETURNING
id,
name,
created_at,
created_by,
description,
enabled,
mask_string,
modified_at,
modified_by,
regex_pattern;
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

Delete a data masking rule with the given identifier.&lt;br /&gt;**Note:** Changes to data masking rules may take up to 30 seconds to take effect.

```sql
DELETE FROM sumologic.data_masking_rules.data_masking_rules
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="evaluate"
    values={[
        { label: 'evaluate', value: 'evaluate' }
    ]}
>
<TabItem value="evaluate">

Evaluate a regex pattern against input text. This endpoint can be used to test regex patterns for data masking rules. You can provide your own mask string which will be used for masking, otherwise it will be masked with default value of ##redactedPII##. The response includes the masked text, match count, and positions of matches in the masked output text.

```sql
EXEC sumologic.data_masking_rules.data_masking_rules.evaluate 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"regexPattern": "{{ regexPattern }}", 
"maskString": "{{ maskString }}", 
"text": "{{ text }}"
}'
;
```
</TabItem>
</Tabs>
