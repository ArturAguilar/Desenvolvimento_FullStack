<?php
// Trabalhando com data e hora em PHP

// Data e hora atual
echo "Data e hora atual: " . date("d/m/Y H:i:s") . "<br>";

// Apenas a data
echo "Data de hoje: " . date("d/m/Y") . "<br>";

// Apenas a hora
echo "Hora atual: " . date("H:i:s") . "<br>";

// Timestamp atual
echo "Timestamp atual: " . time() . "<br>";

// Criando uma data específica
$data = mktime(0, 0, 0, 12, 25, 2025); // 25 de dezembro de 2025
echo "Natal de 2025: " . date("d/m/Y", $data) . "<br>";

// Convertendo string para timestamp
$stringData = "2025-05-18 14:30:00";
$timestamp = strtotime($stringData);
echo "Data convertida: " . date("d/m/Y H:i:s", $timestamp) . "<br>";

// Diferença entre datas
$data1 = strtotime("2025-05-18");
$data2 = strtotime("2025-12-25");
$dias = ($data2 - $data1) / (60 * 60 * 24);
echo "Dias até o Natal de 2025: $dias<br>";
?>