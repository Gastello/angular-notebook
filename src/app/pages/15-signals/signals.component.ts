import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-15-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  // public test: number = 0;
  //
  // public changeTest(){
  //   this.test++;
  // }


  // `Signals` в Angular забезпечують ефективну реактивність,
  // оновлюючи тільки залежні частини шаблону, що покращує продуктивність
  // у великих додатках. Вони локалізують зміни, спрощують відстеження залежностей,
  // інтегруються з `RxJS` і знижують навантаження на механізм змін.
  // У простих випадках різниця непомітна, але в складних додатках
  // переваги стають очевидними.

  public counter = signal<number>(0);
  public counter2 = signal<number>(0);

  public plus(){
    this.counter.update(x=> x + 1);
    this.counter2.update(x=> x + 1);
  }
  public zero(){
    this.counter.set(0);
  }

  // computed викликається при зміні інших сигналів, які всередині нього
  // це значення не можна задати через set/update, воно може лише вичислятися
  public doubleCounter = computed(()=> {
    return this.counter() * 2;
  })

  constructor() {
    // викликається при зміні сигналу, що вказаний всередині методу
    effect(() => {
      console.log(`signal1`, this.counter());
      console.log(`signal2`, this.counter2());
    });
  }
}
