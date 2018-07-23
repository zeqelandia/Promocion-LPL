<?php
session_start();
include_once("BaseDeDatos.class.php");
$bdd = new BaseDeDatos("promocion");
if (isset($_GET['tarifa'])){
        $consultaFrecuente = "SELECT pasajero_frecuente FROM usuarios WHERE dni = ". $_SESSION['dni'];
        $reultadoFrecuente = $bdd->consultar($consultaFrecuente);
        $frecuente = $bdd->devolverValor($reultadoFrecuente, "pasajero_frecuente");
    if (explode("=", $_GET['tarifa'])[0] == 4 && $frecuente == 0) {
        echo "NOFRECUENTE";
    }else {
        if (isset($_GET['origen']) && isset($_GET['destino']) && isset($_GET['fecha']) && isset($_GET['horario'])) {
            $compraFail = false;
            $id_viaje = ' where origen = "'. $_GET['origen'] .'" and destino = "'. $_GET['destino'] .'" and fecha = "'. $_GET['fecha'] .'" and hora = "'. $_GET['horario'].'"';
            $consultaSiExisteViaje = 'SELECT id_viaje from viajes' . $id_viaje;
            $respuestaExistencia = $bdd->consultar($consultaSiExisteViaje);
            if ($bdd->devolverValor($respuestaExistencia, "id_viaje") != "null") {
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
                        }
                        break;
                    default:
                        break;
                }
            }else {
                $consultaViaje = 'INSERT INTO viajes (origen, destino, fecha, hora) VALUES ("'. $_GET['origen'] .'", "'. $_GET['destino'] .'", "'. $_GET['fecha'] .'", "'. $_GET['horario'] .'");';
                $bdd->insertar($consultaViaje);
            }
            if (!$compraFail) {
                $consultaCompra = 'INSERT INTO compras (id_viaje, dni_usuario, tipo_tarifa, valor_pagado) VALUES (('.$consultaSiExisteViaje.'), "'. $_SESSION['dni'] .'", "'. explode("=",$_GET['tarifa'])[0] .'", "'. explode("=",$_GET['tarifa'])[1] .'");';
                if ($frecuente == 1) {
                        $compra = false;
                        $consultaPuntos = 'SELECT puntos FROM usuarios WHERE dni = '. $_SESSION['dni'];
                        $consulta = $bdd->consultar($consultaPuntos);
                        $puntos = floatval($bdd->devolverValor($consulta, "puntos"));
                    if (explode("=", $_GET['tarifa'])[0] == "4") {
                        if (floatval(explode("=", $_GET['tarifa'])[1]) <= $puntos) {
                            $puntos -= floatval(explode("=", $_GET['tarifa'])[1]);
                            $_SESSION['sumados'] = "Se descontaron ". explode("=", $_GET['tarifa'])[1] ." puntos de su cuenta";
                            $compra = true;
                        }else {
                            $compra = false;
                            echo "PUNTOSFALTANTES";
                        }
                    }else {
                        $compra = true;
                        switch (explode("=", $_GET['tarifa'])[0]) {
                            case "1":
                                $puntos = floatval(explode("=", $_GET['tarifa'])[1]) * 0.25;
                                break;
                            case '2':
                                $puntos += floatval(explode("=", $_GET['tarifa'])[1]) * 0.05;
                                break;
                            case '3':
                                $puntos += floatval(explode("=", $_GET['tarifa'])[1]) * 0.5;
                                break;
                            default:
                                break;
                        }
                        $_SESSION['sumados'] = $puntos;
                    }
                }else {
                    $compra = true;
                    $_SESSION['sumados'] = "No suma puntos, uste no es cliente frecuente.";
                }
                $consultaSumarPuntos = 'UPDATE usuarios SET puntos = '.$puntos.' WHERE usuarios.dni = '. $_SESSION['dni'];
                if ($compra) {
                    $bdd->insertar($consultaCompra);
                }
                $bdd->insertar($consultaSumarPuntos);
            }
        }
    }
}
?>