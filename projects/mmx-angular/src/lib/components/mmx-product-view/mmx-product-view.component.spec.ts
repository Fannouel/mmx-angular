import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxProductViewComponent } from './mmx-product-view.component';

describe('MmxProductViewComponent', () => {
  let component: MmxProductViewComponent;
  let fixture: ComponentFixture<MmxProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxProductViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
