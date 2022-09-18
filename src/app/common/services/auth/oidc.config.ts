/**
 * 
 * @param identity response from configuration service's identity 
 * section
 * @returns OpenIdConfiguration
 */
export const factoryOIDCConfiguration = ({
  authority, signInEndpoint, signOutEndpoint, clientId, scope, responseType
}: {[key: string]: string}) => Object.assign({}, {
  authority,
  redirectUrl: window.location.origin + signInEndpoint,
  postLogoutRedirectUri: window.location.origin + signOutEndpoint,
  clientId,
  scope,
  responseType
})
