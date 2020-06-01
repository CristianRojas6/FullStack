import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContentComponent } from './components/content/content.component';
import { HotelRBComponent } from './components/hotelrb/hotelrb.component';
import { HotelRRComponent } from './components/hotelrr/hotelrr.component';
import { HotelSLComponent } from './components/hotelsl/hotelsl.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';

const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'hotelrb', component: HotelRBComponent},
    {path: 'hotelrr', component: HotelRRComponent},
    {path: 'hotelsl', component: HotelSLComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'vuelos', component: VuelosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}