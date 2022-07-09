import { LogLevel } from "angular-auth-oidc-client"


export const config = { 
  config:  {
    authority: '<your authority address here>',
    redirectUrl: window.location.origin + '/signin-callback',
    postLogoutRedirectUri: window.location.origin,
    clientId: 'oidcCLIENT',
    scope: 'openid profile email offline_access',
    responseType: 'code',
    // silentRenew: true,
    // useRefreshToken: true,
    logLevel: LogLevel.Debug,
  }
}