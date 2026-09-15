--- 
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.dashboards.dashboards" /></td></tr>
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

Dashboard object that was requested.

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
    <td>Unique identifier for the dashboard. This id is used to get detailed information about the dashboard, such as panels, variables and the layout.  (example: B23OjNs5ZCyn5VdMwOBoLo3PjgRnJSAlNTKEDAcpuDG2CIgRe9KFXMofm2H2)</td>
</tr>
<tr>
    <td><CopyableCode code="content_id" /></td>
    <td><code>string</code></td>
    <td>Content identifier for the dashboard. This id is used to connect to the Sumo Content Library and get general metadata about the dashboard. Use this id if you want to search for dashboards in Sumo folders.  (example: 1) (wire: contentId)</td>
</tr>
<tr>
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the folder to save the dashboard in. By default it is saved in your personal folder.  (example: 000000000C1C17C6) (wire: folderId)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_id" /></td>
    <td><code>string</code></td>
    <td>Scheduled report identifier for the dashboard. Only most recently modified report schedule is rerun per dashboard. This id is used to manage the schedule details through the scheduled report API.  (example: RdQHYPh2jxoS90DXtKfA7nAJV2rsQ9BncpfY7IkjNzQWi52ug85W7r6Rrmtd) (wire: scheduleId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the dashboard. (example: A view of pods, namespaces and nodes of your cluster.)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>If set denotes that the dashboard concerns a given domain (e.g. `aws`, `k8s`, `app`). (example: aws, default: )</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchies" /></td>
    <td><code>array</code></td>
    <td>If set to non-empty array denotes that the dashboard concerns given hierarchies.</td>
</tr>
<tr>
    <td><CopyableCode code="highlight_violations" /></td>
    <td><code>boolean</code></td>
    <td>Whether to highlight threshold violations. (wire: highlightViolations)</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>Is the dashboard public (wire: isPublic)</td>
</tr>
<tr>
    <td><CopyableCode code="layout" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organizations" /></td>
    <td><code>object</code></td>
    <td>The organization details to run the dashboard by</td>
</tr>
<tr>
    <td><CopyableCode code="panels" /></td>
    <td><code>array</code></td>
    <td>Panels in the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_interval" /></td>
    <td><code>integer (int32)</code></td>
    <td>Interval of time (in seconds) to automatically refresh the dashboard. A value of 0 means we never automatically refresh the dashboard. Allowed values are `0`, `30`, `60`, `120`, `300`, `900`, `1800`, `3600`, `7200`, `86400`.  (wire: refreshInterval)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_count" /></td>
    <td><code>integer (int32)</code></td>
    <td>Count of report schedules for the dashboard. (wire: scheduleCount)</td>
</tr>
<tr>
    <td><CopyableCode code="theme" /></td>
    <td><code>string</code></td>
    <td>Theme for the dashboard. Either `Light` or `Dark`. (pattern: &lt;code&gt;^(light|dark|Light|Dark)$&lt;/code&gt;, example: light, default: Light, x-pattern-message: Must be `Light`, or `Dark`)</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the dashboard. (example: Kubernetes Dashboard)</td>
</tr>
<tr>
    <td><CopyableCode code="topology_label_map" /></td>
    <td><code>object</code></td>
    <td>Map of the topology labels. Each label has a key and a list of values. If a value is `*`, it means the label will match content for all values of its key.  (wire: topologyLabelMap)</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td>Variables to apply to the panels.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Paginated list of dashboards under the Personal folder created by the user.

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
    <td>Unique identifier for the dashboard. This id is used to get detailed information about the dashboard, such as panels, variables and the layout.  (example: B23OjNs5ZCyn5VdMwOBoLo3PjgRnJSAlNTKEDAcpuDG2CIgRe9KFXMofm2H2)</td>
</tr>
<tr>
    <td><CopyableCode code="content_id" /></td>
    <td><code>string</code></td>
    <td>Content identifier for the dashboard. This id is used to connect to the Sumo Content Library and get general metadata about the dashboard. Use this id if you want to search for dashboards in Sumo folders.  (example: 1) (wire: contentId)</td>
</tr>
<tr>
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the folder to save the dashboard in. By default it is saved in your personal folder.  (example: 000000000C1C17C6) (wire: folderId)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_id" /></td>
    <td><code>string</code></td>
    <td>Scheduled report identifier for the dashboard. Only most recently modified report schedule is rerun per dashboard. This id is used to manage the schedule details through the scheduled report API.  (example: RdQHYPh2jxoS90DXtKfA7nAJV2rsQ9BncpfY7IkjNzQWi52ug85W7r6Rrmtd) (wire: scheduleId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the dashboard. (example: A view of pods, namespaces and nodes of your cluster.)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>If set denotes that the dashboard concerns a given domain (e.g. `aws`, `k8s`, `app`). (example: aws, default: )</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchies" /></td>
    <td><code>array</code></td>
    <td>If set to non-empty array denotes that the dashboard concerns given hierarchies.</td>
</tr>
<tr>
    <td><CopyableCode code="highlight_violations" /></td>
    <td><code>boolean</code></td>
    <td>Whether to highlight threshold violations. (wire: highlightViolations)</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>Is the dashboard public (wire: isPublic)</td>
</tr>
<tr>
    <td><CopyableCode code="layout" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organizations" /></td>
    <td><code>object</code></td>
    <td>The organization details to run the dashboard by</td>
</tr>
<tr>
    <td><CopyableCode code="panels" /></td>
    <td><code>array</code></td>
    <td>Panels in the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_interval" /></td>
    <td><code>integer (int32)</code></td>
    <td>Interval of time (in seconds) to automatically refresh the dashboard. A value of 0 means we never automatically refresh the dashboard. Allowed values are `0`, `30`, `60`, `120`, `300`, `900`, `1800`, `3600`, `7200`, `86400`.  (wire: refreshInterval)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_count" /></td>
    <td><code>integer (int32)</code></td>
    <td>Count of report schedules for the dashboard. (wire: scheduleCount)</td>
</tr>
<tr>
    <td><CopyableCode code="theme" /></td>
    <td><code>string</code></td>
    <td>Theme for the dashboard. Either `Light` or `Dark`. (pattern: &lt;code&gt;^(light|dark|Light|Dark)$&lt;/code&gt;, example: light, default: Light, x-pattern-message: Must be `Light`, or `Dark`)</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the dashboard. (example: Kubernetes Dashboard)</td>
</tr>
<tr>
    <td><CopyableCode code="topology_label_map" /></td>
    <td><code>object</code></td>
    <td>Map of the topology labels. Each label has a key and a list of values. If a value is `*`, it means the label will match content for all values of its key.  (wire: topologyLabelMap)</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td>Variables to apply to the panels.</td>
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
    <td>Get a dashboard by the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td>List all dashboards under the Personal folder created by the user or under folders viewable by user.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-time_range"><code>time_range</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates a new dashboard.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-time_range"><code>time_range</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Update a dashboard by the given identifier.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a dashboard by the given identifier.</td>
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
    <td>Identifier of the dashboard to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of dashboard returned in the response. The number of dashboards returned may be less than the `limit`. (example: 50)</td>
</tr>
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>whether to list all viewable dashboards under the folders</td>
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

Get a dashboard by the given identifier.

```sql
SELECT
id,
content_id,
folder_id,
schedule_id,
description,
domain,
hierarchies,
highlight_violations,
is_public,
layout,
organizations,
panels,
refresh_interval,
schedule_count,
theme,
time_range,
title,
topology_label_map,
variables
FROM sumologic.dashboards.dashboards
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

List all dashboards under the Personal folder created by the user or under folders viewable by user.

```sql
SELECT
id,
content_id,
folder_id,
schedule_id,
description,
domain,
hierarchies,
highlight_violations,
is_public,
layout,
organizations,
panels,
refresh_interval,
schedule_count,
theme,
time_range,
title,
topology_label_map,
variables
FROM sumologic.dashboards.dashboards
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

Creates a new dashboard.

```sql
INSERT INTO sumologic.dashboards.dashboards (
title,
description,
folder_id,
topology_label_map,
domain,
hierarchies,
refresh_interval,
time_range,
panels,
layout,
variables,
theme,
is_public,
highlight_violations,
organizations,
region
)
SELECT 
'{{ title }}' /* required */,
'{{ description }}',
'{{ folder_id }}',
'{{ topology_label_map }}',
'{{ domain }}',
'{{ hierarchies }}',
{{ refresh_interval }},
'{{ time_range }}' /* required */,
'{{ panels }}',
'{{ layout }}',
'{{ variables }}',
'{{ theme }}',
{{ is_public }},
{{ highlight_violations }},
'{{ organizations }}',
'{{ region }}'
RETURNING
id,
content_id,
folder_id,
schedule_id,
description,
domain,
hierarchies,
highlight_violations,
is_public,
layout,
organizations,
panels,
refresh_interval,
schedule_count,
theme,
time_range,
title,
topology_label_map,
variables
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dashboards
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dashboards resource.
    - name: title
      value: "{{ title }}"
      description: |
        Title of the dashboard.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the dashboard.
    - name: folder_id
      value: "{{ folder_id }}"
      description: |
        The identifier of the folder to save the dashboard in. By default it is saved in your personal folder.
    - name: topology_label_map
      description: |
        Map of the topology labels. Each label has a key and a list of values. If a value is \`*\`, it means the label will match content for all values of its key.
      value:
        data: "{{ data }}"
    - name: domain
      value: "{{ domain }}"
      description: |
        If set denotes that the dashboard concerns a given domain (e.g. \`aws\`, \`k8s\`, \`app\`).
      default: 
    - name: hierarchies
      value:
        - "{{ hierarchies }}"
      description: |
        If set to non-empty array denotes that the dashboard concerns given hierarchies.
      default: 
    - name: refresh_interval
      value: {{ refresh_interval }}
      description: |
        Interval of time (in seconds) to automatically refresh the dashboard. A value of 0 means we never automatically refresh the dashboard. Allowed values are \`0\`, \`30\`, \`60\`, \`120\`, \`300\`, \`900\`, \`1800\`, \`3600\`, \`7200\`, \`86400\`.
    - name: time_range
      value:
        type: "{{ type }}"
    - name: panels
      description: |
        Panels in the dashboard.
      value:
        - id: "{{ id }}"
          key: "{{ key }}"
          title: "{{ title }}"
          visualSettings: "{{ visualSettings }}"
          keepVisualSettingsConsistentWithParent: {{ keepVisualSettingsConsistentWithParent }}
          panelType: "{{ panelType }}"
    - name: layout
      value:
        layoutType: "{{ layoutType }}"
        layoutStructures:
          - key: "{{ key }}"
            structure: "{{ structure }}"
    - name: variables
      description: |
        Variables to apply to the panels.
      value:
        - id: "{{ id }}"
          name: "{{ name }}"
          displayName: "{{ displayName }}"
          defaultValue: "{{ defaultValue }}"
          sourceDefinition:
            variableSourceType: "{{ variableSourceType }}"
          allowMultiSelect: {{ allowMultiSelect }}
          includeAllOption: {{ includeAllOption }}
          hideFromUI: {{ hideFromUI }}
          valueType: "{{ valueType }}"
    - name: theme
      value: "{{ theme }}"
      description: |
        Theme for the dashboard. Either \`Light\` or \`Dark\`.
      default: Light
    - name: is_public
      value: {{ is_public }}
      description: |
        Is the dashboard public
      default: false
    - name: highlight_violations
      value: {{ highlight_violations }}
      description: |
        Whether to highlight threshold violations.
      default: false
    - name: organizations
      description: |
        The organization details to run the dashboard by
      value:
        defaultOrgIds:
          - "{{ defaultOrgIds }}"
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

Update a dashboard by the given identifier.

```sql
UPDATE sumologic.dashboards.dashboards
SET 
title = '{{ title }}',
description = '{{ description }}',
folder_id = '{{ folder_id }}',
topology_label_map = '{{ topology_label_map }}',
domain = '{{ domain }}',
hierarchies = '{{ hierarchies }}',
refresh_interval = {{ refresh_interval }},
time_range = '{{ time_range }}',
panels = '{{ panels }}',
layout = '{{ layout }}',
variables = '{{ variables }}',
theme = '{{ theme }}',
is_public = {{ is_public }},
highlight_violations = {{ highlight_violations }},
organizations = '{{ organizations }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND time_range = '{{ time_range }}' --required
AND title = '{{ title }}' --required
RETURNING
id,
content_id,
folder_id,
schedule_id,
description,
domain,
hierarchies,
highlight_violations,
is_public,
layout,
organizations,
panels,
refresh_interval,
schedule_count,
theme,
time_range,
title,
topology_label_map,
variables;
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

Delete a dashboard by the given identifier.

```sql
DELETE FROM sumologic.dashboards.dashboards
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
