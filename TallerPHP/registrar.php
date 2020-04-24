<?php

require('conexion.php'); #traemos la conexión a la BD

if(isset($_POST['agregar'])){
    if($_POST['agregar'] == 'registrar'){

        // Guardar nombre del usuario
        $nombreusr = $_POST['nombreusr'];
        // Guardar apellido del usuario
        $apellidousr = $_POST['apellidousr'];
        // Guardar direccion del usuario
        $direccionusr = $_POST['direccionusr'];
        // Guardar email del usuario
        $emailusr = $_POST['emailusr'];
        // Guardar telefono del usuario
        $telefonousr = $_POST['telefonousr'];

        // Realizar inserción de datos a nuestra tabla
        $sql = "INSERT INTO usuarios(nombre, apellido, direccion, email, telefono) 
        VALUES ('$nombreusr','$apellidousr','$direccionusr','$emailusr','$telefonousr')"; #sentencia sql
    
        mysqli_query($conexion, $sql); #abrimos la conexión y ejecutamos la sentencia sql

        // Indicamos a qué archivo nos debe redirigir una vez hecho el registro
        header('location: basededatos.php');
    } else {
        echo 'no hizo nada';
    }
}

?>