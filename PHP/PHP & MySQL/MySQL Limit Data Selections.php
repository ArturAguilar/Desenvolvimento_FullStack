<?php
// Limitando a seleção de dados em uma consulta MySQL com PHP (MySQLi)

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

// SQL com LIMIT para retornar apenas 3 registros
$sql = "SELECT id, nome, email FROM usuarios LIMIT 3";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " | Nome: " . $row["nome"] . " | Email: " . $row["email"] . "<br>";
    }
} else {
    echo "Nenhum registro encontrado.";
}

// Fechando a conexão
$conn->close();
?>