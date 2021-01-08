import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartCounterService } from '../shared/cart-counter.service';
import { ShoppingCartItemsComponent } from './shopping-cart-items/shopping-cart-items.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemsInCart: number = 0;
  navbarOpen = false
  constructor(
    private cartCounter: CartCounterService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.cartCounter.cartChanged
      .subscribe(() => {
        this.itemsInCart = this.cartCounter.numberOfItemsInCart
      }
      )
  }
  openDialog() {
    this.dialog.open(ShoppingCartItemsComponent);

  }
  openEmptyDialog() {
    this.dialog.open(EmptyCartComponent);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }
}

