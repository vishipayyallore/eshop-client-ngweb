import type { JSONValue } from "~common/utilities/json.interface"
import { Environments } from "./environments.enum"


export type Environment = BaseEnvironment & {
  production?: boolean
  isHeadless?: boolean
}

export interface BaseEnvironment {
  env: Environments
  [key: string]: JSONValue
}

