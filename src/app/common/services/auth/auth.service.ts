import { Injectable } from '@angular/core'
import { ANONYMOUS_PROFILE, ProfileService } from '@vishipayyallore/design-system'
import { 
  AuthModule, LoginResponse, OidcSecurityService, 
  PassedInitialConfig, StsConfigLoader 
} from 'angular-auth-oidc-client'
import { map, ReplaySubject } from 'rxjs'

import { 
  AppConfigurationService 
} from '~common/services/app-configuration/app-configuration.service'
import { Dummyable } from '~common/utilities/dummyable.decorator'
import { authFactory } from './auth.factory'
import { AUTHENTICATED_PROFILE } from './constants'
import { developmentInitialize } from './helpers'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginResponse = new ReplaySubject<LoginResponse>(1)
  loginResponse$ = this.loginResponse.asObservable()
  isAuthenticated?: boolean

  /** 
   * @static @method forRoot
   * @description initializes angular-auth-oidc-client connection when starting service
   */
  static forRoot() {
    return { 
      provide: AuthService, 
      useFactory: (
        oidcSecurityService: OidcSecurityService, 
        profileService: ProfileService) => {
        const service = new AuthService(oidcSecurityService, profileService)
        service.initialize()
        return service
      }, 
      deps: [OidcSecurityService, ProfileService, AppConfigurationService]
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

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private profileService: ProfileService) {
  }

  @Dummyable(developmentInitialize)
  initialize() {
    this.oidcSecurityService.checkAuth()
      .subscribe(x => this.loginResponse.next(x))

    this.oidcSecurityService.userData$
    .subscribe(({userData}) => this.profileService.userData.next(userData))
  
    this.oidcSecurityService.isAuthenticated$
      .pipe(map(({isAuthenticated}) => isAuthenticated))
      .subscribe(this.onAuthenticationStateChange.bind(this))
  }

  private onAuthenticationStateChange(isAuthenticated: boolean){
    console.log('onAuthenticationStateChange', isAuthenticated)
    this.isAuthenticated = isAuthenticated
    if(isAuthenticated) {
      this.profileService.profileIcon.next(AUTHENTICATED_PROFILE)
    } else {
      this.profileService.profileIcon.next(ANONYMOUS_PROFILE)
    }
  }

}
