import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentViewModel, khamsatcommunity_withcomments } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from 'src/Services/KhamsatCommunityService';

@Component({
  selector: 'app-aservice-details',
  templateUrl: './aservice-details.component.html',
  styleUrls: ['./aservice-details.component.css']
})
export class AServiceDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private KhamsatService: KhamsatCommunityService, private route: ActivatedRoute, private router: Router) { }
  addCommentForm: any;
  errorMsg: any;
  Khamsat: khamsatcommunity_withcomments;
  Comment: CommentViewModel;
  latestContributions: any;
  Id: number;
  ngOnInit(): void {
    this.addCommentForm = this.fb.group({
      content: ['', [Validators.required]]
    });
    this.route.queryParams.subscribe(params => {
      this.Id = this.route.snapshot.params['id'];
      this.KhamsatService.getKhamsatCommunityById(this.Id).subscribe(
        (res) => {
          this.Khamsat = res;
          console.log(this.Khamsat.title, this.Khamsat.userFullName, this.Khamsat.userImage
            , this.Khamsat.content, this.Khamsat.date)
          this.Khamsat._Comments.forEach(function (value) {
            console.log(value);
          });
        },

        (errorResponse) => {
          this.errorMsg = errorResponse;


        }
      );
 
    });
    this.getLatestContributions();
  }
  get content() {
    return this.addCommentForm.get('content')
  }
  createcomment() {
    this.Comment = {
      id: 0,
      content: this.content.value,
      date: "2021-06-06T10:41:18.690Z",
      userID: "1a808256-1fa7-40b1-b3f2-1c3bdb5dd970",
      khamsatcommunityID: this.Id,
    }
    this.KhamsatService.addComment(this.Comment).subscribe(
      pro => {
        console.log("1");
        this.errorMsg = pro;
        console.log("2");
        console.log("res:" + this.errorMsg)//for test
      },
      errorResponse => {
        console.log("3");
        this.errorMsg = errorResponse;
        console.log(this.errorMsg);
      }
    );
  }
  getLatestContributions() {
    this.KhamsatService.Gettypekhamsatcommunity(2).subscribe
      (Community => {
        for (let i = 0; i < Community.length / 2; i++) {
          this.latestContributions = Community;
        }
        console.log(Community)
        console.log(this.latestContributions)
      },
        errorResponse => {
          this.errorMsg = errorResponse;
        });
  }

}
