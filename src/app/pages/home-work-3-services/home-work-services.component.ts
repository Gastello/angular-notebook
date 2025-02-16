import {Component, OnInit} from '@angular/core';
import {DropdownComponent} from '../home-work-2-dropdown/dropdown/dropdown.component';
import {DropdownDataService} from './dropdown-data.service';

@Component({
  selector: 'home-work-3-services',
  imports: [
    DropdownComponent
  ],
  templateUrl: './home-work-services.component.html',
  styleUrl: './home-work-services.component.scss',
  // providers: [DropdownDataService]
})
export class HomeWorkServicesComponent implements OnInit {
  listOfItems:Array<any>=['1','2','3'];
  selectedItem:number=0;
  isActive:boolean = false;

  ngOnInit(){
    this.listOfItems = this.dropdownDataService.getData();
  }

  constructor(private dropdownDataService:DropdownDataService) {

  }

  addItem(){
    const newItem:string = 'newItem';
    this.dropdownDataService.addNewItem(newItem);
  }
}
