--- 
title: usage_forecast
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_forecast
  - account
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

Creates, updates, deletes, gets or lists a <code>usage_forecast</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_forecast" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.account.usage_forecast" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Usage Forecast.

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
    <td><CopyableCode code="average_usage" /></td>
    <td><code>number (double)</code></td>
    <td>Average credit usage per day till now. (wire: averageUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="forecasted_usage" /></td>
    <td><code>number (double)</code></td>
    <td>Total expected usage by the end of contract period. (wire: forecastedUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="forecasted_usage_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>Percentage of allocated credits that will be used in the contract period. (wire: forecastedUsagePercentage)</td>
</tr>
<tr>
    <td><CopyableCode code="remaining_days" /></td>
    <td><code>number (double)</code></td>
    <td>Days remaining till all the credits are consumed. (wire: remainingDays)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>Percentage of total credits used till date. (wire: usagePercentage)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-number_of_days"><code>number_of_days</code></a></td>
    <td>Get usage forecast with respect to last number of days specified. If nothing is provided for  last number of days, the average of term period will be taken to do the forecast.</td>
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
<tr id="parameter-number_of_days">
    <td><CopyableCode code="number_of_days" /></td>
    <td><code>number</code></td>
    <td>Number of days to use for calculating average usage and forecast. (wire: numberOfDays)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get usage forecast with respect to last number of days specified. If nothing is provided for  last number of days, the average of term period will be taken to do the forecast.

```sql
SELECT
average_usage,
forecasted_usage,
forecasted_usage_percentage,
remaining_days,
usage_percentage
FROM sumologic.account.usage_forecast
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND number_of_days = '{{ number_of_days }}'
;
```
</TabItem>
</Tabs>
