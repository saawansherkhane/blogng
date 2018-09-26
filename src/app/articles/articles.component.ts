import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../article.service';
import {DialogModule, ButtonModule} from 'primeng/primeng';
import{InputTextModule,InputTextareaModule} from 'primeng/primeng';
import {GrowlModule, Message} from 'primeng/primeng';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles = [];
  count: number;
  overdue: number;
  title: string;
  body: Text;
  published_date: Date;
  constructor(private _articleservice: ArticleService) { }

  ngOnInit() {
       this._articleservice.fetchArticles()
       .subscribe(
        (res) => {
          this.articles.push(...res['articles']);
          this.count = res['count'];
          this.overdue = res['overdue']
         },
         error => console.log('Error!')
       );

  }



    searcharticles(event: any){
    this._articleservice.searchArticles(event.target.value).subscribe(
        (response) => {
        this.articles = []; 
        this.articles.push(...response['articles'])
      },
        error => console.log('Error!')
      )
   }
 

  addArticle(title,body,published_date){
     this._articleservice.createArticles(title,body,published_date).subscribe();
  }

     // Dialog box
    display: boolean = false;
    showDialog() {
        this.display = true;
    }

     // Message
      msgs: Message[] = [];
      showSuccess() {
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Success Message', detail:'Success'});
      }

     // radio button active
     val2: string = 'Option 1';


}
