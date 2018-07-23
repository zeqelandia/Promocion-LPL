function cargarHistorial() {
    var peticion = ObtenerXHR();
    var enviar = "../php/historial.php?";
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarMail;
    function revisarMail() {
        if(peticion.readyState == 4) {
            if(peticion.responseText == "NULL"){
                document.getElementById("tblHistorial").innerHTML = "No tiene compras realizadas.";
            }else{
                document.getElementById("tblHistorial").innerHTML = peticion.responseText; 
            }
        }
    }
}