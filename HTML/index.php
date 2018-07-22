<!DOCTYPE html>
<?php
    session_start();
    if(!empty($_SESSION['userLogin'])) {
        header('Location: user.php');
    }
?>
<html>
<head>
	<title>Dont Go Travel</title>
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
	<script type="text/javascript" src="../JS/md5.js"></script>
</head>
<body onload="publicidad();">
	<header>
		<nav>
			<div id="navegacion">
				<div id="div_logo">
					<img class="MainLogo" src="../img/logo.png">
				</div>
				<div id="div_login">
					<label id="lbl_login" onclick="ingresar();">Ingresar</label>
				</div>
			</div>
		</nav>
	</header>
	<section id="section">
		<article id="artIngreso">
			<div id="contenedor_ingresar" class="Contenedor animated">
				<div id="contenedor_login" class="animated ventana">
				<form>
					<table id="tbl">
						<tr>
							<td>
								<label class="lbl">Nombre de Usuario</label>
								<input type="button" id="btnCerrarIngreso" value="X" onclick="cerrarIngreso();">
							</td>
						</tr>
						<tr>
							<td>
								<input type="text" id="txtUsuario" name="" class="Txt" placeholder="Ingrese su nombre de usuario">
							</td>
						</tr>
						<tr>
							<td>
								<label class="lbl">Contraseña</label>
							</td>
						</tr>
						<tr>
							<td>
								<input type="password" id="txtContrasenna" name="" class="Txt" placeholder="Ingrese su contraseña">
							</td>
						</tr>
						<tr>
							<td>
							<br>
								<input type="button" name="btnIngresar" id="btnIngresar" value="Ingresar" class="Boton" onclick="AjaxIngreso();">
							</td>
						</tr>
						<tr>
							<td id="filaCuenta">
							<br>
								<label class="lbl" id="lbl_cuenta">Todavia no tenés cuenta? Unite, es gratis!</label>
								<div id="lblError"></div>
							</td>
						</tr>
						<tr>
							<td>
								<br>
								<input type="button" value="Crear Cuenta" class="Boton" id="btnMenuCrearCuenta" onclick="menuCrearCuenta();">
							</td>
						</tr>
					</table>
				</form>
				</div>
				<form id="formularioRegistro" method="post" action="../php/nuevoUsuario.php">
				<div id="contenedor_crearCuenta" class="animated ventana">
					<div id="contenedor_ayuda" class="animated">
						<label class="lbl">El programa de pasajeros frecuentes le permite sumar kilometros por cada viaje que realice. Esos kilometros pueden ser utilizados para volver a viajar!</label>
					</div>
					
							<table>
								<tr>
									<td>
										<label class="lbl">Nombres</label>
									</td>
									<td>
										<input type="text" name="txtNombre" id="txtNombre" class="elementoRegistro" >
									</td>
								</tr>
								<tr>
									<td>
										<label class="lbl">Apellidos</label>
									</td>
									<td>
										<input type="text" name="txtApellido" id="txtApellido" class="elementoRegistro" >
									</td>
								</tr>
								<tr>
									<td>
										<label class="lbl" id="lblDNI">DNI</label>
									</td>
									<td>
										<input type="number" name="txtDNI" id="txtDNI" class="elementoRegistro" minlength="8" maxlength="8" onkeyup="AjaxDni()">
									</td>
								</tr>
								<tr>
									<td>
										<label class="lbl" id="lblTelefono">Teléfono</label>
									</td>
									<td>
										<input type="number" name="txtTelefono" id="txtTelefono" class="elementoRegistro" >
									</td>
								</tr>
								<tr>
									<td>
										<label class="lbl" id="lblMail">Mail</label>
									</td>
									<td>
										<input type="email" name="txtMail" id="txtMail" class="elementoRegistro" onkeyup="AjaxMail()">
									</td>
								</tr>
								<tr>
									<td>
										<label class="lbl">Pasajero frecuente?</label>
									</td>
									<td>
										<select class="Txt" name="slctPasajero">
											<option value="1">Si</option>
											<option value="0">No</option>
										</select>
										<label class="lbl" id="lblAyuda" onmouseenter="mostrarAyuda(1);" onmouseleave="esconderAyuda(1);"><b>?</b></label>
									</td>
								</tr>
								<tr>
									<td>
										<label class="lbl" id="lblnombre_usuario">Nickname</label>
									</td>
									<td>
										<input type="text" name="txtNickname" id="txtNickname" class="elementoRegistro" onkeyup="AjaxUsuario()">
									</td>
								</tr>
								<tr>
									<td>
										<label class="lbl">Contraseña</label>
									</td>
									<td>
										<input type="password" name="txtContrasenia" id="txtContrasenia" class="elementoRegistro">
									</td>
								</tr>
								<tr>
									<td>
										<input type="button" id="btnVolver" value="Volver" class="Boton" onclick="volver();">
									</td>
									<td>
										<input type="button" id="btnCrear" value="Crear" class="Boton" onclick="vacio();">
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<label class="lbl" id="lblErrorRegistro"></label>
									</td>
								</tr>
							</table>
					
				</div>
			</div>
			<div id="contenedor_confirmacionCambios">
				<h2 class="lbl">Cuenta creada con exito</h2>
				<input type="button" id="btnAceptarCambios" onclick="aceptarCuenta();" class="Boton" value="Aceptar">
			</div>
			</form>

		</article>
		<article id="artCompra">
			<div id="contenedor_cuerpo">
				<div id="contenedor_compra" class="Contenedor">
					<form>
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
									<input type="button" name="btnReservarTicket" id="btnReservarTicket" value="Reservar Ticket" class="Boton" onclick="informarLogin();">
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
			<div id="contenedor_informe">
				<h2 class="lbl">Para comprar pasajes debe estar logeado</h2>
				<input type="button" id="btnAceptarCambios" onclick="aceptarInforme();" class="Boton" value="Aceptar">
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