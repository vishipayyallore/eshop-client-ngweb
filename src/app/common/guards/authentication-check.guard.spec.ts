import { TestBed } from '@angular/core/testing'
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client'
import { ngMocks } from 'ng-mocks';

import { AuthenticationCheckGuard } from './authentication-check.guard'


ngMocks.globalMock(AutoLoginPartialRoutesGuard)

describe('AuthenticationCheckGuard', () => {
  let guard: AuthenticationCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    guard = TestBed.inject(AuthenticationCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
