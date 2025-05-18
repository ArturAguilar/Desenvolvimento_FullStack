<?php
// Trabalhando com sessões em PHP

// Inicia a sessão
session_start();

// Define variáveis de sessão
$_SESSION["usuario"] = "Artur";
$_SESSION["email"] = "artur@email.com";

// Lê variáveis de sessão
echo "Usuário: " . $_SESSION["usuario"] . "<br>";
echo "Email: " . $_SESSION["email"] . "<br>";

// Exclui uma variável de sessão
// unset($_SESSION["usuario"]);

// Destroi todas as variáveis de sessão
// session_destroy();
?>