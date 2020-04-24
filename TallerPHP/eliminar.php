<?php

require('conexion.php');

$id = $_GET['id'];

//Sentencia a ejecutar sera eliminar
$sql = "DELETE FROM usuario WHERE id = '$id'";

mysqli_query($conexion, $sql);

//header('location: basededatos.php');
?>