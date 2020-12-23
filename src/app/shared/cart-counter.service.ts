import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  cartChanged = new Subject<number>()
  numberOfItemsInCart: number = 0;
  constructor() { }

  itemAdded() {
    this.numberOfItemsInCart++;
    this.cartChanged.next(this.numberOfItemsInCart)
  }
  itemRemoved() {
    this.numberOfItemsInCart--;
    this.cartChanged.next(this.numberOfItemsInCart)
  }
  resetCart() {
    this.numberOfItemsInCart = 0
    this.cartChanged.next(this.numberOfItemsInCart)
  }
}
