import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khamsat-dot-com',
  templateUrl: './khamsat-dot-com.component.html',
  styleUrls: ['./khamsat-dot-com.component.css']
})
export class KhamsatDotComComponent implements OnInit {

  isShowKhamsatDefinition:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  dropdownMenuToggle()
  {
    this.isShowKhamsatDefinition =! this.isShowKhamsatDefinition;
  }

}
