import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'FrontEnd';

  constructor(private titlePage: Title){}

  // setTitle(title: string) {
  //   this.titlePage.setTitle(title);
  // }
  
}
