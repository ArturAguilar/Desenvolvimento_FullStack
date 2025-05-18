<?php
// Caracteres de escape em strings PHP

// Aspas simples e duplas
echo "Aspas duplas: \"Texto entre aspas\"<br>";
echo 'Aspas simples: \'Texto entre aspas\'<br>';

// Sinal de cifrão
echo "Exibindo cifrão: \$valor<br>";

// Quebra de linha
echo "Linha 1\nLinha 2<br>";

// Retorno de carro
echo "Primeira linha\rSegunda linha<br>";

// Tabulação
echo "Coluna 1\tColuna 2<br>";

// Alimentação de formulário (pouco usada)
echo "Texto\fNova página<br>";

// Octal (\ooo) e hexadecimal (\xhh)
echo "Caractere octal 101: \101<br>"; // 101 octal = 'A'
echo "Caractere hexadecimal 41: \x41<br>"; // 41 hex = 'A'

// Exemplo completo
$exemplo = "Exemplo:\n\t\"Texto entre aspas\"\n\tCaminho: C:\\pasta\\arquivo.txt\n\tCifrão: \$dinheiro";
echo nl2br($exemplo);
?>