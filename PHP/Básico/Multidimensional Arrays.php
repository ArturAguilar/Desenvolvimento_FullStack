<?php
// Arrays multidimensionais em PHP

// Criando um array multidimensional
$matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Acessando elementos
echo "Elemento [0][1]: " . $matriz[0][1] . "<br>"; // 2
echo "Elemento [2][0]: " . $matriz[2][0] . "<br>"; // 7

// Percorrendo um array multidimensional com for
for ($i = 0; $i < count($matriz); $i++) {
    for ($j = 0; $j < count($matriz[$i]); $j++) {
        echo "matriz[$i][$j]: " . $matriz[$i][$j] . "<br>";
    }
}

// Exemplo de array multidimensional associativo
$alunos = [
    [
        "nome" => "Ana",
        "notas" => [8, 7, 9]
    ],
    [
        "nome" => "Carlos",
        "notas" => [6, 8, 7]
    ]
];

foreach ($alunos as $aluno) {
    echo "Aluno: " . $aluno["nome"] . "<br>";
    echo "Notas: " . implode(", ", $aluno["notas"]) . "<br>";
}
?>