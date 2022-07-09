import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

import { authCodeFlowConfig } from '../pkce.config';

export enum Actions {
  unknown,
  Login = 'login',
  Logout = 'logout'
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private oauthService: OAuthService) { 
    // once only:
    this.oauthService.initLoginFlow() 
    this.oauthService.configure(authCodeFlowConfig)
  }

  cta(action: string) {
    switch (action) {
      case String(Actions.Login):
        this.login()
        break
      case String(Actions.Logout):
        this.logout()
        break
      default:
        console.warn('[LoginComponent::cta] unknown action', String(action))
    }
  }

  private login() {
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
  }

  private logout() {
    this.oauthService.revokeTokenAndLogout()
  }
}
