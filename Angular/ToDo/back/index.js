/*
  Este archivo tendra entonces la lógica de la conexión
  a  la BD y el levantamiento del servidor
*/

const mongoose = require('mongoose');
const app = require('./app');
const port = 8080;

// -- Declaración de la URL de la BD --

const DB = 'mongodb://localhost:27017/listaTareas';

// -- Lógica conexión y Servidor --

/*
  El método connect de mongoose necesita como parámetros,
  la ruta de la DB y una función con respuesta y un error
*/
mongoose.connect(DB, (err, res)=>{
  if(err){
    console.log(`El error es: ${err}`);
  } else {
    console.log(`conexión Existosa!!`);
    app.listen(port, ()=>{
      console.log(`Puerto: ${port}`);
    });
  }
});
