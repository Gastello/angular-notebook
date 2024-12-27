import { Component } from '@angular/core';
import { MyButtonComponent } from '../../components/my-button/my-button.component';
import {
  buttonColor,
  ButtonTestComponent,
} from '../../components/button-test/button-test.component';

@Component({
  selector: 'app-home',
  imports: [MyButtonComponent, ButtonTestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
