<?php
// Variáveis em PHP

// Declarando variáveis
$nome = "João";
$idade = 25;
$altura = 1.75;
$ativo = true;

// Exibindo valores das variáveis
echo "Nome: $nome <br>";
echo "Idade: $idade <br>";
echo "Altura: $altura <br>";
echo "Ativo: " . ($ativo ? "Sim" : "Não") . "<br>";

// Alterando valores
$idade = $idade + 1;
echo "Idade após aniversário: $idade <br>";

// Concatenando strings
$mensagem = "Olá, " . $nome . "! Bem-vindo ao PHP.";
echo $mensagem;
?>