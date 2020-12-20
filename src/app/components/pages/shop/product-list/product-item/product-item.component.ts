import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../product-list.component';

export interface CartItem {
  name: string;
  itemId: number;
  email: string;
  quantity: number;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input("productJson") productJson;

  title = 'Bedroom';
  description = 'This is the item description.'
  price = '100'

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    
  }

  addToCart(product: Product) {
    var user = localStorage.getItem('user');
    if (user != null) {
      var userObj = JSON.parse(user);
      var email = userObj.email;
      
      // this.products = this.db.collection<Product>('products', ref => ref.where('id', '==', ))
      //           .valueChanges();

      var cartItem: CartItem = {
        name: product.name,
        email: email,
        itemId: product.id,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: 1
      }
      this.db.collection<CartItem>("cartItems").add(cartItem).then(res=>alert("Added to cart."));
    } else {
      alert("Please login to be able to buy our products");
    }
    
    }
  
}
