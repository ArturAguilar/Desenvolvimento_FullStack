<?php
// Tipos de dados em PHP

// String
$nome = "Ana";
echo "String: $nome<br>";

// Integer (inteiro)
$idade = 30;
echo "Integer: $idade<br>";

// Float (ponto flutuante)
$altura = 1.68;
echo "Float: $altura<br>";

// Boolean (booleano)
$ativo = true;
echo "Boolean: " . ($ativo ? "true" : "false") . "<br>";

// Array
$frutas = array("maçã", "banana", "laranja");
echo "Array: " . $frutas[0] . ", " . $frutas[1] . ", " . $frutas[2] . "<br>";

// Object (objeto)
class Pessoa {
    public $nome;
    function __construct($nome) {
        $this->nome = $nome;
    }
}
$pessoa = new Pessoa("Carlos");
echo "Object: " . $pessoa->nome . "<br>";

// NULL
$valor = null;
echo "NULL: ";
var_dump($valor);
echo "<br>";
?>