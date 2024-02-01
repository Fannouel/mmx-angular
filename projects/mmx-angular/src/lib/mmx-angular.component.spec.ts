import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxAngularComponent } from './mmx-angular.component';

describe('MmxAngularComponent', () => {
  let component: MmxAngularComponent;
  let fixture: ComponentFixture<MmxAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
