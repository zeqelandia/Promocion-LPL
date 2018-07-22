function AjaxIngreso() {
    var peticion = ObtenerXHR();
    var usuario = document.getElementById("txtUsuario");
    var contrasenna = document.getElementById("txtContrasenna");
    var enviar = "../php/ingreso.php?usuario="+usuario.value+"&contrasenna="+b64_md5(contrasenna.value);
    peticion.onreadystatechange = revisar;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    function revisar() {
    var msj = document.getElementById("lblError");
        if(peticion.readyState == 4){
            if (peticion.responseText == "null") {
                msj.innerHTML = "Usuario o contraseña incorrectos";
                msj.style.color = "red";
            }else{
                location.href="user.php"
            }
        }
    }
}