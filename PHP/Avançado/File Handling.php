<?php
// Manipulação de arquivos em PHP

$arquivo = "exemplo.txt";

// Escrevendo em um arquivo
$conteudo = "Olá, este é um exemplo de escrita em arquivo.\n";
file_put_contents($arquivo, $conteudo);

// Lendo um arquivo inteiro
$leitura = file_get_contents($arquivo);
echo "Conteúdo do arquivo:<br>";
echo nl2br($leitura);

// Abrindo arquivo para leitura linha a linha
$handle = fopen($arquivo, "r");
if ($handle) {
    echo "<br>Lendo linha a linha:<br>";
    while (($linha = fgets($handle)) !== false) {
        echo nl2br($linha);
    }
    fclose($handle);
} else {
    echo "Não foi possível abrir o arquivo.";
}

// Adicionando conteúdo ao final do arquivo
file_put_contents($arquivo, "Nova linha adicionada.\n", FILE_APPEND);

// Lendo e exibindo o arquivo diretamente com readfile()
echo "<br>Usando readfile():<br>";
readfile($arquivo);

// Excluindo um arquivo
// unlink($arquivo); // Descomente para excluir o arquivo
?>