import { Injectable } from '@angular/core';

//Importar el módulo HttpClient que nos va a ofrecer accesder a los metodos get, post, put y delete
import { HttpClient, HttpHeaders } from "@angular/common/http";
//
import { map } from "rxjs/operators";
//Se encargara de recoger las peticiones que hagamos al suscribirnos a un servicio
import { Observable } from "rxjs";

@Injectable()

export class TareasService {

  //Creamos la variable que contiene la ruta de la api que vamos a consumir
  url = 'http://localhost:8080/api/'

  /*
    Creamos una variable privada de tipo HttpClient que nos permitirá
    tener acceso a los metodos post, put get & delete para interactuar
    correctamente nuestra api
  */

  constructor(private _http: HttpClient) { }
  //Servicio craer tarea
  crearTarea(tareaNueva){
    let params = JSON.stringify(tareaNueva);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    //localhost:8080/api/ -> api.post('/', TareaControl.crearTarea)
    return this._http.post(
      this.url,
      params,
      options
    ).pipe(map(res => res));
  }

  //Servicio obtener tareas
  obtenerTareas(){
    return this._http.get(
      this.url
    ).pipe(map(res => res));
  }

  //Servicio actualizar tareas
  actualizarTareas(idTarea, tareaActualizada){
    let params = JSON.stringify(tareaActualizada);
    let options = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    };
    return this._http.put(
      this.url + idTarea,
      params,
      options
    ).pipe(map(res => res));
  }
  
  //Servicio eliminar tareas
  eliminarTareas(idTarea){
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this._http.delete(
      this.url + idTarea,
      options
    ).pipe(map(res => res));
  }
}
