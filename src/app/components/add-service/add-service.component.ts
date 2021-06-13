import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/ICategory';
import { ISubCategory } from 'src/app/models/ISubCategory';
import { CategoryService } from 'src/Services/category.service';
import { ServiceService } from 'src/Services/service.service';
import { SubCategoryService } from 'src/Services/sub-category.service';
import { IService } from '../../models/IService';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit {

  isShowModal: boolean = false;
  isCategoryChanged: boolean = false;
  isShowGallery: boolean = false;
  isShowInputUrlImg: boolean = false;
  isShowInputYoutube: boolean = false;
  isShowChooseImg: boolean = true;
  isShowImgItem: boolean = false;
  isShowUploadImgBtn: boolean = false;
  isShowDurationOfServiceDev: boolean = true;
  

  serviceDevStyle = 'none';
  durationOfServiceDevStyle = 'inline';
  dialogOfGalleryStyle = 'inline';
  categoryList: ICategory[] = [];
  subCategoryListLoaded: ISubCategory[] = [];
  selectedSubCategoryList: ISubCategory[] = [];
  progress: number = 0;
  
  constructor(
    private service: ServiceService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categoryList = data;
    });

    this.subCategoryService.getAllSubCategories().subscribe((data) => {
      this.subCategoryListLoaded = data;
    });
  }

  // service:IService ={
  //   description:"",
  //   title:"",
  //   duration:0,
  //   id:0,
  //   images:"",
  //   instructionsToBuyer:"",
  //   keywords:"",
  //   subCategoryName:"",
  //   userID:"",
  //   serviceDevelopmentsVM:[]

  // }

  

  addServiceForm = this.fb.group({
    title: [''],
    subCategoryName: [''],
    description: [''],

    serviceGallery: this.fb.group({
      localImage: this.fb.array([]),
      urlImage: this.fb.array([]),
      urlYoutube: this.fb.array([]),
    }),

    keywords: [''],
    duration: [''],
    InstructionsToBuyer: [''],

    addServiceDevelopment: this.fb.array([this.createServiceDevelopment()]),
  });

  createServiceDevelopment(): FormGroup {
    return this.fb.group({
      description: [''],
      price: [0],
      isIncreaseDuration: [true],
      duration: [0],
      serviceId: [0],
    });
  }

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
    const selectedCategoryId = e.target.value;
    this.selectedSubCategoryList = this.subCategoryListLoaded.filter(
      (subCategory) => subCategory.categoryID == selectedCategoryId
    );

    if (this.selectedSubCategoryList.length == 0)
      this.isCategoryChanged = false;

    // console.log(this.selectedCategoryId);
    // console.log(this.selectedSubCategoryList);
  }

  showGallery() {
    console.log(this.isShowGallery);
    // if(this.isShowGallery = false)
      this.isShowGallery = true;
    // else 
    // this.isShowGallery = false;

    // console.log(this.isShowGallery);


      
  }

  hideGallery() {
    console.log(this.isShowGallery);
    this.isShowGallery = false;
    console.log(this.isShowGallery);

  }

  // changeDisplayDialogOfGallery() {
  //   console.log(this.dialogOfGalleryStyle);
    
  //   this.dialogOfGalleryStyle = 'none';

  //   console.log(this.dialogOfGalleryStyle);

  // }

  showInputUrlImg() {
    this.isShowInputUrlImg = true;
    this.isShowChooseImg = false;
    this.isShowInputYoutube = false;
  }

  showInputYoutube() {
    this.isShowInputYoutube = true;
    this.isShowChooseImg = false;
    this.isShowInputUrlImg = false;
  }

  showLocalImg() {
    this.isShowChooseImg = true;
    this.isShowInputYoutube = false;
    this.isShowInputUrlImg = false;
  }

  onFileChange(e: any) {
    if (e.target.files.length > 0) this.isShowImgItem = true;
  }

  addNewServiceDevelopment() {
    if(this.serviceDevStyle == 'none')
      this.serviceDevStyle = 'block';
    else 
      this.addServiceDevelopment.push(this.createServiceDevelopment());
  }
  removeServiceDevelopment(index: number) {
    this.addServiceDevelopment.removeAt(index);
  }

  changeDisplayDurationOfServiceDev(i: number) {
    const formGroup = this.addServiceDevelopment.controls[i] as FormGroup;
    formGroup.controls['isIncreaseDuration'].valueChanges.subscribe(value => {
        console.log(value);
        if(formGroup.controls['isIncreaseDuration'].value == 'false')
          this.isShowDurationOfServiceDev = false;
        else 
        this.isShowDurationOfServiceDev = true;
    });
     
  }
  // addService() {
  //   console.log(this.service)
  //   this.serService.addService(this.service)

  //     .subscribe(
  //       data =>{ console.log(data);
  //        // this.router.navigateByUrl("")
  //       },
  //       err => console.log(err)
  //     )
  // }


  change(e: any) {
    console.log(e.target.value);
    
  }



  uploadFile(files: any) {
    this.service.uploadImgs(files).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round(100 * event.loaded / event.total!);
          else if (event.type === HttpEventType.Response) {
            // this.message = 'Upload success.';
            // this.onUploadFinished.emit(event.body);
          }
        });
    }


}
