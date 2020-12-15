import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  updateCart = new EventEmitter<any>()
  shoppingCart: Product[] = [];
  cartTotal: number = 0;
  salesTax: number = .078;

  constructor(private products: ProductService) { }

  onAddToCart(item: Product) {
    this.shoppingCart.push(item)
    this.updateCart.emit(this.shoppingCart)
    this.cartTotal += item.price
  }
  onRemoveItem(item: Product, i: number) {
    this.shoppingCart.splice(i, 1)
    this.updateCart.emit(this.shoppingCart)
    this.cartTotal -= item.price
  }
}

