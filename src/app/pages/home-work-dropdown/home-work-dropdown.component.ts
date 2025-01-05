import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import {DropdownDataService} from '../home-work-services/dropdown-data.service';

@Component({
  selector: 'app-home-work-dropdown',
  imports: [DropdownComponent],
  templateUrl: './home-work-dropdown.component.html',
  styleUrl: './home-work-dropdown.component.scss',
  // providers: [DropdownDataService],
})
export class HomeWorkDropdownComponent {
  listOfItems: Array<string> = [];
  isActive: boolean = false;
  selectedItem: number = 1;

  ngOnInit() {
    this.listOfItems = this.dropdownDataService.getData();
  }
  constructor(private dropdownDataService:DropdownDataService) {

  }
}
