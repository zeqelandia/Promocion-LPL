var mailCorrecto = true;
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
function existeCorreo(mail, msj) {
    var peticion = ObtenerXHR();
    var enviar = "../php/registro.php?Mail=\""+mail.value.toUpperCase()+"\"&consulta=Mail";
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarMail;
    function revisarMail() {
        if(peticion.readyState == 4) {
            if (peticion.responseText == "null") {
                msj.innerHTML = "";
                mailCorrecto = true;                
            }else{
                msj.innerHTML = "El Mail ya esta registrado.";
                msj.style.color = "red";
                mailCorrecto = false;                
            }
        }
    }
}
function revisarMail() {
    var msj = document.getElementById("lblErrorEditar");
    var mail = document.getElementById("mail");
    if (mail.value != "") {
        if (!validar_email(mail.value)) {
            msj.innerHTML = "El Mail esta mal escrito";
            msj.style.color = "red";
        }else{
            existeCorreo(mail, msj);
        }
    }else{
        msj.innerHTML = "";
        mailCorrecto = true;
    }
}

function mostrarConfirmacion(){
    document.getElementById("contenedor_confirmacionCambios").style.visibility= "visible";
    document.getElementById("contenedor_editarPerfil").style.visibility= "hidden";
}

function cambiar(txt,valor) {
    var peticion = ObtenerXHR();
    var enviar;
    if (txt == "contrasenia") {
        enviar = "../php/editarUsuario.php?" + txt + "=\'"+b64_md5(valor)+"\'&consulta="+txt;
    }else if(txt == "pasajero_frecuente" || txt == "telefono"){
        enviar = "../php/editarUsuario.php?" + txt + "="+ valor +"&consulta="+txt;
    }else if(txt == "mail"){
        if (mailCorrecto) {
            enviar = "../php/editarUsuario.php?" + txt + "=\'"+ valor.toUpperCase() +"\'&consulta="+txt;
        }else{
            revisarMail();
        }
    }else{
        enviar = "../php/editarUsuario.php?" + txt + "=\'"+ valor.toUpperCase() +"\'&consulta="+txt;
    }
    peticion.onreadystatechange = revisar;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    function revisar() {
        if(peticion.readyState == 4){
            var msj = document.getElementById("lblErrorEditar");
            if (peticion.responseText == "No se pudo insertar el elemento") {
                msj.innerHTML = "Hmm algo raro esta pasando, vuelve a intentarlo más tarde";
                msj.style.color = "red";
            }else{
                //redireccion a pagina de cambios realizados.
                //location.href="user.php";
                mostrarConfirmacion();
            }
        }
    }
}
function enviar() {
    var tabla = ["nombres","apellidos","telefono","mail","pasajero_frecuente","contrasenia"];
    for (let index = 0; index < tabla.length; index++) {
        switch (document.getElementById(tabla[index]).value) {
            case "":
                
                break;
            case "-1":

                break;
            default:
                cambiar(tabla[index],document.getElementById(tabla[index]).value);
                break;
        }
    }
}