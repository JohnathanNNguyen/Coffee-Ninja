import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  myShoppingCart: Product[] = []
  totalPrice: number = 0;
  salesTax: number = 0;
  constructor(
    private shoppingCart: ShoppingCartService) {
    // this.salesTax = this.shoppingCart.salesTax *= this.shoppingCart.cartTotal
  }

  ngOnInit(): void {
    this.myShoppingCart = this.shoppingCart.shoppingCart;
    this.totalPrice = this.shoppingCart.cartTotal;
  }

}
