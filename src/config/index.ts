import { config as dev } from './dev'
import { config as prod } from './prod'
import { environment } from '~/environments/environment'


export const config = [prod, dev]
  .find(config => config.env === environment.env) ?? prod
