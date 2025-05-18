<?php
// Casting em PHP: conversão de tipos de dados

$valor = 10.75;

// (string) - Converte para string
$str = (string) $valor;
echo "String: $str<br>";

// (int) - Converte para inteiro
$int = (int) $valor;
echo "Integer: $int<br>";

// (float) - Converte para float
$float = (float) $int;
echo "Float: $float<br>";

// (bool) - Converte para booleano
$bool = (bool) $valor;
echo "Boolean: " . ($bool ? "true" : "false") . "<br>";

// (array) - Converte para array
$array = (array) $valor;
echo "Array: ";
print_r($array);
echo "<br>";

// (object) - Converte para objeto
$obj = (object) $valor;
echo "Object: ";
print_r($obj);
echo "<br>";

// (unset) - Converte para NULL
$null = (unset) $valor;
echo "NULL: ";
var_dump($null);
echo "<br>";
?>