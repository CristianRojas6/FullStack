/* 
   Este archivo se encargara de administrar componentes 
   de acuerdo a las rutas que se le especifiquen.
   Necesitamos importar el Modulo NgModuleque nos dará el decorador
   Un módulo llamado RouterModule
*/

//Destructuring - El elemento declarado a la izquierda
//Pertenece o deriva del elemento declarado a la derecha
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Importar los componentes que se deben mostrar de acuerdo a la ruta
import { ContentComponent } from './components/content/content.component';
import { GeneroComponent } from './components/genero/genero.component';
import { RockComponent } from './components/rock/rock.component';
import { RegaaeComponent } from './components/regaae/regaae.component';
import { PopComponent } from './components/pop/pop.component';
import { ContactoComponent } from './components/contacto/contacto.component';

/* 
    Crearemos una constante de tipo Routes a través de TS 
    cuyo valor será un arreglo de JSON donde tendremos las rutas
    enlazadas o relacionadas con los componentes o relacionados
    con los  componentes que deseemos mostrar 

    var nombre = 'Kevin' JS
    var nombre : String = 'Kevin' TS
*/

const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'genero', component: GeneroComponent},
    {path: 'rock', component: RockComponent},
    {path: 'regaae', component: RegaaeComponent},
    {path: 'pop', component: PopComponent},
    {path: 'contacto', component: ContactoComponent}
];

//Configuramos nuestro decorador NgModule
/* 
    Añadimos la constante routes en la raíz del módulo RouterModule
    esto para que cuando se exporte la clase app-routing y se 
    importe en el app.module, no tenga problemas con las rutas
    a la hora de la navegación por parte del usuario en la aplicación
*/
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}





