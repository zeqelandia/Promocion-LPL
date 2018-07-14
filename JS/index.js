function ingresar(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	var ventanaLogIn = document.getElementById("contenedor_login");
	var ventanaCrearCuenta = document.getElementById("contenedor_crearCuenta");

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
	}, 1000);
}

<<<<<<< HEAD
//elemento es una cadena que contiene que txt es
function Ajax(elemento) {
    function ObtenerXHR() {
        req = false;
        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest();
        }else{
            if (window.ActiveXObjet) {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return req;
    }
    var peticion = ObtenerXHR();
	txtNombreUsuario = document.getElementById("txtUsuario");
	txtContrasennaUsuario = document.getElementById("txtContrasenna");
	//encriptar clave y despues mandarla por get
	txtContrasennaUsuarioEncriptada = /*encriptar(*/txtContrasennaUsuario.value/*)*/;
    var enviar = "../php/login.php?usuario="+txtNombreUsuario.value+"&contrasenna="+txtContrasennaUsuarioEncriptada;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisar;
    function revisar() {
        var msj = document.getElementById("lblError");
        switch (peticion.readyState) {
            case 1:
                msj.innerHTML = "Cargando";
                break;
            case 2:
                msj.innerHTML = "Cargado";
                break;
            case 3:
                msj.innerHTML = "Buscando";
                break;
			case 4:
			console.log(peticion.responseText);
			
            if (peticion.responseText == "null") {
                msj.innerHTML = "El usuario o contraseña son incorrectos";
                msj.style.color = "red";
            }else{
                msj.innerHTML = "Esta libre";
                msj.style.color = "green";
            }
                break;
            default:
                break;
        }
    }
=======
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
>>>>>>> e1e9f91dcc6820fe470d7fc7f5695b1b5658b742
}