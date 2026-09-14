--- 
title: ot_collectors
hide_title: false
hide_table_of_contents: false
keywords:
  - ot_collectors
  - ot_collectors
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

Creates, updates, deletes, gets or lists an <code>ot_collectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ot_collectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.ot_collectors.ot_collectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'get_by_names', value: 'get_by_names' }
    ]}
>
<TabItem value="get">

An OT Collector by identifier.

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
    <td>Unique identifier of the OT Collector. (example: 0000000005F5E105)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the OT Collector. (example: test OT Collector)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>Fleet Id of the OT Collector (example: 0000000005F5E105) (wire: fleetId)</td>
</tr>
<tr>
    <td><CopyableCode code="alive" /></td>
    <td><code>boolean</code></td>
    <td>Alive Status of the OT Collector based on heartbeat.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category of the OT Collector. (example: apache)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006A5C7A2) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_config" /></td>
    <td><code>object</code></td>
    <td>Config map that includes Base 64 Encoded Effective Configuration Yaml of the Remotely managed OT Collector. (wire: effectiveConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral" /></td>
    <td><code>boolean</code></td>
    <td>Ephemeral Status of the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="health_incidents_tracker" /></td>
    <td><code>object</code></td>
    <td>Health incident information. (wire: healthIncidentsTracker)</td>
</tr>
<tr>
    <td><CopyableCode code="is_remotely_managed" /></td>
    <td><code>boolean</code></td>
    <td>Management Status of the OT Collector based on if it is remotely or locally managed. (wire: isRemotelyManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006A5C7A2) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="source_template_linked_count" /></td>
    <td><code>integer</code></td>
    <td>Count of the source templates linked to a collector (wire: sourceTemplateLinkedCount)</td>
</tr>
<tr>
    <td><CopyableCode code="system_info" /></td>
    <td><code>object</code></td>
    <td>System information of the OT Collector. (wire: systemInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>timezone of the collector (example: UTC) (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version information of the OT Collector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of paginated OT Collectors.

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
    <td>Unique identifier of the OT Collector. (example: 0000000005F5E105)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the OT Collector. (example: test OT Collector)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>Fleet Id of the OT Collector (example: 0000000005F5E105) (wire: fleetId)</td>
</tr>
<tr>
    <td><CopyableCode code="alive" /></td>
    <td><code>boolean</code></td>
    <td>Alive Status of the OT Collector based on heartbeat.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category of the OT Collector. (example: apache)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006A5C7A2) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_config" /></td>
    <td><code>object</code></td>
    <td>Config map that includes Base 64 Encoded Effective Configuration Yaml of the Remotely managed OT Collector. (wire: effectiveConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral" /></td>
    <td><code>boolean</code></td>
    <td>Ephemeral Status of the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="health_incidents_tracker" /></td>
    <td><code>object</code></td>
    <td>Health incident information. (wire: healthIncidentsTracker)</td>
</tr>
<tr>
    <td><CopyableCode code="is_remotely_managed" /></td>
    <td><code>boolean</code></td>
    <td>Management Status of the OT Collector based on if it is remotely or locally managed. (wire: isRemotelyManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006A5C7A2) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="source_template_linked_count" /></td>
    <td><code>integer</code></td>
    <td>Count of the source templates linked to a collector (wire: sourceTemplateLinkedCount)</td>
</tr>
<tr>
    <td><CopyableCode code="system_info" /></td>
    <td><code>object</code></td>
    <td>System information of the OT Collector. (wire: systemInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>timezone of the collector (example: UTC) (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version information of the OT Collector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_by_names">

A list of OT Collectors.

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
    <td>Unique identifier of the OT Collector. (example: 0000000005F5E105)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the OT Collector. (example: test OT Collector)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>Fleet Id of the OT Collector (example: 0000000005F5E105) (wire: fleetId)</td>
</tr>
<tr>
    <td><CopyableCode code="alive" /></td>
    <td><code>boolean</code></td>
    <td>Alive Status of the OT Collector based on heartbeat.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category of the OT Collector. (example: apache)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006A5C7A2) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_config" /></td>
    <td><code>object</code></td>
    <td>Config map that includes Base 64 Encoded Effective Configuration Yaml of the Remotely managed OT Collector. (wire: effectiveConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral" /></td>
    <td><code>boolean</code></td>
    <td>Ephemeral Status of the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="health_incidents_tracker" /></td>
    <td><code>object</code></td>
    <td>Health incident information. (wire: healthIncidentsTracker)</td>
</tr>
<tr>
    <td><CopyableCode code="is_remotely_managed" /></td>
    <td><code>boolean</code></td>
    <td>Management Status of the OT Collector based on if it is remotely or locally managed. (wire: isRemotelyManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006A5C7A2) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="source_template_linked_count" /></td>
    <td><code>integer</code></td>
    <td>Count of the source templates linked to a collector (wire: sourceTemplateLinkedCount)</td>
</tr>
<tr>
    <td><CopyableCode code="system_info" /></td>
    <td><code>object</code></td>
    <td>System information of the OT Collector. (wire: systemInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the OT Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>timezone of the collector (example: UTC) (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version information of the OT Collector.</td>
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
    <td>Get OT Collector by ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given different filter, search and sort conditions, get list of otCollectors.</td>
</tr>
<tr>
    <td><a href="#get_by_names"><CopyableCode code="get_by_names" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-names"><code>names</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>provided list of names, get all OT Collectors with metadata.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an OT Collector with the given identifier.</td>
</tr>
<tr>
    <td><a href="#delete_offline"><CopyableCode code="delete_offline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete all offline OT Collectors for a given customer.</td>
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
    <td>Identifier of the OT Collector to delete.</td>
</tr>
<tr id="parameter-names">
    <td><CopyableCode code="names" /></td>
    <td><code>array</code></td>
    <td>A required parameter that accepts a list of names for which we need to collect all metadata.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'get_by_names', value: 'get_by_names' }
    ]}
>
<TabItem value="get">

Get OT Collector by ID.

```sql
SELECT
id,
name,
fleet_id,
alive,
category,
created_at,
created_by,
description,
effective_config,
ephemeral,
health_incidents_tracker,
is_remotely_managed,
modified_at,
modified_by,
source_template_linked_count,
system_info,
tags,
time_zone,
version
FROM sumologic.ot_collectors.ot_collectors
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Given different filter, search and sort conditions, get list of otCollectors.

```sql
SELECT
id,
name,
fleet_id,
alive,
category,
created_at,
created_by,
description,
effective_config,
ephemeral,
health_incidents_tracker,
is_remotely_managed,
modified_at,
modified_by,
source_template_linked_count,
system_info,
tags,
time_zone,
version
FROM sumologic.ot_collectors.ot_collectors
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="get_by_names">

provided list of names, get all OT Collectors with metadata.

```sql
SELECT
id,
name,
fleet_id,
alive,
category,
created_at,
created_by,
description,
effective_config,
ephemeral,
health_incidents_tracker,
is_remotely_managed,
modified_at,
modified_by,
source_template_linked_count,
system_info,
tags,
time_zone,
version
FROM sumologic.ot_collectors.ot_collectors
WHERE names = '{{ names }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
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

Delete an OT Collector with the given identifier.

```sql
DELETE FROM sumologic.ot_collectors.ot_collectors
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_offline"
    values={[
        { label: 'delete_offline', value: 'delete_offline' }
    ]}
>
<TabItem value="delete_offline">

Delete all offline OT Collectors for a given customer.

```sql
EXEC sumologic.ot_collectors.ot_collectors.delete_offline 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
