import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AuthModule } from 'angular-auth-oidc-client'

import { AuthService } from '~common/services/auth/auth.service'
import { AppConfigurationService } from '~common/services/app-configuration/app-configuration.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductModule } from './product/product.module'
import { LoginModule } from './login/login.module'
import { config as oidcConfig } from './oidc.config';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot(oidcConfig),
    LoginModule,
    ProductModule,
  ],
  providers: [
    AppConfigurationService.forRoot(),
    AuthService.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
