import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KhamsatCommunity, SubjectCategory } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../../Services/KhamsatCommunityService';
import { customkhamsat, SubjectCategory } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-addnew-subject',
  templateUrl: './addnew-subject.component.html',
  styleUrls: ['./addnew-subject.component.css']
})
export class AddnewSubjectComponent implements OnInit {

  constructor(private fb:FormBuilder,private khamsatCommunityService:KhamsatCommunityService,private router :Router) { }
  errorMsg: any;
  addCommunityForm:any;
  newsubject:any;
  
  Subject: string[] = Object.values(SubjectCategory);

  ngOnInit(): void {
    this.addCommunityForm=this.fb.group({
      content:['',[Validators.required]],
      title:['',[Validators.required]],
      subject:['',[Validators.required]],
     // UserID:['',[Validators.required]],
    })
  }
  get content(){
    return this.addCommunityForm.get('content')
  }
  get title(){
    return this.addCommunityForm.get('title')
  }
  get subject(){
    return this.addCommunityForm.get('subject')
  }

 create(){
 this.newsubject={
  ID :0,
  content:this.content.value,
  title :this.title.value,
  subject : this.addCommunityForm.get('subject').value,
  Date :null,    
  userID:"2c20fb7b-f9bb-4ba5-9986-92bf67dc310a"

}
console.log(this.newsubject);
this.khamsatCommunityService.addKhamsatCommunity(this.newsubject).subscribe(
  pro=>{
    console.log("1");
    this.errorMsg=pro;
    console.log("2");
    console.log("res:"+this.errorMsg)//for test
    
   this.router.navigate(['/aboutKhamsat']);
  },
  errorResponse=>
  { console.log("3");
   this.errorMsg=errorResponse;
   console.log(this.errorMsg);
  }
  );
} 

}
