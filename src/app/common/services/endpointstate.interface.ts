import { Subscription } from "rxjs";
import { Subject } from "rxjs/internal/Subject";

export interface EndpointState {
  response: Subject<any>;
  subscription: Subscription;
}