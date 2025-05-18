<?php
// Lendo e exibindo dados de um XML com SimpleXML em PHP

$xmlString = <<<XML
<livros>
    <livro>
        <titulo>PHP Básico</titulo>
        <autor>Maria Silva</autor>
    </livro>
    <livro>
        <titulo>MySQL para Iniciantes</titulo>
        <autor>João Souza</autor>
    </livro>
</livros>
XML;

// Carregando o XML na memória
$xml = simplexml_load_string($xmlString);

// Percorrendo os elementos do XML
foreach ($xml->livro as $livro) {
    echo "Título: " . $livro->titulo . "<br>";
    echo "Autor: " . $livro->autor . "<br><br>";
}
?>