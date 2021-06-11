import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../Services/service.service';
import { IService } from '../../models/IService';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {
  service:IService ={
    description:"",
    title:"",
    duration:0,
    id:0,
    images:"",
    instructionsToBuyer:"",
    keywords:"",
    subCategoryName:"",
    userID:"",
    serviceDevelopmentsVM:[]
    
  }

  constructor(private serService: ServiceService, private router: Router) { }
  ngOnInit(): void {
  }

  addService() {

    console.log(this.service)
    this.serService.addService(this.service)

      .subscribe(
        data =>{ console.log(data);
         // this.router.navigateByUrl("")
        },
        err => console.log(err)
      )
  }

}
