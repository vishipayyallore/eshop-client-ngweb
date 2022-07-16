import { LogLevel, OpenIdConfiguration, PassedInitialConfig } from "angular-auth-oidc-client"

const localAuthority: OpenIdConfiguration = {
  authority: 'http://localhost:3000',
  redirectUrl: window.location.origin + '/signin-callback',
  postLogoutRedirectUri: window.location.origin,
  clientId: 'oidcCLIENT',
  scope: 'openid',
  responseType: 'code',
  // silentRenew: true,
  // useRefreshToken: true,
  logLevel: LogLevel.Debug,
}

const appEshopServicesIdentity: OpenIdConfiguration = {
  authority: 'https://app-eshop-services-identity.azurewebsites.net',
  redirectUrl: window.location.origin + '/signin-callback',
  postLogoutRedirectUri: window.location.origin,
  clientId: 'a1eRestaurant-web',
  scope: 'openid profile',
  responseType: 'code',
  logLevel: LogLevel.Debug
}

export const config: PassedInitialConfig = {
  // config:  localAuthority
  config: appEshopServicesIdentity
}
