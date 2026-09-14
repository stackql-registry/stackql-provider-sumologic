--- 
title: usage_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_reports
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

Creates, updates, deletes, gets or lists a <code>usage_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.account.usage_reports" /></td></tr>
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

Status response containing status and downloadURL if successful.

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
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>An error code describing the type of error. (example: auth:password_too_short)</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>string</code></td>
    <td>An optional fuller English-language description of the error. (example: Your password was 5 characters long, the minimum length is 12 characters. See http:​//example.com/password for more information.)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A short English-language description of the error. (example: Your password was too short.)</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>string</code></td>
    <td>An optional list of metadata about the error. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="report_download_url" /></td>
    <td><code>string</code></td>
    <td>S3 presigned download URL for the report. It is valid for 10 minutes. (example: www.example.com) (wire: reportDownloadURL)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status export (pattern: &lt;code&gt;^(Success|InProgress|Failed)$&lt;/code&gt;, example: Success)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Status message export (example: Successful request) (wire: statusMessage)</td>
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
    <td>Get the report download URL and status using Job Id.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Export the credit usage details as csv for the specific period of time given as input in the form of a start and end date with a specific grouping according to `day`, `week`, `month`, Note that this API will work only for credits plan customers.</td>
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
    <td>Job Id for the report to be exported. (wire: jobId)</td>
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

Get the report download URL and status using Job Id.

```sql
SELECT
code,
detail,
message,
meta,
report_download_url,
status,
status_message
FROM sumologic.account.usage_reports
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
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

Export the credit usage details as csv for the specific period of time given as input in the form of a start and end date with a specific grouping according to `day`, `week`, `month`, Note that this API will work only for credits plan customers.

```sql
INSERT INTO sumologic.account.usage_reports (
start_date,
end_date,
group_by,
report_type,
include_deployment_charge,
region
)
SELECT 
'{{ start_date }}',
'{{ end_date }}',
'{{ group_by }}',
'{{ report_type }}',
{{ include_deployment_charge }},
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usage_reports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usage_reports resource.
    - name: start_date
      value: "{{ start_date }}"
      description: |
        Start date, without the time, of the usage data to fetch. If no value is provided startDate is used as the start of the subscription. The start date cannot be before the start of the subscription.
    - name: end_date
      value: "{{ end_date }}"
      description: |
        End date, without the time, of usage data to fetch. If no value is provided endDate is used as the end of the subscription. The end date cannot be after the end of the subscription.
    - name: group_by
      value: "{{ group_by }}"
      description: |
        Perform a groupBy operation on the usage details. If no value is provided data is grouped by \`Day\` - \`day\`: Aggregate the data by day - \`week\`: Aggregate the data by week. Week starts at Monday and ends at sunday night. - \`month\`: Aggregate the data by calendar month.
      default: day
    - name: report_type
      value: "{{ report_type }}"
      description: |
        Specifies the type of report to be exported. Available types are \`standard\` and \`detailed\`. An additional \`childDetailed\` type is available for Sumo Orgs parents. Detailed report will have raw consumption along with the credits breakdown. If no value is provided Standard reports will be exported.
      default: standard
    - name: include_deployment_charge
      value: {{ include_deployment_charge }}
      description: |
        Deployment charges will be applied to the returned usages csv if this is set to true and the organization  is a part of Sumo Organizations as a child organization.
      default: false
`}</CodeBlock>

</TabItem>
</Tabs>
