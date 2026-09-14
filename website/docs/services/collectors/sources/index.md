--- 
title: sources
hide_title: false
hide_table_of_contents: false
keywords:
  - sources
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

Creates, updates, deletes, gets or lists a <code>sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.collectors.sources" /></td></tr>
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
    <td>Unique identifier of the Source.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Source.</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Host name assigned to data from this Source (the _sourceHost metadata field). (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="alive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the Source is alive.</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_date_parsing" /></td>
    <td><code>boolean</code></td>
    <td>Whether timestamps are parsed automatically. (wire: automaticDateParsing)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Source category (the _sourceCategory metadata field).</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>Content type of the data collected (used by some cloud Source types). (wire: contentType)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_relative_time" /></td>
    <td><code>string</code></td>
    <td>Relative offset instead of cutoffTimestamp, for example -1h, -1d or -1w. (wire: cutoffRelativeTime)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Only collect data more recent than this timestamp, in milliseconds since epoch. (wire: cutoffTimestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="default_date_formats" /></td>
    <td><code>array</code></td>
    <td>Default date formats used to parse timestamps. (wire: defaultDateFormats)</td>
</tr>
<tr>
    <td><CopyableCode code="denylist" /></td>
    <td><code>array</code></td>
    <td>Path expressions to exclude from collection (file Sources).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Source.</td>
</tr>
<tr>
    <td><CopyableCode code="encoding" /></td>
    <td><code>string</code></td>
    <td>Character encoding of the data (default UTF-8).</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>JSON map of key-value fields (metadata) applied to the Source. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>array</code></td>
    <td>Processing rules (Exclude, Include, Hash, Mask, Forward) applied to the Source.</td>
</tr>
<tr>
    <td><CopyableCode code="force_time_zone" /></td>
    <td><code>boolean</code></td>
    <td>When true, the timeZone is applied to all messages. (wire: forceTimeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="hash_algorithm" /></td>
    <td><code>string</code></td>
    <td>Hash algorithm used by Hash processing rules. (wire: hashAlgorithm)</td>
</tr>
<tr>
    <td><CopyableCode code="interval" /></td>
    <td><code>integer</code></td>
    <td>Collection interval in milliseconds (metrics and script Sources).</td>
</tr>
<tr>
    <td><CopyableCode code="manual_prefix_regexp" /></td>
    <td><code>string</code></td>
    <td>Regular expression that marks the start of a message when useAutolineMatching is false. (wire: manualPrefixRegexp)</td>
</tr>
<tr>
    <td><CopyableCode code="message_per_request" /></td>
    <td><code>boolean</code></td>
    <td>For HTTP Sources, whether each request is a single message. (wire: messagePerRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Metrics to collect (SystemStats Sources).</td>
</tr>
<tr>
    <td><CopyableCode code="multiline_processing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether multiline message processing is enabled. (wire: multilineProcessingEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="path_expression" /></td>
    <td><code>string</code></td>
    <td>Path expression of the files to collect (file Sources). (wire: pathExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>Type of the Source, for example HTTP, LocalFile, RemoteFileV2, Syslog, SystemStats, Polling, Script, and the cloud-to-cloud types. (wire: sourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Source status (cloud Sources). (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="third_party_ref" /></td>
    <td><code>string</code></td>
    <td>Cloud-to-cloud Source configuration. (opaque JSON object) (wire: thirdPartyRef)</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone applied to messages when forceTimeZone is true or the message has no time zone. (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Unique URL of an HTTP Source endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="use_autoline_matching" /></td>
    <td><code>boolean</code></td>
    <td>Whether message boundaries are inferred automatically. (wire: useAutolineMatching)</td>
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
    <td>Unique identifier of the Source.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Source.</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Host name assigned to data from this Source (the _sourceHost metadata field). (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="alive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the Source is alive.</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_date_parsing" /></td>
    <td><code>boolean</code></td>
    <td>Whether timestamps are parsed automatically. (wire: automaticDateParsing)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Source category (the _sourceCategory metadata field).</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>Content type of the data collected (used by some cloud Source types). (wire: contentType)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_relative_time" /></td>
    <td><code>string</code></td>
    <td>Relative offset instead of cutoffTimestamp, for example -1h, -1d or -1w. (wire: cutoffRelativeTime)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Only collect data more recent than this timestamp, in milliseconds since epoch. (wire: cutoffTimestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="default_date_formats" /></td>
    <td><code>array</code></td>
    <td>Default date formats used to parse timestamps. (wire: defaultDateFormats)</td>
</tr>
<tr>
    <td><CopyableCode code="denylist" /></td>
    <td><code>array</code></td>
    <td>Path expressions to exclude from collection (file Sources).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Source.</td>
</tr>
<tr>
    <td><CopyableCode code="encoding" /></td>
    <td><code>string</code></td>
    <td>Character encoding of the data (default UTF-8).</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>JSON map of key-value fields (metadata) applied to the Source. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>array</code></td>
    <td>Processing rules (Exclude, Include, Hash, Mask, Forward) applied to the Source.</td>
</tr>
<tr>
    <td><CopyableCode code="force_time_zone" /></td>
    <td><code>boolean</code></td>
    <td>When true, the timeZone is applied to all messages. (wire: forceTimeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="hash_algorithm" /></td>
    <td><code>string</code></td>
    <td>Hash algorithm used by Hash processing rules. (wire: hashAlgorithm)</td>
</tr>
<tr>
    <td><CopyableCode code="interval" /></td>
    <td><code>integer</code></td>
    <td>Collection interval in milliseconds (metrics and script Sources).</td>
</tr>
<tr>
    <td><CopyableCode code="manual_prefix_regexp" /></td>
    <td><code>string</code></td>
    <td>Regular expression that marks the start of a message when useAutolineMatching is false. (wire: manualPrefixRegexp)</td>
</tr>
<tr>
    <td><CopyableCode code="message_per_request" /></td>
    <td><code>boolean</code></td>
    <td>For HTTP Sources, whether each request is a single message. (wire: messagePerRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Metrics to collect (SystemStats Sources).</td>
</tr>
<tr>
    <td><CopyableCode code="multiline_processing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether multiline message processing is enabled. (wire: multilineProcessingEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="path_expression" /></td>
    <td><code>string</code></td>
    <td>Path expression of the files to collect (file Sources). (wire: pathExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>Type of the Source, for example HTTP, LocalFile, RemoteFileV2, Syslog, SystemStats, Polling, Script, and the cloud-to-cloud types. (wire: sourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Source status (cloud Sources). (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="third_party_ref" /></td>
    <td><code>string</code></td>
    <td>Cloud-to-cloud Source configuration. (opaque JSON object) (wire: thirdPartyRef)</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone applied to messages when forceTimeZone is true or the message has no time zone. (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Unique URL of an HTTP Source endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="use_autoline_matching" /></td>
    <td><code>boolean</code></td>
    <td>Whether message boundaries are inferred automatically. (wire: useAutolineMatching)</td>
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
    <td><a href="#parameter-collector_id"><code>collector_id</code></a>, <a href="#parameter-source_id"><code>source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-download"><code>download</code></a></td>
    <td>Get information about a specified Source of a Collector. The response carries an ETag header, which must be supplied as If-Match on an update.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collector_id"><code>collector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-download"><code>download</code></a></td>
    <td>Get information about all Sources of a specified Collector.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-collector_id"><code>collector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td></td>
    <td>Create a new Source on a Collector. The request body is the Source definition wrapped in a source object; see the vendor documentation (Use JSON to Configure Sources) for the fields required by each sourceType.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-collector_id"><code>collector_id</code></a>, <a href="#parameter-source_id"><code>source_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td><a href="#parameter-if-_match"><code>if-_match</code></a></td>
    <td>Update a Source. The Collector Management API requires the If-Match header to carry the ETag returned by a previous GET of the same Source; the request body is the full Source object wrapped in source.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-collector_id"><code>collector_id</code></a>, <a href="#parameter-source_id"><code>source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the specified Source of a Collector.</td>
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
<tr id="parameter-collector_id">
    <td><CopyableCode code="collector_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the Collector. (wire: collectorId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-source_id">
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the Source. (wire: sourceId)</td>
</tr>
<tr id="parameter-download">
    <td><CopyableCode code="download" /></td>
    <td><code>boolean</code></td>
    <td>When true, the response is the JSON configuration of the Source(s), suitable for registering a new Collector or creating a new Source.</td>
</tr>
<tr id="parameter-if-_match">
    <td><CopyableCode code="if-_match" /></td>
    <td><code>string</code></td>
    <td>The ETag value returned in the response headers of a previous GET of this object. The Collector Management API requires it on updates. (wire: If-Match)</td>
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

Get information about a specified Source of a Collector. The response carries an ETag header, which must be supplied as If-Match on an update.

```sql
SELECT
id,
name,
host_name,
alive,
automatic_date_parsing,
category,
content_type,
cutoff_relative_time,
cutoff_timestamp,
default_date_formats,
denylist,
description,
encoding,
fields,
filters,
force_time_zone,
hash_algorithm,
interval,
manual_prefix_regexp,
message_per_request,
metrics,
multiline_processing_enabled,
path_expression,
source_type,
status,
third_party_ref,
time_zone,
url,
use_autoline_matching
FROM sumologic.collectors.sources
WHERE collector_id = '{{ collector_id }}' -- required
AND source_id = '{{ source_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND download = '{{ download }}'
;
```
</TabItem>
<TabItem value="list">

Get information about all Sources of a specified Collector.

```sql
SELECT
id,
name,
host_name,
alive,
automatic_date_parsing,
category,
content_type,
cutoff_relative_time,
cutoff_timestamp,
default_date_formats,
denylist,
description,
encoding,
fields,
filters,
force_time_zone,
hash_algorithm,
interval,
manual_prefix_regexp,
message_per_request,
metrics,
multiline_processing_enabled,
path_expression,
source_type,
status,
third_party_ref,
time_zone,
url,
use_autoline_matching
FROM sumologic.collectors.sources
WHERE collector_id = '{{ collector_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND download = '{{ download }}'
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

Create a new Source on a Collector. The request body is the Source definition wrapped in a source object; see the vendor documentation (Use JSON to Configure Sources) for the fields required by each sourceType.

```sql
INSERT INTO sumologic.collectors.sources (
source,
collector_id,
region
)
SELECT 
'{{ source }}' /* required */,
'{{ collector_id }}',
'{{ region }}'
RETURNING
source
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sources
  props:
    - name: collector_id
      value: "{{ collector_id }}"
      description: Required parameter for the sources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sources resource.
    - name: source
      description: |
        Source object. The set of properties depends on the sourceType; the properties listed here are the common ones.
      value:
        id: {{ id }}
        name: "{{ name }}"
        description: "{{ description }}"
        category: "{{ category }}"
        hostName: "{{ hostName }}"
        sourceType: "{{ sourceType }}"
        contentType: "{{ contentType }}"
        alive: {{ alive }}
        url: "{{ url }}"
        encoding: "{{ encoding }}"
        timeZone: "{{ timeZone }}"
        forceTimeZone: {{ forceTimeZone }}
        automaticDateParsing: {{ automaticDateParsing }}
        multilineProcessingEnabled: {{ multilineProcessingEnabled }}
        useAutolineMatching: {{ useAutolineMatching }}
        manualPrefixRegexp: "{{ manualPrefixRegexp }}"
        messagePerRequest: {{ messagePerRequest }}
        defaultDateFormats:
          - "{{ defaultDateFormats }}"
        pathExpression: "{{ pathExpression }}"
        denylist:
          - "{{ denylist }}"
        filters:
          - filterType: "{{ filterType }}"
            name: "{{ name }}"
            regexp: "{{ regexp }}"
            mask: "{{ mask }}"
        fields: "{{ fields }}"
        cutoffTimestamp: {{ cutoffTimestamp }}
        cutoffRelativeTime: "{{ cutoffRelativeTime }}"
        hashAlgorithm: "{{ hashAlgorithm }}"
        interval: {{ interval }}
        metrics:
          - "{{ metrics }}"
        thirdPartyRef: "{{ thirdPartyRef }}"
        status: "{{ status }}"
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

Update a Source. The Collector Management API requires the If-Match header to carry the ETag returned by a previous GET of the same Source; the request body is the full Source object wrapped in source.

```sql
UPDATE sumologic.collectors.sources
SET 
source = '{{ source }}'
WHERE 
collector_id = '{{ collector_id }}' --required
AND source_id = '{{ source_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND source = '{{ source }}' --required
AND if-_match = '{{ if-_match}}'
RETURNING
source;
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

Delete the specified Source of a Collector.

```sql
DELETE FROM sumologic.collectors.sources
WHERE collector_id = '{{ collector_id }}' --required
AND source_id = '{{ source_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
