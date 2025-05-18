<?php
// Obtendo o último ID inserido em uma tabela MySQL com PHP (MySQLi)

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

// SQL para inserir dados
$sql = "INSERT INTO usuarios (nome, email) VALUES ('Maria Souza', 'maria@email.com')";

if ($conn->query($sql) === TRUE) {
    $ultimo_id = $conn->insert_id;
    echo "Novo registro inserido com sucesso! Último ID inserido: " . $ultimo_id;
} else {
    echo "Erro ao inserir registro: " . $conn->error;
}

// Fechando a conexão
$conn->close();
?>