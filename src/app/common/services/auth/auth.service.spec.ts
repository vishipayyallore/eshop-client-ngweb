import { TestBed } from '@angular/core/testing'
import { MockProvider, ngMocks } from 'ng-mocks'
import { OidcSecurityService } from 'angular-auth-oidc-client'
import { ProfileService } from '@vishipayyallore/design-system'

import { 
  AppConfigurationService 
} from '~common/services/app-configuration/app-configuration.service'
import { AuthService } from './auth.service'


ngMocks.globalMock(ProfileService)
ngMocks.globalMock(AppConfigurationService)

describe('AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockProvider(OidcSecurityService),
      ]
    })
    service = TestBed.inject(AuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
