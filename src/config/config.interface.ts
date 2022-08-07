import type { Environments } from "./environments.enum"
import { Endpoint } from "~common/services/endpoint/endpoint.interface"


export interface Config extends BaseConfig {
  env: Environments
}

export interface BaseConfig {
  appName: string
  apiHost: string
  endpoints: Array<Endpoint>
}
