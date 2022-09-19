import { Component, ElementRef, ViewChild } from '@angular/core'
import { map, Observable, shareReplay, tap } from 'rxjs'

import { AuthService } from '~common/services/auth/auth.service'
import { DialogElement } from '~common/utilities/dialog-element.interface'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  authenticationState$: Observable<boolean> = 
    this.authService.loginResponse$.pipe(
      map(({isAuthenticated}) => isAuthenticated), 
      tap(this.toggleLogoutDialog.bind(this)),
      shareReplay(1))

  @ViewChild('unauthenticated', {static: true}) 
  unauthenticatedElRef!: ElementRef<DialogElement>

  constructor(public authService: AuthService) { }

  private toggleLogoutDialog(isAuthenticated: boolean) {
    if(isAuthenticated) {
      this.unauthenticatedElRef.nativeElement.close()
    } else {
      this.unauthenticatedElRef.nativeElement.showModal()
    }
  }
}
