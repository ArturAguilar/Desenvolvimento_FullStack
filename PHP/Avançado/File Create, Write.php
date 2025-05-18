<?php
// Criando e escrevendo em um arquivo em PHP

$arquivo = "novo_arquivo.txt";

// Abrindo o arquivo para escrita (cria se não existir)
$handle = fopen($arquivo, "w");

if ($handle) {
    $texto = "Primeira linha do arquivo.\n";
    fwrite($handle, $texto);

    $texto2 = "Segunda linha do arquivo.\n";
    fwrite($handle, $texto2);

    // Fechando o arquivo após a escrita
    fclose($handle);
    echo "Arquivo criado e escrito com sucesso!";
} else {
    echo "Não foi possível criar ou escrever no arquivo.";
}
?>