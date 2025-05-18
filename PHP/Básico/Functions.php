<?php
// Funções em PHP

// Definindo uma função simples
function saudacao() {
    echo "Olá, seja bem-vindo!<br>";
}

// Chamando a função
saudacao();

// Função com parâmetros
function somar($a, $b) {
    return $a + $b;
}

$resultado = somar(5, 3);
echo "Resultado da soma: $resultado<br>";

// Função com valor padrão no parâmetro
function apresentar($nome = "Visitante") {
    echo "Olá, $nome!<br>";
}

apresentar("Maria");
apresentar();
?>