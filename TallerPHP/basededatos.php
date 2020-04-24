<?php
require('conexion.php'); #Solicitamos  la conexion a la BD

$sql = "SELECT * FROM usuarios"; #Guardamos en una variable la sentencia sql de consulta

$resultado = mysqli_query($conexion, $sql); # $resultado = $conexion -> query($sql);

$resultado_usr = mysqli_fetch_all($resultado); #Busca todo en la BD y lo devuelve en un arreglo

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>Registro Usuarios</title>
</head>
<body>

<form id="container" action="registrar.php" method="POST" enctype="multipart/form-data">
    <h2>Registro de usuarios</h2>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">Nombre</label>
      <input type="hidden" value="<?php echo $datoVar[0]; ?>" name="id" />
      <input type="text" name="nombreusr" class="form-control">
    </div>
    <div class="form-group col-md-6">
      <label for="inputLastname">Apellido</label>
      <input type="text" name="apellidousr" class="form-control">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Direccion</label>
    <input type="text" name="direccionusr" class="form-control" placeholder="Calle 72 #15 - 23">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail">Email</label>
      <input type="email" name="emailusr" class="form-control">
    </div>
    <div class="form-group col-md-4">
      <label for="inputPhone">Telefono</label>
      <input type="text" name="telefonousr" class="form-control">
    </div>
  </div>
  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group" role="group" aria-label="First group">
        <button type="submit" href="registrar.php" name="agregar" value="registrar" class="btn btn-secondary">Registrar</button>
        <button type="submit" href="consultar.php" name="agregar" value="consultar" class="btn btn-secondary">Consultar</button>
        <button type="submit" href="actualizar.php" name="agregar" value="actualizar" class="btn btn-secondary">Actualizar</button>
        <button type="submit" href="buscar.php" name="agregar" value="buscar" class="btn btn-secondary">Buscar</button>
    </div>
  </div>
</div>
</form>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Direccion</th>
      <th scope="col">Email</th>
      <th scope="col">Telefono</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>



<?php foreach($resultado_usr as $datousr):?>
    <div>
        <?php echo $datousr[0], $datousr[1],$datousr[2], $datousr[3], $datousr[4], $datousr[5]; ?>
        <button type="button" href="eliminar.php?id=<?php echo $datousr[0]; ?>" class="btn btn-secondary">Eliminar</button>
    </div>
<?php endforeach; ?>










    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>