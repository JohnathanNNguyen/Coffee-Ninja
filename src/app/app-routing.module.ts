import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';
import { EmailSubComponent } from './home-page/email-sub/email-sub.component';
import { EmailSubbedComponent } from './home-page/email-subbed/email-subbed.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      { path: '', component: EmailSubComponent },
      { path: 'email', component: EmailSubbedComponent }
    ]
  },
  { path: 'product', component: ProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'about', component: AboutUsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        scrollOffset: [0, 0]
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
