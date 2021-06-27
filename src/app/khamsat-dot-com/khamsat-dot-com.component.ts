import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/Services/authentication.service';

@Component({
  selector: 'app-khamsat-dot-com',
  templateUrl: './khamsat-dot-com.component.html',
  styleUrls: ['./khamsat-dot-com.component.css']
})
export class KhamsatDotComComponent implements OnInit {

  isShowKhamsatDefinition:boolean = false;
  isShowBenefitFromKhamsat:boolean = false;
  isShowKhamsatRights:boolean = false;
  isShowWhatHappenAfterBuyServeice:boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {
    if (authService.isLoggedIn()) {
      router.navigateByUrl("/home")
    }
   }

  ngOnInit(): void {
  }

  ShowKhamsatDefinition()
  {
    this.isShowKhamsatDefinition =! this.isShowKhamsatDefinition;
  }
  BenefitFromKhamsat()
  {
    this.isShowBenefitFromKhamsat =! this.isShowBenefitFromKhamsat;
  }

  ShowKhamsatRights()
  {
    this.isShowKhamsatRights =! this.isShowKhamsatRights;
  }
  WhatHappenAfterBuyServeice()
  {
    this.isShowWhatHappenAfterBuyServeice =! this.isShowWhatHappenAfterBuyServeice;
  }

}
