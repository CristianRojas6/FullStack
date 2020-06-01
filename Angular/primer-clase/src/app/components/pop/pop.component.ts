import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {

  imagen = ['assets/img/maroon_5_08.jpg']

  mostrar(e){
    alert(`Esto es una imagen`);
  }

  datoUser(usuario){
    alert(`Bienvenido ${usuario}`);
  }

  datosBanda = {
    nombre : 'Maroon 5',
    info : 'USA'
  }






  constructor() { }

  ngOnInit(): void {
  }

}
