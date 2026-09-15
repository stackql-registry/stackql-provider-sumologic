--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.apps.apps" /></td></tr>
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

The retrieved app.

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
    <td><CopyableCode code="app_definition" /></td>
    <td><code>object</code></td>
    <td> (wire: appDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="app_manifest" /></td>
    <td><code>object</code></td>
    <td> (wire: appManifest)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of all available apps.

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
    <td><CopyableCode code="app_definition" /></td>
    <td><code>object</code></td>
    <td> (wire: appDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="app_manifest" /></td>
    <td><code>object</code></td>
    <td> (wire: appManifest)</td>
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
    <td><a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the app with the given universally unique identifier (UUID).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all available apps from the App Catalog.</td>
</tr>
<tr>
    <td><a href="#install"><CopyableCode code="install" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-destinationFolderId"><code>destinationFolderId</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Installs the app with given UUID in the folder specified using destinationFolderId.</td>
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
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>UUID of the app to install.</td>
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

Gets the app with the given universally unique identifier (UUID).

```sql
SELECT
app_definition,
app_manifest
FROM sumologic.apps.apps
WHERE uuid = '{{ uuid }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

Lists all available apps from the App Catalog.

```sql
SELECT
app_definition,
app_manifest
FROM sumologic.apps.apps
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="install"
    values={[
        { label: 'install', value: 'install' }
    ]}
>
<TabItem value="install">

Installs the app with given UUID in the folder specified using destinationFolderId.

```sql
EXEC sumologic.apps.apps.install 
@uuid='{{ uuid }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"name": "{{ name }}", 
"description": "{{ description }}", 
"destinationFolderId": "{{ destinationFolderId }}", 
"dataSourceValues": "{{ dataSourceValues }}"
}'
;
```
</TabItem>
</Tabs>
