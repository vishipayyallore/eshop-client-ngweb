import { Component, OnInit } from '@angular/core'
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client'
import { map, startWith, Observable } from 'rxjs'

import { AuthService } from '~common/services/auth/auth.service'


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
export class LoginComponent implements OnInit {
  action$!: Observable<Actions>
  
  constructor(
    private authService: AuthService,
    private oidcSecurityService: OidcSecurityService
  ) { }

  ngOnInit() {
    this.action$ = this.authService.loginResponse$.pipe(
      map((loginResponse: LoginResponse) => loginResponse.isAuthenticated 
        ? Actions.Logout 
        : Actions.Login),
      startWith(Actions.Login))
  }

  cta(action: Actions) {
    switch (action) {
      case Actions.Login:
        this.login()
        break
      case Actions.Logout:
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
