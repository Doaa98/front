import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/models/icart';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Url:string = environment.url_Api + "/api/ShoppingCartItems"

  constructor(private http: HttpClient , private authService: AuthenticationService) { }

  userId = this.authService.getUserId()
  getCartByUserId( ): Observable<ICart[]> {
 
    return this.http.get<ICart[]>(`${this.Url}/user/${this.userId}` )

  };

  addCartItem(cartItem: ICart) {
   
    return this.http.post(this.Url, cartItem)

  }

  deleteCartItem(id:number) {
   
    return this.http.delete(`${this.Url}/${id}` )
  }
}
