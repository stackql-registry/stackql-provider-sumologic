--- 
title: upgradable_collectors
hide_title: false
hide_table_of_contents: false
keywords:
  - upgradable_collectors
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

Creates, updates, deletes, gets or lists a <code>upgradable_collectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upgradable_collectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.collectors.upgradable_collectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-to_version"><code>to_version</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Get the Installed Collectors that can be upgraded (or downgraded) to the specified version.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of Collectors to return (default 50).</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset into the list of Collectors (default 0).</td>
</tr>
<tr id="parameter-to_version">
    <td><CopyableCode code="to_version" /></td>
    <td><code>string</code></td>
    <td>Target Collector version. Defaults to the latest version. (wire: toVersion)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get the Installed Collectors that can be upgraded (or downgraded) to the specified version.

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
FROM sumologic.collectors.upgradable_collectors
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND to_version = '{{ to_version }}'
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>
