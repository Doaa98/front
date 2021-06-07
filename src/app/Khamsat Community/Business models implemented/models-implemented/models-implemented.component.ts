import { Component, OnInit } from '@angular/core';
import { KhamsatCommunityVM, SubjectCategory } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-models-implemented',
  templateUrl: './models-implemented.component.html',
  styleUrls: ['./models-implemented.component.css']
})
export class ModelsImplementedComponent implements OnInit {

  

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
