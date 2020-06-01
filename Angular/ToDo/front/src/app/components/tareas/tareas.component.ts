import { Component, OnInit } from '@angular/core';
//Importar el modelo
import { Tareas } from "../../Models/tareas";
//Importar el servicio
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  //declarar variable de tipo modelo
  public tareaRegistrada: Tareas;

  //declarar una variable de tipo arrglo
  public tareasEncontradas : any = [];

  constructor(private tareaService : TareasService) {
    this.tareaRegistrada = new Tareas("", "", "", "");
  }

  ngOnInit(): void {
    this.mostrarTareas();
  }

//Consumo del servicio agregar tarea con el método agregarTareas()
  agregarTarea(){
    this.tareaService.crearTarea(this.tareaRegistrada).subscribe(
      (response: any)=>{
        let tareas = response.tarea;
        this.tareaRegistrada = tareas;
        if (!this.tareaRegistrada._id) {
          alert("Error al registrar tarea");
        } else{
          alert(`Asignación de tarea existosa, ${this.tareaRegistrada.nombreEncargado} tiene una nueva tarea`);
          this.tareaRegistrada = new Tareas("", "", "", "");
          this.mostrarTareas();
        }
      },
      (error)=>{
        let errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error);

        }
      }
    );
  }

  //Consumo del servicio buscar tareas con el método mostrarTareas()
  mostrarTareas(){
    this.tareaService.obtenerTareas().subscribe((response : any)=>{
      this.tareasEncontradas = response.tareas;
    },
    (error)=>{
      let errorMensaje = <any>error;
      if (errorMensaje != null) {
        console.log(error);

      }
    });

  }

  //Consumo del servicio actualizar tareas con el método editarTareas()
  editarTareas(tareas){
    this.tareaService.actualizarTareas(tareas._id, tareas).subscribe(
      (response : any)=>{
        if (response.tareas) {
          alert('La tarea a sido actualizada correctamente!!');
          this.mostrarTareas();
        } else {
          alert('No fue posible actualizar la tarea');
        }
      },
      (error)=>{
        let errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );
  }

  //Consumo del servicio eliminar tareas con el método eliminarTareas()
  borrarTareas(idTarea){
    this.tareaService.eliminarTareas(idTarea).subscribe(
      (response: any)=>{
        if (response.tarea) {
          alert('La tarea ha sido eliminada correctamente');
          this.mostrarTareas();
        } else {
          alert('No fue posible eliminar la tarea');
        }
      },
      (error)=>{
        let errorMensaje = <any>error;
        if (errorMensaje ! = null) {
          console.log(error);
        }
      }
    );
  }
}
