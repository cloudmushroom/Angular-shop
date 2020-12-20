import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat = 45.247274;
  lng = 19.823655;


  constructor() { }

  ngOnInit(): void {
     
  }

}
