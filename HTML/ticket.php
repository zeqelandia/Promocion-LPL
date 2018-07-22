<?php
	session_start();
	include_once("../php/BaseDeDatos.class.php");
	$bdd = new BaseDeDatos("promocion");
	$_SESSION['nombre']= $bdd->devolverValor($bdd->consultar("SELECT nombres FROM usuarios WHERE dni = ".$_SESSION['dni']),"nombres");
	$tarifa = $bdd->devolverValor($bdd->consultar("SELECT tipo_tarifa FROM tipo_tarifa WHERE id_tarifa = ".explode("=", $_POST['slctTarifa'])[0]),"tipo_tarifa");
	if ($tarifa == "frecuente") {
		$tar = explode("=", $_POST['slctTarifa'])[1]."kms";
	}else {
		$tar = "$".explode("=", $_POST['slctTarifa'])[1];
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Dont Go Travel - Ticket </title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../CSS/ticket.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../CSS/botones.css">
	<script type="text/javascript" src="../JS/ticket.js"></script>
</head>
<body>
	<header>
		<img src="../img/logo.png" id="logo">
		<h1>Gracias por viajar<br>con nosotros!</h1>
		<h3>Esta es tu tarjeta de embarque, <br> por favor presentala al personal antes de ingresar al colectivo</h3>
	</header>
	<section>
		<article>
			<table>
				<tr>
					<td>
						<label>Pasajero:</label>
					</td>
					<td>
						<label id="lblPasajero"><?=$_SESSION['nombre'];?></label>
					</td>
				</tr>
				<tr>
					<td>
						<label>Dni:</label>
					</td>
					<td>
						<label id="lblDni"><?=$_SESSION['dni'];?></label>
					</td>
				</tr>
				<tr>
					<td>
						<label>Fecha:</label>
					</td>
					<td>
						<label id="lblFecha"><?=$_POST['fecha'];?></label>
					</td>
				</tr>
				<tr>
					<td>
						<label>Hora:</label>
					</td>
					<td>
						<label id="lblHora"><?=$_POST['slctHora'];?></label>
					</td>
				</tr>
				<tr>
					<td>
						<label>Origen:</label>
					</td>
					<td>
						<label id="lblOrigen"><?=$_POST['slctOrigen'];?></label>
					</td>
				</tr>
				<tr>
					<td>
						<label>Destino:</label>
					</td>
					<td>
						<label id="lblDestino"><?=$_POST['slctDestino'];?></label>
					</td>
				</tr>
				<tr>
					<td>
						<label>Tipo de Tarifa:</label>
					</td>
					<td>
						<label id="lblTarifa"><?=$tarifa;?></label>
					</td>
				</tr>
				<tr>
					<td>
						<label>Valor abonado:</label>
					</td>
					<td>
						<label id="lblValor"><?=$tar;?></label>
					</td>
				</tr>
				<tr>
					<td>
						<label>Kilometros sumados:</label>
					</td>
					<td>
						<label id="lblKilometros"><?=$_SESSION['sumados'];?></label>
					</td>
				</tr>
			</table>
		</article>
		<article>
			<input type="button" id="btnImprimir" value="Imprimir" onclick="imprimir();" class="Boton">
		</article>
	</section>
	<footer>
		<h4>Desarrollado por<br>Brandon Urigo y Ezequiel Silvestre<br>UNPSJB - Laboratorio de Programación y Lenguajes - 2018</h4>
	</footer>
</body>
</html>