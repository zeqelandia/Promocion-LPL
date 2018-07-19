var dni = false;
var mail = false;
var user = false;
//elemento es una cadena que contiene que txt es
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
function vacio(){
    var tabla = document.getElementsByClassName("elementoRegistro");
    var msj = document.getElementById("lblErrorRegistro");
    var vacio = false;
    for (let index = 0; index < tabla.length; index++) {
        if (tabla[index].value == "") {
            vacio = true;
            break;
        }
    }
    if (!vacio) {
        correcto(tabla,msj);
    }else{
        msj.innerHTML = "Complete los campos faltantes";
        msj.style.color = "red";
    }
}
function correcto(tabla,msj) {
    var tel = false;
    if(!(tabla[3].value.length == 10)){
        msj.innerHTML = "El area no debe contener 0 y el numero sin el 15";
        msj.style.color = "red";
    }else{
        msj.innerHTML = "";
        tel = true;
    }
    if (!dni) {
        AjaxDni();
    }
    if (!mail) {
        AjaxMail();
    }
    if (!user) {
        AjaxUsuario();
    }
    if (dni && tel && mail && user) {
        document.getElementById("txtContrasenia").value = b64_md5(document.getElementById("txtContrasenia").value);
        document.getElementById("formularioRegistro").submit();
    }
}
function AjaxDni() {
    var txtDNI = document.getElementById("txtDNI");
    var msj = document.getElementById("lblErrorRegistro");
    if (!(txtDNI.value.length == 8)) {
        document.getElementById("lblDNI").style.color;
        msj.innerHTML = "El dni debe tener 8 numeros";
        msj.style.color = "red";
        dni = false;
    }else{
        msj.innerHTML = "";
        var peticion = ObtenerXHR();
        var enviar = "../php/registro.php?DNI="+txtDNI.value+"&consulta=DNI";
        peticion.open("GET", enviar, true);
        peticion.send(null);
        peticion.onreadystatechange = revisarDni;
        function revisarDni() {
            if(peticion.readyState == 4) {
                if (peticion.responseText == "null") {
                    msj.innerHTML = "";
                    dni = true;
                }else{
                    msj.innerHTML = "El DNI ya esta registrado.";
                    msj.style.color = "red";
                    dni = false;
                }
            }
        }
    }
}
function validar_email(email) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}
function AjaxMail() {
    var txtMail = document.getElementById("txtMail");
    var msj = document.getElementById("lblErrorRegistro");
    if (!validar_email(txtMail.value)){
        msj.innerHTML = "El Mail no es correcto";
        msj.style.color = "red";
        mail = false;
    }else{
        msj.innerHTML = "";
        var peticion = ObtenerXHR();
        var enviar = "../php/registro.php?Mail=\""+txtMail.value+"\"&consulta=Mail";
        peticion.open("GET", enviar, true);
        peticion.send(null);
        peticion.onreadystatechange = revisarMail;
        function revisarMail() {
            if(peticion.readyState == 4) {
                if (peticion.responseText == "null") {
                    msj.innerHTML = "";
                    mail = true;
                }else{
                    msj.innerHTML = "El Mail ya esta registrado.";
                    msj.style.color = "red";
                    mail = false;
                }
            }
        }
    }
}
function AjaxUsuario() {
    var msj = document.getElementById("lblErrorRegistro");
    var peticion = ObtenerXHR();
    var txtUsuario = document.getElementById("txtNickname");
    var enviar = "../php/registro.php?nombre_usuario=\""+txtUsuario.value+"\"&consulta=nombre_usuario";
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarUsuario;
    function revisarUsuario() {
        if(peticion.readyState == 4) {
            if (peticion.responseText == "null") {
                msj.innerHTML = "";
                user = true;
            }else{
                msj.innerHTML = "El Usuario ya esta registrado.";
                msj.style.color = "red";
                user = false;
            }
        }
    }
}
