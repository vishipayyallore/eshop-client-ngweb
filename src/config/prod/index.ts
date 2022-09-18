import type { Config } from "~config/config.interface"
import { Environments } from "~config/environments.enum"
import { config as base } from "~config/base"


export const config: Config  = {
  ...base,
  env: Environments.Production
}
