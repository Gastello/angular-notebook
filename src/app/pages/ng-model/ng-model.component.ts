import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  imports: [FormsModule],
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.scss',
})
export class NgModelComponent {
  incomingTitle: string = 'Waiting for title...';
}
