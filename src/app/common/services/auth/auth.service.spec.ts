import { TestBed } from '@angular/core/testing'
import { OidcSecurityService } from 'angular-auth-oidc-client'

import { AuthService } from './auth.service'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: OidcSecurityService, useValue: {}}]
    })
    service = TestBed.inject(AuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
