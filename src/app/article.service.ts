import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  fetchArticles(): Observable<any>{
    return this.http.get('http://localhost:4000/articles')
    .map(response => response.json());
  }

  searchArticles(event): Observable<any>{
    return this.http.get(`http://localhost:4000/articles/search?search=${event}`)
   .map(response => response.json());
  }


  createArticles(title: string, body: Text, published_date: Date): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:4000/articles.json', JSON.stringify({title: title, body: body, published_date: published_date}),options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

    private extractData(res: Response) {
      let body = res.json();
      return body || { };
    }

    private handleError (error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }

}
