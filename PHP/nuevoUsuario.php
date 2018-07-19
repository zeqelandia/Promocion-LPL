<?php
include_once("BaseDeDatos.class.php");
$bdd = new BaseDeDatos("promocion");
if (isset($_POST['txtNombre']) && isset($_POST['txtApellido']) && isset($_POST['txtDNI']) && isset($_POST['txtTelefono']) && isset($_POST['txtMail']) && isset($_POST['slctPasajero']) && isset($_POST['txtNickname']) && isset($_POST['txtContrasenia'])) {
    $consultaStr = 'INSERT INTO `usuarios` (`dni`, `apellidos`, `nombres`, `telefono`, `mail`, `pasajero_frecuente`, `nombre_usuario`, `contrasenia`) VALUES ("'. $_POST['txtDNI'] . '", "' . $_POST['txtNombre'] . '", "' . $_POST['txtApellido'] . '", "' . $_POST['txtTelefono'] . '", "' . $_POST['txtMail'] . '", "' . $_POST['slctPasajero'] . '", "' . $_POST['txtNickname'] . '", "' . $_POST['txtContrasenia'] . '");';
    $consulta = $bdd->insertar($consultaStr);
    header("Location: ../html/index.php");
}
?>