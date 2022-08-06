import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductComponent } from './product.component'
import { CdnModule } from '../common/pipes/cdn/cdn.module'
import { FallbackImageModule } from '../common/directives/fallback-image/fallback-image.module'


@NgModule({
  declarations: [
    ProductComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    CdnModule,
    FallbackImageModule
  ]
})
export class ProductModule { }
