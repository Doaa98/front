import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncommingReqest } from 'src/app/models/incomming-reqest';
import { AuthenticationService } from 'src/Services/authentication.service';
import { OrderService } from 'src/Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  userId = this.authService.getUserId()
  type:number
  incomming:IncommingReqest[]
  purchases:IncommingReqest[]
  DisplayList:IncommingReqest[]

  constructor(private orderService : OrderService , private authService: AuthenticationService  
     , private activatedroute: ActivatedRoute
    ) {

      this.activatedroute.params.subscribe(data => {
        this.type = data.type;
      });

   }

  ngOnInit(): void {
if (this.type == 0) {
  this.orderService.getIncommingReqests(this.userId)
  .subscribe(data=> this.incomming = data)

}
else 
{
  this.orderService.getPurchases(this.userId)
  .subscribe(data=> this.purchases = data)

}

  }

}
