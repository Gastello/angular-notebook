import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-observable-child',
  imports: [],
  templateUrl: './observable-child.component.html',
  styleUrl: './observable-child.component.scss'
})
export class ObservableChildComponent {
  @Input() currentValue!: any;
}
