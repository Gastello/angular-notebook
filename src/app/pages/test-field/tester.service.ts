import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';

@Injectable({ providedIn: 'root' })

export class TesterService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http: HttpClient) { }
  public get(){
    return this._http.get(this.url).pipe(
      tap(res => console.log(res))
    );
  }
}
