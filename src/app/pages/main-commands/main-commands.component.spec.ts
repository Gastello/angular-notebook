import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommandsComponent } from './main-commands.component';

describe('MainCommandsComponent', () => {
  let component: MainCommandsComponent;
  let fixture: ComponentFixture<MainCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCommandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
