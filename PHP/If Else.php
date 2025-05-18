<?php
// Estruturas condicionais if, else e elseif em PHP

$idade = 18;

if ($idade < 18) {
    echo "Menor de idade<br>";
} elseif ($idade == 18) {
    echo "Tem exatamente 18 anos<br>";
} else {
    echo "Maior de idade<br>";
}

// Exemplo com outra condição
$nota = 7;

if ($nota >= 7) {
    echo "Aprovado<br>";
} else {
    echo "Reprovado<br>";
}
?>