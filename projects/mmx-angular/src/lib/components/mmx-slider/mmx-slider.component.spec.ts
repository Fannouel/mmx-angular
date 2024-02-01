import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxSliderComponent } from './mmx-slider.component';

describe('MmxSliderComponent', () => {
  let component: MmxSliderComponent;
  let fixture: ComponentFixture<MmxSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
