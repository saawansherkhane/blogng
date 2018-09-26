import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MenuModule,MenuItem} from 'primeng/primeng';
import {EditorModule,SharedModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';


//primeNG COMP
import {DialogModule,CarouselModule,ButtonModule,InputTextModule,InputTextareaModule,RadioButtonModule,GrowlModule,AccordionModule,PasswordModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';

import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { NewsApiService } from './news-api.service';
import { AsteroidComponent } from './asteroid/asteroid.component';
import { AsteroidService } from './asteroid.service';
import { EarthquakeService } from './earthquake.service';
import { ArticleService } from './article.service';
import { ArticlesComponent } from './articles/articles.component';
import { GeolocationsComponent } from './geolocations/geolocations.component';
import { TwitterComponent } from './twitter/twitter.component';
import { TwitterService } from './twitter.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewsComponent,
    ArticlesComponent,
    GeolocationsComponent,
    AsteroidComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfiCSmU263T6DChxdMU2jWEixE3-MDegI'
    }),
    FormsModule,
    HttpModule,
    InputTextModule,InputTextareaModule,CarouselModule,GrowlModule,
    ButtonModule,
    RadioButtonModule,
    PanelModule,
    MenuModule,
    DialogModule,
    EditorModule,SharedModule
  ],
  providers: [NewsApiService, AsteroidService, EarthquakeService, ArticleService, TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
