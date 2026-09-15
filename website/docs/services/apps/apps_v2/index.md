--- 
title: apps_v2
hide_title: false
hide_table_of_contents: false
keywords:
  - apps_v2
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

Creates, updates, deletes, gets or lists an <code>apps_v2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps_v2" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.apps.apps_v2" /></td></tr>
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

Information about the requested app.

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
    <td><CopyableCode code="base_url" /></td>
    <td><code>string (url)</code></td>
    <td>URL prefix for where the app is stored. (example: https:​//some_bucket.s3.amazonaws.com/path/to/app/version/) (wire: baseUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>string (byte)</code></td>
    <td>Content of the config YAML file, as Base64-encoded string.</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>object</code></td>
    <td>Content of various files part of app package, as Base64-encoded string.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest" /></td>
    <td><code>string (byte)</code></td>
    <td>Content of the manifest YAML file, as Base64-encoded string.</td>
</tr>
<tr>
    <td><CopyableCode code="readme" /></td>
    <td><code>string (byte)</code></td>
    <td>Content of the README markdown file, as Base64-encoded string.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>UUID of the app. (example: ceb7fac5-1127-4a04-a5b8-2e49190be3d5)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the app. (example: 1.0.0)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of apps.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the app. (example: AWS CloudTrail)</td>
</tr>
<tr>
    <td><CopyableCode code="account_types" /></td>
    <td><code>array</code></td>
    <td>Account types of which the app is available to. (wire: accountTypes)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A map of attributes for this app. Attributes allow to group apps based on different criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>Author of the app. (example: Sumo Logic)</td>
</tr>
<tr>
    <td><CopyableCode code="beta" /></td>
    <td><code>boolean</code></td>
    <td>Whether the app is in beta.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the app. (example: AWS CloudTrail app description)</td>
</tr>
<tr>
    <td><CopyableCode code="icon" /></td>
    <td><code>string</code></td>
    <td>URL of the icon for the app. (example: https:​//some-bucket.s3.amazonaws.com/AWSCloudTrail.png)</td>
</tr>
<tr>
    <td><CopyableCode code="installable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the app is installable or not as not all apps are installable.</td>
</tr>
<tr>
    <td><CopyableCode code="installs" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of times the app was installed.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version" /></td>
    <td><code>string</code></td>
    <td>Latest version of the app. (example: 1.1.0) (wire: latestVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in UTC of the most recent modification of the app. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="show_on_marketplace" /></td>
    <td><code>boolean</code></td>
    <td>Whether the app should show up on sumologic.com/applications webpage. (wire: showOnMarketplace)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the app. (example: ceb7fac5-1127-4a04-a5b8-2e49190be3d5)</td>
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
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Get details about an app with the given UUID and version. The details include:&lt;br /&gt;&lt;br /&gt;  1. The base URL for all the resource for the app.&lt;br /&gt;  2. The app manifest</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-author"><code>author</code></a></td>
    <td>List all apps from the App Catalog.</td>
</tr>
<tr>
    <td><a href="#install"><CopyableCode code="install" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Schedule an asynchronous job to install the app with the given UUID and version from the App Catalog. The app will be installed in 'Installed Apps' folder in the Content Library.&lt;br /&gt;&lt;br /&gt;_You get back an identifier of asynchronous job in response to this endpoint. You can then use the app install status API to get the status of the installation request. See Asynchronous-Request section for more details on how to work with asynchronous request._</td>
</tr>
<tr>
    <td><a href="#uninstall"><CopyableCode code="uninstall" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Schedule an asynchronous job to uninstall app with the given UUID.&lt;br /&gt;&lt;br /&gt;_You get back an identifier of asynchronous job in response to this endpoint. You can then use the app uninstall status API to get the status of the uninstallation request. See Asynchronous-Request section for more details on how to work with asynchronous request._</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Schedule an asynchronous job to upgrade the app with the given UUID and version from the App Catalog. The app will be installed in 'Installed Apps' folder in the Content Library.&lt;br /&gt;&lt;br /&gt;_You get back an identifier of asynchronous job in response to this endpoint. You can then use the app upgrade status API to get the status of the upgrade request. See Asynchronous-Request section for more details on how to work with asynchronous request._</td>
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
    <td><code>string</code></td>
    <td>UUID of the app to upgrade. (example: ceb7fac5-1127-4a04-a5b8-2e49190be3d5)</td>
</tr>
<tr id="parameter-author">
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>Author of the app. (example: Sumo%20Logic)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the app. (example: AWS%20CloudTrail)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the app. The latest version is used if this is omitted or specified as "latest". (example: 1.0.0)</td>
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

Get details about an app with the given UUID and version. The details include:&lt;br /&gt;&lt;br /&gt;  1. The base URL for all the resource for the app.&lt;br /&gt;  2. The app manifest

```sql
SELECT
base_url,
config,
files,
manifest,
readme,
uuid,
version
FROM sumologic.apps.apps_v2
WHERE uuid = '{{ uuid }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list">

List all apps from the App Catalog.

```sql
SELECT
name,
account_types,
attributes,
author,
beta,
description,
icon,
installable,
installs,
latest_version,
modified_at,
show_on_marketplace,
uuid
FROM sumologic.apps.apps_v2
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND name = '{{ name }}'
AND author = '{{ author }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="install"
    values={[
        { label: 'install', value: 'install' },
        { label: 'uninstall', value: 'uninstall' },
        { label: 'upgrade', value: 'upgrade' }
    ]}
>
<TabItem value="install">

Schedule an asynchronous job to install the app with the given UUID and version from the App Catalog. The app will be installed in 'Installed Apps' folder in the Content Library.&lt;br /&gt;&lt;br /&gt;_You get back an identifier of asynchronous job in response to this endpoint. You can then use the app install status API to get the status of the installation request. See Asynchronous-Request section for more details on how to work with asynchronous request._

```sql
EXEC sumologic.apps.apps_v2.install 
@uuid='{{ uuid }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"version": "{{ version }}", 
"parameters": "{{ parameters }}"
}'
;
```
</TabItem>
<TabItem value="uninstall">

Schedule an asynchronous job to uninstall app with the given UUID.&lt;br /&gt;&lt;br /&gt;_You get back an identifier of asynchronous job in response to this endpoint. You can then use the app uninstall status API to get the status of the uninstallation request. See Asynchronous-Request section for more details on how to work with asynchronous request._

```sql
EXEC sumologic.apps.apps_v2.uninstall 
@uuid='{{ uuid }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="upgrade">

Schedule an asynchronous job to upgrade the app with the given UUID and version from the App Catalog. The app will be installed in 'Installed Apps' folder in the Content Library.&lt;br /&gt;&lt;br /&gt;_You get back an identifier of asynchronous job in response to this endpoint. You can then use the app upgrade status API to get the status of the upgrade request. See Asynchronous-Request section for more details on how to work with asynchronous request._

```sql
EXEC sumologic.apps.apps_v2.upgrade 
@uuid='{{ uuid }}' --required, 
@region='{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set 
@@json=
'{
"version": "{{ version }}", 
"parameters": "{{ parameters }}"
}'
;
```
</TabItem>
</Tabs>
