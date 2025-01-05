import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // створюється один сервіс для усіх компонентів, які будуть його юзати в іншому випадку для кожного буде створюватись свій сервіс
})
export class DropdownDataService {
  constructor() { }
  items:Array<any>=['1','2','3','4','5','6'];
  title = 'Waiting for title...';
  getData(){
    return this.items;
  }

  addNewItem(item:string){
    this.items.push(item);
  }

  changeTitle(item:string){this.title = item;}
  getTitle(){
    return this.title;
  }
}
