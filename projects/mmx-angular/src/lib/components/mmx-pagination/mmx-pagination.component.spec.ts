import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxPaginationComponent } from './mmx-pagination.component';

describe('MmxPaginationComponent', () => {
  let component: MmxPaginationComponent;
  let fixture: ComponentFixture<MmxPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
