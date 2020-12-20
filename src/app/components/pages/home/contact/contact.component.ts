import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface NewsletterSubscriber {
  email: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model:any = {};
  newsletterModel:any= {};

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  contact(){
    console.log(this.model);
  }

  newsletter(){
    var subscriber: NewsletterSubscriber = {
      email: this.newsletterModel.newsletterEmail
    }
    this.db.collection<NewsletterSubscriber>("newsletterSubscribers").add(subscriber).then (res => console.log(this.newsletterModel.newsletterEmail + " subscribed."));
    
  }


}
