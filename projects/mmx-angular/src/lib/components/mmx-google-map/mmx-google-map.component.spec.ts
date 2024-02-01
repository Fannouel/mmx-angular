import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxGoogleMapComponent } from './mmx-google-map.component';

describe('MmxGoogleMapComponent', () => {
  let component: MmxGoogleMapComponent;
  let fixture: ComponentFixture<MmxGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxGoogleMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
