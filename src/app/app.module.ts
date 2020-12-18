import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { EmailSubComponent } from './home-page/email-sub/email-sub.component';
import { EmailSubbedComponent } from './home-page/email-subbed/email-subbed.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shared/shopping-cart/shopping-cart.component'
import { ShoppingCartModalComponent } from './header/shopping-cart-modal/shopping-cart-modal.component';
import { BuyerInfoComponent } from './checkout/buyer-info/buyer-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { CensoredPipe } from './pipes/censored.pipe';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartItemsComponent } from './header/shopping-cart-modal/shopping-cart-items/shopping-cart-items.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ProductsComponent,
    CheckoutComponent,
    FooterComponent,
    EmailSubComponent,
    EmailSubbedComponent,
    AboutUsComponent,
    BuyerInfoComponent,
    ShoppingCartComponent,
    ShoppingCartModalComponent,
    ConfirmationComponent,
    UppercasePipe,
    CensoredPipe,
    PageNotFoundComponent,
    ShoppingCartItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,

    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,

    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
