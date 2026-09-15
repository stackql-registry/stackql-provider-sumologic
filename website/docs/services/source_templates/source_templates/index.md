--- 
title: source_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - source_templates
  - source_templates
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

Creates, updates, deletes, gets or lists a <code>source_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.source_templates.source_templates" /></td></tr>
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

Get source template response

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
    <td>id of source template. (example: 0000000003343FDD)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td>configuration of source template (example: apache.yaml.example)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Id of the user who created source template (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="input_json" /></td>
    <td><code>object</code></td>
    <td>inputJson of source template (wire: inputJson)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean parameter to get if the source template is enabled. (wire: isEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Modification timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Id of the user who last modified the source template (example: 0000000006243FDD) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_ref" /></td>
    <td><code>object</code></td>
    <td>schema reference for source template. (wire: schemaRef)</td>
</tr>
<tr>
    <td><CopyableCode code="selector" /></td>
    <td><code>object</code></td>
    <td>Agent selector conditions</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of Source template (enable, disable)</td>
</tr>
<tr>
    <td><CopyableCode code="total_collector_linked" /></td>
    <td><code>integer (int32)</code></td>
    <td>count of total collector linked with this source template. (wire: totalCollectorLinked)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of source templates.

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
    <td>id of source template. (example: 0000000003343FDD)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td>configuration of source template (example: apache.yaml.example)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Id of the user who created source template (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="input_json" /></td>
    <td><code>object</code></td>
    <td>inputJson of source template (wire: inputJson)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean parameter to get if the source template is enabled. (wire: isEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Modification timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Id of the user who last modified the source template (example: 0000000006243FDD) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_ref" /></td>
    <td><code>object</code></td>
    <td>schema reference for source template. (wire: schemaRef)</td>
</tr>
<tr>
    <td><CopyableCode code="selector" /></td>
    <td><code>object</code></td>
    <td>Agent selector conditions</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of Source template (enable, disable)</td>
</tr>
<tr>
    <td><CopyableCode code="total_collector_linked" /></td>
    <td><code>integer (int32)</code></td>
    <td>count of total collector linked with this source template. (wire: totalCollectorLinked)</td>
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
    <td>Get a source template with the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-show_disabled"><code>show_disabled</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-fleet_ids"><code>fleet_ids</code></a></td>
    <td>Get a list of all source templates.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-input_json"><code>input_json</code></a>, <a href="#parameter-schema_ref"><code>schema_ref</code></a></td>
    <td><a href="#parameter-dry_run"><code>dry_run</code></a></td>
    <td>Create source template.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-input_json"><code>input_json</code></a>, <a href="#parameter-schema_ref"><code>schema_ref</code></a></td>
    <td></td>
    <td>Update a source template with the given identifier.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a source template with the given identifier.</td>
</tr>
<tr>
    <td><a href="#update_status"><CopyableCode code="update_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Update the status (enable or disable) of a source template.</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputJson"><code>inputJson</code></a>, <a href="#parameter-schemaRef"><code>schemaRef</code></a></td>
    <td></td>
    <td>Upgrade a source template with the given identifier.</td>
</tr>
<tr>
    <td><a href="#get_linked_impact"><CopyableCode code="get_linked_impact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-collectorId"><code>collectorId</code></a></td>
    <td></td>
    <td>Given the set of tags user wants to update, display the list of source templates that will be linked/unlinked to the otCollector.</td>
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
    <td>Identifier of the source template to upgrade.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-dry_run">
    <td><CopyableCode code="dry_run" /></td>
    <td><code>boolean</code></td>
    <td>Whether this creation request is a dry run. With dryRun set to true, the source template will not be created but the request will be validated. (wire: dryRun)</td>
</tr>
<tr id="parameter-fleet_ids">
    <td><CopyableCode code="fleet_ids" /></td>
    <td><code>array</code></td>
    <td>Comma-separated list of fleet IDs (hex-encoded). (wire: fleetIds)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Only return source template matching the given name (exact match).</td>
</tr>
<tr id="parameter-show_disabled">
    <td><CopyableCode code="show_disabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean parameter to get all, including disabled source templates. (wire: showDisabled)</td>
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

Get a source template with the given identifier.

```sql
SELECT
id,
config,
created_at,
created_by,
input_json,
is_enabled,
modified_at,
modified_by,
schema_ref,
selector,
status,
total_collector_linked
FROM sumologic.source_templates.source_templates
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all source templates.

```sql
SELECT
id,
config,
created_at,
created_by,
input_json,
is_enabled,
modified_at,
modified_by,
schema_ref,
selector,
status,
total_collector_linked
FROM sumologic.source_templates.source_templates
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND show_disabled = '{{ show_disabled }}'
AND name = '{{ name }}'
AND fleet_ids = '{{ fleet_ids }}'
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

Create source template.

```sql
INSERT INTO sumologic.source_templates.source_templates (
schema_ref,
input_json,
selector,
is_enabled,
region,
dry_run
)
SELECT 
'{{ schema_ref }}' /* required */,
'{{ input_json }}' /* required */,
'{{ selector }}',
{{ is_enabled }},
'{{ region }}',
'{{ dry_run }}'
RETURNING
id,
config,
created_at,
created_by,
input_json,
is_enabled,
modified_at,
modified_by,
schema_ref,
selector,
status,
total_collector_linked
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: source_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the source_templates resource.
    - name: schema_ref
      description: |
        schema reference for source template.
      value:
        type: "{{ type }}"
    - name: input_json
      description: |
        inputJson of source template
      value:
        name: "{{ name }}"
        receivers: "{{ receivers }}"
        description: "{{ description }}"
        processors: "{{ processors }}"
    - name: selector
      description: |
        Agent selector conditions
      value:
        tags:
          - "{{ tags }}"
        names:
          - "{{ names }}"
        fleetIds:
          - "{{ fleetIds }}"
    - name: is_enabled
      value: {{ is_enabled }}
      description: |
        Indicates whether the source template is enabled - **Create operation:** Defaults to \`true\` (the template is enabled when created). - **Update operation:** If omitted, the existing status is preserved.
    - name: dry_run
      value: {{ dry_run }}
      description: Whether this creation request is a dry run. With dryRun set to true, the source template will not be created but the request will be validated.
      description: Whether this creation request is a dry run. With dryRun set to true, the source template will not be created but the request will be validated.
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

Update a source template with the given identifier.

```sql
UPDATE sumologic.source_templates.source_templates
SET 
schema_ref = '{{ schema_ref }}',
input_json = '{{ input_json }}',
selector = '{{ selector }}',
is_enabled = {{ is_enabled }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND input_json = '{{ input_json }}' --required
AND schema_ref = '{{ schema_ref }}' --required
RETURNING
id,
config,
created_at,
created_by,
input_json,
is_enabled,
modified_at,
modified_by,
schema_ref,
selector,
status,
total_collector_linked;
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

Delete a source template with the given identifier.

```sql
DELETE FROM sumologic.source_templates.source_templates
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_status"
    values={[
        { label: 'update_status', value: 'update_status' },
        { label: 'upgrade', value: 'upgrade' },
        { label: 'get_linked_impact', value: 'get_linked_impact' }
    ]}
>
<TabItem value="update_status">

Update the status (enable or disable) of a source template.

```sql
EXEC sumologic.source_templates.source_templates.update_status 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"status": "{{ status }}"
}'
;
```
</TabItem>
<TabItem value="upgrade">

Upgrade a source template with the given identifier.

```sql
EXEC sumologic.source_templates.source_templates.upgrade 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"schemaRef": "{{ schemaRef }}", 
"inputJson": "{{ inputJson }}"
}'
;
```
</TabItem>
<TabItem value="get_linked_impact">

Given the set of tags user wants to update, display the list of source templates that will be linked/unlinked to the otCollector.

```sql
EXEC sumologic.source_templates.source_templates.get_linked_impact 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"collectorId": "{{ collectorId }}", 
"tags": "{{ tags }}", 
"updatedName": "{{ updatedName }}"
}'
;
```
</TabItem>
</Tabs>
