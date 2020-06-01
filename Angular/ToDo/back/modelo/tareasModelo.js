const mongoose = require('mongoose');
/*
  Con Schema creamos una estructura base de nuestra colección
  definiendo campos y el tipo de datos de cada uno de ellos
*/
const Schema = mongoose.Schema;

// -- Crear la instancia del objeto Schema --

let TareaSchema = new Schema({
  nombreEncargado : String,
  descripcionTarea: String,
  estado: String
});

// -- Exportar el Schema --
//mongoose.model('Nombre de la colección', Schema)
module.exports = mongoose.model('Tarea', TareaSchema);
