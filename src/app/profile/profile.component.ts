import { Component } from '@angular/core'

import { AuthService } from '~common/services/auth/auth.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(public authService: AuthService) { }

}
