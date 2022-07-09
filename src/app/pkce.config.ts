import { AuthConfig } from 'angular-oauth2-oidc'

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://app-eshop-services-identity.azurewebsites.net',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/signin-callback',

  clientId: 'a1eRestaurant-web',
  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  // scope: 'openid profile email offline_access api',
  scope: 'openid profile',

  showDebugInformation: true,
};