import { Component } from '@angular/core';
import { MyFormComponent } from '../../components/my-form/my-form.component';
import { MyButtonComponent } from '../../components/my-button/my-button.component';
import { ButtonStylesInterface } from '../../interfaces/button-styles-interface';
import { NewButtonStyles } from '../../interfaces/new-button-styles';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-07-input-output',
  imports: [ChildComponentComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
})
export class InputOutputComponent {
  textFromParent = 'Hello, Child!';
  textFromChild = '';

  takeTextFromChild(text: string) {
    this.textFromChild = text;
  }
}
