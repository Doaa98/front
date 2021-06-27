import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IChat } from 'src/app/models/ichat';
import { IMessage } from 'src/app/models/imessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  Url:string = environment.url_Api + "/api/Chats"

  constructor(private http: HttpClient) { }

  getChat( id:number): Observable<IChat> {
 
    return this.http.get<IChat>(this.Url + "/"+ id ).pipe(catchError((err)=>
    {
  
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));

  }
  addChat( chat:IChat): Observable<number> {
 
    return this.http.post<number>(this.Url ,chat).pipe(catchError((err)=>
    {
  
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));

  }

  getInboxMessages( id:string): Observable<IChat[]> {
 
    return this.http.get<IChat[]>(this.Url+"/freelancer/"+id ).pipe(catchError((err)=>
    {
  
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));

  }

  getOutboxMessages( id:string): Observable<IChat[]> {
 
    return this.http.get<IChat[]>(this.Url+"/user/"+id ).pipe(catchError((err)=>
    {
  
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));

  }

  
sendMessage(Message: IMessage) {
  

  return this.http.post(this.Url+"/message", Message).pipe(catchError((err)=>
  {

    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));

}
}
