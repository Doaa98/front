import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentViewModel, khamsatcommunity_withcomments } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from 'src/Services/KhamsatCommunityService';

@Component({
  selector: 'app-models-implemented-details',
  templateUrl: './models-implemented-details.component.html',
  styleUrls: ['./models-implemented-details.component.css']
})
export class ModelsImplementedDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private KhamsatService: KhamsatCommunityService, private route: ActivatedRoute, private router: Router) { }
  addCommentForm: any;
  errorMsg: any;
  Khamsat: khamsatcommunity_withcomments;
  Comment: CommentViewModel;
  Id: number;
  length: number;

  latestContributions: any;
  ngOnInit(): void {
    this.addCommentForm = this.fb.group({
      content: ['', [Validators.required]]
    });
    this.route.queryParams.subscribe(params => {
      this.Id = this.route.snapshot.params['id'];
      this.KhamsatService.getKhamsatCommunityWithComment(this.Id).subscribe(
        (res) => {
          this.Khamsat = res;
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
      date: "2021-06-06T10:41:18.690Z",
      userID: "2",
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
    this.KhamsatService.GetspesificCommunityType(2).subscribe
      (Community => {
        for (let i = 0; i < Community.length ; i++) {
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
