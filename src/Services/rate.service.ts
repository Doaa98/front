import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRate } from 'src/app/models/IRate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  Url:string = environment.url_Api + "/api/Rates"

  
  constructor(private http: HttpClient) { }


  getServiceRates( id:number): Observable<IRate[]> {
 
      return this.http.get<IRate[]>(this.Url+"/Service/"+id )

    };

    
  addRate(rate: IRate) {
    

    return this.http.post(this.Url, rate)

  }
}
