<?php
// Exemplos de uso de strings em PHP

// Declaração de strings
$nome = "Maria";
$sobrenome = 'Silva';

// Concatenação de strings
$nomeCompleto = $nome . " " . $sobrenome;
echo "Nome completo: $nomeCompleto<br>";

// Interpolação de variáveis (funciona com aspas duplas)
echo "Bem-vinda, $nome!<br>";

// Tamanho da string
echo "O nome tem " . strlen($nome) . " letras.<br>";

// Transformando para maiúsculas e minúsculas
echo "Maiúsculas: " . strtoupper($nome) . "<br>";
echo "Minúsculas: " . strtolower($sobrenome) . "<br>";

// Substituição de texto
$frase = "Eu gosto de PHP!";
$novaFrase = str_replace("PHP", "programação", $frase);
echo "Frase modificada: $novaFrase<br>";

// Pegando parte da string
echo "Primeiras 3 letras do nome: " . substr($nome, 0, 3) . "<br>";

// Verificando se uma palavra existe na string
if (strpos($frase, "PHP") !== false) {
    echo "A palavra 'PHP' foi encontrada na frase.<br>";
}

// Removendo espaços em branco
$texto = "   Olá, mundo!   ";
echo "Sem espaços: '" . trim($texto) . "'<br>";
?>