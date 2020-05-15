const express = require('express'),
    app = express(),
    path = require('path'); //path es uno de los 34 modulos de node

    // Nos permite ubícar los archivos de la carpeta public (css & img)
app.use(express.static(path.join(__dirname, "/public")));

//creamos las rutas de nuestra aplicación
app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/usuario', (req, res)=>{
    res.sendFile(`${__dirname}/views/usuario.html`);
});

app.get('/usuario-login/?', (req, res)=>{
    if(req.query.nombre != "" && req.query.password != ""){
        res.sendFile(`${__dirname}/views/usuario-login.html`);
        console.log(req.query);
    } else{
        res.sendFile(`${__dirname}/views/denegado.html`)
    }
})

app.listen(8080);
console.log('Funciona');


