import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { environment } from '~/environments/environment'
import { ChangeDetecting } from '~common/utilities/change-detecting.decorator'
import { LogMethods } from '~common/utilities/log-methods.decorator'
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

  constructor(
    private cd: ChangeDetectorRef,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
    this.subscriptions.add(
      this.productsService.state$.subscribe(this.onProductsChange.bind(this))
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  private onProductsChange(state: Partial<ProductsService>) {
    if(Array.isArray(state.products)) this.updateProducts(state.products)
  }

  @ChangeDetecting()
  updateProducts(products: Array<Product>) {
    this.products = products
  }

}
