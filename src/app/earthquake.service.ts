import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EarthquakeService {

          constructor(private http: Http) {
        }

          Earthquakes(): Observable<any> {
             return this.http.get(`http://kre-feed.mailfixx.com/?q=https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.atom`)
             .map(response => response.json());
          }

}


// http://kre-feed.mailfixx.com/?q=https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.atom