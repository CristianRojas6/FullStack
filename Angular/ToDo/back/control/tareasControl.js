const Tarea = require('../modelo/tareasModelo.js');

// -- Crear Tarea --
function crearTarea(req, res){
  //instalar el modelo
  let tarea = new Tarea();
  //Traer los datos desde la cabecera http
  let parametros = req.body
  //Guardamos cada propiedad del json de la petición
  //en cada propiedad del modelo
  tarea.nombreEncargado = parametros.nombreEncargado;
  tarea.descripcionTarea = parametros.descripcionTarea;
  tarea.estado = parametros.estado;

  //Guardar en la DB
  tarea.save((err, tareaNueva)=>{
    if (err) {
      res.status(500).send( {message: "Error en el servidor"} );
    } else {
      if (!tareaNueva) {
        res.status(200).send( {message: "No fue posible realizar el registro"} )
      } else {
        res.status(200).send({
          message: "Tarea Registrada",
          tarea: tareaNueva
        });
      }
    }
  })
};

// -- Obtener Tarea --
function obtenerTarea(req, res) {
  Tarea.find((err, tareasEncontradas)=>{
    if (err) {
      res.status(500).send({message: "Error del servidor"});
    } else {
      if (!tareasEncontradas) {
        res.status(200).send({message: "No fué posible encontrar las tareas"});
      } else {
        res.status(200).send({
          message: "Tareas encontradas",
          tareas: tareasEncontradas
        });
      }
    }
  });
};

// -- Actualizar Tarea --
function actualizarTarea(req, res) {
  //Extraer el id de los parámetros que viajaran por la url
  let tareaId = req.params.id;
  //Extraer los nuevos datos de la actualización de la tarea
  let nuevosDatosTarea = req.body;

  Tarea.findByIdAndUpdate(tareaId, nuevosDatosTarea, (err, tareaActualizada)=> {
    if (err) {
      res.status(500).send({message: "Error en el servidor"});
    } else if (!tareaActualizada) {
      res.status(200).send({message: "No se pudieron actualizar los datos"})
    } else {
      res.status(200).send({
        message: "Tarea actualizada",
        tareas: nuevosDatosTarea
      })
    }
  });
};

// -- Eliminar Tarea --
function eliminarTarea(req, res) {
  let tareaId = req.params.id;

  Tarea.findByIdAndDelete(tareaId, (err, tareaEliminada)=>{
    if (err) {
      res.status(500).send({message: "Error en el servidor"});
    } else if (!tareaEliminada) {
      res.status(200).send({message: "No se pudo eliminar la tarea"});
    }else {
      res.status(200).send({
        message: "Tarea eliminada",
        tarea: tareaEliminada
      })
    }
  })
}

// -- Exportación de las funciones --

module.exports = {
  crearTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea
}
