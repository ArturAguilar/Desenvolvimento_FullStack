<?php
interface Animal {
    public function emitirSom();
}

class Cachorro implements Animal {
    private $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function emitirSom() {
        echo "{$this->nome} late: Au Au!<br>";
    }
}

class Gato implements Animal {
    private $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function emitirSom() {
        echo "{$this->nome} mia: Miau!<br>";
    }
}

$cachorro = new Cachorro("Rex");
$gato = new Gato("Mimi");

$cachorro->emitirSom();
$gato->emitirSom();
?>