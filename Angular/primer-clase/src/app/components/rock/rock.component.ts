import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css']
})
export class RockComponent implements OnInit {

  /* 
    Binding -> Angular
      Property binding = Enlazar Atributos del HTML de forma dinámica
              ej: <etiqueta [atributo] = "variable">
  */

  imagen = ['assets/img/linkingPark.jpg']; 

  constructor() { }

  ngOnInit(): void {
  }

}
