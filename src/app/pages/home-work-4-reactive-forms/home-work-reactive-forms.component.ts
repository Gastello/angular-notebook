import {Component} from '@angular/core';
import {FormComponent} from './components/form/form.component';
import {ManageFormService} from './services/manage-form.service';

@Component({
  selector: 'home-work-4-reactive-forms',
  imports: [
    FormComponent
  ],
  templateUrl: './home-work-reactive-forms.component.html',
  styleUrl: './home-work-reactive-forms.component.scss'
})
export class HomeWorkReactiveFormsComponent {
  inputNameAndSurnameField!: string;
  dropDownSelectSubjectsArray!: Array<string>;
  dropDownSelectedSubject!: string;
  isSubjectPassed!: boolean;

  constructor(private formManager: ManageFormService) {
  }

  ngOnInit() {
    this.formManager.localStorageCheck();
    this.inputNameAndSurnameField = this.formManager.getNameAndSurname();
    this.dropDownSelectSubjectsArray = this.formManager.getSubjects();
    this.dropDownSelectedSubject = this.formManager.getSelectedSubject();
    this.isSubjectPassed = this.formManager.getIsPassed();
  }
}
