import { Component, Input } from '@angular/core';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-my-button',
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})

export class MyButtonComponent {
  @Input() buttonStyles!: Object;
  @Input() buttonText!: string;
}

// Створити 3 види кнопок, які будуть мінятись
// Текст кнопки
// Розмір шрифту
// Колір

// Завдання виконувати через декоратор Class/Style
