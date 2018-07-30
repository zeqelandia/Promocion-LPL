<?php
    session_start();
    include_once("BaseDeDatos.class.php");
    $bdd = new BaseDeDatos("promocion");

    if (isset($_GET['origen']) && isset($_GET['destino']) && isset($_GET['fecha']) && isset($_GET['horario'])) {
        $id_viaje = ' where origen = "'. $_GET['origen'] .'" and destino = "'. $_GET['destino'] .'" and fecha = "'. $_GET['fecha'] .'" and hora = "'. $_GET['horario'].'"';
        $consultaSiExisteViaje = 'SELECT id_viaje from viajes' . $id_viaje;
        $respuestaExistencia = $bdd->consultar($consultaSiExisteViaje);
        $bddIdViaje= $bdd->devolverValor($respuestaExistencia, "id_viaje");
        if ($bddIdViaje != "null") {
            switch (explode("=", $_GET['tarifa'])[0]) {
                case '1':
                    $consultaAsientos = 'SELECT asientos_normales_disponibles from viajes'. $id_viaje;
                    $consultaDispo = $bdd->consultar($consultaAsientos);
                    $asientos = $bdd->devolverValor($consultaDispo, "asientos_normales_disponibles");
                    if(intval($asientos)== 0){
                        echo "FAIL";
                        $compraFail = true;
                    }else {
                        $updateAsientos = 'UPDATE viajes SET asientos_normales_disponibles = '. (intval($asientos) - 1) .' '. $id_viaje;
                        $bdd->insertar($updateAsientos);
                        echo($bddIdViaje);
                    }
                    break;
                case '2':
                    $consultaAsientos = 'SELECT asientos_promocionales_disponibles from viajes'. $id_viaje;
                    $consultaDispo = $bdd->consultar($consultaAsientos);
                    $asientos = $bdd->devolverValor($consultaDispo, "asientos_promocionales_disponibles");
                    if(intval($asientos)== 0){
                        echo "FAIL";
                        $compraFail = true;
                    }else {
                        $updateAsientos = 'UPDATE viajes SET asientos_promocionales_disponibles = '. (intval($asientos) - 1) .' '. $id_viaje;
                        $bdd->insertar($updateAsientos);
                        echo($bddIdViaje);
                    }
                    break;
                case '3':
                    $consultaAsientos = 'SELECT asientos_vip_disponibles from viajes'. $id_viaje;
                    $consultaDispo = $bdd->consultar($consultaAsientos);
                    $asientos = $bdd->devolverValor($consultaDispo, "asientos_vip_disponibles");
                    if(intval($asientos)== 0){
                        echo "FAIL";
                        $compraFail = true;
                    }else {
                        $updateAsientos = 'UPDATE viajes SET asientos_vip_disponibles = '. (intval($asientos) - 1) .' '. $id_viaje;
                        $bdd->insertar($updateAsientos);
                        echo($bddIdViaje);
                    }
                    break;
                default:
                    break;
                }
            }else {
                $consultaViaje = 'INSERT INTO viajes (origen, destino, fecha, hora) VALUES ("'. $_GET['origen'] .'", "'. $_GET['destino'] .'", "'. $_GET['fecha'] .'", "'. $_GET['horario'] .'");';
                $bdd->insertar($consultaViaje);


                $respuestaExistencia = $bdd->consultar($consultaSiExisteViaje);
                $cant= $bdd->devolverValor($respuestaExistencia, "id_viaje");

                for($i=1;$i<=60;$i++){
                    //$consultaDisponibilidad = 'INSERT INTO disponibilidad (id_viaje, nro_asiento, disponible) VALUES ('.$bdd->devolverValor($respuestaExistencia, "id_viaje").', '.$_GET['nro_asiento'].', 0)';
                    $consultaDisponibilidad = 'INSERT INTO disponibilidad (id_viaje, nro_asiento, disponible) VALUES ('.$cant.', '.$i.', 1)';
                    $bdd->insertar($consultaDisponibilidad);
                }

                echo($cant);
            }
           
    }
?>