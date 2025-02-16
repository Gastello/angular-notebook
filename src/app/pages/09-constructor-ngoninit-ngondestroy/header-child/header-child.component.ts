import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-child',
  imports: [],
  templateUrl: './header-child.component.html',
  styleUrl: './header-child.component.scss'
})
export class HeaderChildComponent {
  @Input() headerChildText?: string;
}
