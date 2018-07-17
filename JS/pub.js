var num=0;

function publicidad() {
	setInterval(function(){comprobar();},5000);
}

function comprobar(){
		var destino= document.getElementById("lblDestino");
		var precio= document.getElementById("lblPrecio");
		var fondo= document.getElementById("contenedor_cuerpo");

		num++;
		if (num==1) {
			//Buenos Aires
			destino.innerHTML= "Buenos Aires";
			destino.style.fontSize= "60px"; 
			precio.innerHTML= "600$";
			fondo.style.backgroundImage= "url(\"../img/ba1.jpeg\")";
		}else if(num==2){
			//Cordoba
			destino.innerHTML= "Córdoba";
			destino.style.fontSize= "70px"; 
			precio.innerHTML= "250$";
			fondo.style.backgroundImage= "url(\"../img/cordoba1.jpg\")";
		}else if(num==3){
			//Rosario
			destino.innerHTML= "Rosario";
			destino.style.fontSize= "70px"; 
			precio.innerHTML= "700$";
			fondo.style.backgroundImage= "url(\"../img/rosario2.jpg\")";
		}else if(num==4){
			//Rio Cuarto
			destino.innerHTML= "Rio Cuarto";
			destino.style.fontSize= "70px";
			precio.innerHTML= "250$"; 
			fondo.style.backgroundImage= "url(\"../img/rc1.jpg\")";
		}else if(num==5){
			//Mar Del Plata
			destino.innerHTML= "Mar Del Plata";
			destino.style.fontSize= "55px"; 
			precio.innerHTML= "600$";
			fondo.style.backgroundImage= "url(\"../img/mdq1.jpg\")";
			num=0;
		}
}