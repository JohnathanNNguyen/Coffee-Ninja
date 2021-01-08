import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { CartCounterService } from 'src/app/shared/cart-counter.service';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-items',
  templateUrl: './shopping-cart-items.component.html',
  styleUrls: ['./shopping-cart-items.component.scss']
})
export class ShoppingCartItemsComponent implements OnInit {
  myShoppingCart: Product[] = []
  totalPrice: number = 0;
  constructor(
    private shoppingCart: ShoppingCartService,
    private cartCounterService: CartCounterService) {
  }

  ngOnInit(): void {
    this.myShoppingCart = this.shoppingCart.shoppingCart;
    this.totalPrice = this.shoppingCart.cartTotal;
    this.shoppingCart.updateCart
      .subscribe(() => {
        this.totalPrice = this.shoppingCart.cartTotal
      })
  }
  onRemoveItem(item: Product, index: number) {
    this.cartCounterService.itemRemoved()
    this.shoppingCart.onRemoveItem(item, index)
  }
}
