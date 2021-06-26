import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IncommingReqest } from 'src/app/models/incomming-reqest';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  Url:string = environment.url_Api + "/api/IncommingReqests"

  constructor(private http: HttpClient) { }

  addIncommingReqest( req:IncommingReqest): Observable<IncommingReqest> {
 
    return this.http.post<IncommingReqest>(this.Url ,req).pipe(catchError((err)=>
    {
  
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));

  }

  getIncommingReqests( id:string): Observable<IncommingReqest[]> {
 
    return this.http.get<IncommingReqest[]>(this.Url+"/buyer/"+id ).pipe(catchError((err)=>
    {
  
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));

  }

  getPurchases( id:string): Observable<IncommingReqest[]> {
 
    return this.http.get<IncommingReqest[]>(this.Url+"/seller/"+id ).pipe(catchError((err)=>
    {
  
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));

  }

  updateIncommingReqest( id:number, req:IncommingReqest): Observable<IncommingReqest> {
 
    return this.http.put<IncommingReqest>(`${this.Url}/${id}` ,req).pipe(catchError((err)=>
    {
  
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));

  }


}
