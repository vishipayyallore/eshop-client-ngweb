import { HTTPRequestType } from "~common/services/endpoint/http-request-type"
import { BaseConfig } from "./config.interface"
import { Endpoints } from "./endpoints"


export const config: BaseConfig = {
  appName: 'eshop-admin-ngweb',
  apiHost: 'https://productsapiv1.eastus.azurecontainer.io',
  cdnHost: 'https://stforeshop.blob.core.windows.net/productsimages/',
  endpoints: [
    {
      name: Endpoints.Products,
      type: HTTPRequestType.GET,
      url: '/api/v1/products',
      description: 'Retrieves all the products. Expensive call )'
    },
  ]
}