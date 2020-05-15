const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

// USO DE MIDDLEWARES
app.use(cookieParser());
app.use(cookieSession({secret: "I'm a secret"}));

//Declarar la ruta la cual queremos que se active la cookie
app.get('/', (req, res)=>{
/* 
    if (req.session.visitas){
        n = req.session.visitas++
    } else{
        petición.session.visitas = 0
    }
    ---------------------------------------
    let n = (req.session.visitas) ? req.session.visitas++ : (req.session.visitas = 0)
*/
    req.session.visitas || (req.session.visitas = 0);
    let n = req.session.visitas++;
    res.end(`<h1>Visita #${n}</h>`);
});

app.listen(8080);
console.log('Conexión realizada')