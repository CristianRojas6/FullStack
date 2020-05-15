/* 
    declaramos la constante app cuyo valor será el objeto express
    el cual contiene las funcionalidades que nosotros necesitamos
    para que nuestro aplicativo funcione correctamente

*/

const express = require('express');
const app = express(); //app para hacer referencia a una express aplication

/* 
    como express trabaja de la mano con http (get, post, put y delete)
    a partir de estos métodos , recibira una petición del usuario y devolverá
    una respuesta

    El método get recibirá dos parametros, el primero la ruta de acceso 
    el segundo la función que debe ejecutar. Esta función recibe a su vez dos
    parámetros . Una petición y una respuesta

    let ejecutar = (req, res)=>{}
    app.get('/', ejecutar)
*/

//Ruta del home, inicio, index, etc
app.get('/', (peticion, respuesta)=>{
    respuesta.send('Hola Express');
    console.log(peticion);
});

app.get('/registro/:nombre', (peticion, respuesta)=>{
    respuesta.send(`Bienvenid@ ${peticion.params.nombre}`)
    console.log(peticion.params);
})

app.get('/informacion/:apellido&:edad', (peticion, respuesta)=>{
    respuesta.send(`Su apellido es: ${peticion.params.apellido} y su edad es: ${peticion.params.edad} años`);
    console.log(peticion.params);
});

app.get('/imagen', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/index.html`);
    console.log(__dirname);
})

app.listen(8080);
console.log('Conexión Exitosa')

/* 
    API REST - Create, Read, Update, Delete / Post, Get, Put, Delete 
*/