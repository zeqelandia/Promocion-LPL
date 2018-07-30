<?php
	session_start();
	include_once("BaseDeDatos.class.php");
	$bdd = new BaseDeDatos("promocion");

	$vectorAsientos;

	$id_viaje = ' where origen = "'. $_GET['origen'] .'" and destino = "'. $_GET['destino'] .'" and fecha = "'. $_GET['fecha'] .'" and hora = "'. $_GET['horario'].'"';
        $consultaSiExisteViaje = 'SELECT id_viaje from viajes' . $id_viaje;
        $respuestaExistencia = $bdd->consultar($consultaSiExisteViaje);
        $bddIdViaje= $bdd->devolverValor($respuestaExistencia, "id_viaje");

	$disponibles = "SELECT disponible FROM disponibilidad WHERE id_viaje =".$bddIdViaje;
    $consulta = $bdd->consultar($disponibles);
   // $resultado = $bdd->devolverValor($consulta, "asientos_disponibles");

    $cont=0;
	while($row = $consulta->fetch_array()){
		//array_push($vectorAsientos, $row);
		$cont++;
		$vectorAsientos[$cont]= $row;
	}	

	//$vectorAsientos = $consulta->fetch_array(MYSQLI_NUM);


	if($_GET['tarifa']==1){
		$asiento=12;
		$contador=0;
		for($i=1;$i<=7;$i++){
			echo ("<tr>");
			for($j=1;$j<=4;$j++){
				$contador++;
				$asiento++;

				if($contador==3){
					echo("<td class=\"tdNormal\"></td>");
				}
				if($contador==4){
					$contador=0;
				}
				// ACA VERIFICAR LA DISPONIBILIDAD Y SEGUN ESO AGREGAR LA CLASE CORRESPONDIENTE
				if($vectorAsientos[$asiento][0]==1){
					echo("<td class=\"tdNormal disponible\" onclick=\"elegirAsiento(".$asiento.");\"><label class=\"label lblAsiento\">".$asiento."</label></td>");
				}else{
					echo("<td class=\"tdNormal noDisponible\"><label class=\"label lblAsiento\">".$asiento."</label></td>");
				}
			}	
			echo ("</tr>");
		}
	}else if($_GET['tarifa']==2){
		$asiento=40;
		$contador=0;
		for($i=1;$i<=5;$i++){
			echo ("<tr>");
			for($j=1;$j<=4;$j++){
				$contador++;
				$asiento++;

				if($contador==3){
					echo("<td class=\"tdPromocional\"></td>");
				}
				if($contador==4){
					$contador=0;
				}
				// ACA VERIFICAR LA DISPONIBILIDAD Y SEGUN ESO AGREGAR LA CLASE CORRESPONDIENTE
				if($vectorAsientos[$asiento][0]==1){
					echo("<td class=\"tdPromocional disponible\" onclick=\"elegirAsiento(".$asiento.");\"><label class=\"label lblAsiento\">".$asiento."</label></td>");
				}else{
					echo("<td class=\"tdPromocional noDisponible\"><label class=\"label lblAsiento\">".$asiento."</label></td>");
				}
			}	
		echo ("</tr>");
	}
	}else if($_GET['tarifa']==3){
		$asiento=0;
		$contador=0;
		for($i=1;$i<=4;$i++){
			echo ("<tr>");
			for($j=1;$j<=3;$j++){
				$contador++;
				$asiento++;

				if($contador==3){
					$contador=0;
					echo("<td class=\"tdVip\"></td>");
				}
								
				// ACA VERIFICAR LA DISPONIBILIDAD Y SEGUN ESO AGREGAR LA CLASE CORRESPONDIENTE
				if($vectorAsientos[$asiento][0]==1){
					echo("<td class=\"tdVip disponible\" onclick=\"elegirAsiento(".$asiento.");\"><label class=\"label lblAsiento\">".$asiento."</label></td>");
				}else{
					echo("<td class=\"tdVip noDisponible\"><label class=\"label lblAsiento\">".$asiento."</label></td>");
				}
			}	
		    echo ("</tr>");
		}
	}
	$consulta->close();
?>