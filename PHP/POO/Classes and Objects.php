<?php
// PHP OOP - Classes e Objetos

// Definindo uma classe
class Pessoa {
    // Propriedades
    public $nome;
    public $idade;

    // Método construtor
    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    // Método
    public function apresentar() {
        echo "Olá, meu nome é {$this->nome} e tenho {$this->idade} anos.<br>";
    }
}

// Criando objetos
$p1 = new Pessoa("Ana", 28);
$p2 = new Pessoa("Carlos", 35);

// Usando métodos do objeto
$p1->apresentar();
$p2->apresentar();
?>