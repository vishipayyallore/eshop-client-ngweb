import { ChangeDetectorRef, Component, OnInit } from '@angular/core'

import { ChangeDetecting } from '~common/utilities/change-detecting.decorator'
import { Product } from './product.interface'
import { ProductsService } from './products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = []

  constructor(
    private cd: ChangeDetectorRef,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.updateProducts(products)
    })
  }

  @ChangeDetecting()
  updateProducts(products: Array<Product>) {
    this.products = products
  }

}
