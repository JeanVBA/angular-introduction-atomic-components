import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/components/card/card.component';
import { CardLabelComponent } from './shared/components/card/card-label/card-label.component';
import { CardPriceComponent } from './shared/components/card/card-price/card-price.component';

@NgModule({
  declarations: [AppComponent, MenuBarComponent, HomeComponent, CardComponent, CardLabelComponent, CardPriceComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
