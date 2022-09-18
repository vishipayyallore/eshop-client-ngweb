import { Component, OnInit } from '@angular/core'
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client'
import { map, startWith, Observable } from 'rxjs'

import { AuthService } from '~common/services/auth/auth.service'
import { Dummyable } from '~common/utilities/dummyable.decorator'
import { Actions } from './actions.enum'
import { developmentSetupAction, developmentToggleSignIn } from './helpers'


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

  @Dummyable(developmentSetupAction)
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

  @Dummyable(developmentToggleSignIn)
  private login() {
    this.oidcSecurityService.authorize()
  }

  @Dummyable(developmentToggleSignIn)
  private logout() {
    this.oidcSecurityService.logoff()
  }
}
