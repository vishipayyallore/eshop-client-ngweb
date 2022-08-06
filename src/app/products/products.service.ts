import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'

import { Endpoints } from '~/config/endpoints'
import { EndpointService } from '~common/services/endpoint/endpoint.service'
import { Product } from './product.interface'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$!: Observable<Array<Product>>

  constructor(private endpointService: EndpointService) { }

  getProducts() {
    this.products$ = this.endpointService
      .getEndpoint<Array<Product>>({ endpoint: String(Endpoints.Products) })
  }

}
