import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { CartCounterService } from 'src/app/shared/cart-counter.service';
import { BuyerInfoService } from '../buyer-info.service';

@Component({
  selector: 'app-buyer-info',
  templateUrl: './buyer-info.component.html',
  styleUrls: ['./buyer-info.component.scss']
})
export class BuyerInfoComponent implements OnInit {
  public readonly buyerInfo: FormGroup;
  public readonly billingInfo: FormGroup;
  submitForm: any;

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private buyerInfoService: BuyerInfoService,
    private cartCounter: CartCounterService
  ) {
    this.buyerInfo = this.fb.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required]),
      apt: new FormControl(null),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
      zipCode: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      cardNumber: new FormControl(null, [Validators.required, Validators.minLength(16)]),
      expiration: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      cvv: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      saveCardInfo: new FormControl(false)
    })
    this.billingInfo = this.fb.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      apt: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zipCode: new FormControl(null, [Validators.required]),
      Country: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  onSubmitOrder(value: FormGroup): void {
    this.cartCounter.resetCart()
    this.buyerInfoService.allBuyerInfo.push(value)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        first: this.buyerInfo.value.firstName,
        last: this.buyerInfo.value.lastName,
        email: this.buyerInfo.value.email,
      }
    }
    this.router.navigate(['/confirmation'], navigationExtras)
  }
}
