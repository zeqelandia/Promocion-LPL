<?php
include_once("BaseDeDatos.class.php");
$bdd = new BaseDeDatos("promocion");
if (isset($_GET['usuario']) && isset($_GET['contrasenna'])) {
    $consultaStr = "SELECT nombre_usuario, contrasenia FROM usuarios WHERE nombre_usuario = \"".$_GET['usuario']."\" and contrasenia = \"".$_GET['contrasenna']."\"";
    $consulta = $bdd->consultar($consultaStr);
    $str = $bdd->toString($consulta);
    echo $str;
}else {
    echo "null";
}
$bdd->cerrarConeccion($consulta);
?>