import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../shared/product.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { CartCounterService } from '../shared/cart-counter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private shoppingCart: ShoppingCartService,
    private cartCounter: CartCounterService
  ) {
    this.products = this.productService.allProduct()
  }

  ngOnInit(): void {

  }
  onShoppingCart(item: Product) {
    this.shoppingCart.onAddToCart(item)
    this.cartCounter.itemAdded()
  }
}
