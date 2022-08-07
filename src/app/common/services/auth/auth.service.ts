import { Injectable } from '@angular/core'
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client'
import { Observable, shareReplay } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginResponse$!: Observable<LoginResponse>
  isAuthenticated?: boolean
  userData: any

  static forRoot() {
    return { 
      provide: AuthService, 
      useFactory: (oidcSecurityService: OidcSecurityService) => {
        const service = new AuthService(oidcSecurityService)
        service.initialize()
        return service
      }, 
      deps: [OidcSecurityService]}
  }

  constructor(private oidcSecurityService: OidcSecurityService) { }

  initialize() {
    this.loginResponse$ = this.oidcSecurityService.checkAuth()
      .pipe(shareReplay(1))
  }  

}
