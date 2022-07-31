import { Injectable } from '@angular/core'
import { first } from 'rxjs/internal/operators/first'

import { Endpoints } from '~/config/endpoints'
import { EndpointService } from '~common/services/endpoint/endpoint.service'
import { After } from '~common/utilities/after.decorator'
import { 
  emitPropertyChange, Stateful 
} from '~common/utilities/stateful.decorator'
import { Product } from './product.interface'


export interface ProductsService extends Stateful<Partial<ProductsService>> {}

@Injectable({
  providedIn: 'root'
})
@Stateful<Partial<ProductsService>>()
export class ProductsService {
  products: Array<Product> = []

  constructor(private endpointService: EndpointService) { }

  getProducts() {
    this.endpointService
      .getEndpoint<Array<Product>>({ endpoint: String(Endpoints.Products) })
      .pipe(first())
      .subscribe(this.setProducts.bind(this))
  }

  @After(emitPropertyChange(Endpoints.Products))
  private setProducts(products: Array<Product>) {
    this.products = products
  }
}
