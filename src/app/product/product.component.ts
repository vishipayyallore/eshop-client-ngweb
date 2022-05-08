import { Component, Input, OnInit } from '@angular/core';
import { environment } from '~/environments/environment';
import { Dummyable } from '../common/utilities/dummyable.decorator';
import { Product } from './product.interface';
import { mockProduct } from './product.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product?: Product;

  constructor() { }

  @Dummyable({
    override: environment.isHeadless,
    factoryResponse: function (this: ProductComponent) {
      this.product = mockProduct;
    }
  })
  ngOnInit(): void {

    // TODO: Remove this
    true;
  }

}
