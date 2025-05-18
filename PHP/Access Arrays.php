<?php
// Acessando elementos de arrays em PHP

// Array indexado
$animais = ["cachorro", "gato", "pássaro"];
echo "Primeiro animal: " . $animais[0] . "<br>";
echo "Segundo animal: " . $animais[1] . "<br>";

// Array associativo
$carro = [
    "marca" => "Toyota",
    "modelo" => "Corolla",
    "ano" => 2020
];
echo "Marca do carro: " . $carro["marca"] . "<br>";
echo "Modelo do carro: " . $carro["modelo"] . "<br>";

// Array multidimensional
$matriz = [
    [1, 2, 3],
    [4, 5, 6]
];
echo "Elemento [0][1]: " . $matriz[0][1] . "<br>";
echo "Elemento [1][2]: " . $matriz[1][2] . "<br>";
?>