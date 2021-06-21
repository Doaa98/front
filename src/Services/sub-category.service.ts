import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubCategory } from 'src/app/models/ISubCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  Url:string = environment.url_Api + "/api/SubCategories"

  constructor(private http: HttpClient) { }



  getAllSubCategories( ): Observable<ISubCategory[]> {
 
    return this.http.get<ISubCategory[]>(this.Url)

  };

  getSubCategory( id:number ): Observable<ISubCategory> {
 
    return this.http.get<ISubCategory>(this.Url+"/"+id )

  };
  

}
