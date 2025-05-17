<?php
header('Content-Type: application/json; charset=utf-8');
$dados = [
    ["nome" => "Ana", "idade" => 25],
    ["nome" => "Carlos", "idade" => 30],
    ["nome" => "Maria", "idade" => 22]
];
echo json_encode($dados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>