<?php
class BaseDeDatos {
    private $baseDeDatos;
    function __construct() {
        $this->baseDeDatos = new mysqli("localhost","root","","promocion");
    }
    public function consultar($query){
        $resultado = $this->baseDeDatos->query($query) or die ("No se pudo ejecutar la consulta de seleccion");
        return $resultado;
    }
    public function devolverValor($resultado, $elemento){
        if ($resultado->num_rows==1) {
            $valor = $resultado->fetch_object()->$elemento;
            return $valor;
        }else {
            return "null";
        }
    }
    public function toString($resultado){
        if ($resultado->num_rows==1) {
            return "yes";
        }else {
            return "null";
        }
    }
    public function cerrarConeccion(){
        $this->baseDeDatos->close();
    }
    public function valores($resultado,$frecuente){
        if ($resultado->num_rows>0) {
            $var = "";
        $i = 0;
        while ($registro = $resultado->fetch_object()) {
            $i++;
            $var .= $registro->fecha . "&";
            $var .= $registro->hora . "&";
            $var .= $registro->origen . "&";
            $var .= $registro->destino . "&";
            $var .= $registro->tipo_tarifa . "&";
            $var .= $registro->valor_pagado . "&";
            if ($frecuente != 1) {
                $var .= "0#";
            }else {
                switch ($registro->tipo_tarifa) {
                    case 'normal':
                        $var .= floatval($registro->valor_pagado) * 0.25 ."#";
                        break;
                    case 'promocional':
                        $var .= floatval($registro->valor_pagado) * 0.05 ."#";
                        break;
                    case 'ejecutiva':
                        $var .= floatval($registro->valor_pagado) * 0.5 ."#";
                        break;
                    default:
                        $var .= "0#";
                        break;
                }
            }
        }
        return $var."%".$i;
        }else {
            return "NULL";
        }
    }
    public function insertar($query){
        $this->baseDeDatos->query($query) or die ("No se pudo insertar el elemento");
    }
}
?>