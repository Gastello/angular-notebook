import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  @Input() textFromParent!: string;
  @Output() sendTextToParent: EventEmitter<string> = new EventEmitter<string>();

  buttonClicked(){
    this.sendTextToParent.emit('Hello, Parent!');
  }
}
