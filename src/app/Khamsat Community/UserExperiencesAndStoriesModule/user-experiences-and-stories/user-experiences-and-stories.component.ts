import { Component, OnInit } from '@angular/core';
import {  KhamsatCommunityVM } from 'src/app/models/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-user-experiences-and-stories',
  templateUrl: './user-experiences-and-stories.component.html',
  styleUrls: ['./user-experiences-and-stories.component.css']
})
export class UserExperiencesAndStoriesComponent implements OnInit {


  constructor(private communityService: KhamsatCommunityService) { }
  communityList: any;
  errorMsg: any;

  ngOnInit(): void {
    this.getCommunity();
  }
  getCommunity() {
    this.communityService.GetspesificCommunityType(0).subscribe
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
