import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgForComponent } from './directive-ng-for.component';

describe('DirectiveNgForComponent', () => {
  let component: DirectiveNgForComponent;
  let fixture: ComponentFixture<DirectiveNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
