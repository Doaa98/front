import { Component, OnInit } from '@angular/core';
import {  KhamsatCommunityVM, SubjectCategory } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-user-experiences-and-stories',
  templateUrl: './user-experiences-and-stories.component.html',
  styleUrls: ['./user-experiences-and-stories.component.css']
})
export class UserExperiencesAndStoriesComponent implements OnInit {


  constructor(private communityService: KhamsatCommunityService) { }
  communityList: KhamsatCommunityVM[]=[];
  errorMsg: any;

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
        },
        errorResponse=>
        {
         this.errorMsg=errorResponse;
        });
  
      }
    
}
