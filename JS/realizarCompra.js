var tipoTarifa=0;
var asientoElegido=0;

function activarNavegacion(num){
    if(num==0){
        document.getElementById("navegacion").value= 0;
    }else{
        document.getElementById("navegacion").value= 1;
    }
}

function asientos(mostrar, esconder1, esconder2){
    document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
    document.getElementById("divTitulo").style.visibility= "hidden";

    document.getElementById("contenedor_asientos").style.visibility= "visible";

    mostrar.style.visibility= "visible";
    esconder1.style.visibility= "hidden";
    esconder2.style.visibility= "hidden";

    document.getElementById("contenedor_botonesAsientos").style.visibility= "visible";
}

function mostrarAsientos(){
    var tarifa= document.getElementById("slctTarifa").value[0];

    var normal= document.getElementById("contenedor_asientosNormales");
    var promocional= document.getElementById("contenedor_asientosPromocionales");
    var ejecutiva= document.getElementById("contenedor_asientosVip");

    if(tarifa==1 || tarifa==4){
        generarAsientos(document.getElementById("tblNormal"));
        asientos(normal, promocional, ejecutiva);
        tipoTarifa= 1;
    }else if(tarifa==2){
        generarAsientos(document.getElementById("tblPromocional"));
        asientos(promocional, normal, ejecutiva);
        tipoTarifa= 2;
    }else if(tarifa==3){
        generarAsientos(document.getElementById("tblVip"));
        asientos(ejecutiva, promocional, normal);
        tipoTarifa=3;
    }
}

function enviarCompra() {
    var tabla = ["slctOrigen","slctDestino","slctTarifa"];
    var msj = document.getElementById("lblError");
    var consistidoFecha = false;
    var consistidoCampos = false;
    var consistidoHora = false;
    var cad = document.getElementById("fecha").value;
    var fecha = Date.parse(cad);
    var hora = document.getElementById("slctHora").value;
    var fechaActual = new Date();
    if (!(fecha < fechaActual) && cad != "") {
        consistidoFecha = true;
    }else{
        msj.innerHTML = "Ingrese una fecha correcta";
        msj.style.color = "red";
        consistidoFecha = false;
    }
    if (hora == "Elija el horario" || hora == "") {
        msj.innerHTML = "Seleccione un horario.";
        msj.style.color = "red";
        consistidoHora = false;
    }else{
        consistidoHora = true;
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
    if (consistidoFecha && consistidoCampos && consistidoHora) {
        msj.innerHTML = "";
        activarNavegacion(0);
        disponibilidad();
        mostrarAsientos();
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

    document.getElementById("contenedor_asientos").style.visibility= "hidden";
    document.getElementById("contenedor_cuerpo").style.visibility= "hidden";
}

function comprar() {
    var peticion = ObtenerXHR();
    var enviar = "../php/comprar.php?origen=" + document.getElementById("slctOrigen").value + "&destino=" + document.getElementById("slctDestino").value + "&fecha=" + document.getElementById("fecha").value + "&horario=" + document.getElementById("slctHora").value + "&tarifa=" + document.getElementById("slctTarifa").value + "&nroAsiento=" + document.getElementById("inptAsiento").value;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarMail;
    function revisarMail() {
        if(peticion.readyState == 4  && peticion.status == 200) {
            switch (peticion.responseText) {
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

function disponibilidad() {
    var peticion = ObtenerXHR();
    var enviar = "../php/disponibilidad.php?origen=" + document.getElementById("slctOrigen").value + "&destino=" + document.getElementById("slctDestino").value + "&fecha=" + document.getElementById("fecha").value + "&horario=" + document.getElementById("slctHora").value + "&tarifa=" + document.getElementById("slctTarifa").value;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarMail;
    function revisarMail() {
        if(peticion.readyState == 4 && peticion.status == 200) {
            switch (peticion.responseText) {
                case "FAIL":
                    mostrarErrorCompra(1);
                    break;
                default:
                    //comprar();
                    document.getElementById("idViaje").value= peticion.responseText;
                    break;
            }
        }
    }
}

function generarAsientos(tar){
    var peticion = ObtenerXHR();
    var enviar = "../php/generarAsientos.php?origen=" + document.getElementById("slctOrigen").value + "&destino=" + document.getElementById("slctDestino").value + "&fecha=" + document.getElementById("fecha").value + "&horario=" + document.getElementById("slctHora").value + "&tarifa=" + document.getElementById("slctTarifa").value[0];;
    peticion.open("GET", enviar, true);
    peticion.send(null);
    peticion.onreadystatechange = revisarMail;
    function revisarMail() {
        if(peticion.readyState == 4  && peticion.status == 200) {
            var rta= peticion.responseText;
            tar.innerHTML= rta;
        }
    }
}

function elegirAsiento(num){
    document.getElementById("inptAsiento").value= num;
    comprar();
}