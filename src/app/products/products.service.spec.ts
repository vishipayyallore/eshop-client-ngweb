import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs'

import { ProductsService } from './products.service'
import { EndpointService } from '~common/services/endpoint/endpoint.service'
import { ngMocks } from 'ng-mocks'


ngMocks.globalMock(EndpointService)

describe('ProductsService', () => {
  let service: ProductsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(ProductsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
