import { Component } from '@angular/core';
import {TesterService} from './tester.service';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test-field',
  imports: [HttpClientModule],
  templateUrl: './test-field.component.html',
  styleUrl: './test-field.component.scss',
})
export class TestFieldComponent {

  constructor(private  tester: TesterService) {
  }
  users$?: Observable<any>;
  buttonClicked(){
    this.users$ = this.tester.get();
  }
}
