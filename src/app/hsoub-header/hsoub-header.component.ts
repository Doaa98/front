import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hsoub-header',
  templateUrl: './hsoub-header.component.html',
  styleUrls: ['./hsoub-header.component.css']
})
export class HsoubHeaderComponent implements OnInit {
  isAside:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  AsideToggle()
  {
      this.isAside=!this.isAside;
  }

}
