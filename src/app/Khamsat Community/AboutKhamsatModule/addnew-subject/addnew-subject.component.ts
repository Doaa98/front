import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KhamsatCommunity, SubjectCategory } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from '../../../../Services/KhamsatCommunityService';

@Component({
  selector: 'app-addnew-subject',
  templateUrl: './addnew-subject.component.html',
  styleUrls: ['./addnew-subject.component.css']
})
export class AddnewSubjectComponent implements OnInit {

  constructor(private fb:FormBuilder,private khamsatCommunityService:KhamsatCommunityService,private router :Router) { }
  communityList:KhamsatCommunity []=[];
  errorMsg: any;
  dataSaved=false;
  massage: string;
  CommunityId: number=0;
  addCommunityForm:any;
  subject: string[] = Object.values(SubjectCategory);
//   keys() : Array<string> {
//     var keys = Object.keys(this.subject);
//     return keys.slice(keys.length / 2);
// }
  ngOnInit(): void {
    this.addCommunityForm=this.fb.group({
      content:['',[Validators.required]],
      title:['',[Validators.required]],
      subject:['',[Validators.required]],
      
     // UserID:['',[Validators.required]],
    })
   this.getCommunity();
  }
  get Content(){
    return this.addCommunityForm.get('content')
  }
  get Title(){
    return this.addCommunityForm.get('title')
  }
  get Subject(){
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
