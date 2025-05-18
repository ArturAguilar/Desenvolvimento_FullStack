<?php
// Propriedades estáticas em PHP

class Contador {
    public static $total = 0;

    public function __construct() {
        self::$total++;
    }

    public static function mostrarTotal() {
        echo "Total de objetos criados: " . self::$total . "<br>";
    }
}

// Criando objetos
$obj1 = new Contador();
$obj2 = new Contador();
$obj3 = new Contador();

// Acessando a propriedade estática sem instanciar a classe
Contador::mostrarTotal();
?>