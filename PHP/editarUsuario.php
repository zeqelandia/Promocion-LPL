<?php
session_start();
include_once("BaseDeDatos.class.php");
$bdd = new BaseDeDatos("promocion");
if (isset($_GET['consulta'])) {
    $elementoParaConsultar = $_GET['consulta'];
    $consultaStr = "UPDATE usuarios SET ". $elementoParaConsultar . " = " . $_GET[$_GET['consulta']] . " WHERE usuarios.dni = " . $_SESSION['dni'];
    $consulta = $bdd->insertar($consultaStr);
}
?>