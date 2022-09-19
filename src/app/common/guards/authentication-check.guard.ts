import { Injectable } from '@angular/core'
import { 
  ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, 
} from '@angular/router'
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client'

import type { CanDoReturn } from './can-do.type'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationCheckGuard implements CanActivateChild {

  constructor(private router: Router,
    private autoLoginPartialRoutesGuard: AutoLoginPartialRoutesGuard) {}

   canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): CanDoReturn {
    return this.autoLoginPartialRoutesGuard.canActivate(route, state)
  }
  
}
