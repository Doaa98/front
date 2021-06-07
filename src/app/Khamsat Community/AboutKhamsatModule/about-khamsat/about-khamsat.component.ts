import { Component, OnInit } from '@angular/core';
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
    this.communityService.returnAllCommunity().subscribe
    ( Community=>
      {
        this.communityList=Community;
        console.log(Community)
        console.log(this.communityList)
        for(var i=0;i<this.communityList.length;i++){
          if(this.communityList[i].subject==1)
          console.log(this.communityList[i].fullName)
        }
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      });
  }




}
