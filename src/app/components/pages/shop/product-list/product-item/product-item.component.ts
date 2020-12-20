import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  title = 'Bedroom';
  description = 'This is the item description.'
  price = '100'

  constructor() { }

  ngOnInit(): void {
  }

}
