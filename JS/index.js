function ingresar(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	ventanaIngreso.classList.remove("fadeOutUp");
	ventanaIngreso.style.visibility= "visible";
	ventanaIngreso.classList.add("fadeInDown");
}

function cerrarIngreso(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	
	ventanaIngreso.classList.remove("fadeInDown");
	ventanaIngreso.classList.add("fadeOutUp");
	//ventanaIngreso.style.visibility= "hidden";

	setTimeout(function(){
		ventanaIngreso.style.visibility= "hidden";
	}, 1000);
}

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
}