import { Component } from '@angular/core';
import { MyFormComponent } from '../../components/my-form/my-form.component';
import { MyButtonComponent } from '../../components/my-button/my-button.component';
import { buttonColor, ButtonTestComponent } from '../../components/button-test/button-test.component';

@Component({
  selector: 'app-home-work-1-button',
  imports: [MyFormComponent, MyButtonComponent, ButtonTestComponent],
  templateUrl: './home-work-button.component.html',
  styleUrl: './home-work-button.component.scss',
})
export class HomeWorkButtonComponent {
  changeButtonStyle: Function = () => {};
  passedButtonChangeFunction(functionCallback: Function) {
    this.changeButtonStyle = functionCallback;
  }

  colorFromHome: buttonColor = 'red';
  changeColor() {
    this.colorFromHome = 'blue';
  }
}
