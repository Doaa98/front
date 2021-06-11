import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IService } from '../app/models/IService';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // ,'Authorization': 'my-auth-token'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseURL = environment.url_Api + '/api/Services';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<IService[]> {
    return this.http.get<IService[]>(this.baseURL).pipe(
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }

  getSubCatServices(id: number): Observable<IService[]> {
    return this.http.get<IService[]>(this.baseURL + '/cat/' + id).pipe(
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }

  getService(id: number): Observable<IService> {
    return this.http.get<IService>(`${this.baseURL}/${id}`).pipe(
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }

  addService(service: IService) {
    return this.http.post(this.baseURL, service, httpOptions).pipe(
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }

  updateService(id: number, ser: IService) {
    return this.http.put(`${this.baseURL}/${id}`, ser, httpOptions).pipe(
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }

  getCatServices(id: number): Observable<IService[]> {
    return this.http
      .get<IService[]>(this.baseURL + '/category/' + id)
      .pipe(
        catchError((err) => {
          return throwError(err.message);
        })
      );
  }

  deleteService(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`).pipe(
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }
}
