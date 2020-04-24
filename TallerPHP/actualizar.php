<?php

require('conexion.php');

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

$sql = "UPDATE usuarios SET nombre='$nombreusr', apellido='$apellidousr', telefono='$telefonousr', email='$emailusr' WHERE id='$id'";
mysqli_query($conexion, $sql);

//header('Location: basededatos.php');

?>