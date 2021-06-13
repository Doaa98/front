import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KhamsatCommunity, SubjectCategory } from 'src/app/models/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-addnew-model-implemented',
  templateUrl: './addnew-model-implemented.component.html',
  styleUrls: ['./addnew-model-implemented.component.css']
})
export class AddnewModelImplementedComponent implements OnInit {

  constructor(private fb:FormBuilder,private khamsatCommunityService:KhamsatCommunityService,private router :Router) { }
  communityList:KhamsatCommunity []=[];
  errorMsg: any;
  dataSaved=false;
  massage: string = '';
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
   this.getCommunity();
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

  getCommunity(){
    this.khamsatCommunityService.returnAllCommunity().subscribe((Data)=>{
      this.communityList=Data;
    },(err)=>{
    this.errorMsg=err;
    })
  }
Reset() {  
  this.addCommunityForm.reset();  
 } 
addcommunity(community: KhamsatCommunity) {  
  debugger;  
  community.ID = this.CommunityId;  
  this.khamsatCommunityService.addKhamsatCommunity(community).subscribe(  
   () => {  
    this.dataSaved = true;  
    this.massage = 'Record saved Successfully';  
    this.Reset();  
    this.CommunityId = 0; 
    this.getCommunity();      
   });  
   this.router.navigate(['/aboutKhamsat']);
 }

}
