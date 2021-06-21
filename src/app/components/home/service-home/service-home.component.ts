import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { CategoryService } from 'src/Services/category.service';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-service-home',
  templateUrl: './service-home.component.html',
  styleUrls: ['./service-home.component.css']
})
export class ServiceHomeComponent implements OnInit {
  CatList: ICategory[] = []

  constructor( private serService: ServiceService
    , private catService: CategoryService) { }

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(
      data => { this.CatList = data;
      for (let index = 0; index < this.CatList.length; index++) {
        
        this.serService.getCatServices(this.CatList[index].id)
        .subscribe(
          data=>{this.CatList[index].services = data,
          console.log(data)},
          err=>console.log(err)
        )
        
      }
      }
    )
  }
  createImgPath(name: string) {
    if (name != null) {
          return `http://localhost:21491/StaticFiles/Images/${name}`;

    }
    else return `https://via.placeholder.com/150`
  }
}
