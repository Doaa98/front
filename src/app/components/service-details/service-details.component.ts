import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRate } from 'src/app/models/IRate';
import { IService } from 'src/app/models/IService';
import { RateService } from 'src/Services/rate.service';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  serviceId!: number;
  service: IService = {
    description: "",
    title: "",
    duration: 0,
    id: 0,
    images: "",
    instructionsToBuyer: "",
    keywords: "",
    subCategoryName: "",
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
