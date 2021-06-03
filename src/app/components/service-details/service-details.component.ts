import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRate } from 'src/app/Shared/irate';
import { Iservice } from 'src/app/Shared/iservice';
import { RateService } from 'src/Services/rate.service';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

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
    , private rateService: RateService) {
    this.activatedroute.params.subscribe(data => {
      this.serviceId = data.id;
    })
  }

  ngOnInit(): void {
    this.serService.getService(this.serviceId).subscribe(
      data => {
        this.service = data; console.log(data)
        this.keyWords = this.service.keywords.split(',');
        this.rateService.getServiceRates(this.service.id)
        .subscribe(
data=>this.rates =data
        )
      },
      err => console.log(err)
    )
  }

}
