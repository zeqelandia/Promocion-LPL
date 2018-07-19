function AjaxIngreso() {
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
    var usuario = document.getElementById("txtUsuario");
    var contrasenna = document.getElementById("txtContrasenna");
    var enviar = "../php/ingreso.php?usuario="+usuario.value+"&contrasenna="+b64_md5(contrasenna.value);
    peticion.onreadystatechange = revisar;
    peticion.open("GET", enviar, true);
    peticion.send(null);
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
            if (peticion.responseText == "null") {
                msj.innerHTML = "Usuario o contraseña incorrectos";
                msj.style.color = "red";
            }else{
                location.href="user.php"
            }
                break;
            default:
                break;
        }
    }
}