import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonStylesInterface } from '../../interfaces/button-styles-interface';
import { combineLatest } from 'rxjs';
import { NewButtonStyles } from '../../interfaces/new-button-styles';

@Component({
  selector: 'app-my-form',
  imports: [],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {
  @Output() onStylesChange = new EventEmitter<NewButtonStyles>();
  changeStyle(){
    let fontSizeSelectElement: any = document.querySelector(".form-options__font-size");
    let colorSelectElement: any = document.querySelector(".form-options__color");
    let backgroundSelectElement: any = document.querySelector(".form-options__background");
    let textInputElement: any = document.querySelector(".form-options__text-input");
    
    let fontSizeSelectValue:string = fontSizeSelectElement.value;
    let colorSelectValue:string = colorSelectElement.value;
    let backgroundSelectValue:string = backgroundSelectElement.value;
    let textInputValue:string = textInputElement.value;

    this.onStylesChange.emit({
      buttonStyles: {
        color: colorSelectValue,
        background: backgroundSelectValue,
        fontSize: fontSizeSelectValue
      },
      text: textInputValue
    });
  }
}
