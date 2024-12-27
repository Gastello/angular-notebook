import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  myUppercase = 'hello, uppercase!';
  myTitlecase = 'hello, titlecase!';
  myLowercase = 'HELLO, Lowercase!';
  myPercent = 99;
  myCurrency = 279.2;
  myDate = new Date();
}