/*
  Este archivo va a contener toda la lógica de express
  (manejo de rutas, exportación del módulo,
   manejo de middlewares, etc)
*/

const express = require('express');
const app = express();

const cors = require('cors');

// --Declaración de rutas a ejecutar por express--
const tareasRutas = require('./rutas/tareasRutas');

// --Inicio Middlewares--
app.use(express.json());
app.use(cors());

// -- Consumo de rutas --
app.use('/api', tareasRutas); //localhost:8080/api/regitrarTarea

// -- Fin Middlewares --

// -- Exportación del módulo --
module.exports = app;
