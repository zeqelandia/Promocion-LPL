<?php
include_once("BaseDeDatos.class.php");
$bdd = new BaseDeDatos("promocion");
if (isset($_GET['usuario']) && isset($_GET['contrasenna'])) {
    $consultaStr = "SELECT nombre_usuario, contrasenia FROM usuarios WHERE nombre_usuario = \"".$_GET['usuario']."\" and contrasenia = \"".$_GET['contrasenna']."\"";
    $consulta = $bdd->consultar($consultaStr);
    $str = $bdd->toString($consulta);
    if ($str == "yes") {
        session_start();
        $_SESSION['userLogin'] = $_GET['usuario'];
        $consultarDni = "SELECT dni FROM usuarios WHERE nombre_usuario = '". $_GET['usuario'] . "'";
        $regDni = $bdd->consultar($consultarDni);
        $dni = $bdd->devolverValor($regDni,"dni");
        $_SESSION['dni'] = $dni;
    }
    echo $str;
}else {
    echo "null";
}
$bdd->cerrarConeccion($consulta);
?>