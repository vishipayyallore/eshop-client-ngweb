import { LogLevel, OpenIdConfiguration, PassedInitialConfig } from "angular-auth-oidc-client"

const localAuthority: OpenIdConfiguration = {
  authority: 'http://localhost:3000/oidc',
  redirectUrl: window.location.origin + '/signin-callback',
  postLogoutRedirectUri: window.location.origin,
  clientId: 'oidcCLIENT',
  scope: 'openid',
  responseType: 'code',
  // silentRenew: true,
  // useRefreshToken: true,
  logLevel: LogLevel.Debug,
}

const appEshopLocalServicesIdentity: OpenIdConfiguration = {
  authority: 'https://localhost:5001',
  redirectUrl: window.location.origin + '/signin-callback',
  postLogoutRedirectUri: window.location.origin + '/signout-callback',
  clientId: 'eShop-webclientId',
  scope: 'openid profile',
  responseType: 'code',
  logLevel: LogLevel.Debug
}


// key = Math.max(Object.keys(sessionStorage).filter(k => /eShop-webclientId/.test(k)).map(i => i.split('-', 2)[-1])) + '-eShop-webclientId'
const appEshopServicesIdentity: OpenIdConfiguration = {
  authority: 'https://app-eshop-services-identity.azurewebsites.net',
  redirectUrl: window.location.origin + '/signin-callback',
  postLogoutRedirectUri: window.location.origin + '/signout-callback',
  clientId: 'eShop-webclientId',
  scope: 'openid profile',
  responseType: 'code',
  logLevel: LogLevel.Debug
}

export const config: PassedInitialConfig = {
  // config:  localAuthority
  config: appEshopServicesIdentity,
  // config: appEshopLocalServicesIdentity
}
