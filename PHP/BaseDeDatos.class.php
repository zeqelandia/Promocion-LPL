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
    public function toString($resultado){
        if ($resultado->num_rows==1) {
            return "yes";
        }else {
            return "null";
        }
    }
    public function cerrarConeccion($resultado){
        //Libreacion de la memoria utilizada por el recordset
        $resultado->free();
        //Cierre de la conexion
        $this->baseDeDatos->close();
    }
    public function insertar($query){
        $this->baseDeDatos->query($query) or die ("No se pudo insertar el elemento");
        echo "Se inserto el elemento";
    }
}
?>