import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AsteroidService {
        constructor(private http: Http) {
        }

        Asteroids(): Observable<any> {
             return this.http.get(`http://kre-feed.mailfixx.com/?q=https://watchers.news/category/near-earth-objects/feed/`)
             .map(response => response.json());
        }


}