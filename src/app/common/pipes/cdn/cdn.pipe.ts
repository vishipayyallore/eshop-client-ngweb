import { Pipe, PipeTransform } from '@angular/core'

import { CdnService } from './cdn.service'


@Pipe({
  name: 'cdn'
})
export class CdnPipe implements PipeTransform {

  constructor(private cdnService: CdnService) {}

  transform(value: string, serviceRequest: string, folder?: string): string {
    const service = this.cdnService.urlByService(serviceRequest)
    const path = folder ? service.configuration[folder] : service.configuration
    return `${service.host}/${path}/${value}`
  }

}
