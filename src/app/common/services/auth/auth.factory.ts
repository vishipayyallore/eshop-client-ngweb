import { StsConfigStaticLoader } from "angular-auth-oidc-client"

import { 
  AppConfigurationService 
} from "~common/services/app-configuration/app-configuration.service"


export const authFactory = (appConfig: AppConfigurationService) => {
  const config = appConfig.getAuthConfig()
  return new StsConfigStaticLoader(config)
}
