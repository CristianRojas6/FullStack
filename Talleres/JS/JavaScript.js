
let datosBasicos = {
    'personaje': 'Ginyu'
}

console.log(typeof (datosBasicos));
console.log(datosBasicos);

// Variable de Arreglo
let agregarPersonaje = [];

//Función agregar personaje
let agregar = document.getElementById('btn');
btn.addEventListener('click', function () {

    //LocalStorage 
    localStorage.setItem('miPersonaje', JSON.stringify(agregarPersonaje));

    let nombrePersonaje = document.getElementById('datos').value;

    agregarPersonaje.push(nombrePersonaje);

    console.log(agregarPersonaje);

})



let cambio = document.getElementById('btn');
btn.addEventListener('dblclick', function () {

    var image = document.getElementById('btn');
    let prueba = document.getElementById('datos').value

    switch (prueba) {
        case "Goku":
            if (prueba == 'Goku' && image.src.match("on")) {
                image.src = "img/cambio.png";
            } else {
                image.src = "img/ginyuGoku.gif";
            }
            break;

        case "Inuyasha":
            if (prueba == 'Inuyasha' && image.src.match("on")) {
                image.src = "img/cambio.png";
            } else {
                image.src = "img/inuyashaGinyu.jpeg";
            }
            break;

        case "Meliodas":
            if (prueba == 'Meliodas' && image.src.match("on")) {
                image.src = "img/cambio.png";
            } else {
                image.src = "img/meliodasGinyu.jpg";
            }
            break;

        case "Ginyu":
            if (prueba == 'Meliodas' && image.src.match("on")) {
                image.src = "img/cambio.png";
            } else {
                image.src = "img/cambio.png";
            }
            break;

        default:
            alert("No tenemos a este personaje todavia :D");
    }
});
