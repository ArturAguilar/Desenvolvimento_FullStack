<?php
// filepath: c:\Users\artur\OneDrive\Documentos\GitHub\Desenvolvimento_FullStack\JAVASCRIPT\AJAX\PHPDB\gethint.php
header('Content-Type: text/plain; charset=utf-8');

$servername = "localhost";
$username = "root"; // ajuste conforme seu ambiente
$password = "";     // ajuste conforme seu ambiente
$dbname = "exemplo_ajax";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

$q = isset($_GET["q"]) ? $conn->real_escape_string($_GET["q"]) : "";

$sugestao = "";

if ($q !== "") {
    $sql = "SELECT nome FROM nomes WHERE nome LIKE '$q%'";
    $result = $conn->query($sql);
    $nomes = [];
    if ($result && $result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $nomes[] = $row["nome"];
        }
        $sugestao = implode(", ", $nomes);
    }
}

echo $sugestao === "" ? "Sem sugestão" : $sugestao;

$conn->close();
?>