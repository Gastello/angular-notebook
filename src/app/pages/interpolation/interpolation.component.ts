import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss',
})
export class InterpolationComponent {
  myText: string = 'Hello, world!';
  myPlaceholder: string = 'Text from "myPlaceholder" variable'
}
