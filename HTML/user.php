<!DOCTYPE html>
<?php
    session_start();
    if(empty($_SESSION['userLogin'])) {
        header('Location: index.php');
    }else{
		include_once("../php/BaseDeDatos.class.php");
		$bdd = new BaseDeDatos("promocion");
		$consultaFrecuente = "SELECT pasajero_frecuente FROM usuarios WHERE dni = ". $_SESSION['dni'];
        $reultadoFrecuente = $bdd->consultar($consultaFrecuente);
        $frecuente = $bdd->devolverValor($reultadoFrecuente, "pasajero_frecuente");
		if ($frecuente == '1') {
			$puntos = $bdd->devolverValor($bdd->consultar("SELECT puntos FROM usuarios WHERE dni=".$_SESSION['dni']),"puntos");
			$lblMensaje = "<label class=\"lbl\">Cantidad total de kilometros sumados: </label>";
			$lblPuntos = "<label class=\"lbl\" id=\"lblKilometros\">" . $puntos . "</label>";
		}else {
			$lblMensaje = "<label class=\"lbl\">Usted no es pasajero frecuente.</label>";
			$lblPuntos = "<label class=\"lbl\" id=\"lblKilometros\"></label>";
		}
	}
?>
<html>
<head>
	<title>Dont Go Travel - Bienvenido!</title>
	<meta charset="utf-8">
	<link rel="shortcut icon" href="../img/logo.png">
	<link rel="stylesheet" type="text/css" href="../CSS/contenedores.css">
	<link rel="stylesheet" type="text/css" href="../CSS/index.css">
	<link rel="stylesheet" type="text/css" href="../CSS/imagenes.css">
	<link rel="stylesheet" type="text/css" href="../CSS/inputs.css">
	<link rel="stylesheet" type="text/css" href="../CSS/botones.css">
	<link rel="stylesheet" type="text/css" href="../CSS/animate.css">
	<link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet"> 
	<script type="text/javascript" src="../JS/index.js"></script>
	<script type="text/javascript" src="../JS/pub.js"></script>
	<script type="text/javascript" src="../JS/compra.js"></script>
	<script type="text/javascript" src="../JS/ingreso.js"></script>
	<script type="text/javascript" src="../JS/registro.js"></script>
	<script type="text/javascript" src="../JS/user.js"></script>
	<script type="text/javascript" src="../JS/editarUsuario.js"></script>
	<script type="text/javascript" src="../JS/md5.js"></script>
	<script type="text/javascript" src="../JS/realizarCompra.js"></script>
	<script type="text/javascript" src="../JS/verHistorial.js"></script>
