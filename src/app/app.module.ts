import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialSidebarComponent } from './components/social-sidebar/social-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/pages/home/header/header.component';
import { BodyComponent } from './components/pages/home/body/body.component';
import { ContactComponent } from './components/pages/home/contact/contact.component';
import { GoogleMapComponent } from './components/pages/home/google-map/google-map.component';
import { GalleryComponent } from './components/pages/home/body/gallery/gallery.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { CategoriesComponent } from './components/pages/shop/categories/categories.component';
import { ProductListComponent } from './components/pages/shop/product-list/product-list.component';
import { ProductItemComponent } from './components/pages/shop/product-list/product-item/product-item.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialSidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    BodyComponent,
    ContactComponent,
    GoogleMapComponent,
    GalleryComponent,
    ShopComponent,
    CategoriesComponent,
    ProductListComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3UVCjQGFLmD5FtmE8NhObKnH7PZUJyxk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
