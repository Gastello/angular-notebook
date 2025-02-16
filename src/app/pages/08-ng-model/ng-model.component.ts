import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DropdownDataService} from '../home-work-3-services/dropdown-data.service';

@Component({
  selector: 'app-08-ng-model',
  imports: [FormsModule],
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.scss',
})
export class NgModelComponent {
  incomingTitle: string = '';

  constructor(private dropdownDataService:DropdownDataService) {

  }
  ngOnInit() {
    this.incomingTitle=this.dropdownDataService.getTitle();
  }
  changeTitle(){
    this.dropdownDataService.changeTitle(this.incomingTitle);
  }
}
