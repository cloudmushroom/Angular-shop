import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model:any = {};
  newsletterModel:any= {};

  constructor() { }

  ngOnInit(): void {
  }

  contact(){
    console.log(this.model);
  }

  newsletter(){
    console.log(this.newsletterModel);
  }
}
