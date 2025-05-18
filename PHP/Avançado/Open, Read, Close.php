<?php
// Abrindo, lendo e fechando um arquivo em PHP usando fread()

$arquivo = "exemplo.txt";

// Abrindo o arquivo para leitura
$handle = fopen($arquivo, "r");

if ($handle) {
    // Obtendo o tamanho do arquivo
    $tamanho = filesize($arquivo);
    // Lendo todo o conteúdo do arquivo com fread()
    $conteudo = fread($handle, $tamanho);
    echo "Conteúdo do arquivo (usando fread):<br>";
    echo nl2br($conteudo);
    // Fechando o arquivo
    fclose($handle);
} else {
    echo "Não foi possível abrir o arquivo.";
}
?>