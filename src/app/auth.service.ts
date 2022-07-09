import { Injectable } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

import { After } from './common/utilities/after.decorator';
import { emitPropertyChanges, Stateful } from './common/utilities/stateful.decorator';

export interface AuthService extends Stateful<Partial<AuthService>> {}

@Injectable({
  providedIn: 'root'
})
@Stateful<Partial<AuthService>>()
export class AuthService {
  isAuthenticated?: boolean
  userData: any

  constructor(private oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.checkAuth().subscribe(this.onCheckAuthResponse.bind(this))
  }

  @After(emitPropertyChanges('isAuthenticated', 'userData'))
  private onCheckAuthResponse ({ isAuthenticated, userData }: LoginResponse) {
    this.isAuthenticated = isAuthenticated
    this.userData = userData
  }
}
