import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/ICategory';
import { LocalImage } from 'src/app/models/IServiceGallery';
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
  public response: {dbPath: ''};



  constructor(
    private service: ServiceService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
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
    subCategoryId: [''],
    description: [''],

    serviceGallery: this.fb.group({
      file: [''],
      localImage: [''],
      urlImage: [''],
      urlYoutube: [''],
    }),

    keywords: [''],
    duration: [''],
    InstructionsToBuyer: [''],

    addServiceDevelopment: this.fb.array([this.createServiceDevelopment()]),
    userId: ['']
  });

  createServiceDevelopment(): FormGroup {
    return this.fb.group({
      description: [''],
      price: [0],
      isIncreaseDuration: [true],
      duration: [0],
      // serviceId: [0],
    });
  }

  get title() {
    return this.addServiceForm.get('title');
  }

  get subCategoryId() {
    return this.addServiceForm.get('subCategoryId');
  }

  get description() {
    return this.addServiceForm.get('description');
  }

  get serviceGallery() {
    return this.addServiceForm.get('serviceGallery');
  }

  get localImage() {
    return this.addServiceForm['controls'].serviceGallery.get('localImage');
  }

  get urlImage() {
    return this.addServiceForm['controls'].serviceGallery.get(
      'urlImage'
    ) as FormArray;
  }

  get urlYoutube() {
    return this.addServiceForm['controls'].serviceGallery.get(
      'urlYoutube'
    ) as FormArray;
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

  get userId() {
    return this.addServiceForm.get('userId');
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
    // if(this.isShowGallery = false)
    this.isShowGallery = true;
    // else
    // this.isShowGallery = false;

    // console.log(this.isShowGallery);
  }

  stopClickOuside(e: any) {
    if(this.isShowGallery == false) {
      e.stopPropagation()
    }
    else {
      this.isShowGallery = true;
    }
  }

  // hideGallery() {
    
  //   this.isShowGallery = true;
  //   console.log(this.isShowGallery);
  // }

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
    if (this.serviceDevStyle == 'none') this.serviceDevStyle = 'block';
    else this.addServiceDevelopment.push(this.createServiceDevelopment());
  }
  removeServiceDevelopment(index: number) {
    this.addServiceDevelopment.removeAt(index);
  }

  changeDisplayDurationOfServiceDev(i: number) {
    const formGroup = this.addServiceDevelopment.controls[i] as FormGroup;
    formGroup.controls['isIncreaseDuration'].valueChanges.subscribe((value) => {
      console.log(value);
      if (formGroup.controls['isIncreaseDuration'].value == 'false')
        this.isShowDurationOfServiceDev = false;
      else this.isShowDurationOfServiceDev = true;
    });
  }

  imagesFile: File[];
  onFileChainge(e: any) {
    if(e.target.files.length > 0)
      this.imagesFile = e.target.files;

      this.uploadFile(this.imagesFile);
      this.isShowGallery = false;
  }

  // onSubmit() {
    
  // }

  addService(): void {
    console.log(this.service);
    var imagesName: LocalImage[] = []
    for (let i = 0; i < this.imagesFile.length; i++) {
      // imagesName.push(<LocalImage>{dbPath: this.imagesFile[i].name })
      console.log(this.imagesFile[i].name);
      
    }

    
    // console.log(this.subCategoryId);
    
    this.serviceGallery?.patchValue({
      localImage: imagesName,      
    });

    this.userId?.patchValue('32kjkjkls;jdf');

    // const data = <IService>{
    //   title: this.title?.value,
    //   subCategoryId: this.subCategoryId?.value,
    //   description: this.description?.value,
    //   serviceGallery: this.serviceGallery,
    //   keywords: this.keywords?.value,
    //   duration: this.duration?.value,
    //   instructionsToBuyer: this.InstructionsToBuyer?.value,
    //   serviceDevelopmentsVM: this.addServiceDevelopment.value,
    //   userID: '32kjkjkls;jdf',
    // };

    this.service.addService(this.addServiceForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['']);
      },
      (err) => console.log(err)
    );
  }

  createImgPath(name: string) {
    return `http://localhost:21491/StaticFiles/Images/${name}`;
  }

  images: any[];
  message: string;
  uploadFile(files: any) {
      // if (files.length === 0) {
      //   return;
      // }

      this.isShowImgItem = true;
      // console.log(files);

      const formData = new FormData();

      this.images = files;

      Array.from(this.images).map((file, index) => {
        return formData.append('file'+index, file, file.name);
      });

        // const headers = new HttpHeaders({
        //   'Content-Type': 'application/json',
        //   'Authorization': 'my-auth-token'
        // });

      this.http.post('http://localhost:21491/api/Upload', formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          // if (event.type === HttpEventType.UploadProgress)
          //   this.progress = Math.round(100 * event.loaded / event.total!);
          // if (event.type === HttpEventType.Response) {
          //   this.message = 'Upload success.';
          //   // this.onUploadFinished.emit(event.body);
          //   console.log(this.message);
          //   console.log('event-body' + event.body);
          // }

        });
    }

  // uploadFinished(event: any) {
  //   this.response = event;
  //   console.log(event);
  // }
}
