import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/models/icart';
import { IService } from 'src/app/models/IService';
import { AuthenticationService } from 'src/Services/authentication.service';
import { CartService } from 'src/Services/cart.service';
import { ServiceService } from 'src/Services/service.service';

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
    private authenticationService: AuthenticationService) {

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

}
