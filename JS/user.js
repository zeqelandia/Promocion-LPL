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
}	

function comprarTickets(){
	var artCompra = document.getElementById("artCompraUser");
	var artPerfil= document.getElementById("artPerfil");
	var artHistorial= document.getElementById("artHistorial");

	artCompra.style.visibility= "visible";
	artHistorial.style.visibility= "hidden";
	artPerfil.style.visibility= "hidden";
}