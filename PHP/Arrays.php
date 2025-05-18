<?php
// Arrays em PHP

// Array indexado
$frutas = ["maçã", "banana", "laranja"];
echo "Primeira fruta: " . $frutas[0] . "<br>";

// Array associativo
$pessoa = [
    "nome" => "João",
    "idade" => 25,
    "cidade" => "São Paulo"
];
echo "Nome: " . $pessoa["nome"] . "<br>";

// Array multidimensional
$matriz = [
    [1, 2, 3],
    [4, 5, 6]
];
echo "Elemento [1][2]: " . $matriz[1][2] . "<br>";

// Percorrendo um array com foreach
foreach ($frutas as $fruta) {
    echo "Fruta: $fruta<br>";
}
?>