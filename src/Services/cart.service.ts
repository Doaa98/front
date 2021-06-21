import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icart } from 'src/app/Shared/icart';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Url:string = environment.url_Api + "/api/ShoppingCartItems"

  constructor(private http: HttpClient) { }

  getCartByUserId( id:string ): Observable<Icart[]> {
 
    return this.http.get<Icart[]>(`${this.Url}/user/${id}` )

  };

  addCartItem(cartItem: Icart) {
   
    return this.http.post(this.Url, cartItem)

  }

  deleteCartItem(id:number) {
   
    return this.http.delete(`${this.Url}/${id}` )
  }
}
