import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxSocialComponent } from './mmx-social.component';

describe('MmxSocialComponent', () => {
  let component: MmxSocialComponent;
  let fixture: ComponentFixture<MmxSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
