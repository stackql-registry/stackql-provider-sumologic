--- 
title: status
hide_title: false
hide_table_of_contents: false
keywords:
  - status
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

Creates, updates, deletes, gets or lists a <code>status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.account.status" /></td></tr>
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

Overview of the account.

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
    <td><CopyableCode code="account_activated" /></td>
    <td><code>boolean</code></td>
    <td>If the account is activated or not (wire: accountActivated)</td>
</tr>
<tr>
    <td><CopyableCode code="application_use" /></td>
    <td><code>string</code></td>
    <td>The current usage of the application. (pattern: &lt;code&gt;^(ALLOWED|ALLOWED_WITH_WARNING|THROTTLED|RESTRICTED)$&lt;/code&gt;, example: ALLOWED) (wire: applicationUse)</td>
</tr>
<tr>
    <td><CopyableCode code="can_update_plan" /></td>
    <td><code>boolean</code></td>
    <td>If the plan can be updated by the given user (wire: canUpdatePlan)</td>
</tr>
<tr>
    <td><CopyableCode code="is_subscription_v2" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the account has v2 subscription enabled. (wire: isSubscriptionV2)</td>
</tr>
<tr>
    <td><CopyableCode code="log_model" /></td>
    <td><code>string</code></td>
    <td>The log model of the account (pattern: &lt;code&gt;^(Flex|Tiered|FlexPlusTiered)$&lt;/code&gt;, example: Flex) (wire: logModel)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_expiration_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days in which the plan will expire (wire: planExpirationDays)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_type" /></td>
    <td><code>string</code></td>
    <td>Whether the account is `Free`/`Trial`/`Paid` (pattern: &lt;code&gt;^(Free|Trial|Paid)$&lt;/code&gt;, example: Free) (wire: planType)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_model" /></td>
    <td><code>string</code></td>
    <td>Whether the account is `cloudflex` or `credits` (pattern: &lt;code&gt;^(credits|cloudflex)$&lt;/code&gt;, example: credits) (wire: pricingModel)</td>
</tr>
<tr>
    <td><CopyableCode code="total_credits" /></td>
    <td><code>integer</code></td>
    <td>Total amount of credits assigned to the account (wire: totalCredits)</td>
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
    <td></td>
    <td>Get information related to the account's plan, pricing model, expiration and payment status.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get information related to the account's plan, pricing model, expiration and payment status.

```sql
SELECT
account_activated,
application_use,
can_update_plan,
is_subscription_v2,
log_model,
plan_expiration_days,
plan_type,
pricing_model,
total_credits
FROM sumologic.account.status
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
