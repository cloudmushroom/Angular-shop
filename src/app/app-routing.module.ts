import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ShopComponent } from './components/pages/shop/shop.component';

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
