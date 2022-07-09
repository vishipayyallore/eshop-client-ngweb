import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client'

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
  constructor(private oidcSecurityService: OidcSecurityService) { }

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
    this.oidcSecurityService.authorize()
  }

  private logout() {
    this.oidcSecurityService.logoff()
  }
}
