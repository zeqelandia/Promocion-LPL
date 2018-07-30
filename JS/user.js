function elegirAsiento(num){
	document.getElementById("inptAsiento").value= num;
}

function cerrarSesion(){
	window.location.href = ("../php/cerrarSesion.php");
}

function editarPerfil(){
	if(document.getElementById("navegacion").value==1){
		var artCompra = document.getElementById("artCompraUser");
		var artPerfil= document.getElementById("artPerfil");
		var artHistorial= document.getElementById("artHistorial");

		artCompra.style.visibility= "hidden";
		artHistorial.style.visibility= "hidden";
		artPerfil.style.visibility= "visible";

		if(document.getElementById("cambiosRealizados").value==1){
			document.getElementById("contenedor_confirmacionCambios").style.visibility= "visible";
		}

		document.getElementById("divTitulo").style.visibility= "hidden";
		document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
		document.getElementById("contenedor_errorCompra").style.visibility= "hidden";

		document.getElementById("contenedor_footer").style.visibility= "visible";
	}
}	

function comprarTickets(){
	if(document.getElementById("navegacion").value==1){
		var artCompra = document.getElementById("artCompraUser");
		var artPerfil= document.getElementById("artPerfil");
		var artHistorial= document.getElementById("artHistorial");

		artCompra.style.visibility= "visible";
		artHistorial.style.visibility= "hidden";
		artPerfil.style.visibility= "hidden";

		document.getElementById("divTitulo").style.visibility= "visible";
		if(document.getElementById("errorCompra").value==1){
			document.getElementById("contenedor_errorCompra").style.visibility= "visible";
		}else{
			document.getElementById("contenedor_cuerpo").style.visibility= "visible";
		}

		document.getElementById("contenedor_footer").style.visibility= "visible";
	}
}

function historialCompras(){
	if(document.getElementById("navegacion").value==1){
		var artCompra = document.getElementById("artCompraUser");
		var artPerfil= document.getElementById("artPerfil");
		var artHistorial= document.getElementById("artHistorial");

		artCompra.style.visibility= "hidden";
		artHistorial.style.visibility= "visible";
		artPerfil.style.visibility= "hidden";

		document.getElementById("divTitulo").style.visibility= "hidden";
		document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
		document.getElementById("contenedor_confirmacionCambios").style.visibility= "hidden";
		document.getElementById("contenedor_errorCompra").style.visibility= "hidden";

		document.getElementById("contenedor_footer").style.visibility= "hidden";
		cargarHistorial();
	}
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

function volverAsientos(){
	document.getElementById("contenedor_asientos").style.visibility= "hidden";
	document.getElementById("contenedor_asientosNormales").style.visibility= "hidden";
	document.getElementById("contenedor_asientosPromocionales").style.visibility= "hidden";
	document.getElementById("contenedor_asientosVip").style.visibility= "hidden";
	document.getElementById("contenedor_botonesAsientos").style.visibility= "hidden";

	document.getElementById("contenedor_cuerpo").style.visibility= "visible";
    document.getElementById("divTitulo").style.visibility= "visible";

    
}