import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})

export class BuyerInfoService {
  allBuyerInfo: any = [];
  allBillingInfo: any = []
  constructor(
    // private shoppingCartService: ShoppingCartService
  ) { }
}
