import type { Config } from "~config/config.interface"
import { Environments } from "~config/environments.enum"
import { environment } from "~/environments/environment"
import { config as base } from "~config/base"
import { config as headless } from "./headless"
import { config as localDevelopment } from "./local-development"


export const config: Config = {
  ...base,
  env: Environments.Development,
  ...(environment.isHeadless ? headless : localDevelopment),
}
