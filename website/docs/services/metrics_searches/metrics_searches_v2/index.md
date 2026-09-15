--- 
title: metrics_searches_v2
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics_searches_v2
  - metrics_searches
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

Creates, updates, deletes, gets or lists a <code>metrics_searches_v2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics_searches_v2" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.metrics_searches.metrics_searches_v2" /></td></tr>
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

Metrics search page that was requested.

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
    <td>Unique identifier for the metrics search page. (example: B23OjNs5ZCyn5VdMwOBoLo3PjgRnJSAlNTKEDAcpuDG2CIgRe9KFXMofm2H2)</td>
</tr>
<tr>
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the folder to save the metrics search in. By default it is saved in your personal folder.  (example: 000000000C1C17C6) (wire: folderId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the metrics search page.</td>
</tr>
<tr>
    <td><CopyableCode code="queries" /></td>
    <td><code>array</code></td>
    <td>Queries of the metrics search page.</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the metrics search page. (pattern: &lt;code&gt;^\s*\S.*$&lt;/code&gt;, x-pattern-message: must contain at least 1 non-whitespace character)</td>
</tr>
<tr>
    <td><CopyableCode code="visual_settings" /></td>
    <td><code>string</code></td>
    <td>Visual settings of the metrics search page. (wire: visualSettings)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Paginated list of metrics search pages under the Personal folder created by the user or viewable by user.

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
    <td>Unique identifier for the metrics search page. (example: B23OjNs5ZCyn5VdMwOBoLo3PjgRnJSAlNTKEDAcpuDG2CIgRe9KFXMofm2H2)</td>
</tr>
<tr>
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the folder to save the metrics search in. By default it is saved in your personal folder.  (example: 000000000C1C17C6) (wire: folderId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the metrics search page.</td>
</tr>
<tr>
    <td><CopyableCode code="queries" /></td>
    <td><code>array</code></td>
    <td>Queries of the metrics search page.</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the metrics search page. (pattern: &lt;code&gt;^\s*\S.*$&lt;/code&gt;, x-pattern-message: must contain at least 1 non-whitespace character)</td>
</tr>
<tr>
    <td><CopyableCode code="visual_settings" /></td>
    <td><code>string</code></td>
    <td>Visual settings of the metrics search page. (wire: visualSettings)</td>
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
    <td>Get a metrics search page by the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td>List all metrics search pages under the Personal folder created by the user or under folders viewable by user.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queries"><code>queries</code></a>, <a href="#parameter-time_range"><code>time_range</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates a new metrics search page.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queries"><code>queries</code></a>, <a href="#parameter-time_range"><code>time_range</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Update a metrics search page by the given identifier.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete metrics search page by the given identifier.</td>
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
    <td>Unique identifier of the metrics search page to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of metric searches returned in the response. The number of metric searches returned may be less than the `limit`. (example: 50)</td>
</tr>
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>whether to list all viewable metric searches under the folders</td>
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

Get a metrics search page by the given identifier.

```sql
SELECT
id,
folder_id,
description,
queries,
time_range,
title,
visual_settings
FROM sumologic.metrics_searches.metrics_searches_v2
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

List all metrics search pages under the Personal folder created by the user or under folders viewable by user.

```sql
SELECT
id,
folder_id,
description,
queries,
time_range,
title,
visual_settings
FROM sumologic.metrics_searches.metrics_searches_v2
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
AND mode = '{{ mode }}'
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

Creates a new metrics search page.

```sql
INSERT INTO sumologic.metrics_searches.metrics_searches_v2 (
title,
time_range,
description,
queries,
visual_settings,
folder_id,
region
)
SELECT 
'{{ title }}' /* required */,
'{{ time_range }}' /* required */,
'{{ description }}',
'{{ queries }}' /* required */,
'{{ visual_settings }}',
'{{ folder_id }}',
'{{ region }}'
RETURNING
id,
folder_id,
description,
queries,
time_range,
title,
visual_settings
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: metrics_searches_v2
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the metrics_searches_v2 resource.
    - name: title
      value: "{{ title }}"
      description: |
        Title of the metrics search page.
    - name: time_range
      value:
        type: "{{ type }}"
    - name: description
      value: "{{ description }}"
      description: |
        Description of the metrics search page.
    - name: queries
      description: |
        Queries of the metrics search page.
      value:
        - queryString: "{{ queryString }}"
          queryType: "{{ queryType }}"
          queryKey: "{{ queryKey }}"
          metricsQueryMode: "{{ metricsQueryMode }}"
          metricsQueryData:
            metric: "{{ metric }}"
            aggregationType: "{{ aggregationType }}"
            groupBy: "{{ groupBy }}"
            filters:
              - key: "{{ key }}"
                value: "{{ value }}"
                negation: {{ negation }}
            operators:
              - operatorName: "{{ operatorName }}"
                parameters: "{{ parameters }}"
          tracesQueryData:
            filters:
              - type: "{{ type }}"
          spansQueryData:
            filters:
              - type: "{{ type }}"
                fieldName: "{{ fieldName }}"
            visualizations:
              - type: "{{ type }}"
                name: "{{ name }}"
            groupBy:
              - type: "{{ type }}"
            limit:
              - direction: "{{ direction }}"
                limitValue: {{ limitValue }}
          parseMode: "{{ parseMode }}"
          timeSource: "{{ timeSource }}"
          transient: {{ transient }}
          outputCardinalityLimit: {{ outputCardinalityLimit }}
    - name: visual_settings
      value: "{{ visual_settings }}"
      description: |
        Visual settings of the metrics search page.
    - name: folder_id
      value: "{{ folder_id }}"
      description: |
        The identifier of the folder to save the metrics search in. By default it is saved in your personal folder.
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

Update a metrics search page by the given identifier.

```sql
UPDATE sumologic.metrics_searches.metrics_searches_v2
SET 
title = '{{ title }}',
time_range = '{{ time_range }}',
description = '{{ description }}',
queries = '{{ queries }}',
visual_settings = '{{ visual_settings }}',
folder_id = '{{ folder_id }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND queries = '{{ queries }}' --required
AND time_range = '{{ time_range }}' --required
AND title = '{{ title }}' --required
RETURNING
id,
folder_id,
description,
queries,
time_range,
title,
visual_settings;
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

Delete metrics search page by the given identifier.

```sql
DELETE FROM sumologic.metrics_searches.metrics_searches_v2
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
