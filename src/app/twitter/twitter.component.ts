import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  twitter_responses = [];
  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    this.twitter.Twitters().subscribe(
      (response) => {
      this.twitter_responses.push(response['responseData']['feed']['entries'])
    },
      error => console.log('Error!')
    )
  }

  getTweets(event){
    this.twitter.getTwitters(event.target.value).subscribe(
        (response) => {
        this.twitter_responses = []; 
        this.twitter_responses.push(response['responseData']['feed']['entries'])
      },
        error => console.log('Error!')
      )
   }
  
}