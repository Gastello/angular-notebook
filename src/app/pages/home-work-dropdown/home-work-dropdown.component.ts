import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-home-work-dropdown',
  imports: [DropdownComponent],
  templateUrl: './home-work-dropdown.component.html',
  styleUrl: './home-work-dropdown.component.scss',
})
export class HomeWorkDropdownComponent {
  listOfItems: Array<string> = ['element1', 'element2', 'element3'];
  isActive: boolean = false;
  selectedItem: number = 1;
}
