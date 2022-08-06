import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { config } from '~/config'
import { environment } from '~/environments/environment'
import { AuthService } from '~common/services/auth/auth.service'
import { CdnService } from '~common/pipes/cdn/cdn.service'
import { ChangeDetecting } from '~common/utilities/change-detecting.decorator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false
  title = 'eshop-client-ngweb'
  environment = environment

  subscriptions = new Subscription()

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private cdnService: CdnService
  ) {  }

  ngOnInit() {
    this.subscriptions.add(this.authService.state$
      .subscribe(this.onAuthStateChange.bind(this)))

    // TODO migrate this to after getting configuration from API gateway
    this.cdnService.cdnHost = config.cdnHost
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  private onAuthStateChange(state: Partial<AuthService>) {
    if ('isAuthenticated' in state) {
      this.setProperty('isAuthenticated', state.isAuthenticated)
    }
  }

  @ChangeDetecting()
  private setProperty(property: keyof AppComponent, value: unknown) {
    Object.assign(this, { [property]: value })
  }
}

console.log(environment)
