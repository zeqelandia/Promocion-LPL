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
function vacio(elemento){
    var txtElemento = document.getElementById("txt"+elemento);
    if (txtElemento == "") {
        alert("vacio");
    }
}
function AjaxRegistro(elemento) {
    var peticion = ObtenerXHR();
    txtElemento = document.getElementById("txt"+elemento);
    var enviar = "../php/registro.php?"+elemento+"="+txtElemento.value+"&consulta="+elemento;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisar;
    function revisar() {
        var msj = document.getElementById("lblErrorRegistro");
        if(peticion.readyState == 4) {
            console.log(peticion.responseText);
            
            if (peticion.responseText == "null") {
                msj.innerHTML = "Esta libre";
                msj.style.color = "green";
            }else{
                msj.innerHTML = "Ya esta en uso";
                msj.style.color = "red";
            }
        }
    }
}