<?php
// Conectando ao banco de dados MySQL com PHP (MySQLi)

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
echo "Conexão bem-sucedida!<br>";

// Exemplo de consulta SELECT
$sql = "SELECT id, nome, email FROM usuarios";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    while ($linha = $resultado->fetch_assoc()) {
        echo "ID: " . $linha["id"] . " - Nome: " . $linha["nome"] . " - Email: " . $linha["email"] . "<br>";
    }
} else {
    echo "Nenhum resultado encontrado.";
}

// Fechando a conexão
$conn->close();
?>