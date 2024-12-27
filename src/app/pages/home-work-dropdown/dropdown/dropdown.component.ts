import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrls: ['../../../../null-styles.scss', './dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() listOfItems: Array<string> = [];
  @Input() selectedItem: number = 0;
  @Input() isActive: Boolean = false;
  // @Output() onActiveItemChanged = new EventEmitter<number>();

  toggleList = (event: Event): void => {
    if (event.currentTarget === event.target) this.isActive = !this.isActive;
  };

  closeList = (event: Event): void => {
    this.isActive = false;
  };
  changeSelectedItem = (event: Event): void => {
    let chosenElement = event.target as Element;
    this.selectedItem = +chosenElement.id;
  };
  itemClicked = (event: Event) => {
    this.changeSelectedItem(event);
    this.closeList(event);
  };
}
