import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocations',
  templateUrl: './geolocations.component.html',
  styleUrls: ['./geolocations.component.css']
})
export class GeolocationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // google maps zoom level
    zoom: number = 14;
    lat: number = 12.8997;
    lng: number = 77.6356;

}
