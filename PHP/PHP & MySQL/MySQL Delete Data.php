<?php
// Deletando dados de uma tabela MySQL com PHP (MySQLi)

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

// SQL para deletar um registro específico
$sql = "DELETE FROM usuarios WHERE nome = 'Pedro Santos'";

if ($conn->query($sql) === TRUE) {
    echo "Registro deletado com sucesso!";
} else {
    echo "Erro ao deletar registro: " . $conn->error;
}

// Fechando a conexão
$conn->close();
?>