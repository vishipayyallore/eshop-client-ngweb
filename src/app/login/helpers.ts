import { map, Observable, startWith, Subject } from "rxjs"
import { environment } from "~/environments/environment"
import { Actions } from "./actions.enum";


export const developmentToggleSignIn = {
  override: environment.isHeadless,
  factoryResponse(this: {action: Subject<null>}) {
    this.action.next(null);
  }
}

export const developmentSetupAction = {
  override: environment.isHeadless,
  factoryResponse(this: {action$: Observable<Actions>, action: Subject<null>}) {
    this.action = new Subject()
    this.action$ = this.action.pipe(
      map((_val, index) => index % 2? Actions.Logout : Actions.Login),
      startWith(Actions.Login)
    )
  }
}
