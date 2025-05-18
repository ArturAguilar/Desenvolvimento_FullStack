<?php
// Trabalhando com cookies em PHP

// Definindo um cookie (dura 1 hora)
setcookie("usuario", "Artur", time() + 3600);

// Lendo o valor do cookie
if (isset($_COOKIE["usuario"])) {
    echo "Bem-vindo, " . $_COOKIE["usuario"] . "!";
} else {
    echo "Cookie 'usuario' não está definido.";
}

// Excluindo um cookie (definindo tempo no passado)
// setcookie("usuario", "", time() - 3600);
?>