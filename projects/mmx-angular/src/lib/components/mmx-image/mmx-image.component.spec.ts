import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxImageComponent } from './mmx-image.component';

describe('MmxImageComponent', () => {
  let component: MmxImageComponent;
  let fixture: ComponentFixture<MmxImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
