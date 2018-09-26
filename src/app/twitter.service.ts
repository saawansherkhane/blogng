import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TwitterService {

  constructor(private http: Http) { }

  Twitters(): Observable<any>{
    return this.http.get(`http://kre-feed.mailfixx.com/?q=https://twitrss.me/twitter_user_to_rss/?user=timesofindia`)
   .map(response => response.json());
  }

  getTwitters(event): Observable<any>{
    return this.http.get(`http://kre-feed.mailfixx.com/?q=https://twitrss.me/twitter_user_to_rss/?user=${event}`)
   .map(response => response.json());
  }

}

// http://kre-feed.mailfixx.com/?q=https://twitrss.me/twitter_user_to_rss/?user=timesofindia