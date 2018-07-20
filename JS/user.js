function cerrarSesion(){
	window.location.href = ("../php/cerrarSesion.php");
}

function editarPerfil(){
	var artCompra = document.getElementById("artCompraUser");
	var artPerfil= document.getElementById("artPerfil");
	var artHistorial= document.getElementById("artHistorial");

	artCompra.style.visibility= "hidden";
	artHistorial.style.visibility= "hidden";
	artPerfil.style.visibility= "visible";

	document.getElementById("contenedor_footer").style.visibility= "visible";
}	

function comprarTickets(){
	var artCompra = document.getElementById("artCompraUser");
	var artPerfil= document.getElementById("artPerfil");
	var artHistorial= document.getElementById("artHistorial");

	artCompra.style.visibility= "visible";
	artHistorial.style.visibility= "hidden";
	artPerfil.style.visibility= "hidden";

	document.getElementById("contenedor_footer").style.visibility= "visible";
}

function historialCompras(){
	var artCompra = document.getElementById("artCompraUser");
	var artPerfil= document.getElementById("artPerfil");
	var artHistorial= document.getElementById("artHistorial");

	artCompra.style.visibility= "hidden";
	artHistorial.style.visibility= "visible";
	artPerfil.style.visibility= "hidden";

	document.getElementById("contenedor_footer").style.visibility= "hidden";
}

function aceptarCambios(){
	document.getElementById("contenedor_confirmacionCambios").style.visibility= "hidden";
	document.getElementById("contenedor_editarPerfil").style.visibility= "visible";
}

function mostrarConfirmacion(){
	document.getElementById("contenedor_confirmacionCambios").style.visibility= "visible";
	document.getElementById("contenedor_editarPerfil").style.visibility= "hidden";
}