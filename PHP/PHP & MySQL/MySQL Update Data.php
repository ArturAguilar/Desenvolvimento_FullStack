<?php
// Atualizando dados em uma tabela MySQL com PHP (MySQLi)

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

// SQL para atualizar dados
$sql = "UPDATE usuarios SET email = 'carlos.novo@email.com' WHERE nome = 'Carlos Lima'";

if ($conn->query($sql) === TRUE) {
    if ($conn->affected_rows > 0) {
        echo "Registro atualizado com sucesso!";
    } else {
        echo "Nenhum registro foi alterado.";
    }
} else {
    echo "Erro ao atualizar registro: " . $conn->error;
}

// Fechando a conexão
$conn->close();
?>