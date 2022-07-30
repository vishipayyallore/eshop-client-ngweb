import { Injectable } from '@angular/core';

import { config } from '~/config'
import { EndpointService } from '~common/services/endpoint.service'
import { factoryEndpoint } from '~common/services/factory-endpoint'
import { Product } from './product.interface'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  endpoints = Object.fromEntries(config.endpoints.map(factoryEndpoint))

  products: Array<Product> = []

  constructor(private endpointService: EndpointService) { }

  getProducts() {
    return this.endpointService.get(this.endpoints.products.url)
  }
}
