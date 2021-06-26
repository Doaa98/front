import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncommingReqest } from 'src/app/models/incomming-reqest';
import { IService } from 'src/app/models/IService';
import { IUser } from 'src/app/models/IUser';
import { AuthenticationService } from 'src/Services/authentication.service';
import { OrderService } from 'src/Services/order.service';
import { RateService } from 'src/Services/rate.service';
import { RegisterService } from 'src/Services/register.service';
import { ServiceService } from 'src/Services/service.service';
import { SubjectService } from 'src/Services/subject.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderId:number
  Order:IncommingReqest
  service:IService
  seller:IUser
  buyer:IUser
  userId = this.authService.getUserId()

  constructor(private serService: ServiceService, private router: Router
    , private activatedroute: ActivatedRoute
    , private rateService: RateService
    , private subjectService: SubjectService
    , private authService: AuthenticationService
    , private orderService: OrderService
    , private _registerService: RegisterService) {


      this.activatedroute.params.subscribe(data => {
        this.orderId = data.id;
      });
     }

  ngOnInit(): void {

    this.orderService.getIncommingReqest(this.orderId)
    .subscribe(d=>{
      console.log(d)
      this.Order = d
      this.serService.getService(this.Order.serviceID||0)
      .subscribe(ser=>{
        console.log(ser)
      this.service = ser
      })

      this._registerService.getUserById(this.Order.sellerID).subscribe(
        user => this.seller = user
      )
      this._registerService.getUserById(this.Order.buyerID).subscribe(
        user => this.buyer =user
      )
    })
  }



  sendAcceptRequest(){
    this.Order.status = 2;
    this.orderService.updateIncommingReqest(this.orderId,this.Order).subscribe()
  }
  cancelOrder(){
    this.Order.status = 4;
    this.orderService.updateIncommingReqest(this.orderId,this.Order).subscribe()
  }
  AcceptOrder(){
    this.Order.status = 3;
    this.orderService.updateIncommingReqest(this.orderId,this.Order).subscribe()
  }
}
