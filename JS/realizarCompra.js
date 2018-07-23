function enviarCompra() {
    var tabla = ["slctOrigen","slctDestino","slctHora","slctTarifa"];
    var msj = document.getElementById("lblError");
    var consistidoFecha = false;
    var consistidoCampos = false;
    var fecha = Date.parse(document.getElementById("fecha").value);
    var fechaActual = new Date();
    if (fecha < fechaActual) {
        msj.innerHTML = "Ingrese una fecha correcta";
        msj.style.color = "red";
        consistidoFecha = false;
    }else{
        consistidoFecha = true;
    }
    for (let index = 0; index < tabla.length; index++) {
        if(document.getElementById(tabla[index]).value == 0) {
                msj.innerHTML = "Complete todos los campos";
                msj.style.color = "red";
                consistidoCampos = false;
                break;
        }else{
            consistidoCampos = true;
        }
    }
    if (consistidoFecha && consistidoCampos) {
        msj.innerHTML = "";
        comprar();
    }
}

function mostrarErrorCompra(num){
    document.getElementById("errorCompra").value=1;

    if(num==1){
        document.getElementById("mensajeErrorCompra").innerHTML= "No quedan asientos disponibles";
    }else if(num==2){
        document.getElementById("mensajeErrorCompra").innerHTML= "Debe ser pasajero frecuente <br> para elegir esta tarifa";
    }else if(num==3){
        document.getElementById("mensajeErrorCompra").innerHTML= "Su cantidad de kilometros es <br> insuficiente para realizar la compra";
    }

    document.getElementById("contenedor_errorCompra").style.visibility= "visible";
    document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
}

function comprar() {
    var peticion = ObtenerXHR();
    var enviar = "../php/comprar.php?origen=" + document.getElementById("slctOrigen").value + "&destino=" + document.getElementById("slctDestino").value + "&fecha=" + document.getElementById("fecha").value + "&horario=" + document.getElementById("slctHora").value + "&tarifa=" + document.getElementById("slctTarifa").value;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarMail;
    function revisarMail() {
        if(peticion.readyState == 4) {
            switch (peticion.responseText) {
                case "FAIL":
                    //ERR no hay asientos
                    mostrarErrorCompra(1);
                    break;
                case "NOFRECUENTE":
                    //ERR no puede comprar con puntos
                    mostrarErrorCompra(2);
                    break;
                case "PUNTOSFALTANTES":
                    //ERR no puede comprar faltan puntos
                    mostrarErrorCompra(3);
                    break;
                default:
                    document.getElementById("formularioCompra").submit();
                    break;
            }
        }
    }
}
