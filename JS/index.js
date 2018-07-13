function ingresar(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	ventanaIngreso.classList.remove("fadeOutUp");
	ventanaIngreso.style.visibility= "visible";
	ventanaIngreso.classList.add("fadeInDown");
}

function cerrarIngreso(){
	var ventanaIngreso = document.getElementById("contenedor_ingresar");
	
	ventanaIngreso.classList.remove("fadeInDown");
	ventanaIngreso.classList.add("fadeOutUp");
	//ventanaIngreso.style.visibility= "hidden";

	setTimeout(function(){
		ventanaIngreso.style.visibility= "hidden";
	}, 1000);
}