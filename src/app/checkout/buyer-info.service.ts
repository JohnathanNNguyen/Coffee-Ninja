import { Injectable } from "@angular/core";
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})

export class BuyerInfoService {
  allBuyerInfo: any = [];

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }


}
