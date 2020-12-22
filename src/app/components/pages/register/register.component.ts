import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

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

  isSignedIn = false;

  constructor(private builder:FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.buildForm();

    if(localStorage.getItem('user')!==null)
    this.isSignedIn = true;
    else
    this.isSignedIn = false;
  }
  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email,password).then(res => console.log("Successfully registered!"))
    if(this.firebaseService.isLoggedin)
    this.isSignedIn = true;
  }

  buildForm() {
    this.registerForm = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, symbolValidator, Validators.minLength(6)]]
    })
  }


}
