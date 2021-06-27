import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  type: number
  incomming: IncommingReqest[]
  purchases: IncommingReqest[]
  DisplayList: IncommingReqest[]
  AllList: IncommingReqest[]


  constructor(private orderService: OrderService, private authService: AuthenticationService
    , private activatedroute: ActivatedRoute, private router: Router
  ) {
    if (!authService.isLoggedIn()) {
      router.navigateByUrl("/login")
    }

    this.activatedroute.params.subscribe(data => {
      this.type = data.type;
    });

  }

  AwaitingInstructions=true
  BeingImplemented=true
  AwaitingReceipt=true
  ItHasBeenDelivred=true
  Canceled=true

  ngOnInit(): void {
    if (this.type == 0) {
      this.orderService.getIncommingReqests(this.userId)
        .subscribe(
          data => {
            this.incomming = data;
            this.AllList = JSON.parse(JSON.stringify( data))
            this.DisplayList = JSON.parse(JSON.stringify( data))
          }
          , err => console.log(err)
        )

    }
    else {
      this.orderService.getPurchases(this.userId)
        .subscribe(data => {
          this.purchases  = data;
          this.AllList = JSON.parse(JSON.stringify( data))
          this.DisplayList = JSON.parse(JSON.stringify( data))
        }
          , err => console.log(err)
        )
    }
  }

  calculateCount(state: number) {
    return this.AllList.filter(s => s.status == state).length
  }

  filiterList(){
    
   this.DisplayList = this.AllList.filter(l=>
       (this.AwaitingInstructions && l.status == 0) ||
       (this.BeingImplemented && l.status == 1  ) ||
       (this.AwaitingReceipt && l.status == 2) ||
       (this.ItHasBeenDelivred && l.status == 3) ||
       (this.Canceled && l.status == 4)
       
    )
  }
}


