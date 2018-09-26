import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles = [];
  constructor(private _newsApiService: NewsApiService) { }

  ngOnInit() {
      this._newsApiService.fetchArticles()
        .subscribe(
        (res) => {
          this.articles.push(...res['articles']);
        },
        error => console.log('Error!')
        );
  }

}