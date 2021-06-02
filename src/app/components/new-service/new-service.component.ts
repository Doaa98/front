import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../Services/service.service';
import { Iservice } from './../../Shared/iservice';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {
    ser:Iservice={
      Description:"",
      Title:"",
      Duration:3,
      ID:0,
      Images:"",
      InstructionsToBuyer:"",
      Keywords:"",
      SubCategoryID:0,
      UserID:"",
      serviceDevelopmentsVM:[]
      
    }

  constructor(private serService: ServiceService, private router: Router) { }
  ngOnInit(): void {
  }

  addService() {

    this.serService.addService(this.ser)
      .subscribe(
        data =>{ console.log(data);
         // this.router.navigateByUrl("")
        },
        err => console.log(err)
      )
  }

}
