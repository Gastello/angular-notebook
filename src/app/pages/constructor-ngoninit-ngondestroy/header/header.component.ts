import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() text!: string;

  constructor(){
    // will be undefined
    console.log(this.text);
  }

  ngOnInit(){
    // will be "Hello, World!"
    console.log(this.text);
  }
  ngOnDestroy(){
    console.log('Destroyed!')
  }
}
