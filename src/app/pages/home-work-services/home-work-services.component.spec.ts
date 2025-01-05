import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkServicesComponent } from './home-work-services.component';

describe('HomeWorkServicesComponent', () => {
  let component: HomeWorkServicesComponent;
  let fixture: ComponentFixture<HomeWorkServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWorkServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWorkServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
