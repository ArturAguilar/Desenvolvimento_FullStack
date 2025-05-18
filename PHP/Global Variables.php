<?php
// Variáveis globais e superglobais em PHP

// $GLOBALS - acessa variáveis globais em qualquer escopo
$mensagem = "Olá, mundo!";
function mostrarMensagem() {
    echo $GLOBALS['mensagem'] . "<br>";
}
mostrarMensagem();

// $_SERVER - informações do servidor e ambiente de execução
echo "Endereço do servidor: " . $_SERVER['SERVER_NAME'] . "<br>";
echo "Script atual: " . $_SERVER['PHP_SELF'] . "<br>";

// $_REQUEST - dados enviados via GET, POST ou COOKIE
if (isset($_REQUEST['usuario'])) {
    echo "Usuário recebido por REQUEST: " . $_REQUEST['usuario'] . "<br>";
}

// $_POST - dados enviados via método POST
if (isset($_POST['email'])) {
    echo "Email recebido por POST: " . $_POST['email'] . "<br>";
}

// $_GET - dados enviados via método GET
if (isset($_GET['nome'])) {
    echo "Nome recebido por GET: " . $_GET['nome'] . "<br>";
}

// $_COOKIE - dados armazenados em cookies
if (isset($_COOKIE['tema'])) {
    echo "Tema salvo no cookie: " . $_COOKIE['tema'] . "<br>";
}
?>