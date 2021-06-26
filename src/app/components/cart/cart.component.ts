import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/models/icart';
import { IService } from 'src/app/models/IService';
import { AuthenticationService } from 'src/Services/authentication.service';
import { CartService } from 'src/Services/cart.service';
import { OrderService } from 'src/Services/order.service';
import { ServiceService } from 'src/Services/service.service';
import { IncommingReqest } from 'src/app/models/incomming-reqest';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: ICart[] = [];
  totalPrice = 0

  serList: IService[] = []
  constructor(private serService: ServiceService,
    private cartService: CartService, private router: Router,
    private authenticationService: AuthenticationService,
    private orderService: OrderService) {

    if (!authenticationService.isLoggedIn()) {
      router.navigateByUrl("/login")
    }
    this.cartService.getCartByUserId().subscribe(
      data => {
        this.cart = data
        this.updateTotalPrice()

        for (let index = 0; index < this.cart.length; index++) {
          this.serService.getService(this.cart[index].serviceId)
            .subscribe(
              data => {
                this.cart[index].service = data
                this.cart[index].price = 0
              })
        }
      })
    this.serService.GetPageRecords(4, 1).subscribe
      (data => this.serList = data)
  }



  ngOnInit(): void {
  }

  createImgPath(name: string) {
    if (name != null) {
      return `http://localhost:21491/StaticFiles/Images/${name}`;

    }
    else return `https://via.placeholder.com/644x450`
  }
  calculatePrice(item: ICart, quan: string) {

    item.quantity = parseInt(quan)
    this.updateTotalPrice()
  }

  UpdataPrice(item: ICart, price: number, value: boolean) {
    if (item.price != null) {
      if (value) {
        item.price += price
      } else {
        item.price -= price
      }

      this.updateTotalPrice()
    }

  }

  updateTotalPrice() {
    this.totalPrice = 0
    for (let index = 0; index < this.cart.length; index++) {
      this.totalPrice += ((this.cart[index].price || 0) + 5) * (this.cart[index].quantity)

    }
  }

  removeItem(id: number) {
    this.cartService.deleteCartItem(id)
      .subscribe()
  }

  BuyBtnClick() {


    if (this.cart.length == 0) {
      alert("يجب عليك اضافة بعض الخدمات الى السلة اولا")
      return
    }

    let orders: IncommingReqest[]

    for (let i = 0; i < this.serList.length; i++) {
      let order: IncommingReqest = {
        buyerID: this.serList[i].userID,
        id: 0,
        date: new Date(),
        serviceID: this.serList[i].id,
        status: 0,
        sellerID: this.authenticationService.getUserId(),
        price: this.cart[i].quantity * 5

      }
      for (let index = 0; index < this.cart.length; index++) {
        this.cartService.deleteCartItem( this.cart[index].id).subscribe()
        
      }
      this.router.navigateByUrl("/orders/1")
      this.orderService.addIncommingReqest(order).subscribe()

    }


  }

}
