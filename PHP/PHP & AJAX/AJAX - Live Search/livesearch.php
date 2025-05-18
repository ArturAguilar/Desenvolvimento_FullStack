<?php
// AJAX Live Search com MySQL

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "meubanco";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

$q = isset($_GET["q"]) ? $conn->real_escape_string($_GET["q"]) : "";

if ($q !== "") {
    $sql = "SELECT nome, email FROM usuarios WHERE nome LIKE '%$q%' LIMIT 10";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "Nome: " . htmlspecialchars($row["nome"]) . " | Email: " . htmlspecialchars($row["email"]) . "<br>";
        }
    } else {
        echo "Nenhum resultado encontrado.";
    }
}

$conn->close();
?>
