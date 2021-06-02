import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iservice } from 'src/app/Shared/iservice';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  
  serviceId!:number;
  service:Iservice ={
    description:"",
    title:"",
    duration:0,
    id:0,
    images:"",
    instructionsToBuyer:"",
    keywords:"",
    subCategoryID:0,
    userID:"",
    serviceDevelopmentsVM:[]
    
  }

  constructor(private serService: ServiceService, private router: Router
    , private activatedroute: ActivatedRoute) {
      this.activatedroute.params.subscribe(data => {
        this.serviceId = data.id;
      })
     }

  ngOnInit(): void {
    this.serService.getService(this.serviceId).subscribe(
      data => {this.service = data ;console.log(data)},
      err => console.log(err)
    )
  }

}
