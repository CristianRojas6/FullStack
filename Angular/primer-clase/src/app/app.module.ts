import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Importar el módulo rutas que hemos creado
import { AppRoutingModule } from './app-routing.module'

//Importar el elemento creado
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { GeneroComponent } from './components/genero/genero.component';
import { RockComponent } from './components/rock/rock.component';
import { RegaaeComponent } from './components/regaae/regaae.component';
import { PopComponent } from './components/pop/pop.component';
import { ContactoComponent } from './components/contacto/contacto.component'
import { from, fromEvent } from 'rxjs';
import { importType } from '@angular/compiler/src/output/output_ast';

//El decorador NgModule se encarga de distribuir 
//los nuevos elementos importados de acuerdo
//a su funcionalidad.
//En el atributo declarations, se indican componentes
//En el atributo imports, se indican los módulos a usar
//En la propiedad provider se indican, los servicios que van a consumir angular
//En el atributo bootstrap, se indica el componente principal que va a mostrar
//todos los componentes que se encuentren anidados en él



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    GeneroComponent,
    RockComponent,
    RegaaeComponent,
    PopComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

