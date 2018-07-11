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
    txtElemento = document.getElementById("txt"+elemento);
    var enviar = "../php/registro.php?"+elemento+"="+txtElemento.value;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisar;
    function revisar() {
        var msj = document.getElementById("lbl"+elemento);
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
            if (peticion.responseText == "null") {
                msj.innerHTML = "Ya esta en uso";
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