<?php
// Arquivo de votos (simples, apenas para exemplo)
$arquivo = "votos.txt";
$opcoes = ["PHP", "JavaScript", "Python"];

// Inicializa votos se o arquivo não existir
if (!file_exists($arquivo)) {
    $votos = array_fill_keys($opcoes, 0);
    file_put_contents($arquivo, json_encode($votos));
} else {
    $votos = json_decode(file_get_contents($arquivo), true);
}

// Se recebeu um voto, incrementa
if (isset($_GET["voto"]) && in_array($_GET["voto"], $opcoes)) {
    $votos[$_GET["voto"]]++;
    file_put_contents($arquivo, json_encode($votos));
}

// Exibe resultados
echo "<h4>Resultados da votação:</h4>";
$total = array_sum($votos);
foreach ($votos as $linguagem => $qtd) {
    $percent = $total > 0 ? round(($qtd / $total) * 100) : 0;
    echo "$linguagem: $qtd voto(s) ($percent%)<br>";
}
?>