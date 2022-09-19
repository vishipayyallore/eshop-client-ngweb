import { ComponentFixture, TestBed } from '@angular/core/testing'
import { of } from 'rxjs'

import { statefulMock } from '~common/utilities/stateful.mock'
import { factoryEndpoint } from '~common/services/endpoint/factory-endpoint'
import { AppConfigurationService } from '~common/services/app-configuration/app-configuration.service'
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
import { config } from '~/config'
import { ngMocks } from 'ng-mocks'


ngMocks.globalMock(ProductsService)

describe('ProductsComponent', () => {
  let component: ProductsComponent
  let fixture: ComponentFixture<ProductsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [
        {
          provide: AppConfigurationService,
          useValue: statefulMock({ 
            endpoints: Object.fromEntries(config.endpoints.map(factoryEndpoint)),
            getConfiguration: () => of({}) 
          })
        },
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
