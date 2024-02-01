import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxProductSliderComponent } from './mmx-product-slider.component';

describe('MmxProductSliderComponent', () => {
  let component: MmxProductSliderComponent;
  let fixture: ComponentFixture<MmxProductSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxProductSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxProductSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
