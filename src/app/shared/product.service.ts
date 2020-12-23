import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  products: Product[] = [
    new Product(
      'Cold Brew',
      '32oz',
      10,
      '../../assets/product-1-cold-brew.jpg',
      'Sweet, chicory-laden perfection in a glass'
    ),
    new Product(
      'Colombian Blend',
      '12oz',
      15,
      '../../assets/product-2-colombian-blend.jpg',
      'Butterscotch, Lemongrass, Green Apple'
    ),
    new Product(
      'Hayes Valley',
      '12oz',
      14,
      '../../assets/product-3-chemex.jpg',
      'Baking chocolate, orange zest, brown sugar'
    ),
    new Product(
      '15ft Ceiling Espresso',
      '20oz',
      20,
      '../../assets/product-4-espresso-15ft.jpg',
      'Caramel, almond, dried cherry'
    ),
    new Product(
      'Rwanda Nyanza',
      '12oz',
      14,
      '../../assets/product-5-latte.jpg',
      'Candied mango, lemongrass, praline'
    ),
    new Product(
      'Robust Decaf',
      '16oz',
      12,
      '../../assets/product-6-robust-decaf.jpg',
      'Crème brûlée, vanilla, key lime'
    ),
    new Product(
      'Ambrosia Blend',
      '12oz',
      13,
      '../../assets/product-7-latte-beans.jpg',
      'Blackberry, Grape, Toast'
    ),
    new Product(
      'Ninja Sampler',
      '48 oz',
      50,
      '../../assets/product-8-sampler.jpg',
      'Our four best sellers'
    ),
    new Product(
      'Holiday Blend',
      '16oz',
      20,
      '../../assets/product-9-Holiday+Blend.jpg',
      'Limited blend with hint of nutmeg'
    )

  ]
  constructor(
  ) { }

  allProduct() {
    return this.products.slice()
  }

}