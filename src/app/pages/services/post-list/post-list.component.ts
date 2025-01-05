import { Component } from '@angular/core';
import { MyServicesService, Post } from '../my-services/my-services.service';
import { PostItemComponent } from '../post-item/post-item.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-post-list',
  imports: [HttpClientModule, AsyncPipe, PostItemComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  providers: [MyServicesService],
})
export class PostListComponent {
  public posts$?: Observable<Post[]>;
  constructor(private postService: MyServicesService) {}

  public ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
