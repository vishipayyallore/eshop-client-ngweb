import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from 'angular-auth-oidc-client'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { LoginModule } from './login/login.module'
import { config as oidcConfig } from './oidc.config'
import { AuthService } from './auth.service';


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
    ProductModule
  ],
  providers: [
    AuthService.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
