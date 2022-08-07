import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FallbackImageDirective } from './fallback-image.directive'


@NgModule({
  declarations: [
    FallbackImageDirective
  ],
  exports: [
    FallbackImageDirective
  ],
  imports: [
    CommonModule
  ]
})
export class FallbackImageModule { }
