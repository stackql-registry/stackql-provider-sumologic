--- 
title: macros
hide_title: false
hide_table_of_contents: false
keywords:
  - macros
  - macros
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

Creates, updates, deletes, gets or lists a <code>macros</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="macros" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.macros.macros" /></td></tr>
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

Macro object that was requested.

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
    <td>Unique identifier for the macro. This id is used to get detailed information about the macro, such as name, definition, arguments and argument validations.  (example: C03E086C137F38B4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the macro. (example: MacroGeoLookup)</td>
</tr>
<tr>
    <td><CopyableCode code="macro_creation_suggestion_id" /></td>
    <td><code>string</code></td>
    <td>Identifier if the suggestion comes from an macro creation suggestion. This id is used to track macro creation suggestions, and to delete the suggestion once the macro is created. (example: ABC12) (wire: macroCreationSuggestionId)</td>
</tr>
<tr>
    <td><CopyableCode code="argument_validations" /></td>
    <td><code>array</code></td>
    <td>Validation expressions for the arguments. (wire: argumentValidations)</td>
</tr>
<tr>
    <td><CopyableCode code="arguments" /></td>
    <td><code>array</code></td>
    <td>Arguments used in the macro.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp of the macro in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2024-10-01T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the macro. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The definition of the macro. Use a valid Sumo Log Search expression. (example: lookup latitude, longitude from geo:​//location on ip = &#123;&#123;ip_field&#125;&#125; | count by latitude, longitude | sort _count"&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the macro. (example: Macro for geo lookup.)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>If the macro is enabled or not (default True)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Paginated list of viewable macros for the customer.

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
    <td>Unique identifier for the macro. This id is used to get detailed information about the macro, such as name, definition, arguments and argument validations.  (example: C03E086C137F38B4)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the macro. (example: MacroGeoLookup)</td>
</tr>
<tr>
    <td><CopyableCode code="macro_creation_suggestion_id" /></td>
    <td><code>string</code></td>
    <td>Identifier if the suggestion comes from an macro creation suggestion. This id is used to track macro creation suggestions, and to delete the suggestion once the macro is created. (example: ABC12) (wire: macroCreationSuggestionId)</td>
</tr>
<tr>
    <td><CopyableCode code="argument_validations" /></td>
    <td><code>array</code></td>
    <td>Validation expressions for the arguments. (wire: argumentValidations)</td>
</tr>
<tr>
    <td><CopyableCode code="arguments" /></td>
    <td><code>array</code></td>
    <td>Arguments used in the macro.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp of the macro in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2024-10-01T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the macro. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The definition of the macro. Use a valid Sumo Log Search expression. (example: lookup latitude, longitude from geo:​//location on ip = &#123;&#123;ip_field&#125;&#125; | count by latitude, longitude | sort _count"&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the macro. (example: Macro for geo lookup.)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>If the macro is enabled or not (default True)</td>
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
    <td>Get a macro by the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>List all viewable macros for the customer.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new macro.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Edits an existing macro by id. Macro name is immutable.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a macro by id.</td>
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
    <td>Id of macro to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of macro returned in the response. The number of macros returned may be less than the `limit`. Default 50. (example: 50)</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results. `token` is set to null when no more pages are left. (example: GDCiRv4vebF3UWFJQ1kySXBOR3Bzh69GR0RyWm9vCtc)</td>
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

Get a macro by the given identifier.

```sql
SELECT
id,
name,
macro_creation_suggestion_id,
argument_validations,
arguments,
created_at,
created_by,
definition,
description,
enabled
FROM sumologic.macros.macros
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

List all viewable macros for the customer.

```sql
SELECT
id,
name,
macro_creation_suggestion_id,
argument_validations,
arguments,
created_at,
created_by,
definition,
description,
enabled
FROM sumologic.macros.macros
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

Creates a new macro.

```sql
INSERT INTO sumologic.macros.macros (
description,
definition,
enabled,
arguments,
argument_validations,
name,
macro_creation_suggestion_id,
region
)
SELECT 
'{{ description }}',
'{{ definition }}' /* required */,
{{ enabled }},
'{{ arguments }}',
'{{ argument_validations }}',
'{{ name }}' /* required */,
'{{ macro_creation_suggestion_id }}',
'{{ region }}'
RETURNING
id,
name,
macro_creation_suggestion_id,
argument_validations,
arguments,
created_at,
created_by,
definition,
description,
enabled
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: macros
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the macros resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the macro.
    - name: definition
      value: "{{ definition }}"
      description: |
        The definition of the macro. Use a valid Sumo Log Search expression.
    - name: enabled
      value: {{ enabled }}
      description: |
        If the macro is enabled or not (default True)
      default: true
    - name: arguments
      description: |
        Arguments used in the macro.
      value:
        - name: "{{ name }}"
          type: "{{ type }}"
    - name: argument_validations
      description: |
        Validation expressions for the arguments.
      value:
        - evalExpression: "{{ evalExpression }}"
          errorMessage: "{{ errorMessage }}"
    - name: name
      value: "{{ name }}"
      description: |
        Name of the macro.
    - name: macro_creation_suggestion_id
      value: "{{ macro_creation_suggestion_id }}"
      description: |
        Identifier if the suggestion comes from an macro creation suggestion. This id is used to track macro creation suggestions, and to delete the suggestion once the macro is created.
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

Edits an existing macro by id. Macro name is immutable.

```sql
UPDATE sumologic.macros.macros
SET 
description = '{{ description }}',
definition = '{{ definition }}',
enabled = {{ enabled }},
arguments = '{{ arguments }}',
argument_validations = '{{ argument_validations }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND definition = '{{ definition }}' --required
RETURNING
id,
name,
macro_creation_suggestion_id,
argument_validations,
arguments,
created_at,
created_by,
definition,
description,
enabled;
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

Delete a macro by id.

```sql
DELETE FROM sumologic.macros.macros
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
