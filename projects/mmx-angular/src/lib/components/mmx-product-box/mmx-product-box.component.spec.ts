import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxProductBoxComponent } from './mmx-product-box.component';

describe('MmxProductBoxComponent', () => {
  let component: MmxProductBoxComponent;
  let fixture: ComponentFixture<MmxProductBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxProductBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxProductBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
