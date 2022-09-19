import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LandingComponent } from './landing.component'
import { LandingRoutingModule } from './landing-routing.module'
import { ProfileModule } from '@vishipayyallore/design-system'


@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingComponent
  ],
  exports: [
    LandingComponent
  ],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
