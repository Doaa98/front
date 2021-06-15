import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommentViewModel, customkhamsat, KhamsatCommunityVM, khamsatcommunity_withcomments } from 'src/app/Classes/KhamsatCommunity';
@Injectable({
  providedIn: 'root'
})
export class KhamsatCommunityService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:21491/api/KhamsatCommunity';
  commenturl = 'http://localhost:21491/api/Comment';
  addKhamsatCommunity(khamsatCommunity: customkhamsat): Observable<any> {
    const httpOptions = {

      headers: new HttpHeaders({

        'Content-Type': 'application/json; charset=UTF-8',

      })

    }
    console.log("service");
    var obj = {
      id: khamsatCommunity.ID,
      content: khamsatCommunity.content,
      title: khamsatCommunity.title,
      subject: khamsatCommunity.subject,
      date: khamsatCommunity.Date,
      userID: khamsatCommunity.userID
    }
    console.log("send:" + JSON.stringify(obj))
    return this.http.post(this.url, obj, httpOptions).pipe(catchError((err) => {
      console.log("service");
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }

  //create comment
  addComment(_commentViewModel: CommentViewModel): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(_commentViewModel);
    console.log("service");
    return this.http.post(this.commenturl, body, { headers: headers }).pipe(catchError((err) => {
      console.log("service");
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }

  /*returnAllCommunity(): Observable<KhamsatCommunityVM[]> {
    return this.http.get<KhamsatCommunityVM[]>(this.url).pipe(catchError((err) => {

      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
  */

  //khamsatcommunity spesific without all for one type
  Gettypekhamsatcommunity(id: any): Observable<KhamsatCommunityVM[]> {
    console.log("service");
    return this.http.get<KhamsatCommunityVM[]>("http://localhost:21491/api/KhamsatCommunity/spesificType?s=" + id).pipe(catchError((err) => {
      console.log("service");
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }

  //khamsatcommunity spesific withcomment one by comment
  getKhamsatCommunityById(id: number): Observable<khamsatcommunity_withcomments> {
    console.log("service");
    return this.http.get<khamsatcommunity_withcomments>("http://localhost:21491/api/KhamsatCommunity/KhamsatCommunityWithComment/" + id).pipe(catchError((err) => {
      console.log("service");
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }

}

