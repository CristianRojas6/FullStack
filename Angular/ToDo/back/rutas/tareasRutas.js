const express = require('express');
//Importamos el archivo tareaControl
const TareaControl = require('../control/tareasControl');

//Router() de espress que nos permite trabajar con los métodos http
//post (agregar), put(actualizar), get(obtener), delete(eliminar)
let api = express.Router(); //localhost:8080/api/..

// -- Ruta Agragar Tareas --

api.post('/', TareaControl.crearTarea);

// -- Ruta Obtener Tareas --

api.get('/', TareaControl.obtenerTarea);

// -- Ruta Actualizar Tareas --

api.put('/:id', TareaControl.actualizarTarea);

// -- Ruta Eliminar Tareas --

api.delete('/:id', TareaControl.eliminarTarea);

// -- Exportación de las rutas --

module.exports = api;
