--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - lookup_tables
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.lookup_tables.jobs" /></td></tr>
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

The status of async job with given identifier.

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
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>An identifier returned in response to an asynchronous request. (example: 0000000001C41EF2) (wire: jobId)</td>
</tr>
<tr>
    <td><CopyableCode code="lookup_content_id" /></td>
    <td><code>string</code></td>
    <td>Content id of lookup table on which this operation was performed. (example: 0000000001C41EE4) (wire: lookupContentId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>User id of user who initiated this operation. (example: 0000000006743FDD) (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="lookup_name" /></td>
    <td><code>string</code></td>
    <td>Name of lookup table on which this operation was performed. (example: sampleLookup) (wire: lookupName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of this job in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>More information about the failures, if the status is `Failed`.</td>
</tr>
<tr>
    <td><CopyableCode code="lookup_content_path" /></td>
    <td><code>string</code></td>
    <td>Content path of lookup table on which this operation was performed. (example: /Library/Users/xyz@demo.com/sampleLookup) (wire: lookupContentPath)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp in UTC when status was last updated. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="request_type" /></td>
    <td><code>string</code></td>
    <td>Type of asynchronous request made:   - `BulkMerge`   - `BulkReplace`   - `Truncate` (example: BulkMerge) (wire: requestType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Whether or not the request is pending (`Pending`), in progress (`InProgress`), has completed successfully (`Success`), has completed partially with warnings (`PartialSuccess`) or has completed with an error (`Failed`).</td>
</tr>
<tr>
    <td><CopyableCode code="status_messages" /></td>
    <td><code>array</code></td>
    <td>Additional status messages generated if any if the status is `Success`. (wire: statusMessages)</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>More information about the warnings, if the status is `PartialSuccess`.</td>
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
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the status of a previously made request. If the request was successful, the status of the response object will be `Success`.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>An identifier returned in response to an asynchronous request. (wire: jobId)</td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Retrieve the status of a previously made request. If the request was successful, the status of the response object will be `Success`.

```sql
SELECT
job_id,
lookup_content_id,
user_id,
lookup_name,
created_at,
errors,
lookup_content_path,
modified_at,
request_type,
status,
status_messages,
warnings
FROM sumologic.lookup_tables.jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
