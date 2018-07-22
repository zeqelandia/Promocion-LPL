function cargarHistorial() {
    var peticion = ObtenerXHR();
    var enviar = "../php/historial.php?";
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarMail;
    function revisarMail() {
        if(peticion.readyState == 4) {
            console.log(peticion.responseText);
            document.getElementById("tblHistorial").innerHTML = peticion.responseText; 
        }
    }
}