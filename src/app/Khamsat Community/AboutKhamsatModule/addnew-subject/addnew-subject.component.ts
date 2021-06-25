import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customkhamsat, SubjectCategory } from 'src/app/models/KhamsatCommunity';
import { AuthenticationService } from 'src/Services/authentication.service';
import { KhamsatCommunityService } from '../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-addnew-subject',
  templateUrl: './addnew-subject.component.html',
  styleUrls: ['./addnew-subject.component.css']
})
export class AddnewSubjectComponent implements OnInit {

  constructor(private fb: FormBuilder, private khamsatCommunityService: KhamsatCommunityService, private router: Router
    ,private authenticationService: AuthenticationService) { }
  errorMsg: any;
  addCommunityForm: any;
  newsubject: any;

  Subjects: string[] = Object.values(SubjectCategory);

  ngOnInit(): void {
    this.addCommunityForm = this.fb.group({
      content: ['', [Validators.required]],
      title: ['', [Validators.required]],
      subject: ['', [Validators.required]],
    })
  }
  get content() {
    return this.addCommunityForm.get('content')
  }
  get title() {
    return this.addCommunityForm.get('title')
  }
  get Subject() {
    return this.addCommunityForm.get('subject')
  }

  create() {
    console.log(this.Subject.value)
    console.log(this.addCommunityForm.get('subject').value)
    this.newsubject = {
      ID: 0,
      content: this.content.value,
      title: this.title.value,
      subject:  0,
      Date: null,
      userID: this.authenticationService.getUserId()

    }

    console.log(this.newsubject);
    this.khamsatCommunityService.addKhamsatCommunity(this.newsubject).subscribe(
      pro => {
        console.log("1");
        this.errorMsg = pro;
        console.log("res:" + this.errorMsg)//for test

        this.router.navigate(['/aboutKhamsat']);
      },
      errorResponse => {
        this.errorMsg = errorResponse;
        console.log(this.errorMsg);
      }
    );
  }

}
