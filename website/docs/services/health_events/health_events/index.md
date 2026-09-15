--- 
title: health_events
hide_title: false
hide_table_of_contents: false
keywords:
  - health_events
  - health_events
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

Creates, updates, deletes, gets or lists a <code>health_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="health_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.health_events.health_events" /></td></tr>
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

A paginated list of all the health events.

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
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the event. (example: e801dc7d-f483-46e9-bcc9-410f08f96497) (wire: eventId)</td>
</tr>
<tr>
    <td><CopyableCode code="event_name" /></td>
    <td><code>string</code></td>
    <td>The name of the event. (example: InstalledCollectorOffline) (wire: eventName)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: eventTime)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identity" /></td>
    <td><code>object</code></td>
    <td> (wire: resourceIdentity)</td>
</tr>
<tr>
    <td><CopyableCode code="severity_level" /></td>
    <td><code>string</code></td>
    <td>The criticality of the event. It is either `Error` or `Warning` (wire: severityLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="subsystem" /></td>
    <td><code>string</code></td>
    <td>The product area of the event.</td>
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
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all the unresolved health events in your account.</td>
</tr>
<tr>
    <td><a href="#list_for_resources"><CopyableCode code="list_for_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of all the unresolved events in your account that belong to the supplied resource identifiers.</td>
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
    <td><code>integer (int32)</code></td>
    <td>Limit the number of health events returned in the response. The number of health events returned may be less than the `limit`.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get a list of all the unresolved health events in your account.

```sql
SELECT
event_id,
event_name,
details,
event_time,
resource_identity,
severity_level,
subsystem
FROM sumologic.health_events.health_events
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="list_for_resources"
    values={[
        { label: 'list_for_resources', value: 'list_for_resources' }
    ]}
>
<TabItem value="list_for_resources">

Get a list of all the unresolved events in your account that belong to the supplied resource identifiers.

```sql
EXEC sumologic.health_events.health_events.list_for_resources 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set, 
@limit='{{ limit }}', 
@token='{{ token }}' 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
