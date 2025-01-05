import {Component, OnInit} from '@angular/core';
import {DropdownComponent} from '../home-work-dropdown/dropdown/dropdown.component';
import {DropdownDataService} from './dropdown-data.service';

@Component({
  selector: 'app-home-work-services',
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
