//----------------------------------Express------------------------------
const express = require('express'),
    app = express(),
    path = require('path'); //path es uno de los 34 modulos de node

// Nos permite ubícar los archivos de la carpeta public (css & img)
app.use(express.static(path.join(__dirname, "/public")));

//creamos las rutas de nuestra aplicación
app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/about', (req, res)=>{
    res.sendFile(`${__dirname}/views/about.html`);
});

app.get('/skills', (req, res)=>{
    res.sendFile(`${__dirname}/views/skills.html`);
})

app.get('/work', (req, res)=>{
    res.sendFile(`${__dirname}/views/work.html`);
});

app.get('/contact', (req, res)=>{
    res.sendFile(`${__dirname}/views/contact.html`);
})

app.listen(8080);
console.log('Funciona');