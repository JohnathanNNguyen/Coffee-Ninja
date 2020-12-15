import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyerInfoService } from '../buyer-info.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  hasAptNum: boolean = false;
  buyerInfo;
  buyerParams;
  orderNumber: number = 0;
  shipDate: Date = new Date;
  constructor(
    private buyerInfoService: BuyerInfoService,
    private route: ActivatedRoute) {
    this.buyerParams = this.route.snapshot.queryParams
    this.buyerInfo = this.buyerInfoService.allBuyerInfo
    this.shipDate.setDate(this.shipDate.getDate() + 7)
  }

  ngOnInit(): void {
    console.log(this.buyerParams, 1)
    console.log(this.buyerInfo, 3)
    this.orderNumber = Math.floor(100000000 + Math.random() * 900000000)
  }

}
