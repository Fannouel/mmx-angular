import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxSelectLocaleComponent } from './mmx-select-locale.component';

describe('MmxSelectLocaleComponent', () => {
  let component: MmxSelectLocaleComponent;
  let fixture: ComponentFixture<MmxSelectLocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxSelectLocaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxSelectLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
