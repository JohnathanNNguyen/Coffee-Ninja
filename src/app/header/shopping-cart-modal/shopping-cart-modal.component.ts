import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent implements OnInit {
  title: string = '';
  closeBtnName: string = '';
  constructor(public bsModalRef: BsModalRef) { }
  ngOnInit(): void {
  }

}
