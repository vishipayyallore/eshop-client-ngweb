import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs'

import { ProductsService } from './products.service'
import { EndpointService } from '~common/services/endpoint/endpoint.service'


describe('ProductsService', () => {
  let service: ProductsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provides: EndpointService, useValue: {get: () => of()}}],
    })
    service = TestBed.inject(ProductsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
