import {Component, Input, SimpleChanges} from '@angular/core';
import {HeaderChildComponent} from '../header-child/header-child.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderChildComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() text!: string;

  constructor(){
    // will be undefined
    console.log('#0 - Перше викликається конструктор');
    console.log(this.text);
  }
  ngOnChanges(changes: SimpleChanges) {
    // will be "Hello, World!"
    console.log('#1 - До ініціалізації викликається ngOnChanges. А також при зміні @Input параметрів');
    console.log(changes);
  }
  ngOnInit(){
    // will be "Hello, World!"
    console.log('#2 - При ініціалізації викликається ngOnInit');
    console.log(this.text);
  }

  ngDoCheck(){
    // will be "Hello, World!"
    console.log('#3 - Наступним викликається ngDoCheck, а також при кожній зміні всередині компонента');
  }

  ngAfterContentInit(){
    // will be "Hello, World!"
    console.log('#4 - Наступним викликається ngAfterContentInit. Після прогрузки контенту, що знаходиться всередині скобок даного компонента (app-header)');
  }

  ngAfterContentChecked(){
    // will be "Hello, World!"
    console.log('#5 - Наступним викликається ngAfterContentChecked. Після прогрузки контенту, що знаходиться всередині скобок данного компонента (app-header). А також при його зміні');
  }

  ngAfterViewInit(){
    // will be "Hello, World!"
    console.log('#6 - Наступним викликається ngAfterViewInit. Після прогрузки усіх дочірніх компонентів');
  }

  ngAfterViewChecked(){
    // will be "Hello, World!"
    console.log('#7 - Наступним викликається ngAfterViewChecked. Після прогрузки усіх дочірніх компонентів. А також при його зміні і зміні дочірніх компонентів \n\n\n');
  }

  ngOnDestroy(){
    console.log('#8 - ngOnDestroy викликається перед знищенням компонента');
        console.log('Destroyed!')
  }

  headerChildText: string = '[headerChildText]';
  changeHeaderChildText(){
    console.log('%cheaderChildText Changed!', 'color:green');
    this.headerChildText = '[headerChildText Changed]';
  }
}
