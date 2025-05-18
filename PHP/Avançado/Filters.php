<?php
// Filtros em PHP usando filter_var e filter_input

// Exemplo com filter_var
$email = "usuario@exemplo.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Email válido!<br>";
} else {
    echo "Email inválido!<br>";
}

// Exemplo com filter_input para dados vindos de formulário
// Supondo que o formulário envie um campo 'idade' via GET ou POST
$idade = filter_input(INPUT_GET, "idade", FILTER_VALIDATE_INT);
if ($idade !== null && $idade !== false) {
    echo "Idade válida: $idade<br>";
} else {
    echo "Idade inválida ou não informada.<br>";
}

// Sanitizando uma string
$nome = "<b>Maria</b>";
$nomeLimpo = filter_var($nome, FILTER_SANITIZE_STRING);
echo "Nome sanitizado: $nomeLimpo<br>";
?>