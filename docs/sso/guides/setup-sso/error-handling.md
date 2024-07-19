# Error Handling during Single Sign-on
<Subtitle>Reference of error codes and how to handle them</Subtitle>

If there are any issues while the user tries to login with Single Sign-on via Scalekit, your application's redirect URI will receive the details of the error via the request parameters: error, error_description. Depending on the nature of the error, you would want to handle it gracefully and offer a better customer experience.

## Integration related errors

If there are issues because of integration between Scalekit and your application, you will receive the following errors in your redirect_uri endpoint.

:::tip
Ideally, you should catch them during your integration with Scalekit and once resolved, you may never receive these errors in your production environment. You don’t want to expose these messages directly to your customers.
:::

| Error | Error Description | Possible Resolution Strategy |
|---|---| --- |
| <SimpleCode>invalid_redirect_uri</SimpleCode> | Redirect URI is not part of the pre-approved list of Redirect URIs. If this is a valid URL, you need to add it in the Scalekit Dashboard before using it. | |
| <SimpleCode>invalid_connection_selector</SimpleCode> | Atleast one of organization_id, connection_id, domain need to be present in the Authorization URL request to process the Single Sign-on request | |
| <SimpleCode>no_active_connections</SimpleCode> | There are no active SSO Connections configured to process the Single Sign-on request | |
| <SimpleCode>connection_not_active</SimpleCode> | Connection ID requested is not yet enabled to process login for users. | This connection needs to be enabled before it can process login for real users.|
| <SimpleCode>no_configured_connections</SimpleCode> | There are no active SSO Connections configured to process the Single Sign-on request | |
| <SimpleCode>invalid_organization_id</SimpleCode> | Invalid Organization ID requested to process the Single Sign-on request | |
| <SimpleCode>invalid_connection_id</SimpleCode> | Invalid Connection ID requested to process the Single Sign-on request | |
| <SimpleCode>domain_not_found</SimpleCode> | There are no active SSO Connections configured for this domain to process the Single Sign-on request | Check the organization domain configuration in your Scalekit Dashboard |
| <SimpleCode>invalid_user_domain</SimpleCode> | User doesn't belong to the allowed domains list for this SSO Connection. | |
| <SimpleCode>server_error</SimpleCode> | _actual error description from the server_   | This must be a rare occurence. Please reach out to us via your private slack channel or [via email](mailto:support@scalekit.com) |

## SSO Configuration related errors

If there are issues related to the SSO configuration, you will receive the following errors in your redirect_uri endpoint. To fix most of these issues, the SSO configuration needs to be reviewed and fixed.

:::tip
Ideally, these errors should have been caught and handled by your customer’s IT admin at the time of SSO configuration. If there are issues during SSO configuration, during "Test Connection" stage, your customers will able to review and fix the configuration.

Once your customer configures the SSO settings properly, tests the configuration and enables it - you shouldn’t receive these errors unless something has been modified, tampered or changed at the Identity Provider side.
:::

| Error Code | Error Description | Possible Resolution Strategy |
|---|---| --- |
| <SimpleCode>mandatory_attribute_missing</SimpleCode> | Mandatory attributes are missing | User attributes are not configured properly.  |
| <SimpleCode>invalid_id_token</SimpleCode> |  invalid id token | Usually, this happens when your customer's identity provider is not working properly.|
| <SimpleCode>failed_to_exchange_token</SimpleCode> |  failed to exchange token | Possibly because of incorrect client_secret. Updating the client_secret with an appropriate value should fix this issue. |
| <SimpleCode>user_info_retrieve_failed</SimpleCode> |  userinfo failed | Possibly because of incorrect client_secret. Updating the client_secret with an appropriate value should fix this issue. |
| <SimpleCode>invalid_saml_metadata</SimpleCode> | Unable to identify appropriate Identity Provider SAML details based on the metadata provided. Please update the configuration with correct metadata | SAML metdata URL needs to be updated with an appropriate value |
| <SimpleCode>invalid_saml_response</SimpleCode> |  invalid saml response | SAML Configuration settings need to be reviewed and fixed|
| <SimpleCode>signature_validation_failed</SimpleCode> |  signature validation failed | Review and update the X.509 certificate in the SAML configuration settings. |
| <SimpleCode>invalid_acs_url</SimpleCode> |  Invalid ACS URL | Review and update the SAML configuration settings in the identity provider. |
| <SimpleCode>invalid_status</SimpleCode> | Invalid Status | Review and update the SAML configuration settings in the identity provider. |
| <SimpleCode>malformed_saml_response</SimpleCode> |  marshalling error | SAML response is malformed from the identity provider. SAML Configuration settings need to be reviewed and fixed |
| <SimpleCode>assertion_expired</SimpleCode> |  assertion expired | We received an expired SAML response. This could be because of clock skew between the identity provider's server and our servers. Please reach out to us via your private slack channel or [via email](mailto:support@scalekit.com)  |
| <SimpleCode>response_expired</SimpleCode> |  response expired | We received an expired SAML response. This could be because of clock skew between the identity provider's server and our servers. Please reach out to us via your private slack channel or [via email](mailto:support@scalekit.com)  |
