import { HTTPRequestType } from "~/app/common/services/endpoint/http-request-type"
import { Endpoints } from "~/config/endpoints"
import type { Config } from "~config/config.interface"

/*
    Description: 
        In the future, apiHost is the only thing we will change once API Gateway (Ocelot/Enoy).
        For now we have to change the endpoints as well.
*/
export const config: Partial<Config> = {
    // apiHost: 'https://localhost:7265',
    // endpoints: [
    //     {
    //         name: Endpoints.Configuration,
    //         type: HTTPRequestType.GET,
    //         url: 'https://localhost:49153/api/get-configuration',
    //         description: 'Get the global app configuration'
    //     },
    //     {
    //         name: Endpoints.IdentityConfiguration,
    //         type: HTTPRequestType.GET,
    //         url: 'https://localhost:49153/api/get-configuration',
    //         description: 'Get the global app configuration',
    //         meta: { configuration: { serviceName: 'identity' } },
    //         factroyQueryParams: _partial => ({ identity: 'true' })
    //     },
    //     {
    //         name: Endpoints.ProductsConfiguration,
    //         type: HTTPRequestType.GET,
    //         url: 'https://localhost:49153/api/get-configuration',
    //         description: 'Get the global app configuration',
    //         meta: { configuration: { serviceName: 'products' } },
    //         factroyQueryParams: _partial => ({ products: 'true' })
    //     },
    //     {
    //         name: Endpoints.Products,
    //         type: HTTPRequestType.GET,
    //         url: '/api/v1/products',
    //         description: 'Retrieves all the products. Expensive call )'
    //     },
    // ]
}