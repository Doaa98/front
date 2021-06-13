import { Component, OnInit } from '@angular/core';
import { KhamsatCommunity, SubjectCategory } from 'src/app/models/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../../Services/KhamsatCommunityService';
import { KhamsatCommunityVM, SubjectCategory } from 'src/app/models/KhamsatCommunity';

@Component({
  selector: 'app-models-implemented',
  templateUrl: './models-implemented.component.html',
  styleUrls: ['./models-implemented.component.css']
})
export class ModelsImplementedComponent implements OnInit {

  
  constructor(private communityService:KhamsatCommunityService) { }
  communityList:KhamsatCommunity [] = [];
  errorMsg: any;
  dataSaved=false;
  massage: string = '';

  ngOnInit(): void {

    this.getCommunity();

  }
  getCommunity() {
    this.communityService.Gettypekhamsatcommunity(3).subscribe
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
