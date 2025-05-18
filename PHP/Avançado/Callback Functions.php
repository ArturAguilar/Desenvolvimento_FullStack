<?php
// Funções de callback em PHP

// Função simples para ser usada como callback
function maiuscula($valor) {
    return strtoupper($valor);
}

$nomes = ["ana", "carlos", "maria"];

// Usando array_map com uma função de callback
$nomesMaiusculos = array_map("maiuscula", $nomes);
echo "Nomes em maiúsculas: ";
print_r($nomesMaiusculos);
echo "<br>";

// Callback anônima (closure)
$numeros = [1, 2, 3, 4, 5];
$dobrados = array_map(function($n) {
    return $n * 2;
}, $numeros);
echo "Números dobrados: ";
print_r($dobrados);
echo "<br>";
?>