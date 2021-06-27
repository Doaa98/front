import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/Services/authentication.service';
import { KhamsatCommunityService } from '../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-addnew-subject',
  templateUrl: './addnew-subject.component.html',
  styleUrls: ['./addnew-subject.component.css']
})
export class AddnewSubjectComponent implements OnInit {

  constructor(private fb: FormBuilder, private khamsatCommunityService: KhamsatCommunityService, private router: Router
    , private authenticationService: AuthenticationService) {
      if(!authenticationService.isLoggedIn()){
        router.navigateByUrl("/login")
      }

  }
  errorMsg: any;
  addCommunityForm: any;
  newsubject: any;

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
      subject: this.Subject.value,
      date: null,
      userID: this.authenticationService.getUserId()

    }

    console.log(this.newsubject);
    this.khamsatCommunityService.addKhamsatCommunity(this.newsubject).subscribe(
      pro => {
        console.log("1");
        this.errorMsg = pro;
        console.log("res:" + this.errorMsg)//for test
        if (this.newsubject.subject == "0"){
          this.router.navigate(['/ModelImplementd']);
        }
        else  if (this.newsubject.subject == "1"){
          this.router.navigate(['/NotFoundService']);
        }
        else  if (this.newsubject.subject == "2"){
          this.router.navigate(['/UserExp']);
        }
        else  if (this.newsubject.subject == "3"){
          this.router.navigate(['/aboutKhamsat']);
        }
      },
      errorResponse => {
        this.errorMsg = errorResponse;
        console.log(this.errorMsg);
      }
    );
  }

}
