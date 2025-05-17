<?php
// filepath: c:\Users\artur\OneDrive\Documentos\GitHub\Desenvolvimento_FullStack\JAVASCRIPT\AJAX\PHPHint\gethint.php
// Array com alguns nomes para sugestão
$a[] = "Ana";
$a[] = "Bruno";
$a[] = "Carlos";
$a[] = "Daniela";
$a[] = "Eduardo";
$a[] = "Fernanda";
$a[] = "Gabriel";
$a[] = "Helena";
$a[] = "Isabela";
$a[] = "João";
$a[] = "Lucas";
$a[] = "Mariana";
$a[] = "Pedro";
$a[] = "Rafael";
$a[] = "Sofia";

// Recebe o parâmetro da URL
$q = isset($_GET["q"]) ? strtolower($_GET["q"]) : "";

$sugestao = "";

if ($q !== "") {
    $len = strlen($q);
    foreach($a as $nome) {
        if (stristr($q, substr($nome, 0, $len))) {
            if ($sugestao === "") {
                $sugestao = $nome;
            } else {
                $sugestao .= ", $nome";
            }
        }
    }
}

echo $sugestao === "" ? "Sem sugestão" : $sugestao;
?>