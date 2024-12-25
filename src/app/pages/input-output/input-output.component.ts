import { Component } from '@angular/core';
import { MyFormComponent } from '../../components/my-form/my-form.component';
import { MyButtonComponent } from '../../components/my-button/my-button.component';
import { ButtonStylesInterface } from '../../interfaces/button-styles-interface';
import { NewButtonStyles } from '../../interfaces/new-button-styles';

@Component({
  selector: 'app-input-output',
  imports: [MyFormComponent, MyButtonComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
})
export class InputOutputComponent {
  /*
  title = 'test';
  buttonName = {
    name: 'Hello, world!',
  };
  secondInputData = {
    name: 'Hello, world!222',
  };
  changeText() {
    this.buttonName.name = 'New buttonName Text';
    this.secondInputData.name = 'New secondInputData Text';
  }
  helloFromChild(text: string) {
    console.log('Child said: ' + text);
  }
  */

  // HomeWork
  buttonText = 'Default Text';
  buttonStyles: ButtonStylesInterface = {
    color: 'black',
    background: 'white',
    fontSize: '16px',
  };

  changeButtonStyle = (newbuttonStyles: NewButtonStyles) => {
    this.buttonStyles = { ...newbuttonStyles.buttonStyles };
    this.buttonText = newbuttonStyles.text;
  };
}
