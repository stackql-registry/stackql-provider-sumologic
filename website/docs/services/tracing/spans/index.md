--- 
title: spans
hide_title: false
hide_table_of_contents: false
keywords:
  - spans
  - tracing
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

Creates, updates, deletes, gets or lists a <code>spans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.tracing.spans" /></td></tr>
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

Details of the span with the given identifier.

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
    <td>Identifier of the span. (example: 00000000002317A9)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent span, if any. If the span has no parent it's considered a root span. (example: 000000000003C7BE) (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_name" /></td>
    <td><code>string</code></td>
    <td>The name of the operation given to the span. (example: retrieveAccount) (wire: operationName)</td>
</tr>
<tr>
    <td><CopyableCode code="critical_path_contribution" /></td>
    <td><code>object</code></td>
    <td> (wire: criticalPathContribution)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of nanoseconds the span lasted.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Produced error message (could be a stack trace, database error code, ..) (example: Exception in thread "local&#91;9&#93;" java.lang.OutOfMemoryError: Java heap space&lt;br /&gt;    at my.app.force.fields.SpaceShipForceField.main(SpaceShipForceField.java:17)&lt;br /&gt;) (wire: errorMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Events attached to this span.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>Fields attached to this span.</td>
</tr>
<tr>
    <td><CopyableCode code="info" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Span kind describes the relationship between the Span, its parents, and its children in a Trace. Possible values: `CLIENT`, `SERVER`, `PRODUCER`, `CONSUMER`, `INTERNAL`. (pattern: &lt;code&gt;^(CLIENT|SERVER|PRODUCER|CONSUMER|INTERNAL)$&lt;/code&gt;, example: SERVER, x-pattern-message: Should be either `CLIENT`, `SERVER`, `PRODUCER`, `CONSUMER` or `INTERNAL`.)</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>List of casually related spans.</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>array</code></td>
    <td>Logs attached to this span.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_links" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of span links in this span. (wire: numberOfLinks)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_service" /></td>
    <td><code>string</code></td>
    <td>Name of the possible remote span's service. (example: external-service) (wire: remoteService)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_service_color" /></td>
    <td><code>string</code></td>
    <td>Color hex code assigned to the remote service. (example: #fa41c6) (wire: remoteServiceColor)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_service_type" /></td>
    <td><code>string</code></td>
    <td>Defines type of service. (pattern: &lt;code&gt;^(Db|HTTP|MQ|Web|Mixed|Unknown|Cpp|DotNET|Erlang|Go|Java|NodeJS|Php|Python|Ruby|WebJS|Swift|MSSQL|MySQL|Oracle|Db2|PostgreSQL|Redshift|Hive|Cloudscape|HSQLDB|Progress|MaxDB|HANADB|Ingres|FirstSQL|EnterpriseDB|Cache|Adabas|Firebird|ApacheDerby|FileMaker|Informix|InstantDB|InterBase|MariaDB|Netezza|PervasivePSQL|PointBase|SQLite|Sybase|Teradata|Vertica|H2|ColdFusion|Cassandra|HBase|MongoDB|Redis|Couchbase|CouchDB|CosmosDB|DynamoDB|Neo4j|Geode|Elasticsearch|Memcached|CockroachDB|RPC|gRPC|JavaRMI|DotNETWCF|ApacheDubbo)$&lt;/code&gt;, example: HTTP, x-pattern-message: Should be either `Db`, `HTTP`, `MQ`, `Web`, `Mixed`, `Unknown`, `Cpp`, `DotNET`, `Erlang`, `Go`, `Java`, `NodeJS`, `Php`, `Python`, `Ruby`, `WebJS`, `Swift`, `MSSQL`, `MySQL`, `Oracle`, `Db2`, `PostgreSQL`, `Redshift`, `Hive`, `Cloudscape`, `HSQLDB`, `Progress`, `MaxDB`, `HANADB`, `Ingres`, `FirstSQL`, `EnterpriseDB`, `Cache`, `Adabas`, `Firebird`, `ApacheDerby`, `FileMaker`, `Informix`, `InstantDB`, `InterBase`, `MariaDB`, `Netezza`, `PervasivePSQL`, `PointBase`, `SQLite`, `Sybase`, `Teradata`, `Vertica`, `H2`, `ColdFusion`, `Cassandra`, `HBase`, `MongoDB`, `Redis`, `Couchbase`, `CouchDB`, `CosmosDB`, `DynamoDB`, `Neo4j`, `Geode`, `Elasticsearch`, `Memcached`, `CockroachDB`, `RPC`, `gRPC`, `JavaRMI`, `DotNETWCF` or `ApacheDubbo`) (wire: remoteServiceType)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The name of the resource attached to the span. (example: http.request)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The name of the service this span is part of. (example: user-service)</td>
</tr>
<tr>
    <td><CopyableCode code="service_color" /></td>
    <td><code>string</code></td>
    <td>Color hex code assigned to the service. (example: #fa41c6) (wire: serviceColor)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>Defines type of service. (pattern: &lt;code&gt;^(Db|HTTP|MQ|Web|Mixed|Unknown|Cpp|DotNET|Erlang|Go|Java|NodeJS|Php|Python|Ruby|WebJS|Swift|MSSQL|MySQL|Oracle|Db2|PostgreSQL|Redshift|Hive|Cloudscape|HSQLDB|Progress|MaxDB|HANADB|Ingres|FirstSQL|EnterpriseDB|Cache|Adabas|Firebird|ApacheDerby|FileMaker|Informix|InstantDB|InterBase|MariaDB|Netezza|PervasivePSQL|PointBase|SQLite|Sybase|Teradata|Vertica|H2|ColdFusion|Cassandra|HBase|MongoDB|Redis|Couchbase|CouchDB|CosmosDB|DynamoDB|Neo4j|Geode|Elasticsearch|Memcached|CockroachDB|RPC|gRPC|JavaRMI|DotNETWCF|ApacheDubbo)$&lt;/code&gt;, example: HTTP, x-pattern-message: Should be either `Db`, `HTTP`, `MQ`, `Web`, `Mixed`, `Unknown`, `Cpp`, `DotNET`, `Erlang`, `Go`, `Java`, `NodeJS`, `Php`, `Python`, `Ruby`, `WebJS`, `Swift`, `MSSQL`, `MySQL`, `Oracle`, `Db2`, `PostgreSQL`, `Redshift`, `Hive`, `Cloudscape`, `HSQLDB`, `Progress`, `MaxDB`, `HANADB`, `Ingres`, `FirstSQL`, `EnterpriseDB`, `Cache`, `Adabas`, `Firebird`, `ApacheDerby`, `FileMaker`, `Informix`, `InstantDB`, `InterBase`, `MariaDB`, `Netezza`, `PervasivePSQL`, `PointBase`, `SQLite`, `Sybase`, `Teradata`, `Vertica`, `H2`, `ColdFusion`, `Cassandra`, `HBase`, `MongoDB`, `Redis`, `Couchbase`, `CouchDB`, `CosmosDB`, `DynamoDB`, `Neo4j`, `Geode`, `Elasticsearch`, `Memcached`, `CockroachDB`, `RPC`, `gRPC`, `JavaRMI`, `DotNETWCF` or `ApacheDubbo`) (wire: serviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the span was started in the &#91;ISO 8601 / RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2019-11-22T09:00:00.000Z) (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of spans for the given trace.

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
    <td>Identifier of the span. (example: 00000000002317A9)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the parent span, if any. If the span has no parent it's considered a root span. (example: 000000000003C7BE) (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_name" /></td>
    <td><code>string</code></td>
    <td>The name of the operation given to the span. (example: retrieveAccount) (wire: operationName)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of nanoseconds the span lasted.</td>
</tr>
<tr>
    <td><CopyableCode code="info" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Span kind describes the relationship between the Span, its parents, and its children in a Trace. Possible values: `CLIENT`, `SERVER`, `PRODUCER`, `CONSUMER`, `INTERNAL`. (pattern: &lt;code&gt;^(CLIENT|SERVER|PRODUCER|CONSUMER|INTERNAL)$&lt;/code&gt;, example: SERVER, x-pattern-message: Should be either `CLIENT`, `SERVER`, `PRODUCER`, `CONSUMER` or `INTERNAL`.)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_links" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of span links in this span. (wire: numberOfLinks)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_service" /></td>
    <td><code>string</code></td>
    <td>Name of the possible remote span's service. (example: external-service) (wire: remoteService)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_service_color" /></td>
    <td><code>string</code></td>
    <td>Color hex code assigned to the remote service. (example: #fa41c6) (wire: remoteServiceColor)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_service_type" /></td>
    <td><code>string</code></td>
    <td>Defines type of service. (pattern: &lt;code&gt;^(Db|HTTP|MQ|Web|Mixed|Unknown|Cpp|DotNET|Erlang|Go|Java|NodeJS|Php|Python|Ruby|WebJS|Swift|MSSQL|MySQL|Oracle|Db2|PostgreSQL|Redshift|Hive|Cloudscape|HSQLDB|Progress|MaxDB|HANADB|Ingres|FirstSQL|EnterpriseDB|Cache|Adabas|Firebird|ApacheDerby|FileMaker|Informix|InstantDB|InterBase|MariaDB|Netezza|PervasivePSQL|PointBase|SQLite|Sybase|Teradata|Vertica|H2|ColdFusion|Cassandra|HBase|MongoDB|Redis|Couchbase|CouchDB|CosmosDB|DynamoDB|Neo4j|Geode|Elasticsearch|Memcached|CockroachDB|RPC|gRPC|JavaRMI|DotNETWCF|ApacheDubbo)$&lt;/code&gt;, example: HTTP, x-pattern-message: Should be either `Db`, `HTTP`, `MQ`, `Web`, `Mixed`, `Unknown`, `Cpp`, `DotNET`, `Erlang`, `Go`, `Java`, `NodeJS`, `Php`, `Python`, `Ruby`, `WebJS`, `Swift`, `MSSQL`, `MySQL`, `Oracle`, `Db2`, `PostgreSQL`, `Redshift`, `Hive`, `Cloudscape`, `HSQLDB`, `Progress`, `MaxDB`, `HANADB`, `Ingres`, `FirstSQL`, `EnterpriseDB`, `Cache`, `Adabas`, `Firebird`, `ApacheDerby`, `FileMaker`, `Informix`, `InstantDB`, `InterBase`, `MariaDB`, `Netezza`, `PervasivePSQL`, `PointBase`, `SQLite`, `Sybase`, `Teradata`, `Vertica`, `H2`, `ColdFusion`, `Cassandra`, `HBase`, `MongoDB`, `Redis`, `Couchbase`, `CouchDB`, `CosmosDB`, `DynamoDB`, `Neo4j`, `Geode`, `Elasticsearch`, `Memcached`, `CockroachDB`, `RPC`, `gRPC`, `JavaRMI`, `DotNETWCF` or `ApacheDubbo`) (wire: remoteServiceType)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The name of the resource attached to the span. (example: http.request)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The name of the service this span is part of. (example: user-service)</td>
</tr>
<tr>
    <td><CopyableCode code="service_color" /></td>
    <td><code>string</code></td>
    <td>Color hex code assigned to the service. (example: #fa41c6) (wire: serviceColor)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>Defines type of service. (pattern: &lt;code&gt;^(Db|HTTP|MQ|Web|Mixed|Unknown|Cpp|DotNET|Erlang|Go|Java|NodeJS|Php|Python|Ruby|WebJS|Swift|MSSQL|MySQL|Oracle|Db2|PostgreSQL|Redshift|Hive|Cloudscape|HSQLDB|Progress|MaxDB|HANADB|Ingres|FirstSQL|EnterpriseDB|Cache|Adabas|Firebird|ApacheDerby|FileMaker|Informix|InstantDB|InterBase|MariaDB|Netezza|PervasivePSQL|PointBase|SQLite|Sybase|Teradata|Vertica|H2|ColdFusion|Cassandra|HBase|MongoDB|Redis|Couchbase|CouchDB|CosmosDB|DynamoDB|Neo4j|Geode|Elasticsearch|Memcached|CockroachDB|RPC|gRPC|JavaRMI|DotNETWCF|ApacheDubbo)$&lt;/code&gt;, example: HTTP, x-pattern-message: Should be either `Db`, `HTTP`, `MQ`, `Web`, `Mixed`, `Unknown`, `Cpp`, `DotNET`, `Erlang`, `Go`, `Java`, `NodeJS`, `Php`, `Python`, `Ruby`, `WebJS`, `Swift`, `MSSQL`, `MySQL`, `Oracle`, `Db2`, `PostgreSQL`, `Redshift`, `Hive`, `Cloudscape`, `HSQLDB`, `Progress`, `MaxDB`, `HANADB`, `Ingres`, `FirstSQL`, `EnterpriseDB`, `Cache`, `Adabas`, `Firebird`, `ApacheDerby`, `FileMaker`, `Informix`, `InstantDB`, `InterBase`, `MariaDB`, `Netezza`, `PervasivePSQL`, `PointBase`, `SQLite`, `Sybase`, `Teradata`, `Vertica`, `H2`, `ColdFusion`, `Cassandra`, `HBase`, `MongoDB`, `Redis`, `Couchbase`, `CouchDB`, `CosmosDB`, `DynamoDB`, `Neo4j`, `Geode`, `Elasticsearch`, `Memcached`, `CockroachDB`, `RPC`, `gRPC`, `JavaRMI`, `DotNETWCF` or `ApacheDubbo`) (wire: serviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the span was started in the &#91;ISO 8601 / RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2019-11-22T09:00:00.000Z) (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#parameter-trace_id"><code>trace_id</code></a>, <a href="#parameter-span_id"><code>span_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details of a span with the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trace_id"><code>trace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Get a list of spans for the given trace. The response is paginated with a default limit of 100 spans per page.</td>
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
<tr id="parameter-span_id">
    <td><CopyableCode code="span_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the span to get the details. (wire: spanId)</td>
</tr>
<tr id="parameter-trace_id">
    <td><CopyableCode code="trace_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the trace to get the spans. (wire: traceId)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of results to fetch.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get details of a span with the given identifier.

```sql
SELECT
id,
parent_id,
operation_name,
critical_path_contribution,
duration,
error_message,
events,
fields,
info,
kind,
links,
logs,
number_of_links,
remote_service,
remote_service_color,
remote_service_type,
resource,
service,
service_color,
service_type,
started_at,
status
FROM sumologic.tracing.spans
WHERE trace_id = '{{ trace_id }}' -- required
AND span_id = '{{ span_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Get a list of spans for the given trace. The response is paginated with a default limit of 100 spans per page.

```sql
SELECT
id,
parent_id,
operation_name,
duration,
info,
kind,
number_of_links,
remote_service,
remote_service_color,
remote_service_type,
resource,
service,
service_color,
service_type,
started_at,
status
FROM sumologic.tracing.spans
WHERE trace_id = '{{ trace_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND limit = '{{ limit }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>
