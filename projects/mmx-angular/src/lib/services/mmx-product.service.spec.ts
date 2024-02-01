import { TestBed } from '@angular/core/testing';

import { MmxProductService } from './mmx-product.service';

describe('MmxProductService', () => {
  let service: MmxProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmxProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
