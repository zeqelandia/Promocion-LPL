<?php
	session_start();
	include_once("BaseDeDatos.class.php");
	$bdd = new BaseDeDatos("promocion");

	$updateAsientos = 'UPDATE disponibilidad SET disponible = 0 WHERE id_viaje='. $_GET['idViaje'] . 'AND nro_asiento='.$_GET['nroAsiento'];
    $bdd->insertar($updateAsientos);
?>