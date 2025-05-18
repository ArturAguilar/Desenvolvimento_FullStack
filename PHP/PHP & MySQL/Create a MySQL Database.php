<?php
// Criando um banco de dados MySQL com PHP (MySQLi)

$servidor = "localhost";
$usuario = "root";
$senha = "";

// Criando conexão
$conn = new mysqli($servidor, $usuario, $senha);

// Verificando conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Criando o banco de dados
$sql = "CREATE DATABASE IF NOT EXISTS meubanco";
if ($conn->query($sql) === TRUE) {
    echo "Banco de dados criado com sucesso!";
} else {
    echo "Erro ao criar o banco de dados: " . $conn->error;
}

// Fechando a conexão
$conn->close();
?>