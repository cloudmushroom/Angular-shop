import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {}

  isSignedIn = false;

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false;
  }

  async onSignIn(email:string, password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedin)
    this.isSignedIn = true;
  }

  login(){
    console.log(this.model);
  }

}
