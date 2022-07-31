import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { ChangeDetecting } from '~common/utilities/change-detecting.decorator'
import { Product } from './product.interface'
import { ProductsService } from './products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  subscriptions = new Subscription()
  products: Array<Product> = []

  constructor(
    private cd: ChangeDetectorRef,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.productsService.getProducts().subscribe(this.updateProducts.bind(this))
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  @ChangeDetecting()
  updateProducts(products: Array<Product>) {
    this.products = products
  }

}
