import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkDropdownComponent } from './home-work-dropdown.component';

describe('HomeWorkDropdownComponent', () => {
  let component: HomeWorkDropdownComponent;
  let fixture: ComponentFixture<HomeWorkDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWorkDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWorkDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
