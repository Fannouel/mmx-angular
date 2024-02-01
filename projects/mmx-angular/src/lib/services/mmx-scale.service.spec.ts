import { TestBed } from '@angular/core/testing';

import { MmxScaleService } from './mmx-scale.service';

describe('MmxScaleService', () => {
  let service: MmxScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmxScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
