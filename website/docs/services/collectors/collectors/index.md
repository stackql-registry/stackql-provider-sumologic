--- 
title: collectors
hide_title: false
hide_table_of_contents: false
keywords:
  - collectors
  - collectors
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

Creates, updates, deletes, gets or lists a <code>collectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.collectors.collectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'get_by_name', value: 'get_by_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><code>integer</code></td>
    <td>Unique identifier of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Collector. It must be unique on your account.</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Host name of the Collector. (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="os_name" /></td>
    <td><code>string</code></td>
    <td>Name of the OS the Collector is installed on (Installed Collectors only). (wire: osName)</td>
</tr>
<tr>
    <td><CopyableCode code="alive" /></td>
    <td><code>boolean</code></td>
    <td>When a Collector is running it sends a heartbeat every 15 seconds. If no heartbeat is received for 30 minutes this becomes false.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the Collector, used as metadata when searching data.</td>
</tr>
<tr>
    <td><CopyableCode code="collector_type" /></td>
    <td><code>string</code></td>
    <td>The Collector type: Installable or Hosted. (wire: collectorType)</td>
</tr>
<tr>
    <td><CopyableCode code="collector_version" /></td>
    <td><code>string</code></td>
    <td>Version of the Collector software installed. (wire: collectorVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_relative_time" /></td>
    <td><code>string</code></td>
    <td>Can be specified instead of cutoffTimestamp to provide a relative offset with respect to the current time, for example -1h, -1d or -1w. (wire: cutoffRelativeTime)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Only collect data from files with a modified date more recent than this timestamp, in milliseconds since epoch (0 collects all data). (wire: cutoffTimestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral" /></td>
    <td><code>boolean</code></td>
    <td>When true, the Collector is deleted after 12 hours of inactivity.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>JSON map of key-value fields (metadata) applied to the Collector. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="last_seen_alive" /></td>
    <td><code>integer (int64)</code></td>
    <td>The last time the Sumo Logic service received an active heartbeat from the Collector, in milliseconds since epoch. (wire: lastSeenAlive)</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>Related links.</td>
</tr>
<tr>
    <td><CopyableCode code="os_arch" /></td>
    <td><code>string</code></td>
    <td>Architecture of the OS the Collector is installed on (Installed Collectors only). (wire: osArch)</td>
</tr>
<tr>
    <td><CopyableCode code="os_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Time that the Collector has been running, in milliseconds (Installed Collectors only). (wire: osTime)</td>
</tr>
<tr>
    <td><CopyableCode code="os_version" /></td>
    <td><code>string</code></td>
    <td>Version of the OS the Collector is installed on (Installed Collectors only). (wire: osVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="source_sync_mode" /></td>
    <td><code>string</code></td>
    <td>For Installed Collectors, whether Sources are managed locally from a JSON file (Json) or from the cloud (UI). (wire: sourceSyncMode)</td>
</tr>
<tr>
    <td><CopyableCode code="target_cpu" /></td>
    <td><code>integer</code></td>
    <td>When CPU utilization exceeds this threshold the Collector slows its rate of ingestion. (wire: targetCpu)</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone of the Collector (TZ database name). (wire: timeZone)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_by_name">

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
    <td><code>integer</code></td>
    <td>Unique identifier of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Collector. It must be unique on your account.</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Host name of the Collector. (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="os_name" /></td>
    <td><code>string</code></td>
    <td>Name of the OS the Collector is installed on (Installed Collectors only). (wire: osName)</td>
</tr>
<tr>
    <td><CopyableCode code="alive" /></td>
    <td><code>boolean</code></td>
    <td>When a Collector is running it sends a heartbeat every 15 seconds. If no heartbeat is received for 30 minutes this becomes false.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the Collector, used as metadata when searching data.</td>
</tr>
<tr>
    <td><CopyableCode code="collector_type" /></td>
    <td><code>string</code></td>
    <td>The Collector type: Installable or Hosted. (wire: collectorType)</td>
</tr>
<tr>
    <td><CopyableCode code="collector_version" /></td>
    <td><code>string</code></td>
    <td>Version of the Collector software installed. (wire: collectorVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_relative_time" /></td>
    <td><code>string</code></td>
    <td>Can be specified instead of cutoffTimestamp to provide a relative offset with respect to the current time, for example -1h, -1d or -1w. (wire: cutoffRelativeTime)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Only collect data from files with a modified date more recent than this timestamp, in milliseconds since epoch (0 collects all data). (wire: cutoffTimestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral" /></td>
    <td><code>boolean</code></td>
    <td>When true, the Collector is deleted after 12 hours of inactivity.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>JSON map of key-value fields (metadata) applied to the Collector. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="last_seen_alive" /></td>
    <td><code>integer (int64)</code></td>
    <td>The last time the Sumo Logic service received an active heartbeat from the Collector, in milliseconds since epoch. (wire: lastSeenAlive)</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>Related links.</td>
</tr>
<tr>
    <td><CopyableCode code="os_arch" /></td>
    <td><code>string</code></td>
    <td>Architecture of the OS the Collector is installed on (Installed Collectors only). (wire: osArch)</td>
</tr>
<tr>
    <td><CopyableCode code="os_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Time that the Collector has been running, in milliseconds (Installed Collectors only). (wire: osTime)</td>
</tr>
<tr>
    <td><CopyableCode code="os_version" /></td>
    <td><code>string</code></td>
    <td>Version of the OS the Collector is installed on (Installed Collectors only). (wire: osVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="source_sync_mode" /></td>
    <td><code>string</code></td>
    <td>For Installed Collectors, whether Sources are managed locally from a JSON file (Json) or from the cloud (UI). (wire: sourceSyncMode)</td>
</tr>
<tr>
    <td><CopyableCode code="target_cpu" /></td>
    <td><code>integer</code></td>
    <td>When CPU utilization exceeds this threshold the Collector slows its rate of ingestion. (wire: targetCpu)</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone of the Collector (TZ database name). (wire: timeZone)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><code>integer</code></td>
    <td>Unique identifier of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Collector. It must be unique on your account.</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Host name of the Collector. (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="os_name" /></td>
    <td><code>string</code></td>
    <td>Name of the OS the Collector is installed on (Installed Collectors only). (wire: osName)</td>
</tr>
<tr>
    <td><CopyableCode code="alive" /></td>
    <td><code>boolean</code></td>
    <td>When a Collector is running it sends a heartbeat every 15 seconds. If no heartbeat is received for 30 minutes this becomes false.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the Collector, used as metadata when searching data.</td>
</tr>
<tr>
    <td><CopyableCode code="collector_type" /></td>
    <td><code>string</code></td>
    <td>The Collector type: Installable or Hosted. (wire: collectorType)</td>
</tr>
<tr>
    <td><CopyableCode code="collector_version" /></td>
    <td><code>string</code></td>
    <td>Version of the Collector software installed. (wire: collectorVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_relative_time" /></td>
    <td><code>string</code></td>
    <td>Can be specified instead of cutoffTimestamp to provide a relative offset with respect to the current time, for example -1h, -1d or -1w. (wire: cutoffRelativeTime)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Only collect data from files with a modified date more recent than this timestamp, in milliseconds since epoch (0 collects all data). (wire: cutoffTimestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral" /></td>
    <td><code>boolean</code></td>
    <td>When true, the Collector is deleted after 12 hours of inactivity.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>JSON map of key-value fields (metadata) applied to the Collector. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="last_seen_alive" /></td>
    <td><code>integer (int64)</code></td>
    <td>The last time the Sumo Logic service received an active heartbeat from the Collector, in milliseconds since epoch. (wire: lastSeenAlive)</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>Related links.</td>
</tr>
<tr>
    <td><CopyableCode code="os_arch" /></td>
    <td><code>string</code></td>
    <td>Architecture of the OS the Collector is installed on (Installed Collectors only). (wire: osArch)</td>
</tr>
<tr>
    <td><CopyableCode code="os_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Time that the Collector has been running, in milliseconds (Installed Collectors only). (wire: osTime)</td>
</tr>
<tr>
    <td><CopyableCode code="os_version" /></td>
    <td><code>string</code></td>
    <td>Version of the OS the Collector is installed on (Installed Collectors only). (wire: osVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="source_sync_mode" /></td>
    <td><code>string</code></td>
    <td>For Installed Collectors, whether Sources are managed locally from a JSON file (Json) or from the cloud (UI). (wire: sourceSyncMode)</td>
</tr>
<tr>
    <td><CopyableCode code="target_cpu" /></td>
    <td><code>integer</code></td>
    <td>When CPU utilization exceeds this threshold the Collector slows its rate of ingestion. (wire: targetCpu)</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone of the Collector (TZ database name). (wire: timeZone)</td>
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
    <td>Get the Collector with the specified identifier. The response carries an ETag header, which must be supplied as If-Match on an update.</td>
</tr>
<tr>
    <td><a href="#get_by_name"><CopyableCode code="get_by_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the Collector with the specified name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>Get a list of Collectors with an optional limit and offset.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-collector"><code>collector</code></a></td>
    <td></td>
    <td>Create a Hosted Collector. This method can only be used to create Hosted Collectors; an Installed Collector is created by installing the collector software on a host.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-collector"><code>collector</code></a></td>
    <td><a href="#parameter-if-_match"><code>if-_match</code></a></td>
    <td>Update a Collector. The Collector Management API requires the If-Match header to carry the ETag returned by a previous GET of the same Collector; the request body is the full Collector object wrapped in collector.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the Collector with the specified identifier.</td>
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
    <td>Unique identifier of the Collector.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Collector.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter the Collectors returned using one of the available filter types: installed, hosted, dead, or alive.</td>
</tr>
<tr id="parameter-if-_match">
    <td><CopyableCode code="if-_match" /></td>
    <td><code>string</code></td>
    <td>The ETag value returned in the response headers of a previous GET of this object. The Collector Management API requires it on updates. (wire: If-Match)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of Collectors to return (default 1000).</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset into the list of Collectors (default 0).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'get_by_name', value: 'get_by_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get the Collector with the specified identifier. The response carries an ETag header, which must be supplied as If-Match on an update.

```sql
SELECT
id,
name,
host_name,
os_name,
alive,
category,
collector_type,
collector_version,
cutoff_relative_time,
cutoff_timestamp,
description,
ephemeral,
fields,
last_seen_alive,
links,
os_arch,
os_time,
os_version,
source_sync_mode,
target_cpu,
time_zone
FROM sumologic.collectors.collectors
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="get_by_name">

Get the Collector with the specified name.

```sql
SELECT
id,
name,
host_name,
os_name,
alive,
category,
collector_type,
collector_version,
cutoff_relative_time,
cutoff_timestamp,
description,
ephemeral,
fields,
last_seen_alive,
links,
os_arch,
os_time,
os_version,
source_sync_mode,
target_cpu,
time_zone
FROM sumologic.collectors.collectors
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of Collectors with an optional limit and offset.

```sql
SELECT
id,
name,
host_name,
os_name,
alive,
category,
collector_type,
collector_version,
cutoff_relative_time,
cutoff_timestamp,
description,
ephemeral,
fields,
last_seen_alive,
links,
os_arch,
os_time,
os_version,
source_sync_mode,
target_cpu,
time_zone
FROM sumologic.collectors.collectors
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND filter = '{{ filter }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
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

Create a Hosted Collector. This method can only be used to create Hosted Collectors; an Installed Collector is created by installing the collector software on a host.

```sql
INSERT INTO sumologic.collectors.collectors (
collector,
region
)
SELECT 
'{{ collector }}' /* required */,
'{{ region }}'
RETURNING
collector
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: collectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the collectors resource.
    - name: collector
      description: |
        Collector object.
      value:
        id: {{ id }}
        name: "{{ name }}"
        description: "{{ description }}"
        category: "{{ category }}"
        collectorType: "{{ collectorType }}"
        collectorVersion: "{{ collectorVersion }}"
        alive: {{ alive }}
        lastSeenAlive: {{ lastSeenAlive }}
        ephemeral: {{ ephemeral }}
        hostName: "{{ hostName }}"
        timeZone: "{{ timeZone }}"
        sourceSyncMode: "{{ sourceSyncMode }}"
        cutoffTimestamp: {{ cutoffTimestamp }}
        cutoffRelativeTime: "{{ cutoffRelativeTime }}"
        targetCpu: {{ targetCpu }}
        osName: "{{ osName }}"
        osVersion: "{{ osVersion }}"
        osArch: "{{ osArch }}"
        osTime: {{ osTime }}
        fields: "{{ fields }}"
        links:
          - rel: "{{ rel }}"
            href: "{{ href }}"
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

Update a Collector. The Collector Management API requires the If-Match header to carry the ETag returned by a previous GET of the same Collector; the request body is the full Collector object wrapped in collector.

```sql
UPDATE sumologic.collectors.collectors
SET 
collector = '{{ collector }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND collector = '{{ collector }}' --required
AND if-_match = '{{ if-_match}}'
RETURNING
collector;
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

Delete the Collector with the specified identifier.

```sql
DELETE FROM sumologic.collectors.collectors
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
