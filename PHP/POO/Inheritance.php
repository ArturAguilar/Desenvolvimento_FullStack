<?php
// Exemplo de herança em PHP

// Classe base (superclasse)
class Animal {
    public $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function emitirSom() {
        echo "{$this->nome} faz um som.<br>";
    }
}

// Classe derivada (subclasse)
class Cachorro extends Animal {
    public function emitirSom() {
        echo "{$this->nome} late: Au Au!<br>";
    }
}

class Gato extends Animal {
    public function emitirSom() {
        echo "{$this->nome} mia: Miau!<br>";
    }
}

// Criando objetos das subclasses
$cachorro = new Cachorro("Rex");
$gato = new Gato("Mimi");

$cachorro->emitirSom(); // Rex late: Au Au!
$gato->emitirSom();     // Mimi mia: Miau!
?>