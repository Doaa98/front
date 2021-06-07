import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { customkhamsat, KhamsatCommunityVM, khamsatcommunity_withcomments } from 'src/app/Classes/KhamsatCommunity';
@Injectable({
  providedIn: 'root'
})
export class KhamsatCommunityService {

  constructor(private http:HttpClient) { }
  url='http://localhost:21491/api/KhamsatCommunity';
  addKhamsatCommunity(khamsatCommunity:customkhamsat): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(khamsatCommunity);

    return this.http.post<customkhamsat>(this.url, body,{headers:headers})
}

    returnAllCommunity():Observable<KhamsatCommunityVM[]>
    {
       return this.http.get<KhamsatCommunityVM[]>(this.url).pipe(catchError((err)=>
        {

          return throwError(err.message ||"Internal Server error contact site adminstarator");
        }));
    }

getKhamsatCommunityById(id:any):Observable<khamsatcommunity_withcomments>
{
  return this.http.get<khamsatcommunity_withcomments>(this.url+'/'+id).pipe(catchError((err)=>
  {

    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));
}
}

