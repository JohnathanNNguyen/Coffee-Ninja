import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-email-sub',
  templateUrl: './email-sub.component.html',
  styleUrls: ['./email-sub.component.scss']
})
export class EmailSubComponent implements OnInit {
  subscription = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: { email: this.subscription.value.email }
    }
    this.router.navigate(['/email'], navigationExtras)
  }
}
