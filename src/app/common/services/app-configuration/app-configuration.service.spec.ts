import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppConfigurationService } from './app-configuration.service';

describe('AppConfigurationService', () => {
  let service: AppConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AppConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
