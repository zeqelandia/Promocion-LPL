<?php
include_once("BaseDeDatos.class.php");
$bdd = new BaseDeDatos("promocion");
if (isset($_GET['usuario']) && isset($_GET['contrasenna'])) {
    $strConsulta = "SELECT nombre_usuario, contrasenia FROM `usuarios` WHERE nombre_usuario=\' ". strtoupper($_GET['usuario']) ." \' and contrasenia=\' ". $_GET['contrasenna'] ." \'";
    $consulta = $bdd->consultar($strConsulta);
    $str = $bdd->toString($consulta1);
    echo $str;
}else {
    echo "null";
}
?>