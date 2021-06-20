import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRate } from 'src/app/models/IRate';
import { IService } from 'src/app/models/IService';
import { ICart } from 'src/app/models/icart';
import { CartService } from 'src/Services/cart.service';
import { RateService } from 'src/Services/rate.service';
import { ServiceService } from 'src/Services/service.service';
import { SubjectService } from 'src/Services/subject.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent implements OnInit {
  @ViewChild('alertModel')
  alertModel!: ElementRef;

  serviceId!: number;
  service: IService = {
    description: '',
    title: '',
    duration: 0,
    id: 0,
    instructionsToBuyer: '',
    keywords: '',
    subCategoryId: 0,
    userID: '',
    serviceDevelopmentsVM: [],
  };

  rates: IRate[] = [];

  keyWords: string[] = [];

  constructor(
    private serService: ServiceService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private rateService: RateService,
    private cartService: CartService,
    private subjectService: SubjectService
  ) {
    this.activatedroute.params.subscribe((data) => {
      this.serviceId = data.id;
    });
  }

  ngOnInit(): void {
    this.serService.getService(this.serviceId).subscribe(
      (data) => {
        this.service = data;
        console.log(data);
        this.keyWords = this.service.keywords.split(',');
        this.rateService
          .getServiceRates(this.serviceId)
          .subscribe((data) => (this.rates = data));
      },
      (err) => console.log(err)
    );
  }

  addToCart(quantity: string) {
    console.log(quantity);
    let cartItem: ICart = {
      serviceId: this.serviceId,
      quantity: parseInt(quantity),
      id: 0,
      userId: 'qq',
    };
    this.cartService.addCartItem(cartItem).subscribe((data) => {
      this.subjectService.sendClickEvent();
      this.alertModel.nativeElement.style.display = 'block';
    });
  }

  calculatePrice(quantity: string) {
    return 5 * parseInt(quantity);
  }

  buyNowClick() {
    this.router.navigate(['/cart']);
  }

  cancelClick() {
    this.alertModel.nativeElement.style.display = 'none';
  }
}
