import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import  { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl:string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  products: Observable<Product[]>;

  ngOnInit(): void {
    // var product: Product = {
    //   id: 1,
    //   name: "Work Desk",
    //   description: "Best desk ever",
    //   price: 100,
    //   imageUrl: "./assets/images/radniSto.jpg"
    // }
    // this.db.collection<Product>("products").add(product).then(res=>alert(res));
   this.products = this.db.collection<Product>('products', ref => ref)
                .valueChanges();

  }

}
