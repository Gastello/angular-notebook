import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment} from '../post-item/post-item.component';

export interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable()
export class MyServicesService {

  constructor(private _httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]>{
    return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  public getPostComments(id: number): Observable<Comment[]>{
    return this._httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?postId=' + id);
  }
}
