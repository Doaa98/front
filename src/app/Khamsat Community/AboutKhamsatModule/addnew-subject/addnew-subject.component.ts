import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  dataSaved=false;
  massage: string;
  CommunityId: number=0;
  addCommunityForm:any;
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

Reset() {  
  this.addCommunityForm.reset();  
 } 
addcommunity(community: customkhamsat) {  
  community.ID = this.CommunityId;  
  this.khamsatCommunityService.addKhamsatCommunity(community).subscribe(  
   () => {  
    this.dataSaved = true;  
    this.massage = 'Record saved Successfully';  
    this.Reset();  
    this.CommunityId = 0;     
   });  
   this.router.navigate(['/aboutKhamsat']);
 } 

}
