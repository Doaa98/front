import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
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
    console.log(service)
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
    return this.http.get<IService[]>(this.baseURL + '/category/' + id).pipe(
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }

  getCatAllServices(id:number): Observable<IService[]> {
    return this.http.get<IService[]>(this.baseURL +"/category/All/"+id, httpOptions)
  }

  GetPageRecords(pageSize: number, pageNumber: number): Observable<IService[]> {
    return this.http.get<IService[]>(
      `${this.baseURL}/${pageSize}/${pageNumber}`,
      httpOptions
    );
  }

  deleteService(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`).pipe(
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }

  // uploadImgs(files: any): Observable<HttpEvent<Object>> {
  //   if (files.length !== 0) {
  //     return;
  //   }

  //   let filesToUpload: File[] = files;
  //   const formData = new FormData();

  //   Array.from(filesToUpload).map((file, index) => {
  //     return formData.append('file' + index, file, file.name);
  //   });

  //   return this.http.post('https://localhost:5001/api/upload', formData, {
  //     reportProgress: true,
  //     observe: 'events',
  //   });
  // }
  
}
