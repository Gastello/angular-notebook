import { Component } from '@angular/core';
import { Student } from './student-interface';

@Component({
  selector: 'app-directive-ng-for',
  imports: [],
  templateUrl: './directive-ng-for.component.html',
  styleUrl: './directive-ng-for.component.scss',
})
export class DirectiveNgForComponent {
  students: Array<Student> = [
    {
      name: 'Max',
      age: 22,
      city: 'Uzhhorod',
    },
    {
      name: 'Lilya',
      age: 18,
      city: 'Ternopil',
    },
    {
      name: 'Ronya',
      age: 19,
      city: 'Lviv',
    },
  ];
  pupils: Array<any> = [];
}
