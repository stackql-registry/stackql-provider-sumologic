--- 
title: indicators
hide_title: false
hide_table_of_contents: false
keywords:
  - indicators
  - threat_intel
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

Creates, updates, deletes, gets or lists an <code>indicators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indicators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.threat_intel.indicators" /></td></tr>
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
    <td><a href="#upload_normalized"><CopyableCode code="upload_normalized" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-indicators"><code>indicators</code></a></td>
    <td></td>
    <td>Uploads a list indicators in a Sumo normalized format.</td>
</tr>
<tr>
    <td><a href="#upload_stix"><CopyableCode code="upload_stix" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-indicators"><code>indicators</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td></td>
    <td>Uploads a list indicators in in a STIX 2.x json format.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-indicatorIds"><code>indicatorIds</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td></td>
    <td>Removes indicators by specifying a list of indicator IDs</td>
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
    defaultValue="upload_normalized"
    values={[
        { label: 'upload_normalized', value: 'upload_normalized' },
        { label: 'upload_stix', value: 'upload_stix' },
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="upload_normalized">

Uploads a list indicators in a Sumo normalized format.

```sql
EXEC sumologic.threat_intel.indicators.upload_normalized 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"indicators": "{{ indicators }}"
}'
;
```
</TabItem>
<TabItem value="upload_stix">

Uploads a list indicators in in a STIX 2.x json format.

```sql
EXEC sumologic.threat_intel.indicators.upload_stix 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"source": "{{ source }}", 
"indicators": "{{ indicators }}"
}'
;
```
</TabItem>
<TabItem value="remove">

Removes indicators by specifying a list of indicator IDs

```sql
EXEC sumologic.threat_intel.indicators.remove 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"source": "{{ source }}", 
"indicatorIds": "{{ indicatorIds }}"
}'
;
```
</TabItem>
</Tabs>
