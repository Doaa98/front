import { Component, OnInit } from '@angular/core';
import { KhamsatCommunity, SubjectCategory } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../../Services/KhamsatCommunityService';
import { KhamsatCommunityVM, SubjectCategory } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-about-khamsat',
  templateUrl: './about-khamsat.component.html',
  styleUrls: ['./about-khamsat.component.css']
})
export class AboutKhamsatComponent implements OnInit {


  constructor(private communityService: KhamsatCommunityService) { }
  communityList: KhamsatCommunityVM[]=[];
  errorMsg: any;
  str:any;

  ngOnInit(): void {

    this.getCommunity();

  }
  getCommunity() {
    this.communityService.Gettypekhamsatcommunity(1).subscribe
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
