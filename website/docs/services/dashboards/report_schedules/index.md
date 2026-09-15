--- 
title: report_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - report_schedules
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>report_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.dashboards.report_schedules" /></td></tr>
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

Dashboard report schedule object that was requested.

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
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of dashboard the schedule will generate report for. (example: B23OjNs5ZCyn5VdMwOBoLo3PjgRnJSAlNTKEDAcpuDG2CIgRe9KFXMofm2H2) (wire: dashboardId)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the dashboard report schedule. (example: RdQHYPh2jxoS90DXtKfA7nAJV2rsQ9BncpfY7IkjNzQWi52ug85W7r6Rrmtd) (wire: scheduleId)</td>
</tr>
<tr>
    <td><CopyableCode code="cron_expression" /></td>
    <td><code>string</code></td>
    <td>Cron-like expression specifying the report's schedule. Field scheduleType must be set to "Custom", otherwise, scheduleType takes precedence over cronExpression. (example: 0 0/15 * * * ? *) (wire: cronExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="email_notification" /></td>
    <td><code>object</code></td>
    <td>The base class of all connection types. (wire: emailNotification)</td>
</tr>
<tr>
    <td><CopyableCode code="export_width" /></td>
    <td><code>integer</code></td>
    <td>Pixel width of the exported PDF or PNG. If absent, the default width is used. (wire: exportWidth)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>Is the dashboard report schedule active (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="report_format" /></td>
    <td><code>string</code></td>
    <td>File format of the report. Can be `Pdf` or `Png`. `Pdf` is portable document format. `Png` is portable graphics image format. (pattern: &lt;code&gt;^(Pdf|Png)$&lt;/code&gt;, example: Pdf, x-pattern-message: should be one of the following: 'Pdf', 'Png') (wire: reportFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_type" /></td>
    <td><code>string</code></td>
    <td>Run schedule of the scheduled report. Set to "Custom" to specify the schedule with a CRON expression. Possible schedule types are:   - `RealTime`   - `15Minutes`   - `1Hour`   - `2Hours`   - `4Hours`   - `6Hours`   - `8Hours`   - `12Hours`   - `1Day`   - `1Week`   - `Custom` (example: 1Day) (wire: scheduleType)</td>
</tr>
<tr>
    <td><CopyableCode code="theme" /></td>
    <td><code>string</code></td>
    <td>Theme for the report rendering. Must be `Light` or `Dark`. If absent, the dashboard's own theme is used. (pattern: &lt;code&gt;^(light|dark|Light|Dark)$&lt;/code&gt;, example: Light, x-pattern-message: Must be `Light`, `light`, `dark` or `Dark`)</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone identifier for time specification. Either an abbreviation such as "PST", a full name such as "America/Los_Angeles", or a custom ID such as "GMT-8:00". Note that the support of abbreviations is for JDK 1.1.x compatibility only and full names should be used. (example: America/Los_Angeles) (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="variable_values" /></td>
    <td><code>object</code></td>
    <td> (wire: variableValues)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Paginated list of dashboard report schedules created by the user.

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
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of dashboard the schedule will generate report for. (example: B23OjNs5ZCyn5VdMwOBoLo3PjgRnJSAlNTKEDAcpuDG2CIgRe9KFXMofm2H2) (wire: dashboardId)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the dashboard report schedule. (example: RdQHYPh2jxoS90DXtKfA7nAJV2rsQ9BncpfY7IkjNzQWi52ug85W7r6Rrmtd) (wire: scheduleId)</td>
</tr>
<tr>
    <td><CopyableCode code="cron_expression" /></td>
    <td><code>string</code></td>
    <td>Cron-like expression specifying the report's schedule. Field scheduleType must be set to "Custom", otherwise, scheduleType takes precedence over cronExpression. (example: 0 0/15 * * * ? *) (wire: cronExpression)</td>
</tr>
<tr>
    <td><CopyableCode code="email_notification" /></td>
    <td><code>object</code></td>
    <td>The base class of all connection types. (wire: emailNotification)</td>
</tr>
<tr>
    <td><CopyableCode code="export_width" /></td>
    <td><code>integer</code></td>
    <td>Pixel width of the exported PDF or PNG. If absent, the default width is used. (wire: exportWidth)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>Is the dashboard report schedule active (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="report_format" /></td>
    <td><code>string</code></td>
    <td>File format of the report. Can be `Pdf` or `Png`. `Pdf` is portable document format. `Png` is portable graphics image format. (pattern: &lt;code&gt;^(Pdf|Png)$&lt;/code&gt;, example: Pdf, x-pattern-message: should be one of the following: 'Pdf', 'Png') (wire: reportFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_type" /></td>
    <td><code>string</code></td>
    <td>Run schedule of the scheduled report. Set to "Custom" to specify the schedule with a CRON expression. Possible schedule types are:   - `RealTime`   - `15Minutes`   - `1Hour`   - `2Hours`   - `4Hours`   - `6Hours`   - `8Hours`   - `12Hours`   - `1Day`   - `1Week`   - `Custom` (example: 1Day) (wire: scheduleType)</td>
</tr>
<tr>
    <td><CopyableCode code="theme" /></td>
    <td><code>string</code></td>
    <td>Theme for the report rendering. Must be `Light` or `Dark`. If absent, the dashboard's own theme is used. (pattern: &lt;code&gt;^(light|dark|Light|Dark)$&lt;/code&gt;, example: Light, x-pattern-message: Must be `Light`, `light`, `dark` or `Dark`)</td>
</tr>
<tr>
    <td><CopyableCode code="time_range" /></td>
    <td><code>object</code></td>
    <td> (wire: timeRange)</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>Time zone identifier for time specification. Either an abbreviation such as "PST", a full name such as "America/Los_Angeles", or a custom ID such as "GMT-8:00". Note that the support of abbreviations is for JDK 1.1.x compatibility only and full names should be used. (example: America/Los_Angeles) (wire: timeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="variable_values" /></td>
    <td><code>object</code></td>
    <td> (wire: variableValues)</td>
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
    <td><a href="#parameter-schedule_id"><code>schedule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the schedule of a scheduled dashboard report by the given identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>List all dashboard report schedules created by the user.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-email_notification"><code>email_notification</code></a>, <a href="#parameter-report_format"><code>report_format</code></a>, <a href="#parameter-schedule_type"><code>schedule_type</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a></td>
    <td></td>
    <td>Schedule dashboard report to send at a specific date and time. The report should be sent as attachment or downloadable URL in one of the following notification types: 'Email', 'AWSLambda', 'AzureFunctions', 'Datadog', 'HipChat', 'Jira', 'NewRelic', 'Opsgenie', 'PagerDuty', 'Slack', 'MicrosoftTeams', 'ServiceNow', 'SumoCloudSOAR' and 'Webhook'.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-schedule_id"><code>schedule_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-email_notification"><code>email_notification</code></a>, <a href="#parameter-report_format"><code>report_format</code></a>, <a href="#parameter-schedule_type"><code>schedule_type</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a></td>
    <td></td>
    <td>Update the schedule of a scheduled dashboard report by the given identifier.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-schedule_id"><code>schedule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the schedule of a scheduled dashboard report by the given identifier. The scheduled dashboard report will no longer be generated and sent.</td>
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
<tr id="parameter-schedule_id">
    <td><CopyableCode code="schedule_id" /></td>
    <td><code>string</code></td>
    <td>UUID of the dashboard report schedule to delete. (wire: scheduleId)</td>
</tr>
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>UUID of the dashboard that the report shedules are associated with. (wire: dashboardId)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the number of dashboard report schedules returned in the response. The number of dashboard report schedules returned may be less than the `limit`. (example: 50)</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Continuation token to get the next page of results. A page object with the next continuation token is returned in the response body. Subsequent GET requests should specify the continuation token to get the next page of results. `token` is set to null when no more pages are left. (example: GDCiRv4vebF3UWFJQ1kySXBOR3Bzh69GR0RyWm9vCtc)</td>
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

Get the schedule of a scheduled dashboard report by the given identifier.

```sql
SELECT
dashboard_id,
schedule_id,
cron_expression,
email_notification,
export_width,
is_active,
report_format,
schedule_type,
theme,
time_range,
time_zone,
variable_values
FROM sumologic.dashboards.report_schedules
WHERE schedule_id = '{{ schedule_id }}' -- required
AND region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
<TabItem value="list">

List all dashboard report schedules created by the user.

```sql
SELECT
dashboard_id,
schedule_id,
cron_expression,
email_notification,
export_width,
is_active,
report_format,
schedule_type,
theme,
time_range,
time_zone,
variable_values
FROM sumologic.dashboards.report_schedules
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
AND dashboard_id = '{{ dashboard_id }}'
AND limit = '{{ limit }}'
AND token = '{{ token }}'
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

Schedule dashboard report to send at a specific date and time. The report should be sent as attachment or downloadable URL in one of the following notification types: 'Email', 'AWSLambda', 'AzureFunctions', 'Datadog', 'HipChat', 'Jira', 'NewRelic', 'Opsgenie', 'PagerDuty', 'Slack', 'MicrosoftTeams', 'ServiceNow', 'SumoCloudSOAR' and 'Webhook'.

```sql
INSERT INTO sumologic.dashboards.report_schedules (
dashboard_id,
time_range,
variable_values,
report_format,
schedule_type,
cron_expression,
time_zone,
email_notification,
is_active,
theme,
export_width,
region
)
SELECT 
'{{ dashboard_id }}' /* required */,
'{{ time_range }}',
'{{ variable_values }}',
'{{ report_format }}' /* required */,
'{{ schedule_type }}' /* required */,
'{{ cron_expression }}',
'{{ time_zone }}' /* required */,
'{{ email_notification }}' /* required */,
{{ is_active }},
'{{ theme }}',
{{ export_width }},
'{{ region }}'
RETURNING
dashboard_id,
schedule_id,
cron_expression,
email_notification,
export_width,
is_active,
report_format,
schedule_type,
theme,
time_range,
time_zone,
variable_values
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: report_schedules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the report_schedules resource.
    - name: dashboard_id
      value: "{{ dashboard_id }}"
      description: |
        Identifier of dashboard the schedule will generate report for.
    - name: time_range
      value:
        type: "{{ type }}"
    - name: variable_values
      value:
        data: "{{ data }}"
        richData: "{{ richData }}"
    - name: report_format
      value: "{{ report_format }}"
      description: |
        File format of the report. Can be \`Pdf\` or \`Png\`. \`Pdf\` is portable document format. \`Png\` is portable graphics image format.
    - name: schedule_type
      value: "{{ schedule_type }}"
      description: |
        Run schedule of the scheduled report. Set to "Custom" to specify the schedule with a CRON expression. Possible schedule types are:
        - \`RealTime\`
        - \`15Minutes\`
        - \`1Hour\`
        - \`2Hours\`
        - \`4Hours\`
        - \`6Hours\`
        - \`8Hours\`
        - \`12Hours\`
        - \`1Day\`
        - \`1Week\`
        - \`Custom\`
    - name: cron_expression
      value: "{{ cron_expression }}"
      description: |
        Cron-like expression specifying the report's schedule. Field scheduleType must be set to "Custom", otherwise, scheduleType takes precedence over cronExpression.
    - name: time_zone
      value: "{{ time_zone }}"
      description: |
        Time zone identifier for time specification. Either an abbreviation such as "PST", a full name such as "America/Los_Angeles", or a custom ID such as "GMT-8:00". Note that the support of abbreviations is for JDK 1.1.x compatibility only and full names should be used.
    - name: email_notification
      description: |
        The base class of all connection types.
      value:
        connectionType: "{{ connectionType }}"
        recipients:
          - "{{ recipients }}"
        subject: "{{ subject }}"
        messageBody: "{{ messageBody }}"
        timeZone: "{{ timeZone }}"
        includeQuery: {{ includeQuery }}
        includeResultSet: {{ includeResultSet }}
    - name: is_active
      value: {{ is_active }}
      description: |
        Is the dashboard report schedule active
      default: true
    - name: theme
      value: "{{ theme }}"
      description: |
        Theme for the report rendering. Must be \`Light\` or \`Dark\`. If absent, the dashboard's own theme is used.
    - name: export_width
      value: {{ export_width }}
      description: |
        Pixel width of the exported PDF or PNG. If absent, the default width is used.
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

Update the schedule of a scheduled dashboard report by the given identifier.

```sql
UPDATE sumologic.dashboards.report_schedules
SET 
dashboard_id = '{{ dashboard_id }}',
time_range = '{{ time_range }}',
variable_values = '{{ variable_values }}',
report_format = '{{ report_format }}',
schedule_type = '{{ schedule_type }}',
cron_expression = '{{ cron_expression }}',
time_zone = '{{ time_zone }}',
email_notification = '{{ email_notification }}',
is_active = {{ is_active }},
theme = '{{ theme }}',
export_width = {{ export_width }}
WHERE 
schedule_id = '{{ schedule_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND dashboard_id = '{{ dashboard_id }}' --required
AND email_notification = '{{ email_notification }}' --required
AND report_format = '{{ report_format }}' --required
AND schedule_type = '{{ schedule_type }}' --required
AND time_zone = '{{ time_zone }}' --required
RETURNING
dashboard_id,
schedule_id,
cron_expression,
email_notification,
export_width,
is_active,
report_format,
schedule_type,
theme,
time_range,
time_zone,
variable_values;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete the schedule of a scheduled dashboard report by the given identifier. The scheduled dashboard report will no longer be generated and sent.

```sql
DELETE FROM sumologic.dashboards.report_schedules
WHERE schedule_id = '{{ schedule_id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
