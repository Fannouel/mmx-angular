import { TestBed } from '@angular/core/testing';

import { MmxStaticConfigService } from './mmx-static-config.service';

describe('MmxStaticConfigService', () => {
  let service: MmxStaticConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmxStaticConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
