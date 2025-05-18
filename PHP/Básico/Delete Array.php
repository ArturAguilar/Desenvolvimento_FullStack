<?php
// Removendo itens de arrays em PHP

// Array indexado
$frutas = ["maçã", "banana", "laranja"];
unset($frutas[1]); // Remove o item de índice 1 ("banana")
echo "Frutas após unset: ";
print_r($frutas);
echo "<br>";

// Reindexando o array
$frutas = array_values($frutas);
echo "Frutas reindexadas: ";
print_r($frutas);
echo "<br>";

// Array associativo
$pessoa = [
    "nome" => "Ana",
    "idade" => 28,
    "cidade" => "Recife"
];
unset($pessoa["idade"]); // Remove o elemento com a chave "idade"
echo "Pessoa após unset: ";
print_r($pessoa);
echo "<br>";

// Removendo o último elemento de um array
$ultimo = array_pop($frutas);
echo "Última fruta removida: $ultimo<br>";
echo "Frutas restantes: ";
print_r($frutas);
echo "<br>";

// Removendo o primeiro elemento de um array
$primeiro = array_shift($frutas);
echo "Primeira fruta removida: $primeiro<br>";
echo "Frutas restantes: ";
print_r($frutas);
echo "<br>";
?>