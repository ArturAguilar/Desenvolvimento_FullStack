<?php
// Ordenando arrays em PHP

// sort() - ordena array indexado em ordem crescente
$numeros = [4, 2, 8, 1];
sort($numeros);
echo "sort(): ";
print_r($numeros);
echo "<br>";

// rsort() - ordena array indexado em ordem decrescente
rsort($numeros);
echo "rsort(): ";
print_r($numeros);
echo "<br>";

// asort() - ordena array associativo em ordem crescente pelo valor
$pessoa = ["nome" => "Carlos", "idade" => 25, "peso" => 70];
asort($pessoa);
echo "asort(): ";
print_r($pessoa);
echo "<br>";

// ksort() - ordena array associativo em ordem crescente pela chave
ksort($pessoa);
echo "ksort(): ";
print_r($pessoa);
echo "<br>";

// arsort() - ordena array associativo em ordem decrescente pelo valor
arsort($pessoa);
echo "arsort(): ";
print_r($pessoa);
echo "<br>";

// krsort() - ordena array associativo em ordem decrescente pela chave
krsort($pessoa);
echo "krsort(): ";
print_r($pessoa);
echo "<br>";
?>