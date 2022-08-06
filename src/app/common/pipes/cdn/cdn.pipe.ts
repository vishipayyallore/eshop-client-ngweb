import { Pipe, PipeTransform } from '@angular/core'

import { CdnService } from './cdn.service'


@Pipe({
  name: 'cdn'
})
export class CdnPipe implements PipeTransform {

  constructor(private cdnService: CdnService) {}


  transform(value: string, ...args: unknown[]): string {
    return this.cdnService.cdnHost + value
  }

}
