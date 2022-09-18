import { HTTPRequestType } from "~common/services/endpoint/http-request-type"
import { BaseConfig } from "./config.interface"
import { Endpoints } from "./endpoints"


export const config: BaseConfig = {
  appName: 'eshop-admin-ngweb',
  apiHost: 'https://productsapiv1.eastus.azurecontainer.io',
  endpoints: [
    {
      name: Endpoints.Configuration,
      type: HTTPRequestType.GET,
      url: 'https://func-configuration.azurewebsites.net/api/get-configuration',
      description: 'Get the global app configuration'
    },
    {
      name: Endpoints.IdentityConfiguration,
      type: HTTPRequestType.GET,
      url: 'https://func-configuration.azurewebsites.net/api/get-configuration',
      description: 'Get the global app configuration',
      meta: { configuration: { serviceName: 'identity' }},
      factroyQueryParams: _partial => ({ identity: 'true' })
    },
    {
      name: Endpoints.ProductsConfiguration,
      type: HTTPRequestType.GET,
      url: 'https://func-configuration.azurewebsites.net/api/get-configuration',
      description: 'Get the global app configuration',
      meta: { configuration: { serviceName: 'products' }},
      factroyQueryParams: _partial => ({ products: 'true' })
    },
    {
      name: Endpoints.Products,
      type: HTTPRequestType.GET,
      url: '/api/v1/products',
      description: 'Retrieves all the products. Expensive call )'
    },
  ]
}