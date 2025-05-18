<?php
// Operações matemáticas em PHP

$a = 15;
$b = 4;

// Operações básicas
echo "Soma: " . ($a + $b) . "<br>";
echo "Subtração: " . ($a - $b) . "<br>";
echo "Multiplicação: " . ($a * $b) . "<br>";
echo "Divisão: " . ($a / $b) . "<br>";
echo "Módulo (resto da divisão): " . ($a % $b) . "<br>";

// Potência
echo "Potência: " . pow($a, $b) . "<br>";

// Raiz quadrada
echo "Raiz quadrada de $a: " . sqrt($a) . "<br>";

// Valor absoluto
echo "Valor absoluto de -$a: " . abs(-$a) . "<br>";

// Arredondamentos
echo "Arredondar 3.6: " . round(3.6) . "<br>";
echo "Arredondar para cima 3.2: " . ceil(3.2) . "<br>";
echo "Arredondar para baixo 3.8: " . floor(3.8) . "<br>";

// Número aleatório entre 1 e 10
echo "Número aleatório entre 1 e 10: " . rand(1, 10) . "<br>";
?>