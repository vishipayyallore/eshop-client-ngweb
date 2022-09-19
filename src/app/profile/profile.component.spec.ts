import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ngMocks } from 'ng-mocks'

import { AuthService } from '~common/services/auth/auth.service'
import { ProfileComponent } from './profile.component'

ngMocks.globalMock(AuthService)

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
