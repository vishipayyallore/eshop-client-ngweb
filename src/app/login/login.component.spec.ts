import { ComponentFixture, TestBed } from '@angular/core/testing'
import { OidcSecurityService } from 'angular-auth-oidc-client'
import { of } from 'rxjs'
import { AuthService } from '~common/services/auth/auth.service'

import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ 
        { provide: AuthService, useValue: { loginResponse$: of() } },
        {provide: OidcSecurityService, useValue: {}}
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
