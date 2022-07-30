import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client'
import { Subscription } from 'rxjs'

import { AuthService } from '../auth.service'
import { ChangeDetecting } from '~common/utilities/change-detecting.decorator'


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
export class LoginComponent implements OnInit, OnDestroy {
  copy = { action: Actions.Login }
  isAuthenticated?: boolean

  private subscriptions = new Subscription();

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private oidcSecurityService: OidcSecurityService
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.authService.state$
      .subscribe(this.onAuthStateChange.bind(this)))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  private onAuthStateChange(state: Partial<AuthService>) {
    if ('isAuthenticated' in state) {
      this.copy.action = state.isAuthenticated
        ? Actions.Logout
        : Actions.Login
      this.setProperty('isAuthenticated', state.isAuthenticated)
    }
  }

  private onIsAuthenticatedStateChange(state: boolean) {
    this.copy.action = state
      ? Actions.Logout
      : Actions.Login
    this.setProperty('isAuthenticated', state)
  }

  @ChangeDetecting()
  private setProperty(property: keyof LoginComponent, value: unknown) {
    Object.assign(this, { [property]: value })
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
