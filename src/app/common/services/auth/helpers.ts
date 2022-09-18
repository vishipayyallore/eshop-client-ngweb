import { Observable, of, shareReplay } from "rxjs"

import { loginResponse } from "~/config/dev/headless/responses/check-auth"
import { environment } from "~/environments/environment"


export const developmentInitialize = { 
  override: environment.isHeadless, 
  factoryResponse(this: {loginResponse$: Observable<any>}) {
    this.loginResponse$ = of(loginResponse).pipe(shareReplay(1))
  }
}