function opcionesTicket(valor) {
	var destino = document.getElementById("slctDestino");
	var horario = document.getElementById("slctHora");

	if (valor=="Buenos Aires") {
		//Buenos Aires
		destino.innerHTML= 	"<option value=\"0\">Elija la ciudad de destino</option>"+
							"<option value=\"Rosario\">Rosario</option>"+
							"<option value=\"Cordoba\">Córdoba</option>"+
							"<option value=\"Mar Del Plata\">Mar Del Plata</option>";
	}else if (valor=="Rosario") {
		//Rosario
		destino.innerHTML= 	"<option value=\"0\">Elija la ciudad de destino</option>"+
							"<option value=\"Buenos Aires\">Buenos Aires</option>";
	}else if (valor=="Cordoba") {
		//Cordoba
		destino.innerHTML= 	"<option value=\"0\">Elija la ciudad de destino</option>"+
							"<option value=\"Buenos Aires\">Buenos Aires</option>"+
							"<option value=\"Rio Cuarto\">Río Cuarto</option>";
	}else if (valor=="Mar Del Plata") {
		//Mar Del Plata
		destino.innerHTML=	"<option value=\"0\">Elija la ciudad de destino</option>"+
							"<option value=\"Buenos Aires\">Buenos Aires</option>";
	}else if (valor=="Rio Cuarto") {
		//Rio Cuarto
		destino.innerHTML= 	"<option value=\"0\">Elija la ciudad de destino</option>"+
							"<option value=\"Cordoba\">Córdoba</option>";
	}else if (valor==0) {
		//Reset
		destino.innerHTML= 	"<option value=\"0\">Elija la ciudad de destino</option>";
		tarifa.innerHTML=	"<option value=\"0\">Elija una tarifa</option>";
		horario.innerHTML= 	"<option value\"0\">Elija el horario</option>";
		
	}
}

function verificarOpciones(){
	var origen = document.getElementById("slctOrigen").value;
	var destino = document.getElementById("slctDestino").value;
	var tarifa= document.getElementById("slctTarifa");
	var horario = document.getElementById("slctHora");

	if (origen=="Buenos Aires") {
		if(destino=="Rosario"){
			tarifa.innerHTML= 	"<option value=\"0\">Elija una tarifa</option>" + 
							  	"<option value=\"1=700\">Tarifa normal= $700</option>"+
							  	"<option value=\"2=210\">Tarifa promocional= $210</option>"+
							  	"<option value=\"3=1400\">Tarifa ejecutiva= $1400</option>";
							  	"<option value=\"4=1750\">Tarifa pasajeros frecuentes= 1750km</option>";
            
			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>"+
								"<option value\"06:00\">06:00</option>"+
            					"<option value\"20:30\">20:30</option>";

		}else if(destino=="Cordoba"){
			tarifa.innerHTML= 	"<option value=\"0\">Elija una tarifa</option>" + 
								"<option value=\"1=1200\">Tarifa normal= $1200</option>"+
			 					"<option value=\"2=360\">Tarifa promocional= $360</option>"+
							  	"<option value=\"3=2400\">Tarifa ejecutiva= $2400</option>";
							  	"<option value=\"4=3000\">Tarifa pasajeros frecuentes= 3000km</option>";
			
			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>"+
								"<option value\"22:00\">22:00</option>";

		}else if(destino=="Mar Del Plata"){
			tarifa.innerHTML=	"<option value=\"0\">Elija una tarifa</option>" + 
			 					"<option value=\"1=600\">Tarifa normal= $600</option>"+
							  	"<option value=\"2=200\">Tarifa promocional= $200</option>"+
							  	"<option value=\"3=1200\">Tarifa ejecutiva= $1200</option>";
							  	"<option value=\"4=1500\">Tarifa pasajeros frecuentes= 1500km</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>"+
								"<option value\"08:00\">08:00</option>"+
            				   	"<option value\"18:00\">18:00</option>";

		}else if(destino==0){
			tarifa.innerHTML=	"<option value=\"0\">Elija una tarifa</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>";
		}
	}else if(origen=="Rosario"){
		if(destino=="Buenos Aires"){
			tarifa.innerHTML= 	"<option value=\"0\">Elija una tarifa</option>" + 
								"<option value=\"1=700\">Tarifa normal= $700</option>"+
							  	"<option value=\"2=210\">Tarifa promocional= $210</option>"+
							  	"<option value=\"3=1400\">Tarifa ejecutiva= $1400</option>";
							  	"<option value=\"4=1750\">Tarifa pasajeros frecuentes= 1750km</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>"+
								"<option value\"07:30\">07:30</option>"+
            				   	"<option value\"16:00\">16:00</option>";
		}else if(destino==0){
			tarifa.innerHTML=	"<option value=\"0\">Elija una tarifa</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>";
		}
	}else if(origen=="Cordoba"){
		if(destino=="Buenos Aires"){
			tarifa.innerHTML= 	"<option value=\"0\">Elija una tarifa</option>" + 
								"<option value=\"1=1200\">Tarifa normal= $1200</option>"+
							  	"<option value=\"2=360\">Tarifa promocional= $360</option>"+
							  	"<option value=\"3=2400\">Tarifa ejecutiva= $2400</option>";
							  	"<option value=\"4=3000\">Tarifa pasajeros frecuentes= 3000km</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>"+
								"<option value\"21:00\">21:00</option>";


		}else if(destino=="Rio Cuarto"){
			tarifa.innerHTML= 	"<option value=\"0\">Elija una tarifa</option>" + 
								"<option value=\"1=250\">Tarifa normal= $250</option>"+
							  	"<option value=\"2=75\">Tarifa promocional= $75</option>"+
							  	"<option value=\"3=500\">Tarifa ejecutiva= $500</option>";
							  	"<option value=\"4=625\">Tarifa pasajeros frecuentes= 625km</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>"+
								"<option value\"07:00\">07:00</option>"+
            				   	"<option value\"13:00\">13:00</option>";
		}else if(destino==0){
			tarifa.innerHTML=	"<option value=\"0\">Elija una tarifa</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>";
		}
	}else if(origen=="Mar Del Plata"){
		if(destino=="Buenos Aires"){
			tarifa.innerHTML= 	"<option value=\"0\">Elija una tarifa</option>" + 
								"<option value=\"1=600\">Tarifa normal= $600</option>"+
							  	"<option value=\"2=200\">Tarifa promocional= $200</option>"+
							  	"<option value=\"3=1200\">Tarifa ejecutiva= $1200</option>";
							 	"<option value=\"4=1500\">Tarifa pasajeros frecuentes= 1500km</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>"+
								"<option value\"11:00\">11:00</option>";
		}else if(destino==0){
			tarifa.innerHTML=	"<option value=\"0\">Elija una tarifa</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>";
		}
	}else if(origen=="Rio Cuarto"){
		if(destino=="Cordoba"){
			tarifa.innerHTML= 	"<option value=\"0\">Elija una tarifa</option>" + 
								"<option value=\"1=250\">Tarifa normal= $250</option>"+
							  	"<option value=\"2=75\">Tarifa promocional= $75</option>"+
							  	"<option value=\"3=500\">Tarifa ejecutiva= $500</option>";
							  	"<option value=\"4=625\">Tarifa pasajeros frecuentes= 625km</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>"+
								"<option value\"16:00\">16:00</option>";
		}else if(destino==0){
			tarifa.innerHTML=	"<option value=\"0\">Elija una tarifa</option>";

			horario.innerHTML= 	"<option value\"0\">Elija el horario</option>";
		}
	}
}