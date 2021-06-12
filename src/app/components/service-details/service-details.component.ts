import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icart } from 'src/app/Shared/icart';
import { IRate } from 'src/app/Shared/irate';
import { Iservice } from 'src/app/Shared/iservice';
import { CartService } from 'src/Services/cart.service';
import { RateService } from 'src/Services/rate.service';
import { ServiceService } from 'src/Services/service.service';
import { SubjectService } from 'src/Services/subject.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  @ViewChild("alertModel")
  alertModel!: ElementRef;

  serviceId!: number;
  service: Iservice = {
    description: "",
    title: "",
    duration: 0,
    id: 0,
    images: "",
    instructionsToBuyer: "",
    keywords: "",
    subCategoryID: 0,
    userID: "",
    serviceDevelopmentsVM: []

  }

  rates: IRate[] = []

  keyWords: string[] = [];

  constructor(private serService: ServiceService, private router: Router
    , private activatedroute: ActivatedRoute
    , private rateService: RateService
    , private cartService: CartService
    , private subjectService: SubjectService) {
    this.activatedroute.params.subscribe(data => {
      this.serviceId = data.id;
    })
  }

  ngOnInit(): void {
    this.serService.getService(this.serviceId).subscribe(
      data => {
        this.service = data; 
        this.keyWords = this.service.keywords.split(',');
        this.rateService.getServiceRates(this.service.id)
          .subscribe(
            data => this.rates = data
          )
      },
      err => console.log(err)
    )
  }

  addToCart(quantity: string) {
    console.log(quantity)
    let cartItem: Icart =
    {
      serviceId: this.serviceId,
      quantity: parseInt(quantity),
      id: 0,
      userId: "qq"
    }
    this.cartService.addCartItem(
      cartItem
    ).subscribe(
      data => {
        this.subjectService.sendClickEvent()
        this.alertModel.nativeElement.style.display = "block"

      }
    )


  }

  calculatePrice(quantity: string) {
    return 5 * parseInt(quantity)
  }

  buyNowClick() {
    this.router.navigate(["/cart"])
  }

  cancelClick() {
    this.alertModel.nativeElement.style.display = "none"

  }

}
