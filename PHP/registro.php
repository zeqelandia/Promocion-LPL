<?php
include_once("BaseDeDatos.class.php");
$bdd = new BaseDeDatos("promocion");
if (isset($_GET['consulta'])) {
    $elementoParaConsultar = $_GET['consulta'];
    $consultaStr = "SELECT ".$elementoParaConsultar." FROM usuarios WHERE ".$elementoParaConsultar." = ".$_GET[$elementoParaConsultar];
    $consulta = $bdd->consultar($consultaStr);
    $str = $bdd->toString($consulta);
    echo $str;
}else {
    echo "null";
}
?>