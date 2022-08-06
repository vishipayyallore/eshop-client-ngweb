import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdnPipe } from './cdn.pipe';



@NgModule({
  declarations: [ CdnPipe ],
  exports: [ CdnPipe ],
  imports: [
    CommonModule
  ]
})
export class CdnModule { }
