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

	if(document.getElementById("cambiosRealizados").value==1){
		document.getElementById("contenedor_confirmacionCambios").style.visibility= "visible";
	}

	document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
	document.getElementById("contenedor_errorCompra").style.visibility= "hidden";

	document.getElementById("contenedor_footer").style.visibility= "visible";
}	

function comprarTickets(){
	var artCompra = document.getElementById("artCompraUser");
	var artPerfil= document.getElementById("artPerfil");
	var artHistorial= document.getElementById("artHistorial");

	artCompra.style.visibility= "visible";
	artHistorial.style.visibility= "hidden";
	artPerfil.style.visibility= "hidden";

	if(document.getElementById("errorCompra").value==1){
		document.getElementById("contenedor_errorCompra").style.visibility= "visible";
	}else{
		document.getElementById("contenedor_cuerpo").style.visibility= "visible";
	}

	document.getElementById("contenedor_footer").style.visibility= "visible";
}

function historialCompras(){
	var artCompra = document.getElementById("artCompraUser");
	var artPerfil= document.getElementById("artPerfil");
	var artHistorial= document.getElementById("artHistorial");

	artCompra.style.visibility= "hidden";
	artHistorial.style.visibility= "visible";
	artPerfil.style.visibility= "hidden";
	document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
	document.getElementById("contenedor_confirmacionCambios").style.visibility= "hidden";
	document.getElementById("contenedor_errorCompra").style.visibility= "hidden";

	document.getElementById("contenedor_footer").style.visibility= "hidden";
	cargarHistorial();
}

function aceptarCambios(){
	document.getElementById("contenedor_confirmacionCambios").style.visibility= "hidden";
	document.getElementById("cambiosRealizados").value= 0;
	document.getElementById("contenedor_editarPerfil").style.visibility= "visible";

	location.href="user.php";
}

function mostrarConfirmacion(){
	document.getElementById("contenedor_confirmacionCambios").style.visibility= "visible";
	document.getElementById("cambiosRealizados").value=1;
	document.getElementById("contenedor_editarPerfil").style.visibility= "hidden";
}

function aceptarErrorCompra(){
	document.getElementById("contenedor_errorCompra").style.visibility= "hidden";
	document.getElementById("contenedor_cuerpo").style.visibility= "visible";

	document.getElementById("errorCompra").value = 0;
}