<?php
// Classes abstratas em PHP

// Definindo uma classe abstrata
abstract class Forma {
    public $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    // Método abstrato (deve ser implementado nas subclasses)
    abstract public function calcularArea();
}

// Subclasse concreta
class Circulo extends Forma {
    public $raio;

    public function __construct($raio) {
        parent::__construct("Círculo");
        $this->raio = $raio;
    }

    public function calcularArea() {
        return pi() * pow($this->raio, 2);
    }
}

class Quadrado extends Forma {
    public $lado;

    public function __construct($lado) {
        parent::__construct("Quadrado");
        $this->lado = $lado;
    }

    public function calcularArea() {
        return pow($this->lado, 2);
    }
}

// Exemplo de uso
$circulo = new Circulo(3);
echo "{$circulo->nome} - Área: " . $circulo->calcularArea() . "<br>";

$quadrado = new Quadrado(4);
echo "{$quadrado->nome} - Área: " . $quadrado->calcularArea() . "<br>";
?>