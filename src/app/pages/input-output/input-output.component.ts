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
export class InputOutputComponent {}
