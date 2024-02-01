import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxScaleTabsComponent } from './mmx-scale-tabs.component';

describe('MmxScaleTabsComponent', () => {
  let component: MmxScaleTabsComponent;
  let fixture: ComponentFixture<MmxScaleTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxScaleTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxScaleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
