import type { Endpoint } from "./endpoint.interface"
import { JSONValue } from "~common/utilities/json.interface"


export const factoryEndpoint = (base:Endpoint) => {
  return [base.name, {
    value: undefined, 
    factoryHeaders: (x:{ [key: string]: string }) => x,
    factoryQueryParams: (x:{ [key: string]: string }) => x,
    factoryBody: (x:JSONValue) => x,
    ...base
  }]
}

