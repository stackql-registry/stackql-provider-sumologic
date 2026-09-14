--- 
title: identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_providers
  - saml
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

Creates, updates, deletes, gets or lists an <code>identity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="sumologic.saml.identity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the SAML Identity Provider. (example: 00000000361130F7)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that is the intended audience of the SAML assertion. (example: https:​//service.sumologic.com/sumo/saml/9483922, default: ) (wire: entityId)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_name" /></td>
    <td><code>string</code></td>
    <td>Name of the SSO policy or another name used to describe the policy internally. (example: SumoLogic) (wire: configurationName)</td>
</tr>
<tr>
    <td><CopyableCode code="assertion_consumer_url" /></td>
    <td><code>string</code></td>
    <td>The URL on Sumo Logic where the IdP will redirect to with its authentication response. (example: https:​//service.sumologic.com/sumo/saml/consume/9483922, default: ) (wire: assertionConsumerUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="authn_request_url" /></td>
    <td><code>string</code></td>
    <td>The URL that the identity provider has assigned for Sumo Logic to submit SAML authentication requests to the identity provider. (example: https:​//www.okta.com/app/sumologic/abxcseyuiwelflkdjh/sso/saml, default: ) (wire: authnRequestUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate" /></td>
    <td><code>string</code></td>
    <td>Authentication Request Signing Certificate for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp in UTC in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. (example: 2018-10-16T09:10:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who created the resource. (example: 0000000006743FDD) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="debug_mode" /></td>
    <td><code>boolean</code></td>
    <td>True if additional details are included when a user fails to sign in. (wire: debugMode)</td>
</tr>
<tr>
    <td><CopyableCode code="disable_requested_authn_context" /></td>
    <td><code>boolean</code></td>
    <td>True if Sumo Logic will include the RequestedAuthnContext element of the SAML AuthnRequests it sends to the identity provider. (wire: disableRequestedAuthnContext)</td>
</tr>
<tr>
    <td><CopyableCode code="email_attribute" /></td>
    <td><code>string</code></td>
    <td>The email address of the new user account. (example: attribute/subject, default: ) (wire: emailAttribute)</td>
</tr>
<tr>
    <td><CopyableCode code="is_redirect_binding" /></td>
    <td><code>boolean</code></td>
    <td>True if the SAML binding is of HTTP Redirect type. (wire: isRedirectBinding)</td>
</tr>
<tr>
    <td><CopyableCode code="issuer" /></td>
    <td><code>string</code></td>
    <td>The unique URL assigned to the organization by the SAML Identity Provider. (example: http:​//www.okta.com/abxcseyuiwelflkdjh)</td>
</tr>
<tr>
    <td><CopyableCode code="logout_enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if users are redirected to a URL after signing out of Sumo Logic. (wire: logoutEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="logout_url" /></td>
    <td><code>string</code></td>
    <td>The URL that users will be redirected to after signing out of Sumo Logic. (example: https:​//www.sumologic.com, default: ) (wire: logoutUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_url" /></td>
    <td><code>string</code></td>
    <td>The URL to fetch SAML metadata XML. (example: https:​//api.sumologic.com/api/v1/saml/identityProviders/00000000361130F7/metadata, default: ) (wire: metadataUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp in UTC. (example: 2018-10-16T09:10:00.000Z) (wire: modifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user who last modified the resource. (example: 0000000006743FE8) (wire: modifiedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="on_demand_provisioning_enabled" /></td>
    <td><code>object</code></td>
    <td> (wire: onDemandProvisioningEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="roles_attribute" /></td>
    <td><code>string</code></td>
    <td>The role that Sumo Logic will assign to users when they sign in. (example: Sumo_Role, default: ) (wire: rolesAttribute)</td>
</tr>
<tr>
    <td><CopyableCode code="sign_authn_request" /></td>
    <td><code>boolean</code></td>
    <td>True if Sumo Logic will send signed Authn requests to the identity provider. (wire: signAuthnRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="sp_initiated_login_enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if Sumo Logic redirects users to your identity provider with a SAML AuthnRequest when signing in. (wire: spInitiatedLoginEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="sp_initiated_login_path" /></td>
    <td><code>string</code></td>
    <td>This property has been deprecated and is no longer used. (example: http:​//www.okta.com/abxcseyuiwelflkdjh, default: ) (wire: spInitiatedLoginPath)</td>
</tr>
<tr>
    <td><CopyableCode code="x_509cert_1" /></td>
    <td><code>string</code></td>
    <td>The certificate is used to verify the signature in SAML assertions. (wire: x509cert1)</td>
</tr>
<tr>
    <td><CopyableCode code="x_509cert_2" /></td>
    <td><code>string</code></td>
    <td>The backup certificate used to verify the signature in SAML assertions when x509cert1 expires. (default: ) (wire: x509cert2)</td>
</tr>
<tr>
    <td><CopyableCode code="x_509cert_3" /></td>
    <td><code>string</code></td>
    <td>The backup certificate used to verify the signature in SAML assertions when x509cert1 expires and x509cert2 is empty. (default: ) (wire: x509cert3)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of all SAML configurations in the organization.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration_name"><code>configuration_name</code></a>, <a href="#parameter-issuer"><code>issuer</code></a>, <a href="#parameter-x_509cert_1"><code>x_509cert_1</code></a></td>
    <td></td>
    <td>Create a new SAML configuration in the organization.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration_name"><code>configuration_name</code></a>, <a href="#parameter-issuer"><code>issuer</code></a>, <a href="#parameter-x_509cert_1"><code>x_509cert_1</code></a></td>
    <td></td>
    <td>Update an existing SAML configuration in the organization.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a SAML configuration with the given identifier from the organization.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the SAML configuration to delete.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get a list of all SAML configurations in the organization.

```sql
SELECT
id,
entity_id,
configuration_name,
assertion_consumer_url,
authn_request_url,
certificate,
created_at,
created_by,
debug_mode,
disable_requested_authn_context,
email_attribute,
is_redirect_binding,
issuer,
logout_enabled,
logout_url,
metadata_url,
modified_at,
modified_by,
on_demand_provisioning_enabled,
roles_attribute,
sign_authn_request,
sp_initiated_login_enabled,
sp_initiated_login_path,
x_509cert_1,
x_509cert_2,
x_509cert_3
FROM sumologic.saml.identity_providers
WHERE region = '{{ region }}' -- required unless SUMOLOGIC_ENVIRONMENT is set
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

Create a new SAML configuration in the organization.

```sql
INSERT INTO sumologic.saml.identity_providers (
sp_initiated_login_path,
configuration_name,
issuer,
sp_initiated_login_enabled,
authn_request_url,
x_509cert_1,
x_509cert_2,
x_509cert_3,
on_demand_provisioning_enabled,
roles_attribute,
logout_enabled,
logout_url,
email_attribute,
debug_mode,
sign_authn_request,
disable_requested_authn_context,
is_redirect_binding,
region
)
SELECT 
'{{ sp_initiated_login_path }}',
'{{ configuration_name }}' /* required */,
'{{ issuer }}' /* required */,
{{ sp_initiated_login_enabled }},
'{{ authn_request_url }}',
'{{ x_509cert_1 }}' /* required */,
'{{ x_509cert_2 }}',
'{{ x_509cert_3 }}',
'{{ on_demand_provisioning_enabled }}',
'{{ roles_attribute }}',
{{ logout_enabled }},
'{{ logout_url }}',
'{{ email_attribute }}',
{{ debug_mode }},
{{ sign_authn_request }},
{{ disable_requested_authn_context }},
{{ is_redirect_binding }},
'{{ region }}'
RETURNING
id,
entity_id,
configuration_name,
assertion_consumer_url,
authn_request_url,
certificate,
created_at,
created_by,
debug_mode,
disable_requested_authn_context,
email_attribute,
is_redirect_binding,
issuer,
logout_enabled,
logout_url,
metadata_url,
modified_at,
modified_by,
on_demand_provisioning_enabled,
roles_attribute,
sign_authn_request,
sp_initiated_login_enabled,
sp_initiated_login_path,
x_509cert_1,
x_509cert_2,
x_509cert_3
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the identity_providers resource.
    - name: sp_initiated_login_path
      value: "{{ sp_initiated_login_path }}"
      description: |
        This property has been deprecated and is no longer used.
      default: 
    - name: configuration_name
      value: "{{ configuration_name }}"
      description: |
        Name of the SSO policy or another name used to describe the policy internally.
    - name: issuer
      value: "{{ issuer }}"
      description: |
        The unique URL assigned to the organization by the SAML Identity Provider.
    - name: sp_initiated_login_enabled
      value: {{ sp_initiated_login_enabled }}
      description: |
        True if Sumo Logic redirects users to your identity provider with a SAML AuthnRequest when signing in.
      default: false
    - name: authn_request_url
      value: "{{ authn_request_url }}"
      description: |
        The URL that the identity provider has assigned for Sumo Logic to submit SAML authentication requests to the identity provider.
      default: 
    - name: x_509cert_1
      value: "{{ x_509cert_1 }}"
      description: |
        The certificate is used to verify the signature in SAML assertions.
    - name: x_509cert_2
      value: "{{ x_509cert_2 }}"
      description: |
        The backup certificate used to verify the signature in SAML assertions when x509cert1 expires.
      default: 
    - name: x_509cert_3
      value: "{{ x_509cert_3 }}"
      description: |
        The backup certificate used to verify the signature in SAML assertions when x509cert1 expires and x509cert2 is empty.
      default: 
    - name: on_demand_provisioning_enabled
      value:
        firstNameAttribute: "{{ firstNameAttribute }}"
        lastNameAttribute: "{{ lastNameAttribute }}"
        onDemandProvisioningRoles:
          - "{{ onDemandProvisioningRoles }}"
    - name: roles_attribute
      value: "{{ roles_attribute }}"
      description: |
        The role that Sumo Logic will assign to users when they sign in.
      default: 
    - name: logout_enabled
      value: {{ logout_enabled }}
      description: |
        True if users are redirected to a URL after signing out of Sumo Logic.
      default: false
    - name: logout_url
      value: "{{ logout_url }}"
      description: |
        The URL that users will be redirected to after signing out of Sumo Logic.
      default: 
    - name: email_attribute
      value: "{{ email_attribute }}"
      description: |
        The email address of the new user account.
      default: 
    - name: debug_mode
      value: {{ debug_mode }}
      description: |
        True if additional details are included when a user fails to sign in.
      default: false
    - name: sign_authn_request
      value: {{ sign_authn_request }}
      description: |
        True if Sumo Logic will send signed Authn requests to the identity provider.
      default: false
    - name: disable_requested_authn_context
      value: {{ disable_requested_authn_context }}
      description: |
        True if Sumo Logic will include the RequestedAuthnContext element of the SAML AuthnRequests it sends to the identity provider.
      default: false
    - name: is_redirect_binding
      value: {{ is_redirect_binding }}
      description: |
        True if the SAML binding is of HTTP Redirect type.
      default: false
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

Update an existing SAML configuration in the organization.

```sql
UPDATE sumologic.saml.identity_providers
SET 
sp_initiated_login_path = '{{ sp_initiated_login_path }}',
configuration_name = '{{ configuration_name }}',
issuer = '{{ issuer }}',
sp_initiated_login_enabled = {{ sp_initiated_login_enabled }},
authn_request_url = '{{ authn_request_url }}',
x_509cert_1 = '{{ x_509cert_1 }}',
x_509cert_2 = '{{ x_509cert_2 }}',
x_509cert_3 = '{{ x_509cert_3 }}',
on_demand_provisioning_enabled = '{{ on_demand_provisioning_enabled }}',
roles_attribute = '{{ roles_attribute }}',
logout_enabled = {{ logout_enabled }},
logout_url = '{{ logout_url }}',
email_attribute = '{{ email_attribute }}',
debug_mode = {{ debug_mode }},
sign_authn_request = {{ sign_authn_request }},
disable_requested_authn_context = {{ disable_requested_authn_context }},
is_redirect_binding = {{ is_redirect_binding }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
AND configuration_name = '{{ configuration_name }}' --required
AND issuer = '{{ issuer }}' --required
AND x_509cert_1 = '{{ x_509cert_1 }}' --required
RETURNING
id,
entity_id,
configuration_name,
assertion_consumer_url,
authn_request_url,
certificate,
created_at,
created_by,
debug_mode,
disable_requested_authn_context,
email_attribute,
is_redirect_binding,
issuer,
logout_enabled,
logout_url,
metadata_url,
modified_at,
modified_by,
on_demand_provisioning_enabled,
roles_attribute,
sign_authn_request,
sp_initiated_login_enabled,
sp_initiated_login_path,
x_509cert_1,
x_509cert_2,
x_509cert_3;
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

Delete a SAML configuration with the given identifier from the organization.

```sql
DELETE FROM sumologic.saml.identity_providers
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required unless SUMOLOGIC_ENVIRONMENT is set
;
```
</TabItem>
</Tabs>
