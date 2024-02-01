import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxFaqitemComponent } from './mmx-faqitem.component';

describe('MmxFaqitemComponent', () => {
  let component: MmxFaqitemComponent;
  let fixture: ComponentFixture<MmxFaqitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxFaqitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxFaqitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
