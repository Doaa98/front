import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentViewModel, khamsatcommunity_withcomments } from 'src/app/models/KhamsatCommunity';
import { AuthenticationService } from 'src/Services/authentication.service';
import { KhamsatCommunityService } from 'src/Services/KhamsatCommunityService';

@Component({
  selector: 'app-aservice-details',
  templateUrl: './aservice-details.component.html',
  styleUrls: ['./aservice-details.component.css']
})
export class AServiceDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthenticationService , private KhamsatService: KhamsatCommunityService, private route: ActivatedRoute, private router: Router) {
    if (!authService.isLoggedIn()) {
      this.IsLogging=false;
    }
   }
  IsLogging:boolean=true;
   addCommentForm: any;
  errorMsg: any;
  Khamsat: khamsatcommunity_withcomments;
  Comment: CommentViewModel;
  latestContributions: any;
  Id: number;
  length: number;
  ngOnInit(): void {
    this.addCommentForm = this.fb.group({
      content: ['', [Validators.required]]
    });
    this.route.queryParams.subscribe(params => {
      this.Id = this.route.snapshot.params['id'];
      this.KhamsatService.getKhamsatCommunityWithComment(this.Id).subscribe(
        (res) => {
          this.Khamsat = res;
          console.log(res)
          console.log(this.Khamsat)

          this.length = this.Khamsat._Comments.length;
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
      date: new Date(),
      userID: this.authService.getUserId(),
      khamsatcommunityID: this.Id,
    }
    this.KhamsatService.addComment(this.Comment).subscribe(
      pro => {
        console.log("1");
        this.errorMsg = pro;
      },
      errorResponse => {
        console.log("3");
        this.errorMsg = errorResponse;
        console.log(this.errorMsg);
      }
    );
  }
  getLatestContributions() {
    this.KhamsatService.GetspesificCommunityType(2).subscribe
      (Community => {
        for (let i = 0; i < Community.length; i++) {
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
