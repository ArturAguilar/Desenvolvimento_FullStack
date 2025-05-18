<?php
// Adicionando itens a arrays em PHP

// Array indexado
$frutas = ["maçã", "banana"];
$frutas[] = "laranja"; // Adiciona ao final
array_push($frutas, "uva"); // Também adiciona ao final
echo "Frutas: ";
print_r($frutas);
echo "<br>";

// Array associativo
$pessoa = [
    "nome" => "Carlos",
    "idade" => 30
];
$pessoa["cidade"] = "Belo Horizonte"; // Adiciona nova chave/valor
echo "Pessoa: ";
print_r($pessoa);
echo "<br>";

// Adicionando itens em arrays multidimensionais
$matriz = [
    [1, 2],
    [3, 4]
];
$matriz[0][] = 5; // Adiciona o número 5 ao primeiro subarray
echo "Matriz: ";
print_r($matriz);
echo "<br>";
?>