--- 
title: event_extraction_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - event_extraction_rules
  - event_extraction_rules
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

Creates, updates, deletes, gets or lists an <code>event_extraction_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_extraction_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.event_extraction_rules.event_extraction_rules" /></td></tr>
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

Requested event extraction rule.

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
    <td>Id of the event extraction rule. (example: 0000000001213227)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of event extraction rule. (example: foo)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Event Extraction Rule.  This object defines how event fields are mapped to their corresponding values. Each field specifies a `valueSource`, which provides the actual value, and an optional `mappingType`, indicating the value is hardcoded.  The following fields are **required**:   - `eventType`: Type of the event. Accepted values are `Deployment`, `Feature Flag Change`, `Configuration Change` or `Infrastructure Change`.   - `eventPriority`: Indicates the priority of the event. Accepted values are `High`, `Medium`, or `Low`.   - `eventSource`: Source system or component where the event originated (e.g., "Jenkins").   - `eventName`: Descriptive name of the event (e.g., "monitor-manager deployed.").  The following fields are **optional**:   - `eventDescription`: Additional context or details about the event.  Custom fields can also be added as needed to capture domain-specific event data. </td>
</tr>
<tr>
    <td><CopyableCode code="correlation_expression" /></td>
    <td><code>object</code></td>
    <td>Correlation Expression specifies how to determine related events for a log search query.  The value of `eventFieldName` from Events is compared with the values of `queryFieldName` from the log search query output using the defined stringMatchingAlgorithm. Events that match according to this algorithm are considered correlated.  (wire: correlationExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of event extraction rule. (example: foo)</td>
</tr>
<tr>
    <td><CopyableCode code="disable_reason" /></td>
    <td><code>string</code></td>
    <td>Reason for disabling the event extraction rule, if applicable. (example: Event Extraction Rule output exceeded maximum allowed rate of 1000 events per hour in last 24 hours.) (wire: disableReason)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating whether the event extraction rule is enabled or disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Query string for the Event Extraction Rule. Logs matching this query are periodically ingested into the `sumologic_userdata_events` index (**Events**).  Guidelines for creating the query:   - Optimize the query to limit the number of returned log messages (intended for special logs only).   - The query runs in `Manual` mode, explicitly parse and extract only the necessary fields for event correlation and visualization.   - Use the `fields` operator to restrict the output to required fields.  (example: _sourceCategory=eventSource)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Event extraction rules.

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
    <td>Id of the event extraction rule. (example: 0000000001213227)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of event extraction rule. (example: foo)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Event Extraction Rule.  This object defines how event fields are mapped to their corresponding values. Each field specifies a `valueSource`, which provides the actual value, and an optional `mappingType`, indicating the value is hardcoded.  The following fields are **required**:   - `eventType`: Type of the event. Accepted values are `Deployment`, `Feature Flag Change`, `Configuration Change` or `Infrastructure Change`.   - `eventPriority`: Indicates the priority of the event. Accepted values are `High`, `Medium`, or `Low`.   - `eventSource`: Source system or component where the event originated (e.g., "Jenkins").   - `eventName`: Descriptive name of the event (e.g., "monitor-manager deployed.").  The following fields are **optional**:   - `eventDescription`: Additional context or details about the event.  Custom fields can also be added as needed to capture domain-specific event data. </td>
</tr>
<tr>
    <td><CopyableCode code="correlation_expression" /></td>
    <td><code>object</code></td>
    <td>Correlation Expression specifies how to determine related events for a log search query.  The value of `eventFieldName` from Events is compared with the values of `queryFieldName` from the log search query output using the defined stringMatchingAlgorithm. Events that match according to this algorithm are considered correlated.  (wire: correlationExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of event extraction rule. (example: foo)</td>
</tr>
<tr>
    <td><CopyableCode code="disable_reason" /></td>
    <td><code>string</code></td>
    <td>Reason for disabling the event extraction rule, if applicable. (example: Event Extraction Rule output exceeded maximum allowed rate of 1000 events per hour in last 24 hours.) (wire: disableReason)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating whether the event extraction rule is enabled or disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Query string for the Event Extraction Rule. Logs matching this query are periodically ingested into the `sumologic_userdata_events` index (**Events**).  Guidelines for creating the query:   - Optimize the query to limit the number of returned log messages (intended for special logs only).   - The query runs in `Manual` mode, explicitly parse and extract only the necessary fields for event correlation and visualization.   - Use the `fields` operator to restrict the output to required fields.  (example: _sourceCategory=eventSource)</td>
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
    <td>Get an event extraction rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get all event extraction rules.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td></td>
    <td>Create event extraction rule.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td></td>
    <td>Update an event extraction rule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an event extraction rule.</td>
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
    <td>The identifier of the event extraction rule. (example: 000000000000000A)</td>
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
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get an event extraction rule.

```sql
SELECT
id,
name,
configuration,
correlation_expression,
created_at,
created_by,
description,
disable_reason,
enabled,
modified_at,
modified_by,
query
FROM sumologic.event_extraction_rules.event_extraction_rules
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get all event extraction rules.

```sql
SELECT
id,
name,
configuration,
correlation_expression,
created_at,
created_by,
description,
disable_reason,
enabled,
modified_at,
modified_by,
query
FROM sumologic.event_extraction_rules.event_extraction_rules
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
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

Create event extraction rule.

```sql
INSERT INTO sumologic.event_extraction_rules.event_extraction_rules (
name,
description,
query,
correlation_expression,
configuration,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ query }}' /* required */,
'{{ correlation_expression }}',
'{{ configuration }}' /* required */,
'{{ region }}'
RETURNING
id,
name,
configuration,
correlation_expression,
created_at,
created_by,
description,
disable_reason,
enabled,
modified_at,
modified_by,
query
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_extraction_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_extraction_rules resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of event extraction rule.
    - name: description
      value: "{{ description }}"
      description: |
        Description of event extraction rule.
    - name: query
      value: "{{ query }}"
      description: |
        Query string for the Event Extraction Rule. Logs matching this query are periodically ingested into the \`sumologic_userdata_events\` index (**Events**).
        Guidelines for creating the query:
        - Optimize the query to limit the number of returned log messages (intended for special logs only).
        - The query runs in \`Manual\` mode, explicitly parse and extract only the necessary fields for event correlation and visualization.
        - Use the \`fields\` operator to restrict the output to required fields.
    - name: correlation_expression
      description: |
        Correlation Expression specifies how to determine related events for a log search query.
        The value of \`eventFieldName\` from Events is compared with the values of \`queryFieldName\` from the log search query output using the defined stringMatchingAlgorithm. Events that match according to this algorithm are considered correlated.
      value:
        queryFieldName: "{{ queryFieldName }}"
        eventFieldName: "{{ eventFieldName }}"
        stringMatchingAlgorithm: "{{ stringMatchingAlgorithm }}"
    - name: configuration
      value: "{{ configuration }}"
      description: |
        Configuration for the Event Extraction Rule.
        This object defines how event fields are mapped to their corresponding values.
        Each field specifies a \`valueSource\`, which provides the actual value, and an optional \`mappingType\`,
        indicating the value is hardcoded.
        The following fields are **required**:
        - \`eventType\`: Type of the event. Accepted values are \`Deployment\`, \`Feature Flag Change\`, \`Configuration Change\` or \`Infrastructure Change\`.
        - \`eventPriority\`: Indicates the priority of the event. Accepted values are \`High\`, \`Medium\`, or \`Low\`.
        - \`eventSource\`: Source system or component where the event originated (e.g., "Jenkins").
        - \`eventName\`: Descriptive name of the event (e.g., "monitor-manager deployed.").
        The following fields are **optional**:
        - \`eventDescription\`: Additional context or details about the event.
        Custom fields can also be added as needed to capture domain-specific event data.
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

Update an event extraction rule.

```sql
UPDATE sumologic.event_extraction_rules.event_extraction_rules
SET 
name = '{{ name }}',
description = '{{ description }}',
query = '{{ query }}',
correlation_expression = '{{ correlation_expression }}',
configuration = '{{ configuration }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND configuration = '{{ configuration }}' --required
AND name = '{{ name }}' --required
AND query = '{{ query }}' --required
RETURNING
id,
name,
configuration,
correlation_expression,
created_at,
created_by,
description,
disable_reason,
enabled,
modified_at,
modified_by,
query;
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

Delete an event extraction rule.

```sql
DELETE FROM sumologic.event_extraction_rules.event_extraction_rules
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
