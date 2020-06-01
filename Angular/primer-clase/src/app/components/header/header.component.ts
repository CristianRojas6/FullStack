//Importar clase Component de el núcleo de angular
import { Component } from '@angular/core';

//Se conoce como decorador a toda clase que está precedida por un @
//Recibirá ciertos datos los cuáles debe referenciar o distribuir en angular
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

}

/* 
    Crear de forma manual dos nuevos componentes que seran content & footer
*/