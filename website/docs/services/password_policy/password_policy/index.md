--- 
title: password_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - password_policy
  - password_policy
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

Creates, updates, deletes, gets or lists a <code>password_policy</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="password_policy" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.password_policy.password_policy" /></td></tr>
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

The current password policy.

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
    <td><CopyableCode code="account_lockout_duration_in_mins" /></td>
    <td><code>integer (int32)</code></td>
    <td>The duration of time in minutes that a locked-out account remained locked before getting unlocked automatically. (wire: accountLockoutDurationInMins)</td>
</tr>
<tr>
    <td><CopyableCode code="account_lockout_threshold" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of failed login attempts allowed before account is locked-out. (wire: accountLockoutThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="disallow_weak_passwords" /></td>
    <td><code>boolean</code></td>
    <td>If weak passwords should be disallowed. By default, this field is set to `false`. (wire: disallowWeakPasswords)</td>
</tr>
<tr>
    <td><CopyableCode code="failed_login_reset_duration_in_mins" /></td>
    <td><code>integer (int32)</code></td>
    <td>The duration of time in minutes that must elapse from the first failed login attempt after which failed login count is reset to 0. (wire: failedLoginResetDurationInMins)</td>
</tr>
<tr>
    <td><CopyableCode code="max_length" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum length of the password. (Setting this to any value other than 128 is no longer supported; this field may be deprecated in the future.) (wire: maxLength)</td>
</tr>
<tr>
    <td><CopyableCode code="max_password_age_in_days" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of days that a password can be used before user is required to change it. Put -1 if the user should not have to change their password. (wire: maxPasswordAgeInDays)</td>
</tr>
<tr>
    <td><CopyableCode code="min_length" /></td>
    <td><code>integer (int32)</code></td>
    <td>The minimum length of the password. (wire: minLength)</td>
</tr>
<tr>
    <td><CopyableCode code="min_unique_passwords" /></td>
    <td><code>integer (int32)</code></td>
    <td>The minimum number of unique new passwords that a user must use before an old password can be reused. (wire: minUniquePasswords)</td>
</tr>
<tr>
    <td><CopyableCode code="must_contain_digits" /></td>
    <td><code>boolean</code></td>
    <td>If the password must contain digits. (wire: mustContainDigits)</td>
</tr>
<tr>
    <td><CopyableCode code="must_contain_lowercase" /></td>
    <td><code>boolean</code></td>
    <td>If the password must contain lower case characters. (wire: mustContainLowercase)</td>
</tr>
<tr>
    <td><CopyableCode code="must_contain_special_chars" /></td>
    <td><code>boolean</code></td>
    <td>If the password must contain special characters. (wire: mustContainSpecialChars)</td>
</tr>
<tr>
    <td><CopyableCode code="must_contain_uppercase" /></td>
    <td><code>boolean</code></td>
    <td>If the password must contain upper case characters. (wire: mustContainUppercase)</td>
</tr>
<tr>
    <td><CopyableCode code="remember_mfa" /></td>
    <td><code>boolean</code></td>
    <td>If MFA should be remembered on the browser. (wire: rememberMfa)</td>
</tr>
<tr>
    <td><CopyableCode code="require_mfa" /></td>
    <td><code>boolean</code></td>
    <td>If MFA should be required to log in. By default, this field is set to `false`. (wire: requireMfa)</td>
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
    <td>Get the current password policy.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the current password policy.</td>
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

Get the current password policy.

```sql
SELECT
account_lockout_duration_in_mins,
account_lockout_threshold,
disallow_weak_passwords,
failed_login_reset_duration_in_mins,
max_length,
max_password_age_in_days,
min_length,
min_unique_passwords,
must_contain_digits,
must_contain_lowercase,
must_contain_special_chars,
must_contain_uppercase,
remember_mfa,
require_mfa
FROM sumologic.password_policy.password_policy
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
;
```
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

Update the current password policy.

```sql
UPDATE sumologic.password_policy.password_policy
SET 
min_length = {{ min_length }},
max_length = {{ max_length }},
must_contain_lowercase = {{ must_contain_lowercase }},
must_contain_uppercase = {{ must_contain_uppercase }},
must_contain_digits = {{ must_contain_digits }},
must_contain_special_chars = {{ must_contain_special_chars }},
max_password_age_in_days = {{ max_password_age_in_days }},
min_unique_passwords = {{ min_unique_passwords }},
account_lockout_threshold = {{ account_lockout_threshold }},
failed_login_reset_duration_in_mins = {{ failed_login_reset_duration_in_mins }},
account_lockout_duration_in_mins = {{ account_lockout_duration_in_mins }},
require_mfa = {{ require_mfa }},
remember_mfa = {{ remember_mfa }},
disallow_weak_passwords = {{ disallow_weak_passwords }}
WHERE 
region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
RETURNING
account_lockout_duration_in_mins,
account_lockout_threshold,
disallow_weak_passwords,
failed_login_reset_duration_in_mins,
max_length,
max_password_age_in_days,
min_length,
min_unique_passwords,
must_contain_digits,
must_contain_lowercase,
must_contain_special_chars,
must_contain_uppercase,
remember_mfa,
require_mfa;
```
</TabItem>
</Tabs>
