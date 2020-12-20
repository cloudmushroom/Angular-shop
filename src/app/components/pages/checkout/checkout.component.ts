import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm = new FormGroup({
    payment: new FormControl('', Validators.required)
  });

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.checkoutForm = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      phoneNumber:['', Validators.required],
      address: ['', Validators.required],
      payment: ['', Validators.required]
    })
  }

  checkout() {
    console.log(this.checkoutForm.value);
  }

}
