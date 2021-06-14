import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/ICategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  Url:string = environment.url_Api + "/api/Categories"

  constructor(private http: HttpClient) { }

  getAllCategories( ): Observable<ICategory[]> {
 
    return this.http.get<ICategory[]>(this.Url )

  };

  getCategory( id:number ): Observable<ICategory> {
 
    return this.http.get<ICategory>(this.Url+"/"+id )

  };

}
