import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ICategory } from 'src/app/models/ICategory';
import { ISubCategory } from 'src/app/models/ISubCategory';
import { CategoryService } from 'src/Services/category.service';
import { ServiceService } from 'src/Services/service.service';
import { SubCategoryService } from 'src/Services/sub-category.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit {
  isShowModal: boolean = false;
  isCategoryChanged: boolean = false;
  categoryList: ICategory[] = [];
  subCategoryListLoaded: ISubCategory[] = [];
  selectedSubCategoryList: ISubCategory[] = [];
  selectedCategoryId?: number;

  constructor(
    private service: ServiceService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categoryList = data;
    });

    this.subCategoryService.getAllSubCategories().subscribe((data) => {
      this.subCategoryListLoaded = data;
    });

  }

  addServiceForm = this.fb.group({
    title: [''],
    subCategoryName: [''],
    description: [''],

    serviceGallery: this.fb.group({
      localImage: [''],
      urlImage: [''],
      youtubeVideo: [''],
    }),

    keywords: [''],
    duration: [''],
    InstructionsToBuyer: [''],

    addServiceDevelopment: this.fb.array([]),
  });

  get title() {
    return this.addServiceForm.get('title');
  }

  get subCategoryName() {
    return this.addServiceForm.get('subCategoryName');
  }

  get description() {
    return this.addServiceForm.get('description');
  }

  get localImage() {
    return this.addServiceForm['controls'].serviceGallery.get('localImage');
  }

  get urlImage() {
    return this.addServiceForm['controls'].serviceGallery.get('urlImage');
  }

  get youtubeVideo() {
    return this.addServiceForm['controls'].serviceGallery.get('youtubeVideo');
  }

  get keywords() {
    return this.addServiceForm.get('keywords');
  }

  get duration() {
    return this.addServiceForm.get('duration');
  }

  get InstructionsToBuyer() {
    return this.addServiceForm.get('InstructionsToBuyer');
  }

  get addServiceDevelopment() {
    return this.addServiceForm.get('addServiceDevelopment') as FormArray;
  }

  showModal() {
    this.isShowModal = !this.isShowModal;
  }

  changeCategory(e: any) {
    this.isCategoryChanged = true;
    this.selectedCategoryId = e.target.value;
    this.selectedSubCategoryList = this.subCategoryListLoaded.filter(
      (subCategory) => subCategory.categoryID == this.selectedCategoryId
    );

    if(this.selectedSubCategoryList.length == 0) this.isCategoryChanged = false;

    // console.log(this.selectedCategoryId);
    // console.log(this.selectedSubCategoryList);
  }

  // change() {

  //   console.log(this.InstructionsToBuyer?.value);
    
  // }

}
