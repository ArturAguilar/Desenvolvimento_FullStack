<?php
// Usando Prepared Statements em MySQL com PHP (MySQLi)

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "meubanco";

// Criando conexão
$conn = new mysqli($servidor, $usuario, $senha, $banco);

// Verificando conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Preparando a declaração SQL
$stmt = $conn->prepare("INSERT INTO usuarios (nome, email) VALUES (?, ?)");
if ($stmt === false) {
    die("Erro na preparação: " . $conn->error);
}

// Vinculando parâmetros (s = string, s = string)
$stmt->bind_param("ss", $nome, $email);

// Definindo valores e executando
$nome = "Lucas Pereira";
$email = "lucas@email.com";
$stmt->execute();

$nome = "Juliana Costa";
$email = "juliana@email.com";
$stmt->execute();

echo "Registros inseridos com sucesso usando prepared statements!";

// Fechando a declaração e a conexão
$stmt->close();
$conn->close();
?>