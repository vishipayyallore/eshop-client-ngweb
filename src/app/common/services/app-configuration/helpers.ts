import { firstValueFrom, of } from "rxjs"

import { 
	appSettings 
} from "~/config/dev/headless/responses/get-configuration.appSettings"
import { apiDelay } from "~common/utilities/api-delay"
import { environment } from "~/environments/environment"
import { config } from "~/config/dev/local-development/overrides/identity-config"


export const developmentAppInitialize = {
	override: environment.isHeadless, 
	factoryResponse: dummyInitialize
}

export async function dummyInitialize(this: {configuration: any}) {
	this.configuration = await firstValueFrom(of(appSettings).pipe(apiDelay))
	console.log('[AppConfigurationService] configuration', this.configuration)
}

/* only use if desiring to override the identity service but still 
transact over the network -- is commented out by default in the service */
export const developmentGetAuthConfig = {
	override: !environment.production && !environment.isHeadless,
	factoryResponse: () => config
}
