import { Environment } from "~/config/environment.interface"
import { Environments } from "~/config/environments.enum"


export const environment : Environment = {
  env: Environments.Development,
  production: false,
  isHeadless: true
}
