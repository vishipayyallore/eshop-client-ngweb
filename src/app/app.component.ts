import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from '~/environments/environment';
import { AuthService } from './auth.service';
import { ChangeDetecting } from './common/utilities/change-detecting.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  title = 'eshop-client-ngweb';
  environment = environment;

  subscriptions = new Subscription();

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) {
    (window as any).component = this
  }

  ngOnInit() {
    this.subscriptions.add(this.authService.state$
      .subscribe(this.onAuthStateChange.bind(this)))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  private onAuthStateChange(state: Partial<AuthService>) {
    console.log('onAuthStateChange')
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
