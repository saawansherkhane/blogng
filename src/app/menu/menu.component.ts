import { Component, OnInit } from '@angular/core';
import {MenuModule,MenuItem} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import{InputTextModule,InputTextareaModule} from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

   private items: MenuItem[];

    ngOnInit() {

    }

}


