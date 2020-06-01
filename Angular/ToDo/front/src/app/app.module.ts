import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importar módulo FormsModule
import { FormsModule } from "@angular/forms";
//Importar el módulo que provee los métodos y las configuraciones de http
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';

//Importar el servicio de TareasService
import { TareasService } from "./services/tareas.service";

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
