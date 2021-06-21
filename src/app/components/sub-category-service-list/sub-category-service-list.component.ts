import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Shared/icategory';
import { Iservice } from 'src/app/Shared/iservice';
import { ISubCategory } from 'src/app/Shared/isub-category';
import { CategoryService } from 'src/Services/category.service';
import { ServiceService } from 'src/Services/service.service';
import { SubCategoryService } from 'src/Services/sub-category.service';

@Component({
  selector: 'app-sub-category-service-list',
  templateUrl: './sub-category-service-list.component.html',
  styleUrls: ['./sub-category-service-list.component.css']
})
export class SubCategoryServiceListComponent implements OnInit {

  subCatId!: number;
  CatId!: number;
  Cat!: ICategory;
  subcat!: ISubCategory;
  subCatList: ISubCategory[] = []
  CatList: ICategory[] = []

  subCatServiceList: Iservice[] = [];

  constructor(private serService: ServiceService, private router: Router
    , private activatedroute: ActivatedRoute
    , private subCatService: SubCategoryService
    , private catService: CategoryService
  ) {

    this.activatedroute.params.subscribe(data => {
      this.subCatId = data.id;
      this.CatId = data.catId;
    })



    if (this.subCatId != null) {
      this.serService.getSubCatServices(this.subCatId).subscribe(
        data => this.subCatServiceList = data)
      this.subCatService.getSubCategory(this.subCatId).subscribe(
        d => { this.subcat = d }
      )
    } else {
      this.serService.getCatAllServices(this.CatId).subscribe(
        data => this.subCatServiceList = data)
      this.catService.getCategory(this.CatId).subscribe(
        d => this.Cat = d)
    }


    this.subCatService.getAllSubCategories().subscribe(
      data => { this.subCatList = data }

    )

    this.catService.getAllCategories().subscribe(
      data => { this.CatList = data }
    )
  }

  ngOnInit(): void {

  }

  countServices(catId: number): number {
    let count = 0;
    for (let index = 0; index < this.subCatList.length; index++) {
      if (this.subCatList[index].categoryID == catId) {
        count += this.subCatList[index].servicesCount;
      }

    }
    return count;

  }

}




