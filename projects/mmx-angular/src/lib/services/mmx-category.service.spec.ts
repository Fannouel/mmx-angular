import { TestBed } from '@angular/core/testing';

import { MmxCategoryService } from './mmx-category.service';

describe('MmxCategoryService', () => {
  let service: MmxCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmxCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
