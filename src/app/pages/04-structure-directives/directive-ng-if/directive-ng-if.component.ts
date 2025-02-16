import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ng-if',
  imports: [],
  templateUrl: './directive-ng-if.component.html',
  styleUrl: './directive-ng-if.component.scss',
})
export class DirectiveNgIfComponent {
  isTextVisible: boolean = true;
  visibleText: string = 'Hide text';
  unvisibleText: string = 'Show text';
  changeText() {
    this.isTextVisible = !this.isTextVisible;
    console.log(this.isTextVisible);
  }
}
