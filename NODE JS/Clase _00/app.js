/* 
    En node JS existen alrededor de 34 módulos propios.
    Estos modulos nos permiten acceder a ciertas funcionalidades que node nos provee
    tales como crear nuestro propio servidor, leer archivos, identificar rutas,
    eventos, entre otros.

    Uno de los modulos que conoceremos se llama http
    que nos permite crear nuestro propio servidor que interprete JS del lado
    del servidor y renderice una vista en el navegador.
*/

const http = require('http'); // En una constante requerimos y guardamos el módulo que necesitemos

/* 
    Definir la petición y la respuesta que nos permita conectar al servdor
    que crearemos. Pasaremos en una función dos parámetros que seran request, response
*/

let controlador = (peticion, respuesta) => {
    /* 
        function(peticion, respuesta){
            documento.write('Bienvenido a NodeJS')
        }

        con el metodo end, finalizamos conexion al servidor para evitar ataques
    */
    respuesta.end('Bienvenidos a NodeJS');
};

/* 
    Crearemos la variable que se encargara de acceder al método createServer
    del módulo http que levantará el servidor.
*/

let servidor = http.createServer(controlador);

/* 
    let servidor = http.createServer((peticion,respuesta)=>{
        respuesta.end('Bienvenidos a NodeJS);
    }).listen(8080)
*/

servidor.listen(8080); //8080, 8000, 3000
console.log('Conectado!!');