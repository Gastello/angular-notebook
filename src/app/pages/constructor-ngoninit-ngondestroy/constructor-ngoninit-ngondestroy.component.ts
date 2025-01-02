import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-constructor-ngoninit-ngondestroy',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './constructor-ngoninit-ngondestroy.component.html',
  styleUrl: './constructor-ngoninit-ngondestroy.component.scss'
})
export class ConstructorNgoninitNgondestroyComponent {
  // ! Check Console!
  text: string = 'Hello, world!'
  isHeaderVisible:boolean = true;
}
