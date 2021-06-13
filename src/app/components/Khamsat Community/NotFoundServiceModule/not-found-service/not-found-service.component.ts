import { Component, OnInit } from '@angular/core';
import { KhamsatCommunity } from 'src/app/models/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../../Services/KhamsatCommunityService';
import {  KhamsatCommunityVM } from 'src/app/models/KhamsatCommunity';

@Component({
  selector: 'app-not-found-service',
  templateUrl: './not-found-service.component.html',
  styleUrls: ['./not-found-service.component.css']
})
export class NotFoundServiceComponent implements OnInit {

  constructor(private communityService:KhamsatCommunityService) { }
  communityList:KhamsatCommunity [] = [];
  errorMsg: any;
  dataSaved=false;
  massage: string = '';

  ngOnInit(): void {

    this.getCommunity();

  }
  getCommunity() {
    this.communityService.Gettypekhamsatcommunity(2).subscribe
    ( Community=>
      {
        this.communityList=Community;
        console.log(Community)
        console.log(this.communityList)
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      });
  }

}
