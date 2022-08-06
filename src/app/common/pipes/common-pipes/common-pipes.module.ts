import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdnPipe } from '../cdn/cdn.pipe'


@NgModule({
  declarations: [
    CdnPipe
  ],
  exports: [
    CdnPipe
  ],
  providers: [
    CdnPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CommonPipesModule { }
