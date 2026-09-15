--- 
title: estimated_usage
hide_title: false
hide_table_of_contents: false
keywords:
  - estimated_usage
  - log_searches
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

Creates, updates, deletes, gets or lists an <code>estimated_usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="estimated_usage" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.log_searches.estimated_usage" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#estimate"><CopyableCode code="estimate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryString"><code>queryString</code></a>, <a href="#parameter-timeRange"><code>timeRange</code></a>, <a href="#parameter-timezone"><code>timezone</code></a></td>
    <td></td>
    <td>Gets the estimated volume of data that would be scanned for a given log search in the Infrequent data tier.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#estimate_by_tier"><CopyableCode code="estimate_by_tier" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryString"><code>queryString</code></a>, <a href="#parameter-timeRange"><code>timeRange</code></a>, <a href="#parameter-timezone"><code>timezone</code></a></td>
    <td></td>
    <td>Gets the estimated volume of data that would be scanned for a given log search per data tier.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#estimate_by_metering_type"><CopyableCode code="estimate_by_metering_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryString"><code>queryString</code></a>, <a href="#parameter-timeRange"><code>timeRange</code></a>, <a href="#parameter-timezone"><code>timezone</code></a></td>
    <td></td>
    <td>Gets the estimated volume of data, per metering type,  that would be scanned for running a given log search for a given timerange.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#estimate_by_view"><CopyableCode code="estimate_by_view" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryString"><code>queryString</code></a>, <a href="#parameter-timeRange"><code>timeRange</code></a>, <a href="#parameter-timezone"><code>timezone</code></a></td>
    <td></td>
    <td>Gets the estimated volume of data, per view,  that would be scanned for running a given log search for a given timerange.&lt;br /&gt;</td>
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
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="estimate"
    values={[
        { label: 'estimate', value: 'estimate' },
        { label: 'estimate_by_tier', value: 'estimate_by_tier' },
        { label: 'estimate_by_metering_type', value: 'estimate_by_metering_type' },
        { label: 'estimate_by_view', value: 'estimate_by_view' }
    ]}
>
<TabItem value="estimate">

Gets the estimated volume of data that would be scanned for a given log search in the Infrequent data tier.&lt;br /&gt;

```sql
EXEC sumologic.log_searches.estimated_usage.estimate 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"queryString": "{{ queryString }}", 
"timeRange": "{{ timeRange }}", 
"runByReceiptTime": {{ runByReceiptTime }}, 
"queryParameters": "{{ queryParameters }}", 
"intervalTimeType": "{{ intervalTimeType }}", 
"parsingMode": "{{ parsingMode }}", 
"timezone": "{{ timezone }}"
}'
;
```
</TabItem>
<TabItem value="estimate_by_tier">

Gets the estimated volume of data that would be scanned for a given log search per data tier.&lt;br /&gt;

```sql
EXEC sumologic.log_searches.estimated_usage.estimate_by_tier 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"queryString": "{{ queryString }}", 
"timeRange": "{{ timeRange }}", 
"runByReceiptTime": {{ runByReceiptTime }}, 
"queryParameters": "{{ queryParameters }}", 
"intervalTimeType": "{{ intervalTimeType }}", 
"timezone": "{{ timezone }}"
}'
;
```
</TabItem>
<TabItem value="estimate_by_metering_type">

Gets the estimated volume of data, per metering type,  that would be scanned for running a given log search for a given timerange.&lt;br /&gt;

```sql
EXEC sumologic.log_searches.estimated_usage.estimate_by_metering_type 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"queryString": "{{ queryString }}", 
"timeRange": "{{ timeRange }}", 
"queryParameters": "{{ queryParameters }}", 
"intervalTimeType": "{{ intervalTimeType }}", 
"runByReceiptTime": {{ runByReceiptTime }}, 
"timezone": "{{ timezone }}", 
"emulateSearchContext": "{{ emulateSearchContext }}"
}'
;
```
</TabItem>
<TabItem value="estimate_by_view">

Gets the estimated volume of data, per view,  that would be scanned for running a given log search for a given timerange.&lt;br /&gt;

```sql
EXEC sumologic.log_searches.estimated_usage.estimate_by_view 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"queryString": "{{ queryString }}", 
"timeRange": "{{ timeRange }}", 
"queryParameters": "{{ queryParameters }}", 
"intervalTimeType": "{{ intervalTimeType }}", 
"runByReceiptTime": {{ runByReceiptTime }}, 
"timezone": "{{ timezone }}", 
"emulateSearchContext": "{{ emulateSearchContext }}"
}'
;
```
</TabItem>
</Tabs>
