import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { HotelSLComponent } from './components/hotelsl/hotelsl.component';
import { HotelRBComponent } from './components/hotelrb/hotelrb.component';
import { HotelRRComponent } from './components/hotelrr/hotelrr.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    VuelosComponent,
    HotelSLComponent,
    HotelRBComponent,
    HotelRRComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
