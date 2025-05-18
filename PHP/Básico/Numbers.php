<?php
// Trabalhando com números em PHP

// Inteiros
$idade = 30;
echo "Idade: $idade<br>";

// Números de ponto flutuante (float)
$altura = 1.75;
echo "Altura: $altura<br>";

// Operações matemáticas básicas
$soma = 10 + 5;
$subtracao = 10 - 5;
$multiplicacao = 10 * 5;
$divisao = 10 / 5;

echo "Soma: $soma<br>";
echo "Subtração: $subtracao<br>";
echo "Multiplicação: $multiplicacao<br>";
echo "Divisão: $divisao<br>";

// Potência e raiz quadrada
echo "2 elevado a 3: " . pow(2, 3) . "<br>";
echo "Raiz quadrada de 16: " . sqrt(16) . "<br>";

// Funções matemáticas úteis
echo "Valor absoluto de -20: " . abs(-20) . "<br>";
echo "Arredondar 3.7: " . round(3.7) . "<br>";
echo "Arredondar para cima 3.2: " . ceil(3.2) . "<br>";
echo "Arredondar para baixo 3.8: " . floor(3.8) . "<br>";

// Número aleatório entre 1 e 100
echo "Número aleatório: " . rand(1, 100) . "<br>";
?>