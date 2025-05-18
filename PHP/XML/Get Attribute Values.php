<?php
// Obtendo valores de atributos em XML com SimpleXML em PHP

$xmlString = <<<XML
<livros>
    <livro id="1" categoria="programacao">
        <titulo>PHP Básico</titulo>
        <autor>Maria Silva</autor>
    </livro>
    <livro id="2" categoria="banco">
        <titulo>MySQL para Iniciantes</titulo>
        <autor>João Souza</autor>
    </livro>
</livros>
XML;

// Carregando o XML na memória
$xml = simplexml_load_string($xmlString);

// Percorrendo os elementos e exibindo atributos
foreach ($xml->livro as $livro) {
    echo "ID: " . $livro['id'] . "<br>";
    echo "Categoria: " . $livro['categoria'] . "<br>";
    echo "Título: " . $livro->titulo . "<br>";
    echo "Autor: " . $livro->autor . "<br><br>";
}
?>