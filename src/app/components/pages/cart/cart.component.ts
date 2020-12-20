import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CartItem } from '../shop/product-list/product-item/product-item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Observable<CartItem[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    var user = localStorage.getItem('user');

    if (user != null) {
      var userObj = JSON.parse(user);
      var email = userObj.email;


      this.cartItems = this.db.collection<CartItem>('cartItems', ref => ref.where('email', '==', email))
      .valueChanges();
    } 
    

  }

  deleteItem(email, itemIdToDelete) {
    // Videti kako se radi
  }

  }
