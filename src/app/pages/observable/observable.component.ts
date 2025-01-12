import { Component } from '@angular/core';
import {filter, from, fromEvent, interval, map, Observable, of, take} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {ObservableChildComponent} from './observable-child/observable-child.component';

@Component({
  selector: 'app-observable',
  imports: [
    AsyncPipe,
    ObservableChildComponent
  ],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {
  // Негласне правило - писати знак $ вкінці змінної для Observable, щоб бачити усі асинхронні змінні
  someObservable$ = new Observable(
    (subscriber:any):void => {
      // complete = успішне завершення потоку
      // параметрів не приймає

      subscriber.complete();

      // error - слугує для генерації помилки, яка аварійно завершує потік
      // весь код, після виклику error не буде виконаний

      // subscriber.error('Some error');

      // next - відправлення даних підписнику
      subscriber.next('Some data');
      // Викликати next можна скільки завгодно
      setTimeout(()=>{
        subscriber.next('Data changed')
      }, 2000)
  });

  numberObservable$: Observable<number> = new Observable<number>(
    (subscriber)=>{
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
      subscriber.next(5);
    }
  );

  exampleObservable$!: Observable<number>;
  exampleObservable2$!: Observable<any>;
  examplePromise$!: Promise<any>;

  ngOnInit() {
    console.log('%c--------------next | error | complete--------------', 'color: pink');

    // Підписуватись можна нескінченно, для кожного підписника створюється свій потік
    console.log('%cOutput #1: ', 'color: red');
    this.someObservable$.subscribe(console.log, console.log)

    console.log('%cOutput #2: ', 'color: green');
    this.someObservable$.subscribe(
      (val)=>console.log(val),
      (error)=>console.log(error),
      ()=>console.log('Competed')
    );

    console.log('%cOutput #3: ', 'color: blue');
    this.someObservable$.subscribe({
      next: (value)=>console.log(value),
      error: (error)=>console.log(error),
      complete: ()=>console.log('Competed'),
    });

    console.log('%cOutput #4: ', 'color: orange');
    this.someObservable$.subscribe({
      next(value){
        console.log(value)
      },
      error(error){
        console.log(error)
      },
      complete(){
        console.log('Competed')
      },
    });

    console.log('%c--------------Метод pipe--------------', 'color: pink');

    // Метод pipe
    // https://rxjs.dev/api/operators - список операторів
    this.numberObservable$.pipe(
      map(item=>item*10),
      filter(item => item>25),
    ).subscribe(console.log)

    console.log('%c--------------Оператори--------------', 'color: pink');
    console.log('%c--------------#1 of--------------', 'color: pink');
    // Розглянемо оператори:
    // #1 Оператор of:
    // numberObservable$: Observable<number> = new Observable<number>(
    //   (subscriber)=>{
    //     subscriber.next(1);
    //     subscriber.next(2);
    //     subscriber.next(3);
    //     subscriber.next(4);
    //     subscriber.next(5);
    //     subscriber.complete();
    //   }
    // );
    // це теж саме, що й наступний запис (передавання даних і виклик методу complete вкінці):

    of(1,2,3,4,5).subscribe(console.log);
    // можна використовувати pipes:
    console.log('%c===', 'color: white');
    of(1,2,3,4,5).pipe(map(x=>x+3)).subscribe(console.log);

    console.log('%c--------------#2 from--------------', 'color: pink');
    // оператор from схожий на of, різниця в тому, що from приймає дані, які ітеруються
    // також вкінці відбувається виклик методу complete
    from([5,10,15,20,25]).pipe(map(x=>x/5)).subscribe(console.log);

    console.log('%c--------------#3 fromEvent--------------', 'color: pink');
    console.log('click somewhere...');
    // приймає два аргументи: DOM елемент і тип event'a
    // виклик методу complete НЕ ВІДБУВАЄТЬСЯ!!! Потрібно відписуватись самостійно

    fromEvent(document,'click').subscribe(console.log);

    console.log('%c--------------#4 interval--------------', 'color: pink');

    // interval(1000).subscribe(console.log);
    // виводить нескінченну послідовність чисел від 0, кожен заданий проміжок часу в мс
    // виклик методу complete НЕ ВІДБУВАЄТЬСЯ!!! Потрібно відписуватись самостійно

    // тому використаємо pipe, який сам відпишеться
    // interval(1000).pipe(take(5)).subscribe(console.log);

    console.log('%c--------------Async Pipe--------------', 'color: pink');
    this.exampleObservable$ = interval(1000);

    this.exampleObservable2$ = interval(1000).pipe(
      map((value)=>({
        prev: value - 1,
        current: value,
        next: value + 1,
      }))
    );
    console.log('%c--------------Promise--------------', 'color: pink');
    this.examplePromise$ = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Promise completed!');
      },3000)
    })

  }
}
