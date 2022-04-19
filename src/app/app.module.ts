import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';
import { DescriptionComponent } from './components/description/description.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ButtonsComponent,
    CardComponent,
    DescriptionComponent,
    ImagenComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
