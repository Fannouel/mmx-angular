import { TestBed } from '@angular/core/testing';

import { MmxAngularService } from './mmx-angular.service';

describe('MmxAngularService', () => {
  let service: MmxAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmxAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
