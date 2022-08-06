import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductComponent } from './product.component'
import { CommonPipesModule } from '~common/pipes/common-pipes/common-pipes.module'


@NgModule({
  declarations: [
    ProductComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    CommonPipesModule
  ]
})
export class ProductModule { }
