import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkButtonComponent } from './home-work-button.component';

describe('HomeWorkButtonComponent', () => {
  let component: HomeWorkButtonComponent;
  let fixture: ComponentFixture<HomeWorkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWorkButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWorkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
