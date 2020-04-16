/* tiempo de video currentTime 
volumen del video varible_de_video.volume 
para pausar variable_del_video.pause() 
para despausar variable_del_video.play()  */

//---------------------------Punto 2------------------------
contador = 0;


let agregar = document.getElementById('btn1');
btn1.addEventListener('click', function () {

    //Agregar elemento
    contador++;
    let id = 'id' + contador;
    let caja = document.createElement('div');
    let texto = document.createElement('p');
    let txt = document.createTextNode(contador);
    texto.appendChild(txt);
    caja.appendChild(texto);

    //Buscar el padre de los elementos por medio del ID
    let contenedor = document.getElementById('prueba');
    //creamos el nodo de referencia
    let referencia = document.getElementsByTagName('div');
    //Agregar la caja a la posición que deseamos
    contenedor.appendChild(caja, referencia);
    //Asignar id
    caja.setAttribute("id", id);
});

let eliminar = document.getElementById('btn2');
btn2.addEventListener('click', function () {

    //Eliminar lo que esta dentro del contenedor padre
    document.getElementById('prueba').innerHTML = '';

});

let mostarPar = document.getElementById('btn3');
btn3.addEventListener('click', function () {

    contador++

    let cajaPar = 'id' + contador;

    if (contador % 2 == 1) {
        document.getElementById('prueba').innerHTML = cajaPar;
    }

    console.log(cajaPar);

})

let eliminar1X1 = document.getElementById('btn4');
btn4.addEventListener('click', function () {
    //Asignar nueva variable concadenando el valor del input
    let cajaElim = 'id' + document.getElementById('text').value;
    //Eliminando el valor escrito
    document.getElementById(cajaElim).remove();
})


//---------------------------Punto 3--------------------------

let zoomin = document.getElementById('boton1');
boton1.addEventListener('click', function () {


});