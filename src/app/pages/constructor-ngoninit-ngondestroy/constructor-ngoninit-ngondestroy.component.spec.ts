import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorNgoninitNgondestroyComponent } from './constructor-ngoninit-ngondestroy.component';

describe('ConstructorNgoninitNgondestroyComponent', () => {
  let component: ConstructorNgoninitNgondestroyComponent;
  let fixture: ComponentFixture<ConstructorNgoninitNgondestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructorNgoninitNgondestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorNgoninitNgondestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
