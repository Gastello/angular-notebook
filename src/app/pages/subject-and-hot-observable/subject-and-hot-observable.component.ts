import { Component } from '@angular/core';
import {filter, map, Subject} from 'rxjs';

@Component({
  selector: 'app-subject-and-hot-observable',
  imports: [],
  templateUrl: './subject-and-hot-observable.component.html',
  styleUrl: './subject-and-hot-observable.component.scss'
})

export class SubjectAndHotObservableComponent {
  subject$ = new Subject();
  subjectOfNumbers$: Subject<number> = new Subject();

  ngOnInit(){
    this.subject$.next('I cant be outputted =('); // це не спрацює, адже написано перед оголошенням subject$

    // error & completed можуть викликатись до оголошення
    // this.subject$.error('Error');
    // this.subject$.complete();

    this.subject$.subscribe(
      (val)=>{console.log(val)},
      (err)=>{console.log(err)},
      ()=>{console.log('Subject completed!')});

    this.subject$.next('I can be outputted once');

    this.subject$.subscribe({
      next: (val)=>console.log(val),
      error:(err)=>console.log(err),
      complete: ()=>console.log('Subject completed!')
    });

    this.subject$.next('I can be outputted twice');

    this.subject$.subscribe({
      next(val) {
        console.log(val)
      },
      error(err) {
        console.log(err)
      },
      complete() {
        console.log('Subject completed!')
      }
    });

    this.subject$.next('I can be outputted 3 times!');

    this.subjectOfNumbers$
      .pipe(
        map(x=>x*2),
        filter(x=>x!=2),
      )
      .subscribe({
      next(val) {
        console.log(val)
      },
      error(err) {
        console.log(err)
      },
      complete() {
        console.log('Subject completed!')
      }
    });

    this.subjectOfNumbers$.next(1);
    this.subjectOfNumbers$.next(2);
    this.subjectOfNumbers$.next(3);
    this.subjectOfNumbers$.next(4);
    this.subjectOfNumbers$.next(5);
    this.subjectOfNumbers$.next(6);
  }
}
