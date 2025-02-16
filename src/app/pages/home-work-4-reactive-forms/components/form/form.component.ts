import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ManageFormService} from '../../services/manage-form.service';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() inputNameAndSurnameField!: string;
  @Input() dropDownSelectSubjectsArray!: Array<string>;
  @Input() dropDownSelectedSubject!: string;
  @Input() isSubjectPassed!: boolean;

  public myReactiveForm!: FormGroup;
  constructor(private formManager: ManageFormService) {
  }
  ngOnInit(){
    this.myReactiveForm = new FormGroup({
      nameAndSurname: new FormControl(this.inputNameAndSurnameField, Validators.required),
      subjects: new FormArray((this.dropDownSelectSubjectsArray.map(subject => new FormControl(subject))), Validators.required),
      selectedSubject: new FormControl(this.dropDownSelectedSubject, Validators.required),
      isPassed: new FormControl(this.isSubjectPassed, Validators.required),
    })
  }
  public get subjects(): FormArray {
    return this.myReactiveForm.get('subjects') as FormArray;
  }

  public sendItems(){
    console.log('%cSubmited!', 'color: green')
    this.formManager.setNameAndSurname(this.myReactiveForm.get('nameAndSurname')?.value);
    this.formManager.setSelectedSubject(this.myReactiveForm.get('selectedSubject')?.value);
    this.formManager.setIsPassed(this.myReactiveForm.get('isPassed')?.value);
    this.formManager.updateLocalStorage();
  }
}
