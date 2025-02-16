import { Component } from '@angular/core';
import {
  AbstractControl, FormArray, FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors, ValidatorFn,
  Validators
} from '@angular/forms';
// FormGroup
export function checkRegExp(regExp: RegExp):ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return !forbidden ? {forbiddenValue: {value: control.value}} : null;
  }
}

// Custom validator
export const conformPassword: ValidatorFn = (control: AbstractControl)=>{
  return control.value.password_one == control.value.password_two? null : {
    PasswordDoNotMatch: true
  }
}


@Component({
  selector: 'app-13-reactive-forms',
  imports: [ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  // FormGroup
  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required,),
    email: new FormControl('user@email.com', [Validators.required, Validators.email]),
  });

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


  // Custom validator
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

  // FormBuilder використовують для простих форм
  public fbForm!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  public get skills(): FormArray {
    return this.fbForm.get('skills') as FormArray;
  }
  ngOnInit() {
    this.fbForm = this._fb.group({
      name: ['Vasya', Validators.required],
      skills: this._fb.array([]),
      // Вложені форми
      // place: this._fb.group({
      //   city: ['', Validators.required],
      //   time: ['', Validators.required],
      // })
    })
  }

  public newSkill(): FormGroup{
    return this._fb.group({
      skill: '',
      experience: '',
    })
  }
  public addSkill(): void{
    this.skills.push(this.newSkill())
  }
  public removeSkill(i: number): void{
    this.skills.removeAt(i);
  }
  public onSubmit(): void{
    console.log(this.fbForm.value);
  }

  protected readonly console = console;
}
