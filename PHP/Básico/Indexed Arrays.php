<?php
// Arrays indexados em PHP

// Criando um array indexado
$cores = ["vermelho", "verde", "azul", "amarelo"];

// Acessando elementos pelo índice
echo "Primeira cor: " . $cores[0] . "<br>";
echo "Segunda cor: " . $cores[1] . "<br>";

// Percorrendo o array com for
for ($i = 0; $i < count($cores); $i++) {
    echo "Cor $i: " . $cores[$i] . "<br>";
}

// Percorrendo o array com foreach
foreach ($cores as $cor) {
    echo "Cor: $cor<br>";
}
?>