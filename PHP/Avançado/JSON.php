<?php
// Trabalhando com JSON em PHP

// Array associativo
$pessoa = [
    "nome" => "João",
    "idade" => 30,
    "email" => "joao@email.com"
];

// Convertendo array para JSON
$json = json_encode($pessoa);
echo "JSON gerado: $json<br>";

// Convertendo JSON para array
$jsonString = '{"nome":"Maria","idade":25,"email":"maria@email.com"}';
$array = json_decode($jsonString, true);
echo "Array convertido do JSON:<br>";
print_r($array);
echo "<br>";

// Convertendo JSON para objeto
$obj = json_decode($jsonString);
echo "Nome do objeto: " . $obj->nome . "<br>";
?>