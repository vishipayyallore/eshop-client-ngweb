import { ComponentFixture, TestBed } from '@angular/core/testing'
import { of } from 'rxjs'

import { statefulMock } from '~common/utilities/stateful.mock'
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'

describe('ProductsComponent', () => {
  let component: ProductsComponent
  let fixture: ComponentFixture<ProductsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [
        {
          provide: ProductsService, 
          useValue: statefulMock({
            getProducts: () => of()
          })
        }
      ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(ProductsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
