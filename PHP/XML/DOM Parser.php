<?php
// Lendo e manipulando XML com DOMDocument em PHP

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

// Criando o objeto DOMDocument
$dom = new DOMDocument();
$dom->loadXML($xmlString);

// Obtendo todos os elementos <livro>
$livros = $dom->getElementsByTagName("livro");

foreach ($livros as $livro) {
    // Obtendo atributos
    $id = $livro->getAttribute("id");
    $categoria = $livro->getAttribute("categoria");

    // Obtendo elementos filhos
    $titulo = $livro->getElementsByTagName("titulo")[0]->nodeValue;
    $autor = $livro->getElementsByTagName("autor")[0]->nodeValue;

    echo "ID: $id<br>";
    echo "Categoria: $categoria<br>";
    echo "Título: $titulo<br>";
    echo "Autor: $autor<br><br>";
}
?>