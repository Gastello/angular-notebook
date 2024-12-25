import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ButtonComponent {
  // Classic 1
  // Назва property:тип = дефолтне значення
  @Input() consoleData: any = { name: 'Default text' };
  @Output() customButtonEvent = new EventEmitter<string>();

  // Input, який переобразує значення в signals
  secondInputValue = input<any>({ name: 'Default text' });

  onButtonClicked() {
    console.log('Clicked');
    this.customButtonEvent.emit('Text for Parent');
  }
}
