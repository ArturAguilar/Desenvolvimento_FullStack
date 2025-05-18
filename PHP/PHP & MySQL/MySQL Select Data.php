<?php
// Selecionando dados de uma tabela MySQL com PHP (MySQLi)

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

// SQL para selecionar dados
$sql = "SELECT id, nome, email, criado_em FROM usuarios";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Exibindo os dados de cada linha
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " | Nome: " . $row["nome"] . " | Email: " . $row["email"] . " | Criado em: " . $row["criado_em"] . "<br>";
    }
} else {
    echo "Nenhum registro encontrado.";
}

// Fechando a conexão
$conn->close();
?>