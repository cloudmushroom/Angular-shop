import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedin = false;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }
  
  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(firebaseUser=>{
      this.isLoggedin = true
      localStorage.setItem('user',JSON.stringify(firebaseUser.user))
      this.router.navigate(['/home']);
    })
  }
  
  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedin = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    this.router.navigate(['/login']);
  }
}
