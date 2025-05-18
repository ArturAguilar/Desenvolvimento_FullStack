<?php
// Fatiando (slicing) strings em PHP

$texto = "Desenvolvimento FullStack";

// Pegar os primeiros 5 caracteres
echo "Primeiros 5 caracteres: " . substr($texto, 0, 5) . "<br>";

// Pegar os últimos 7 caracteres
echo "Últimos 7 caracteres: " . substr($texto, -7) . "<br>";

// Pegar uma parte do meio (do caractere 15 ao 23)
echo "Parte do meio: " . substr($texto, 14, 9) . "<br>";

// Exemplo com variáveis dinâmicas
$inicio = 0;
$fim = 12;
echo "Do início até o 12º caractere: " . substr($texto, $inicio, $fim) . "<br>";

// Fatiando com strlen para pegar a partir de um ponto até o final
echo "A partir do 13º caractere: " . substr($texto, 12) . "<br>";
?>