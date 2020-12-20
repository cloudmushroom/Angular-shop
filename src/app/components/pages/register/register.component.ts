import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

function symbolValidator(control) { //control = registerForm.get('password')
if(control.hasError('required')) return null;
if(control.hasError('minlength')) return null;  

if(control.value.indexOf('@') > -1){
  return null
  } else {
    return {symbol: true}
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, symbolValidator, Validators.minLength(4)]]
    })
  }

  register() {
    console.log(this.registerForm.value);
  }
}
