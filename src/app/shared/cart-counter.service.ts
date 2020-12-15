import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  cartChanged = new EventEmitter<number>()
  numberOfItemsInCart: number = 0;
  constructor() { }

  itemAdded() {
    this.numberOfItemsInCart++;
    this.cartChanged.emit(this.numberOfItemsInCart)
  }
  itemRemoved() {
    this.numberOfItemsInCart--;
    this.cartChanged.emit(this.numberOfItemsInCart)
  }
}
