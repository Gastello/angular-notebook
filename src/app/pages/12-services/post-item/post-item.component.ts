import {Component, Input} from '@angular/core';
import {MyServicesService, Post} from '../my-services/my-services.service';
import {Observable} from 'rxjs';
import {CommentComponent} from '../comment/comment.component';
import {AsyncPipe} from '@angular/common';

export interface Comment{
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-post-item',
  imports: [
    CommentComponent,
    AsyncPipe
  ],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})

export class PostItemComponent {
  @Input() post!: Post;
  public comments$?: Observable<Comment[]>;
  public commentsCount!: number;
  isCommentsVisible: boolean = false;
  constructor(private postService: MyServicesService) {
  }
  public ngOnInit(): void {
    this.comments$ = this.postService.getPostComments(this.post.id);
    this.comments$.subscribe(comments => {
      this.commentsCount = comments.length;
    });
  }

}
