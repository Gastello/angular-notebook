import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export type buttonColor = 'blue' | 'green' | 'red';
export type buttonSize = 'small' | 'large';

@Component({
  selector: 'app-button-test',
  imports: [NgClass],
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.scss',
})
export class ButtonTestComponent {
  @Input() size: buttonSize = 'small';
  @Input() color: buttonColor = 'blue';
}