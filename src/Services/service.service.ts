import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iservice } from '../app/Shared/iservice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url:string = environment.url_Api + "/api/Services"
  constructor(private http: HttpClient) { }

  getAllServices(): Observable<Iservice[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,'Authorization': 'my-auth-token'
      })
    };
    return this.http.get<Iservice[]>(this.Url , httpOptions)
  }

  getSubCatServices(id:number): Observable<Iservice[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,'Authorization': 'my-auth-token'
      })
    };
    return this.http.get<Iservice[]>(this.Url +"/cat/"+id, httpOptions)
  }

  getService(id : number): Observable<Iservice> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,'Authorization': 'my-auth-token'
      })
    };
    return this.http.get<Iservice>(`${this.Url}/${id}` ,httpOptions)
  }

  addService(ser: Iservice) {
    

    return this.http.post(this.Url, ser)

  }


  updateService(id:number, ser: Iservice) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,'Authorization': 'my-auth-token'
      })
    };
    return this.http.put(`${this.Url}/${id}` , ser, httpOptions)

  }


  deleteCategory(id:number) {
   
    return this.http.delete(`${this.Url}/${id}` )
  }

}
