import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, Observable, tap } from 'rxjs';
import { User } from '../interfaces/user';
import { ReturnedData } from '../interfaces/returned-data';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, UserComponent, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})

// #1
/*
Ручне підписування має сенс лише в рідкісних випадках,
коли потрібен повний контроль над підписками.
*/
/*
export class UserListComponent {
  data: any;
  users: any;
  private subscription!: Subscription;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.subscription = this.http
      .get('https://reqres.in/api/users')
      .subscribe((data) => {
        this.data = data;
        this.users = this.data.data;
        console.log(this.users);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
*/

// #2
/*
Використання async pipe спрощує код, зменшує ризики,
ідеально підходить для реактивного програмування та
є більш ефективним у контексті Angular.
*/
export class UserListComponent {
  data!: ReturnedData;
  users$!: Observable<User[]>;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.users$ = this.http.get<ReturnedData>('https://reqres.in/api/users').pipe(
      map((obj: ReturnedData) => obj.data)
    );
  }
}
