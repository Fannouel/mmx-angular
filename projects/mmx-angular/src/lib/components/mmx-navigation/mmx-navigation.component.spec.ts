import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxNavigationComponent } from './mmx-navigation.component';

describe('MmxNavigationComponent', () => {
  let component: MmxNavigationComponent;
  let fixture: ComponentFixture<MmxNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
