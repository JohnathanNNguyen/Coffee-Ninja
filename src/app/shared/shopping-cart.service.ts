import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../products/product.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  updateCart = new Subject<Product[]>()
  shoppingCart: Product[] = [];
  cartTotal: number = 0;
  constructor(private products: ProductService) { }

  onAddToCart(item: Product) {
    this.shoppingCart.push(item)
    this.updateCart.next(this.shoppingCart.slice())
    this.cartTotal += item.price
  }
  onRemoveItem(item: Product, i: number) {
    this.cartTotal -= item.price
    this.shoppingCart.splice(i, 1)
    this.updateCart.next(this.shoppingCart)
  }
}

