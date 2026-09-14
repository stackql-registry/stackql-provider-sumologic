--- 
title: partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - partitions
  - partitions
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

Creates, updates, deletes, gets or lists a <code>partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.partitions.partitions" /></td></tr>
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

Partition object that was requested.

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
    <td>Unique identifier for the partition. (example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the partition. (example: apache)</td>
</tr>
<tr>
    <td><CopyableCode code="data_forwarding_id" /></td>
    <td><code>string</code></td>
    <td>Id of the data forwarding configuration to be used by the partition. (wire: dataForwardingId)</td>
</tr>
<tr>
    <td><CopyableCode code="analytics_tier" /></td>
    <td><code>string</code></td>
    <td>The Data Tier where the data in the partition will reside. Possible values are:               1. `continuous`               2. `frequent`               3. `infrequent` Note: The "infrequent" and "frequent" tiers are only available to Cloud Flex Credits Enterprise Suite accounts. (example: continuous, x-limited-description: The Data Tier where the data in the partition will reside. You can leave it empty or send `flex`. It is the only value applicable on your account., x-limited-example: flex) (wire: analyticsTier)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="index_type" /></td>
    <td><code>string</code></td>
    <td>This has the value `DefaultIndex`, `AuditIndex`or `Partition` depending upon the type of partition. (pattern: &lt;code&gt;^(DefaultIndex|AuditIndex|Partition)$&lt;/code&gt;, example: Partition) (wire: indexType)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>This has the value `true` if the partition is active and `false` if it has been decommissioned. (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="is_compliant" /></td>
    <td><code>boolean</code></td>
    <td>Whether the partition is compliant or not. Mark a partition as compliant if it contains data used for compliance or audit purpose. Retention for a compliant partition can only be increased and cannot be reduced after the partition is marked compliant. A partition once marked compliant, cannot be marked non-compliant later. (wire: isCompliant)</td>
</tr>
<tr>
    <td><CopyableCode code="is_included_in_default_search" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the partition is included in the default search scope. When executing a  query such as "error | count," certain partitions are automatically part of the search scope.  However, for specific partitions, the user must explicitly mention the partition using the _index  term, as in "_index=webApp error | count". This property governs the default inclusion of the  partition in the search scope. Configuring this property is exclusively permitted for flex partitions. (wire: isIncludedInDefaultSearch)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="new_retention_period" /></td>
    <td><code>integer (int32)</code></td>
    <td>If the retention period is scheduled to be updated in the future (i.e., if retention period is previously reduced with value of reduceRetentionPeriodImmediately as false), this property gives the future value of retention period while retentionPeriod gives the current value. retentionPeriod will take up the value of newRetentionPeriod after the scheduled time. (wire: newRetentionPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_effective_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the newRetentionPeriod will become effective in UTC format. (wire: retentionEffectiveAt)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain data in the partition, or -1 to use the default value for your account.  Only relevant if your account has variable retention enabled. (wire: retentionPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_expression" /></td>
    <td><code>string</code></td>
    <td>The query that defines the data to be included in the partition. (example: _sourcecategory=*/Apache) (wire: routingExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="total_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Size of data in partition in bytes. (wire: totalBytes)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of partitions in the organization.

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
    <td>Unique identifier for the partition. (example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the partition. (example: apache)</td>
</tr>
<tr>
    <td><CopyableCode code="data_forwarding_id" /></td>
    <td><code>string</code></td>
    <td>Id of the data forwarding configuration to be used by the partition. (wire: dataForwardingId)</td>
</tr>
<tr>
    <td><CopyableCode code="analytics_tier" /></td>
    <td><code>string</code></td>
    <td>The Data Tier where the data in the partition will reside. Possible values are:               1. `continuous`               2. `frequent`               3. `infrequent` Note: The "infrequent" and "frequent" tiers are only available to Cloud Flex Credits Enterprise Suite accounts. (example: continuous, x-limited-description: The Data Tier where the data in the partition will reside. You can leave it empty or send `flex`. It is the only value applicable on your account., x-limited-example: flex) (wire: analyticsTier)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="index_type" /></td>
    <td><code>string</code></td>
    <td>This has the value `DefaultIndex`, `AuditIndex`or `Partition` depending upon the type of partition. (pattern: &lt;code&gt;^(DefaultIndex|AuditIndex|Partition)$&lt;/code&gt;, example: Partition) (wire: indexType)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>This has the value `true` if the partition is active and `false` if it has been decommissioned. (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="is_compliant" /></td>
    <td><code>boolean</code></td>
    <td>Whether the partition is compliant or not. Mark a partition as compliant if it contains data used for compliance or audit purpose. Retention for a compliant partition can only be increased and cannot be reduced after the partition is marked compliant. A partition once marked compliant, cannot be marked non-compliant later. (wire: isCompliant)</td>
</tr>
<tr>
    <td><CopyableCode code="is_included_in_default_search" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the partition is included in the default search scope. When executing a  query such as "error | count," certain partitions are automatically part of the search scope.  However, for specific partitions, the user must explicitly mention the partition using the _index  term, as in "_index=webApp error | count". This property governs the default inclusion of the  partition in the search scope. Configuring this property is exclusively permitted for flex partitions. (wire: isIncludedInDefaultSearch)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="new_retention_period" /></td>
    <td><code>integer (int32)</code></td>
    <td>If the retention period is scheduled to be updated in the future (i.e., if retention period is previously reduced with value of reduceRetentionPeriodImmediately as false), this property gives the future value of retention period while retentionPeriod gives the current value. retentionPeriod will take up the value of newRetentionPeriod after the scheduled time. (wire: newRetentionPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_effective_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the newRetentionPeriod will become effective in UTC format. (wire: retentionEffectiveAt)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain data in the partition, or -1 to use the default value for your account.  Only relevant if your account has variable retention enabled. (wire: retentionPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_expression" /></td>
    <td><code>string</code></td>
    <td>The query that defines the data to be included in the partition. (example: _sourcecategory=*/Apache) (wire: routingExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="total_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Size of data in partition in bytes. (wire: totalBytes)</td>
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
    <td>Get a partition with the given identifier from the organization.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-view_types"><code>view_types</code></a></td>
    <td>Get a list of all partitions in the organization. The response is paginated with a default limit of 100 partitions per page.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-routing_expression"><code>routing_expression</code></a></td>
    <td></td>
    <td>Create a new partition.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing partition in the organization.</td>
</tr>
<tr>
    <td><a href="#decommission"><CopyableCode code="decommission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Decommission a partition with the given identifier from the organization.</td>
</tr>
<tr>
    <td><a href="#cancel_retention_update"><CopyableCode code="cancel_retention_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancel update to retention of a partition for which retention was updated previously using `reduceRetentionPeriodImmediately` parameter as false</td>
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
    <td>Identifier of the partition to cancel the retention update for. (example: 1)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Sumo Logic deployment (au, ca, ch, de, eu, fed, in, jp, kr, us1, us2). Resolved from the SUMOLOGIC_ENVIRONMENT environment variable when it is set (x-stackQL-envVar, the same variable the Terraform provider reads); otherwise defaults to us2. A WHERE region = '...' value always takes precedence. (enum: &#91;au, ca, ch, de, eu, fed, in, jp, kr, us1, us2&#93;, default: us2, x-stackQL-envVar: SUMOLOGIC_ENVIRONMENT)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of partitions returned in the response. The number of partitions returned may be less than the `limit`.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results. `token` is set to null when no more pages are left.</td>
</tr>
<tr id="parameter-view_types">
    <td><CopyableCode code="view_types" /></td>
    <td><code>array</code></td>
    <td>The type of partitions to retrieve. Valid values are:   1. `DefaultView`: To get General Index partition.   2. `Partition`: To get user defined views/partitions.   3. `AuditIndex`: To get the internal audit indexes. Eg. sumologic_audit_events.  More than one type of partitions can be retrieved in same request. (example: &#91;AuditIndex, Partition&#93;) (wire: viewTypes)</td>
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

Get a partition with the given identifier from the organization.

```sql
SELECT
id,
name,
data_forwarding_id,
analytics_tier,
created_at,
created_by,
index_type,
is_active,
is_compliant,
is_included_in_default_search,
modified_at,
modified_by,
new_retention_period,
retention_effective_at,
retention_period,
routing_expression,
total_bytes
FROM sumologic.partitions.partitions
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of all partitions in the organization. The response is paginated with a default limit of 100 partitions per page.

```sql
SELECT
id,
name,
data_forwarding_id,
analytics_tier,
created_at,
created_by,
index_type,
is_active,
is_compliant,
is_included_in_default_search,
modified_at,
modified_by,
new_retention_period,
retention_effective_at,
retention_period,
routing_expression,
total_bytes
FROM sumologic.partitions.partitions
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
AND view_types = '{{ view_types }}'
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

Create a new partition.

```sql
INSERT INTO sumologic.partitions.partitions (
name,
routing_expression,
analytics_tier,
retention_period,
is_compliant,
is_included_in_default_search,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ routing_expression }}' /* required */,
'{{ analytics_tier }}',
{{ retention_period }},
{{ is_compliant }},
{{ is_included_in_default_search }},
'{{ region }}'
RETURNING
id,
name,
data_forwarding_id,
analytics_tier,
created_at,
created_by,
index_type,
is_active,
is_compliant,
is_included_in_default_search,
modified_at,
modified_by,
new_retention_period,
retention_effective_at,
retention_period,
routing_expression,
total_bytes
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the partitions resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the partition.
    - name: routing_expression
      value: "{{ routing_expression }}"
      description: |
        The query that defines the data to be included in the partition.
    - name: analytics_tier
      value: "{{ analytics_tier }}"
      description: |
        The Data Tier where the data in the partition will reside. Possible values are:
        1. \`continuous\`
        2. \`frequent\`
        3. \`infrequent\`
        Note: The "infrequent" and "frequent" tiers are only available to Cloud Flex Credits Enterprise Suite accounts.
    - name: retention_period
      value: {{ retention_period }}
      description: |
        The number of days to retain data in the partition, or -1 to use the default value for your account.  Only relevant if your account has variable retention enabled.
      default: -1
    - name: is_compliant
      value: {{ is_compliant }}
      description: |
        Whether the partition is compliant or not. Mark a partition as compliant if it contains data used for compliance or audit purpose. Retention for a compliant partition can only be increased and cannot be reduced after the partition is marked compliant. A partition once marked compliant, cannot be marked non-compliant later.
      default: false
    - name: is_included_in_default_search
      value: {{ is_included_in_default_search }}
      description: |
        Indicates whether the partition is included in the default search scope. When executing a  query such as "error | count," certain partitions are automatically part of the search scope.  However, for specific partitions, the user must explicitly mention the partition using the _index  term, as in "_index=webApp error | count". This property governs the default inclusion of the  partition in the search scope. Configuring this property is exclusively permitted for flex partitions.
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

Update an existing partition in the organization.

```sql
UPDATE sumologic.partitions.partitions
SET 
retention_period = {{ retention_period }},
reduce_retention_period_immediately = {{ reduce_retention_period_immediately }},
is_compliant = {{ is_compliant }},
is_included_in_default_search = {{ is_included_in_default_search }},
routing_expression = '{{ routing_expression }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
RETURNING
id,
name,
data_forwarding_id,
analytics_tier,
created_at,
created_by,
index_type,
is_active,
is_compliant,
is_included_in_default_search,
modified_at,
modified_by,
new_retention_period,
retention_effective_at,
retention_period,
routing_expression,
total_bytes;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="decommission"
    values={[
        { label: 'decommission', value: 'decommission' },
        { label: 'cancel_retention_update', value: 'cancel_retention_update' }
    ]}
>
<TabItem value="decommission">

Decommission a partition with the given identifier from the organization.

```sql
EXEC sumologic.partitions.partitions.decommission 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="cancel_retention_update">

Cancel update to retention of a partition for which retention was updated previously using `reduceRetentionPeriodImmediately` parameter as false

```sql
EXEC sumologic.partitions.partitions.cancel_retention_update 
@id='{{ id }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
