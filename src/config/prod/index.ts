import type { Config } from "../config.interface"
import { Environments } from "../environments.enum"
import { config as base } from "../base"


export const config: Config  = {
  ...base,
  env: Environments.Production
}
