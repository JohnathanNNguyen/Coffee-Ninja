import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss']
})
export class EmptyCartComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    private router: Router) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close(true)
  }
  onCoffee() {
    this.router.navigate(['/product'])
    this.dialogRef.close(true)
  }
}
