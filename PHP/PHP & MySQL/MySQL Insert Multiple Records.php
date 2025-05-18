<?php
// Inserindo múltiplos registros em uma tabela MySQL com PHP (MySQLi)

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

// SQL para inserir múltiplos registros
$sql = "INSERT INTO usuarios (nome, email) VALUES 
    ('Carlos Lima', 'carlos@email.com'),
    ('Fernanda Alves', 'fernanda@email.com'),
    ('Pedro Santos', 'pedro@email.com')";

if ($conn->multi_query($sql) === TRUE) {
    echo "Registros inseridos com sucesso!";
} else {
    echo "Erro ao inserir registros: " . $conn->error;
}

// Fechando a conexão
$conn->close();
?>