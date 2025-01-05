import { Component } from '@angular/core';
import { ButtonTestComponent } from "../../components/button-test/button-test.component";

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