</head>
<body onload="publicidad();">
	<header>
		<nav>
			<div id="navegacion">
				<div id="div_logo">
					<img class="MainLogo" src="../img/logo.png">
				</div>
				<div id="div_usuario">
					<table id="tblUsuario">
						<tr>
							<td>
								<label class="lbl">Bienvenido <?=$_SESSION['userLogin'];?></label>
							</td>
							<td class="tdUsuario" onclick="comprarTickets();">
								<label class="lbl">Comprar Tickets</label>
							</td>
							<td class="tdUsuario" onclick="editarPerfil();">
								<label class="lbl">Editar Perfil</label>
							</td>
							<td class="tdUsuario" onclick="historialCompras();">
								<label class="lbl">Ver historial de compras</label>
							</td>
							<td class="tdUsuario" onclick="cerrarSesion();">
								<label class="lbl">Cerrar Sesión</label>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</nav>
	</header>
	<section id="section">
		<article id="artCompraUser">
		<div class="contenedor_titulo">
			<table class="titulo tblTitulo">
				<tr>
					<td>
						<h2>Comprar Tickets</h2>
					</td>
				</tr>
			</table>
		</div>
		<div id="contenedor_cuerpo">
				<div id="contenedor_compra" class="Contenedor">
					<form method="POST" id="formularioCompra" action="ticket.php">
						<table id="tblCompra">
							<tr class="trCompra">
								<td colspan="2">
									<select name="slctOrigen" id="slctOrigen" class="Txt" onchange="opcionesTicket(this.value); verificarOpciones();">
										<option value="0">Elija la ciudad de origen</option>
										<option value="Buenos Aires">Buenos Aires</option>
										<option value="Rosario">Rosario</option>
										<option value="Cordoba">Córdoba</option>
										<option value="Mar Del Plata">Mar Del Plata</option>
										<option value="Rio Cuarto">Río Cuarto</option>
									</select>
								</td>
							</tr>
							<tr class="trCompra">
								<td colspan="2" class="pad">
									<select name="slctDestino" id="slctDestino" class="Txt" onchange="verificarOpciones();">
										<option value="0">Elija la ciudad de destino</option>
									</select>
								</td>
							</tr>
							<tr class="trCompra">
								<td class="tdCompra pad" id="tdFecha">
									<label class="lbl">Elija una fecha:</label>
								</td>
								<td class="tdCompra pad">
									<input type="date" name="fecha" id="fecha" class="Txt">
								</td>
							</tr>
							<tr>
								<td class="pad" colspan="2">
									<select name="slctHora" id="slctHora" class="Txt">
										<option value="0">Elija el horario</option>
									</select>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="pad">
									<select name="slctTarifa" id="slctTarifa" class="Txt">
										<option value="0">Elija una tarifa</option>
									</select>
								</td>
							</tr>
							<tr>
								<td class="pad" colspan="2">
									<input type="button" name="btnReservarTicket" id="btnReservarTicket" value="Reservar Ticket" class="Boton" onClick="enviarCompra();">
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<label id="lblError"></label>
								</td>
							</tr>
						</table>
					</form>
				</div>
				<div id="contenedor_pub">
					<label class="tag">Viajá a</label><br>
					<h3 id="lblDestino">Buenos Aires</h3><br>
					<label class="tag">desde</label>
					<label id="lblPrecio" class="tag">600$</label>
				</div>
		</div>
		<div id="contenedor_errorCompra">
			<input type="hidden" id="errorCompra" value="0">
			<h2 id="mensajeErrorCompra"></h2>
			<input type="button" id="btnErrorCompra" value="Aceptar" class="Boton" onclick="aceptarErrorCompra();">
		</div>
		</article>
		<article id="artPerfil">
				<div class="contenedor_titulo">
					<table class="titulo tblTitulo">
						<tr>
							<td>
								<h2>Editar Perfil</h2>
							</td>
						</tr>
					</table>
				</div>
				<div id="contenedor_ayudaPerfil" class="animated">
					<label class="lbl">El programa de pasajeros frecuentes le permite sumar kilometros por cada viaje que realice. Esos kilometros pueden ser utilizados para volver a viajar!</label>
				</div>
				<div id="contenedor_editarPerfil">
				<form action="" method="post">
					<table id="tblEditarPerfil">
						<tr>
							<td>
								<label class="lbl">Nombres</label>
							</td>
							<td>
								<input type="text" name="txtNombrePerfil" id="nombres" class="Txt">
							</td>
						</tr>
						<tr>
							<td>
								<label class="lbl">Apellidos</label>
							</td>
							<td>
								<input type="text" name="txtApellidoPerfil" id="apellidos" class="Txt">
							</td>
						</tr>
						<tr>
							<td>
								<label class="lbl">Teléfono</label>
							</td>
							<td>
								<input type="number" name="txtTelefonoPerfil" id="telefono" class="Txt">
							</td>
						</tr>
						<tr>
							<td>
								<label class="lbl" id="lblMailPerfil">Mail</label>
							</td>
							<td>
								<input type="email" name="txtMail" id="mail" class="Txt" onkeyup="revisarMail();">
							</td>
						</tr>
						<tr>
							<td>
								<label class="lbl">Pasajero frecuente?</label>
							</td>
							<td>
								<select class="Txt" id="pasajero_frecuente" >
									<option value="-1">Selecciona una opcion</option>
									<option value="1">Si</option>
									<option value="0">No</option>
								</select>
								<label class="lbl" id="lblAyudaPerfil" onmouseenter="mostrarAyuda(2);" onmouseleave="esconderAyuda(2);"><b>?</b></label>
							</td>
						</tr>
						<tr>
							<td>
								<label class="lbl">Contraseña</label>
							</td>
							<td>
								<input type="password" name="txtPassword" id="contrasenia" class="Txt" onkeyup="Password">
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<input type="button" id="btnEditarPerfil" value="Realizar Cambios" class="Boton" onclick="enviar();">
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<label id="lblErrorEditar"></label>
							</td>
						</tr>
					</table>
					</form>
				</div>
				<div id="contenedor_confirmacionCambios">
					<input type="hidden" id="cambiosRealizados" value="0">
					<h2 class="lbl">Cambios realizados con exito</h2>
					<input type="button" id="btnAceptarCambios" onclick="aceptarCambios();" class="Boton" value="Aceptar">
				</div>
		</article>
		<article id="artHistorial">
			<div class="contenedor_titulo">
				<table class="titulo tblTitulo">
					<tr>
						<td>
							<h2>Historial de Compras</h2>
						</td>
					</tr>
				</table>
			</div>
			<div id="contenedor_historial">
				<table id="tblHistorial" class="titulo">
				</table>
			</div>
			<div id="contenedor_info">
				<table>
					<tr>
						<td>
							<?=$lblMensaje;?>
						</td>
						<td>
							<b><?=$lblPuntos;?></b>
						</td>
					</tr>
				</table>
			</div>
		</article>
	</section>
	<footer>
		<div id="contenedor_footer">
			<label class="lbl">Desarrollado por</label><br>
			<label class="lbl">Brandon Urigo y Ezequiel Silvestre</label><br>
			<label class="lbl">UNPSJB - Laboratorio de Programación y Lenguajes - 2018</label>
		</div>
	</footer>
</body>
</html>