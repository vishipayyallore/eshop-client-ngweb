import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductModule } from '~/app/product/product.module'
import { ProductsComponent } from './products.component'
import { ProductsRoutingModule } from './products-routing.module'
import { Endpoints } from '~/config/endpoints'
import { AppConfigurationService } from '~common/services/app-configuration/app-configuration.service'


@NgModule({
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductModule
  ]
})
export class ProductsModule {
  constructor(private appConfig: AppConfigurationService) {
    this.appConfig.getConfiguration(Endpoints.ProductsConfiguration)
  }
}
