import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  imports: [FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss',
})
export class MyFormComponent {
  @Input() changeButtonStyle!: Function;

  fontSizeSelectValue: string = "16px";
  colorSelectValue: string = "black";
  backgroundSelectValue: string = "white";
  textInputValue: string = "Default text";
  buttonClicked() {
    this.changeButtonStyle({
      buttonStyles: {
        color: this.colorSelectValue,
        background: this.backgroundSelectValue,
        fontSize: this.fontSizeSelectValue,
      },
      text: this.textInputValue,
    });
  }
}
