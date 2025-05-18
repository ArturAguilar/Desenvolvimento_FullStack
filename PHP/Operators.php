<?php
// Operadores em PHP

$a = 10;
$b = 3;

// Operadores aritméticos
echo "Soma: " . ($a + $b) . "<br>";
echo "Subtração: " . ($a - $b) . "<br>";
echo "Multiplicação: " . ($a * $b) . "<br>";
echo "Divisão: " . ($a / $b) . "<br>";
echo "Módulo: " . ($a % $b) . "<br>";

// Operadores de atribuição
$a += 5; // $a = $a + 5
echo "Atribuição (+=): $a<br>";

// Operadores de comparação
$x = 5;
$y = "5";
echo "Igual (==): " . ($x == $y ? "true" : "false") . "<br>";
echo "Idêntico (===): " . ($x === $y ? "true" : "false") . "<br>";
echo "Diferente (!=): " . ($x != $y ? "true" : "false") . "<br>";
echo "Maior que: " . ($a > $b ? "true" : "false") . "<br>";

// Operadores lógicos
$verdadeiro = true;
$falso = false;
echo "E lógico (&&): " . ($verdadeiro && $falso ? "true" : "false") . "<br>";
echo "Ou lógico (||): " . ($verdadeiro || $falso ? "true" : "false") . "<br>";
echo "Negação (!): " . (!$verdadeiro ? "true" : "false") . "<br>";

// Operador ternário
$resultado = ($a > $b) ? "A é maior" : "B é maior ou igual";
echo "Ternário: $resultado<br>";
?>