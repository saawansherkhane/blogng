import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {
  baseUrl: string;
  apiKey: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://newsapi.org/v1';
    this.apiKey = '45dd2305d9084b9c8b7b7b5cf7ad2f7b';
  }


  fetchArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles?source=the-times-of-india&sortBy=top&apiKey=45dd2305d9084b9c8b7b7b5cf7ad2f7b`)
      .map(response => response.json());
  }

}

//   https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=45dd2305d9084b9c8b7b7b5cf7ad2f7b
