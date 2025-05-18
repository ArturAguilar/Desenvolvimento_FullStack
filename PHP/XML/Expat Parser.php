<?php
// Exemplo de uso do Expat Parser (XML Parser) em PHP

// Função chamada quando um elemento de abertura é encontrado
function inicioElemento($parser, $nome, $atributos) {
    echo "Início do elemento: $nome<br>";
    if (!empty($atributos)) {
        foreach ($atributos as $chave => $valor) {
            echo "Atributo: $chave = $valor<br>";
        }
    }
}

// Função chamada quando um elemento de fechamento é encontrado
function fimElemento($parser, $nome) {
    echo "Fim do elemento: $nome<br>";
}

// Função chamada quando um valor de texto é encontrado
function textoElemento($parser, $dados) {
    $dados = trim($dados);
    if ($dados !== "") {
        echo "Conteúdo: $dados<br>";
    }
}

$xmlString = <<<XML
<livros>
    <livro id="1">
        <titulo>PHP Básico</titulo>
        <autor>Maria Silva</autor>
    </livro>
    <livro id="2">
        <titulo>MySQL para Iniciantes</titulo>
        <autor>João Souza</autor>
    </livro>
</livros>
XML;

// Criando o parser
$parser = xml_parser_create();

// Definindo as funções de callback
xml_set_element_handler($parser, "inicioElemento", "fimElemento");
xml_set_character_data_handler($parser, "textoElemento");

// Parseando o XML
if (!xml_parse($parser, $xmlString, true)) {
    echo "Erro no XML: " . xml_error_string(xml_get_error_code($parser));
}

// Liberando recursos
xml_parser_free($parser);
?>