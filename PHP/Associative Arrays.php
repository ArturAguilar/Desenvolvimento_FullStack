<?php
// Arrays associativos em PHP

// Criando um array associativo
$pessoa = [
    "nome" => "Ana",
    "idade" => 28,
    "cidade" => "Rio de Janeiro"
];

// Acessando elementos pelo nome da chave
echo "Nome: " . $pessoa["nome"] . "<br>";
echo "Idade: " . $pessoa["idade"] . "<br>";
echo "Cidade: " . $pessoa["cidade"] . "<br>";

// Percorrendo o array associativo
foreach ($pessoa as $chave => $valor) {
    echo "$chave: $valor<br>";
}
?>