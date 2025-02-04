import { Component } from '@angular/core';
import {NgForOf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-ng-template-ng-container',
  imports: [
    NgForOf,
    NgTemplateOutlet
  ],
  templateUrl: './ng-template-ng-container.component.html',
  styleUrl: './ng-template-ng-container.component.scss'
})
export class NgTemplateNgContainerComponent {
  public isShow = true;
  public array = [1,2,3,4,5];
}
