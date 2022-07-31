import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductModule } from '~/app/product/product.module'
import { ProductsComponent } from './products.component'
import { ProductsRoutingModule } from './products-routing.module'


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
export class ProductsModule { }
