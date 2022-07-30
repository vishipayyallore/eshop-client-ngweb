import {config as base } from './base';
import { config as dev } from './development';
import { config as localDev } from './headless';
import { config as prod } from './prod';
import { environment } from '~/environments/environment';

let environmentConfig
if(environment.production) environmentConfig = prod
else if(environment.isHeadless) environmentConfig = localDev
else environmentConfig = dev


export const config = {
  ...base,
  ...environmentConfig
}