import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../asteroid.service';
import { EarthquakeService } from '../earthquake.service';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.css']
})
export class AsteroidComponent implements OnInit {

    asteroid_responses = [];
    earthquake_responses = [];
    constructor(private asteroid: AsteroidService, private earthquake: EarthquakeService) {
    }

  ngOnInit() {
    this.asteroid.Asteroids().subscribe(
      (response) => {
      this.asteroid_responses.push(response['responseData']['feed']['entries'])
    },
      error => console.log('Error!')
    ),
     
    this.earthquake.Earthquakes().subscribe(
      (response) => {
      this.earthquake_responses.push(response['responseData']['feed']['entries'])
    },
      error => console.log('Error!')
    )

  }

}
