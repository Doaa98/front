import { Component, OnInit } from '@angular/core';
import { KhamsatCommunity } from 'src/app/models/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../../Services/KhamsatCommunityService';
import {  KhamsatCommunityVM } from 'src/app/Classes/KhamsatCommunity';

@Component({
  selector: 'app-user-experiences-and-stories',
  templateUrl: './user-experiences-and-stories.component.html',
  styleUrls: ['./user-experiences-and-stories.component.css']
})
export class UserExperiencesAndStoriesComponent implements OnInit {

  constructor(private communityService:KhamsatCommunityService) { }
  communityList: KhamsatCommunity [] = [];
  errorMsg: any;
  dataSaved = false;
  massage: string = '';

  ngOnInit(): void {
   
    console.log("Community")
    this.getCommunity();
  }
  getCommunity() {
    console.log("Community")
    this.communityService.Gettypekhamsatcommunity(0).subscribe
      ( Community=>
        {
          this.communityList=Community;
          //console.log(Community)
          //
          console.log(this.communityList+"yyu")
        },
        errorResponse=>
        {
         this.errorMsg=errorResponse;
        });
  
      }
     /* create(){
        console.log(this.addNewCommunityForm.get('subject').value);
        this.newsubject={
          ID :0,
          content:this.content.value,
          title :this.title.value,
          subject : this.addNewCommunityForm.get('subject').value,
          Date :null,    
          userID:"2c20fb7b-f9bb-4ba5-9986-92bf67dc310a"
      
        }
        console.log(this.newsubject);
        this.communityService.addKhamsatCommunity(this.newsubject).subscribe(
          pro=>{
            console.log("1");
            this.errorMsg=pro;
            console.log("2");
            console.log("res:"+this.errorMsg)//for test
          },
          errorResponse=>
          { console.log("3");
           this.errorMsg=errorResponse;
           console.log(this.errorMsg);
          }
          );
      }
    
      getspesifictype()
      {
        this.communityService.Gettypekhamsatcommunity(2).subscribe(
          pro=>{
            console.log("1");
            this.errorMsg=pro;
            console.log("2");
            console.log("res:"+this.errorMsg)//for test
          },
          errorResponse=>
          { console.log("3");
           this.errorMsg=errorResponse;
           console.log(this.errorMsg);
          }
          );
      }
      com:any
      createcomment()
      {
      this.com={
        id :0,
        content :"angular comment",   
         date :"2021-06-06T10:41:18.690Z",  
         userID:"d949c2bc-18cf-4c7b-aff2-7490aee960a8",
         khamsatcommunityID  :2,   
      }
      this.communityService.addComment(this.com).subscribe(
        pro=>{
          console.log("1");
          this.errorMsg=pro;
          console.log("2");
          console.log("res:"+this.errorMsg)//for test
        },
        errorResponse=>
        { console.log("3");
         this.errorMsg=errorResponse;
         console.log(this.errorMsg);
        }
        );
      }
      Gettypekhamsatcommunitywithcomment()
      {
        this.communityService.getKhamsatCommunityById(1).subscribe(
          pro=>{
            console.log("1");
            this.errorMsg=pro;
            console.log("2");
            console.log("res:"+ this.errorMsg)//for test
          },
          errorResponse=>
          { console.log("3");
           this.errorMsg=errorResponse;
           console.log(this.errorMsg);
          }
          );
      }  */
    
}
