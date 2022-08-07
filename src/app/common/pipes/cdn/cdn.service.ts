import { Injectable } from '@angular/core'

import { AppConfigurationService } from '~common/services/app-configuration/app-configuration.service'


@Injectable({
  providedIn: 'root'
})
export class CdnService {
  services: { [key: string]: string } = {};

  constructor(private appConfig: AppConfigurationService) {  }

  urlByService(serviceRequest: string) {
    const host = this.appConfig.configuration.cdnHost
    const configuration = this.appConfig.configuration[serviceRequest]
    return { host, configuration }
  }

}
