<?php
    session_start();
    include_once("BaseDeDatos.class.php");
    $bdd = new BaseDeDatos("promocion");
    $consultaHistorial = "SELECT fecha, hora, origen, destino, tipo_tarifa.tipo_tarifa, valor_pagado, puntos FROM compras INNER JOIN viajes ON compras.id_viaje = viajes.id_viaje INNER JOIN usuarios ON usuarios.dni = compras.dni_usuario INNER JOIN tipo_tarifa ON tipo_tarifa.id_tarifa = compras.tipo_tarifa WHERE dni_usuario = ". $_SESSION['dni'];
    $respuestaHistorial = $bdd->consultar($consultaHistorial);
    $consultaFrecuente = "SELECT pasajero_frecuente FROM usuarios WHERE dni = ". $_SESSION['dni'];
    $reultadoFrecuente = $bdd->consultar($consultaFrecuente);
    $frecuente = $bdd->devolverValor($reultadoFrecuente, "pasajero_frecuente");
    $tabla = $bdd->valores($respuestaHistorial,$frecuente);
    if ($tabla != "NULL") {
        $res = 					"<tr>
        <td class=\"tdHistorial\">
            <label class=\"lbl\">Fecha</label>
        </td>
        <td class=\"tdHistorial\">
            <label class=\"lbl\">Hora</label>
        </td>
        <td class=\"tdHistorial\">
            <label class=\"lbl\">Origen</label>
        </td>
        <td class=\"tdHistorial\">
            <label class=\"lbl\">Destino</label>
        </td>
        <td class=\"tdHistorial\">
            <label class=\"lbl\">Tipo de Tarifa</label>
        </td>
        <td class=\"tdHistorial\">
            <label class=\"lbl\">Valor abonado</label>
        </td>
        <td class=\"tdHistorial\">
            <label class=\"lbl\">Kilometros Sumados</label>
        </td>
    </tr>";
        for ($i=0; $i < intval(explode("%",$tabla)[1]); $i++) { 
            $res .= "<tr>";
            for ($j=0; $j <= 6; $j++) { 
                $res .= "<td class=\"tdHistorial\">";
                $res .= explode("&",explode("#",$tabla)[$i])[$j];
                $res .= "</td>";
            }
            $res .= "</tr>";
        }
        echo $res;
    }else {
        echo $tabla;
    }
    $bdd->cerrarConeccion();
?>