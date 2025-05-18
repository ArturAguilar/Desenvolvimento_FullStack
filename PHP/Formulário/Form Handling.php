<?php
// Manipulação de formulários em PHP

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    echo "Nome recebido: $nome<br>";
    echo "Email recebido: $email<br>";
}
?>

<!-- Formulário HTML -->
<form method="post" action="">
    Nome: <input type="text" name="nome"><br>
    Email: <input type="email" name="email"><br>
    <input type="submit" value="Enviar">
</form>