function opcionesTicket(valor) {
	var destino = document.getElementById("slctDestino");
	var horario = document.getElementById("slctHora");

	if (valor==1) {
		//Buenos Aires
		destino.innerHTML= "<option value=\"2\">Rosario</option>"+
							"<option value=\"3\">Córdoba</option>"+
							"<option value=\"4\">Mar Del Plata</option>";
	}else if (valor==2) {
		//Rosario
		destino.innerHTML= "<option value=\"1\">Buenos Aires</option>";
	}else if (valor==3) {
		//Cordoba
		destino.innerHTML= "<option value=\"1\">Buenos Aires</option>"+
							"<option value=\"5\">Río Cuarto</option>";
	}else if (valor==4) {
		//Mar Del Plata
		destino.innerHTML= "<option value=\"1\">Buenos Aires</option>";
	}else if (valor==5) {
		//Rio Cuarto
		destino.innerHTML= "<option value=\"3\">Córdoba</option>";
	}
}

function verificarOpciones(){
	var origen = document.getElementById("slctOrigen").value;
	var destino = document.getElementById("slctDestino").value;
	var tarifa= document.getElementById("slctTarifa");
	var horario = document.getElementById("slctHora");


	if (origen==1) {
		if(destino==2){
			tarifa.innerHTML= "<option value=\"1\">Tarifa normal= $700</option>"+
							  "<option value=\"2\">Tarifa promocional= $210</option>"+
							  "<option value=\"2\">Tarifa ejecutiva= $1400</option>"+
							  "<option value=\"4\">Tarifa pasajeros frecuentes= 1750km</option>";
            
            horario.innerHTML= "<option value\"1\">06:00 am</option>"+
            				   "<option value\"2\">20:30 pm</option>";

		}else if(destino==3){
			tarifa.innerHTML= "<option value=\"1\">Tarifa normal= $1200</option>"+
							  "<option value=\"2\">Tarifa promocional= $360</option>"+
							  "<option value=\"2\">Tarifa ejecutiva= $2400</option>"+
							  "<option value=\"4\">Tarifa pasajeros frecuentes= 3000km</option>";
			
			horario.innerHTML= "<option value\"1\">22:00 pm</option>";

		}else if(destino==4){
			tarifa.innerHTML= "<option value=\"1\">Tarifa normal= $600</option>"+
							  "<option value=\"2\">Tarifa promocional= $200</option>"+
							  "<option value=\"2\">Tarifa ejecutiva= $1200</option>"+
							  "<option value=\"4\">Tarifa pasajeros frecuentes= 1500km</option>";

			horario.innerHTML= "<option value\"1\">08:00 am</option>"+
            				   "<option value\"2\">18:00 pm</option>";

		}
	}else if(origen==2){
		if(destino==1){
			tarifa.innerHTML= "<option value=\"1\">Tarifa normal= $700</option>"+
							  "<option value=\"2\">Tarifa promocional= $210</option>"+
							  "<option value=\"2\">Tarifa ejecutiva= $1400</option>"+
							  "<option value=\"4\">Tarifa pasajeros frecuentes= 1750km</option>";

			horario.innerHTML= "<option value\"1\">07:30 am</option>"+
            				   "<option value\"2\">16:00 pm</option>";
		}
	}else if(origen==3){
		if(destino==1){
			tarifa.innerHTML= "<option value=\"1\">Tarifa normal= $1200</option>"+
							  "<option value=\"2\">Tarifa promocional= $360</option>"+
							  "<option value=\"2\">Tarifa ejecutiva= $2400</option>"+
							  "<option value=\"4\">Tarifa pasajeros frecuentes= 3000km</option>";

			horario.innerHTML= "<option value\"1\">21:00 pm</option>";


		}else if(destino==5){
			tarifa.innerHTML= "<option value=\"1\">Tarifa normal= $250</option>"+
							  "<option value=\"2\">Tarifa promocional= $75</option>"+
							  "<option value=\"2\">Tarifa ejecutiva= $500</option>"+
							  "<option value=\"4\">Tarifa pasajeros frecuentes= 625km</option>";

			horario.innerHTML= "<option value\"1\">07:00 am</option>"+
            				   "<option value\"2\">13:00 pm</option>";
		}
	}else if(origen==4){
		if(destino==1){
			tarifa.innerHTML= "<option value=\"1\">Tarifa normal= $600</option>"+
							  "<option value=\"2\">Tarifa promocional= $200</option>"+
							  "<option value=\"2\">Tarifa ejecutiva= $1200</option>"+
							  "<option value=\"4\">Tarifa pasajeros frecuentes= 1500km</option>";

			horario.innerHTML= "<option value\"1\">11:00 am</option>";
		}
	}else if(origen==5){
		if(destino==3){
			tarifa.innerHTML= "<option value=\"1\">Tarifa normal= $250</option>"+
							  "<option value=\"2\">Tarifa promocional= $75</option>"+
							  "<option value=\"2\">Tarifa ejecutiva= $500</option>"+
							  "<option value=\"4\">Tarifa pasajeros frecuentes= 625km</option>";

			horario.innerHTML= "<option value\"1\">16:00 pm</option>";
		}
	}
}