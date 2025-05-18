<?php
// Incluindo arquivos em PHP

// include: emite um aviso se o arquivo não for encontrado, mas o script continua
include "arquivo_inexistente.php";
echo "Após include<br>";

// require: emite um erro fatal se o arquivo não for encontrado e interrompe o script
// require "arquivo_inexistente.php";
// echo "Após require<br>"; // Esta linha não será executada se o arquivo não existir

// Normalmente, usamos include ou require para reutilizar código, como funções ou cabeçalhos
// Exemplo:
// include "cabecalho.php";
// require "funcoes.php";
?>