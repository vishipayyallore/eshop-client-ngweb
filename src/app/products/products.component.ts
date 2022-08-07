import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { first, map /*, delay */ } from 'rxjs/operators'

import { environment } from '~/environments/environment'
import { LogMethods } from '~common/utilities/log-methods.decorator'
import { AppConfigurationService } from '~common/services/app-configuration/app-configuration.service'
import { Product } from './product.interface'
import { ProductsService } from './products.service'
import { Endpoints } from '~/config/endpoints'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
@LogMethods({ when: !environment.production })
export class ProductsComponent implements OnInit {
  products$!: Observable<Array<Product>>
  hasProductsConfig$?: Observable<boolean>
  private productServiceName = this.appConfigService
    .endpoints[Endpoints.ProductsConfiguration].meta?.configuration?.serviceName

  constructor(
    private productsService: ProductsService,
    private appConfigService: AppConfigurationService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
    this.products$ = this.productsService.products$

    this.hasProductsConfig$ = this.appConfigService.state$.pipe(
      first(state => this.productServiceName in state.configuration),
      map(_state => true) /*, delay(4000) */)
  }
}
