import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgSwitchComponent } from './directive-ng-switch.component';

describe('DirectiveNgSwitchComponent', () => {
  let component: DirectiveNgSwitchComponent;
  let fixture: ComponentFixture<DirectiveNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
