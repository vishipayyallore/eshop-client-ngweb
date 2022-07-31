import { JSONValue } from "~common/utilities/json.interface"


export interface EndpointHTTPArguments {
  endpoint: string
  headers?: { [key: string]: string }
  queryParams?: { [key: string]: string }
  body?: JSONValue
}
