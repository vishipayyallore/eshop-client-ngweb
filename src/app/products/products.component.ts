import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/internal/Subscription'
import { first /*, delay */ } from 'rxjs/operators'

import { environment } from '~/environments/environment'
import { ChangeDetecting } from '~common/utilities/change-detecting.decorator'
import { LogMethods } from '~common/utilities/log-methods.decorator'
import { AppConfigurationService } from '~common/services/app-configuration/app-configuration.service'
import { Product } from './product.interface'
import { ProductsService } from './products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
@LogMethods({ when: !environment.production })
export class ProductsComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription()
  products: Array<Product> = []
  hasProductsConfig?: boolean

  constructor(
    private cd: ChangeDetectorRef,
    private productsService: ProductsService,
    private appConfigService: AppConfigurationService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
    this.subscriptions.add(
      this.productsService.state$.subscribe(this.onProductsChange.bind(this))
    )
    this.appConfigService.state$
      .pipe(
        first(state => 'products' in state.configuration) /*, 
        delay(4000) */)
      .subscribe(_state => this.toggleHasProductsConfig(true))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  private onProductsChange(state: Partial<ProductsService>) {
    if(Array.isArray(state.products)) this.updateProducts(state.products)
  }

  @ChangeDetecting()
  private updateProducts(products: Array<Product>) {
    this.products = products
  }

  @ChangeDetecting()
  private toggleHasProductsConfig(value = !this.hasProductsConfig) {
    this.hasProductsConfig = value
  }

}
