import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors, ValidatorFn,
  Validators
} from '@angular/forms';

export function checkRegExp(regExp: RegExp):ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return !forbidden ? {forbiddenValue: {value: control.value}} : null;
  }
}
// export function
export const conformPassword: ValidatorFn = (control: AbstractControl)=>{
  return control.value.password_one == control.value.password_two? null : {
    PasswordDoNotMatch: true
  }
}
@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required,),
    email: new FormControl('user@email.com', [Validators.required, Validators.email]),
  });

  ngOnInit() {

  }

  public handleValues(): void {
    if(this.myForm.valid){
      console.log(this.myForm.value);
    }
    else{
      alert(
        'Values not valid!'
      );
    }
    console.log(this.myForm.get(['login'])?.value);
    console.log(this.myForm.get(['email'])?.value);
    console.log(this.myForm.get(['password'])?.value);
  }


  public validatorsForm = new FormGroup({
    mail: new FormControl('', checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)),
    password_one: new FormControl('', Validators.required),
    password_two: new FormControl('', Validators.required)
  }, {validators:[conformPassword]});

  public handleCustomValues(): void {
    if(this.validatorsForm.valid){
      console.log(this.validatorsForm.value);
    }
    else{
      alert(
        'Values not valid!'
      );
    }
    console.log(this.validatorsForm.get(['mail'])?.value);
  }

}
