import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss',
})
export class AttributeDirectivesComponent {
  myClass: Object = {
    fontSize: '32px',
    color: 'red',
    padding: '10px',
    background: 'grey',
  };
  isBlack = true;
}
