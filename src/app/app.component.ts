import { Component, OnInit } from '@angular/core'
import { map, Observable, shareReplay, Subscription } from 'rxjs'

import { environment } from '~/environments/environment'
import { AuthService } from '~common/services/auth/auth.service'
import { LogMethods } from '~common/utilities/log-methods.decorator'
import { LoginResponse } from 'angular-auth-oidc-client/lib/login/login-response'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@LogMethods({when: !environment.production})
export class AppComponent implements OnInit {
  title = 'eshop-client-ngweb'
  environment = environment
  isAuthenticated$?: Observable<boolean>

  subscriptions = new Subscription()

  constructor(private authService: AuthService) {  }

  ngOnInit() {
    this.isAuthenticated$ = this.authService.loginResponse$.pipe(
      map((loginResponse: LoginResponse) => loginResponse.isAuthenticated))
  }

}

console.log(environment)
