import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { HeaderModule, FooterModule, ProfileModule } from '@vishipayyallore/design-system'

import { AuthService } from '~common/services/auth/auth.service'
import { 
  AppConfigurationService 
} from '~common/services/app-configuration/app-configuration.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductModule } from './product/product.module'
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthService.getAuthModuleForRoot(),
    LoginModule,
    ProductModule,
    HeaderModule,
    FooterModule,
    ProfileModule
  ],
  providers: [
    AppConfigurationService.forRoot(),
    AuthService.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
