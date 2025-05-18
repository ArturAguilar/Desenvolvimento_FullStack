<?php
// Exemplo de uso de construtor em PHP

class Carro {
    public $marca;
    public $modelo;

    // Método construtor
    public function __construct($marca, $modelo) {
        $this->marca = $marca;
        $this->modelo = $modelo;
    }

    public function exibir() {
        echo "Carro: {$this->marca} {$this->modelo}<br>";
    }
}

// Criando objetos usando o construtor
$carro1 = new Carro("Toyota", "Corolla");
$carro2 = new Carro("Honda", "Civic");

$carro1->exibir();
$carro2->exibir();
?>