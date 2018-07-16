function ingresar(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	var ventanaLogIn = document.getElementById("contenedor_login");
	var ventanaCrearCuenta = document.getElementById("contenedor_crearCuenta");
	document.getElementById("contenedor_pub").style.visibility= "hidden";
	document.getElementById("contenedor_compra").style.visibility= "hidden";

	ventanaIngreso.classList.remove("fadeOutUp");
	ventanaIngreso.style.visibility= "visible";
	ventanaLogIn.style.visibility= "visible";
	ventanaIngreso.classList.add("fadeInDown");
}

function cerrarIngreso(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	var ventanaLogIn = document.getElementById("contenedor_login");
	var ventanaCrearCuenta = document.getElementById("contenedor_crearCuenta");

	ventanaIngreso.classList.remove("fadeInDown");
	ventanaIngreso.classList.add("fadeOutUp");
	//ventanaIngreso.style.visibility= "hidden";

	setTimeout(function(){
		ventanaLogIn.style.visibility= "hidden";
		ventanaIngreso.style.visibility= "hidden";
		document.getElementById("contenedor_pub").style.visibility= "visible";
	document.getElementById("contenedor_compra").style.visibility= "visible";
	}, 1000);


}

    
function menuCrearCuenta(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	var ventanaLogIn = document.getElementById("contenedor_login");
	var ventanaCrearCuenta = document.getElementById("contenedor_crearCuenta");

	ventanaCrearCuenta.classList.remove("fadeOut");
	ventanaLogIn.classList.add("fadeOut");

	setTimeout(function(){
		ventanaLogIn.style.visibility= "hidden";
	}, 1000);


	ventanaCrearCuenta.style.visibility= "visible";
	ventanaCrearCuenta.classList.add("fadeIn");
}

function volver(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	var ventanaLogIn = document.getElementById("contenedor_login");
	var ventanaCrearCuenta = document.getElementById("contenedor_crearCuenta");

	ventanaLogIn.classList.remove("fadeOut");
	ventanaCrearCuenta.classList.add("fadeOut");

	setTimeout(function(){
		ventanaCrearCuenta.style.visibility= "hidden";
	}, 1000);


	ventanaLogIn.style.visibility= "visible";
	ventanaLogIn.classList.add("fadeIn");
}

function mostrarAyuda(){
	var ventanaAyuda = document.getElementById("contenedor_ayuda");

	ventanaAyuda.style.visibility= "visible";
}

function esconderAyuda(){
	var ventanaAyuda = document.getElementById("contenedor_ayuda");

	ventanaAyuda.style.visibility= "hidden";

}