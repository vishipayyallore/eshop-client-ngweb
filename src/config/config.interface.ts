import type { Environments } from "./environments.enum"
import type { JSONValue } from "~common/utilities/json.interface"


export type Config = BaseConfig & ExtendedConfig

export interface ExtendedConfig {
  env: Environments
}

export type BaseConfig = Configuration & {  [key: string]: JSONValue | Array<JSONValue>}

export interface Configuration {
  appName: string
  apiHost: string
  endpoints: Array<{[key: string]: JSONValue | Array<JSONValue>}>
}
