import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { khamsatcommunity_withcomments } from 'src/app/Classes/KhamsatCommunity';
import { KhamsatCommunityService } from 'src/Services/KhamsatCommunityService';

@Component({
  selector: 'app-about-khamsat-details',
  templateUrl: './about-khamsat-details.component.html',
  styleUrls: ['./about-khamsat-details.component.css']
})
export class AboutKhamsatDetailsComponent implements OnInit {

  constructor(private KhamsatService:KhamsatCommunityService,private route: ActivatedRoute ,private router: Router) { }
  
  errorMsg: any;
  Khamsat:khamsatcommunity_withcomments;
  Id:number;
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.Id= this.route.snapshot.params['id'];
          this.KhamsatService.getKhamsatCommunityById(this.Id).subscribe(
           (res)=>
           {
             this.Khamsat=res;
             console.log(this.Khamsat.title,this.Khamsat.userFullName,this.Khamsat.userImage
              ,this.Khamsat.content,this.Khamsat.date)
              this.Khamsat._Comments.forEach(function(value){
                console.log(value);
              });
           },
         
           (errorResponse)=>
           {
            this.errorMsg=errorResponse;

            
           }
         );
     
       });
  }

} 
