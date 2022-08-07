import { TestBed } from '@angular/core/testing';
import { AppConfigurationService } from '../../services/app-configuration/app-configuration.service';

import { CdnService } from './cdn.service';

describe('CdnService', () => {
  let service: CdnService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AppConfigurationService, useValue: {}}
      ]
    });
    service = TestBed.inject(CdnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
