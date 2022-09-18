import { Injectable } from '@angular/core'
import { 
  AuthModule, LoginResponse, OidcSecurityService, 
  PassedInitialConfig, StsConfigLoader 
} from 'angular-auth-oidc-client'
import { Observable, shareReplay } from 'rxjs'

import { 
  AppConfigurationService 
} from '~common/services/app-configuration/app-configuration.service'
import { Dummyable } from '~common/utilities/dummyable.decorator'
import { authFactory } from './auth.factory'
import { developmentInitialize } from './helpers'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginResponse$!: Observable<LoginResponse>
  isAuthenticated?: boolean
  userData: any

  /** 
   * @static @method forRoot
   * @description initializes angular-auth-oidc-client connection when starting service
   */
  static forRoot() {
    return { 
      provide: AuthService, 
      useFactory: (oidcSecurityService: OidcSecurityService) => {
        const service = new AuthService(oidcSecurityService)
        service.initialize()
        return service
      }, 
      deps: [OidcSecurityService]
    }
  }

  /**
   * @static @method getAuthModuleForRoot
   * @description returns import for root module inclusion of 
   * angular-auth-oidc-client in environments calling API.
   * @see This is implmenting the pattern describved in official 
   * angular-auth-oidc-client documnentation 
   * {@link https://angular-auth-oidc-client.com/docs/documentation/configuration#getting-static-config-from-a-service-sync}
   */
  static getAuthModuleForRoot() {
    return AuthModule.forRoot(AuthService.authModuleConfiguration)
  }

  static authModuleConfiguration: PassedInitialConfig = {
    loader: {
      provide: StsConfigLoader,
      useFactory: authFactory,
      deps: [AppConfigurationService],
    }
  }

  constructor(private oidcSecurityService: OidcSecurityService) { }

  @Dummyable(developmentInitialize)
  initialize() {
    this.loginResponse$ = this.oidcSecurityService.checkAuth()
      .pipe(shareReplay(1))
  }  

}
