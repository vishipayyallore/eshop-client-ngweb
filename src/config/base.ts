import { HTTPRequestType } from "~/app/common/services/http-request-type.enum"
import { BaseConfig } from "./config.interface"


export const config: BaseConfig = {
  appName: 'eshop-admin-ngweb',
  apiHost: 'https://productsapiv1.eastus.azurecontainer.io',
  cdnHost: 'http://eshopcdn.eastus.azurecontainer.io',
  endpoints: [
    {
      name: 'products',
      type: HTTPRequestType.GET,
      url: '/api/v1/products',
      description: 'Retrieves all the products. Expensive call ;)'
    },
  ]
}