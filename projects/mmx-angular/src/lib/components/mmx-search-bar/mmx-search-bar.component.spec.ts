import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmxSearchBarComponent } from './mmx-search-bar.component';

describe('MmxSearchBarComponent', () => {
  let component: MmxSearchBarComponent;
  let fixture: ComponentFixture<MmxSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmxSearchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmxSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
