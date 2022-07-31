import { ReplaySubject } from "rxjs";

export function statefulMock(o:any = {}) {
  o.state = new ReplaySubject()
  o.state$ = o.state.asObservable()
  return o
}