import { Endpoints } from "~/config/endpoints"
import type { JSONValue } from "~common/utilities/json.interface"
import { HTTPRequestType } from "./http-request-type"


export interface Endpoint {
  name: Endpoints
  type: HTTPRequestType
  url: string | ((...args:any[]) => string)
  factoryHeaders?: ((partial:{ [key: string]: string }) => { [key: string]: string })
  factroyQueryParams?: ((partial:{ [key: string]: string }) => { [key: string]: string })
  factoryBody?: ((partial:JSONValue) => JSONValue)
  value?: JSONValue
  description?: string
}
