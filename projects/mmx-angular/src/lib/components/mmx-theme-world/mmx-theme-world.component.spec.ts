import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxThemeWorldComponent } from './mmx-theme-world.component';

describe('MmxThemeWorldComponent', () => {
  let component: MmxThemeWorldComponent;
  let fixture: ComponentFixture<MmxThemeWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxThemeWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxThemeWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
