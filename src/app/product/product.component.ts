import { Component, Input, OnInit } from '@angular/core'

import { environment } from '~/environments/environment'
import { Dummyable } from '~common/utilities/dummyable.decorator'
import { Product } from './product.interface'
import { mockProduct } from './product.mock'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product?: Product

  constructor() { }

  @Dummyable({
    override: environment.isHeadless,
    factoryResponse(this: ProductComponent) {this.product = mockProduct}
  })
  ngOnInit(): void {
    //  TODO - remove 18:3  error  Lifecycle methods should not be empty  @angular-eslint/no-empty-lifecycle-method
    true
  }

}
