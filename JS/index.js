function ingresar(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	var ventanaLogIn = document.getElementById("contenedor_login");
	var ventanaCrearCuenta = document.getElementById("contenedor_crearCuenta");

	document.getElementById("contenedor_pub").style.visibility= "hidden";
	document.getElementById("contenedor_compra").style.visibility= "hidden";
	document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
	document.getElementById("artCompra").style.visibility= "hidden";

	ventanaIngreso.classList.remove("fadeOutUp");
	document.getElementById("artIngreso").style.visibility= "visible";
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

function mostrarAyuda(num){
	var ventanaAyuda = document.getElementById("contenedor_ayuda");
	var ventanaAyudaPerfil = document.getElementById("contenedor_ayudaPerfil");

	if(num==1){
		ventanaAyuda.style.visibility= "visible";
	}else{
		ventanaAyudaPerfil.style.visibility= "visible";
	}
}

function esconderAyuda(num){
	var ventanaAyuda = document.getElementById("contenedor_ayuda");
	var ventanaAyudaPerfil = document.getElementById("contenedor_ayudaPerfil");

	if(num==1){
		ventanaAyuda.style.visibility= "hidden";
	}else{
		ventanaAyudaPerfil.style.visibility= "hidden";
	}
}

function confirmarCuenta(){
	document.getElementById("contenedor_ingresar").style.visibility= "hidden";
	document.getElementById("contenedor_login").style.visibility= "hidden";
	document.getElementById("contenedor_crearCuenta").style.visibility= "hidden";
	document.getElementById("contenedor_confirmacionCambios").style.visibility= "visible";
}

function aceptarCuenta(){
	document.getElementById("formularioRegistro").submit();

	/*document.getElementById("contenedor_ingresar").style.visibility= "visible";
	document.getElementById("contenedor_login").style.visibility= "visible";
	document.getElementById("contenedor_crearCuenta").style.visibility= "visible";
	document.getElementById("contenedor_confirmacionCambios").style.visibility= "hidden";

	volver();*/
}

function aceptarInforme(){
	document.getElementById("contenedor_informe").style.visibility= "hidden";
	
	ingresar();
}

function informarLogin(){
	document.getElementById("contenedor_informe").style.visibility= "visible";
	document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
}