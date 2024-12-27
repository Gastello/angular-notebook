import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonStylesInterface } from '../../interfaces/button-styles-interface';
import { NewButtonStyles } from '../../interfaces/new-button-styles';
// Створити 3 види кнопок, які будуть мінятись
// Текст кнопки
// Розмір шрифту
// Колір

// Завдання виконувати через декоратор Class/Style
@Component({
  selector: 'app-my-button',
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss',
})

export class MyButtonComponent {
  buttonText = 'Default Text';
  buttonStyles: ButtonStylesInterface = {
    color: 'black',
    background: 'white',
    fontSize: '16px',
  };
  changeStyle = (newStyles: NewButtonStyles) => {
    this.buttonStyles = { ...newStyles.buttonStyles };
    this.buttonText = newStyles.text;
  };
  @Output() passButtonChangeFunction = new EventEmitter<Function>();
  ngOnInit() {
    this.passButtonChangeFunction.emit(this.changeStyle);
  }
}