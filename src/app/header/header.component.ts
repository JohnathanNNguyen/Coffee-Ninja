import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CartCounterService } from '../shared/cart-counter.service';
import { ShoppingCartModalComponent } from './shopping-cart-modal/shopping-cart-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemsInCart: number = 0;
  bsModalRef!: BsModalRef;
  modalRef!: BsModalRef;
  navbarOpen = false
  constructor(
    private cartCounter: CartCounterService,
    private modalService: BsModalService) {
  }

  ngOnInit(): void {

    this.cartCounter.cartChanged
      .subscribe(() => {
        this.itemsInCart = this.cartCounter.numberOfItemsInCart
      }
      )
  }
  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(ShoppingCartModalComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onEmptyCart(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }
}

