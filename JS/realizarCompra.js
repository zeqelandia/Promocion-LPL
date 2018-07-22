function enviar() {
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

function comprar() {
    var peticion = ObtenerXHR();
    var enviar = "../php/comprar.php?origen=" + document.getElementById("slctOrigen").value + "&destino=" + document.getElementById("slctDestino").value + "&fecha=" + document.getElementById("fecha").value + "&horario=" + document.getElementById("slctHora").value + "&tarifa=" + document.getElementById("slctTarifa").value;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarMail;
    function revisarMail() {
        if(peticion.readyState == 4) {
            if(peticion.responseText == "FAIL"){
                //ERR
            }else{
                document.getElementById("formularioCompra").submit();
            }
        }
    }
}
