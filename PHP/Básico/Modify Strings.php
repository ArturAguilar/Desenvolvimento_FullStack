<?php
// Modificando strings em PHP

$texto = "Aprendendo PHP é divertido!";

// 1. Substituir parte da string
$novoTexto = str_replace("divertido", "fácil", $texto);
echo "Substituição: $novoTexto<br>";

// 2. Converter para maiúsculas
echo "Maiúsculas: " . strtoupper($texto) . "<br>";

// 3. Converter para minúsculas
echo "Minúsculas: " . strtolower($texto) . "<br>";

// 4. Remover espaços do início e fim
$comEspacos = "   Olá, PHP!   ";
echo "Sem espaços: '" . trim($comEspacos) . "'<br>";

// 5. Pegar parte da string
echo "Primeiras 10 letras: " . substr($texto, 0, 10) . "<br>";

// 6. Inverter a string
echo "Invertido: " . strrev($texto) . "<br>";

// 7. Repetir a string
echo "Repetido: " . str_repeat("PHP ", 3) . "<br>";
?>