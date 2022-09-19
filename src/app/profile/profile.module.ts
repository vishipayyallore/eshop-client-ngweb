import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { 
  ProfileModule as EshopProfileModule 
} from '@vishipayyallore/design-system'

import { ProfileComponent } from './profile.component'
import { ProfileRoutingModule } from './profile-routing.module'


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    EshopProfileModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
