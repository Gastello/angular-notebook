import { Component } from '@angular/core';
import { PostListComponent } from "./post-list/post-list.component";

@Component({
  selector: 'app-services',
  imports: [PostListComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
