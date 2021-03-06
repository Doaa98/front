import { Component, OnInit } from '@angular/core';
import { KhamsatCommunityVM } from 'src/app/models/KhamsatCommunity';
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
    this.communityService.GetspesificCommunityType(3).subscribe
    ( Community=>
      {
        this.communityList=Community;
        console.log(this.communityList)
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      });
  }




}
