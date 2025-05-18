<?php
// Upload de arquivos em PHP

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $diretorio = "uploads/";
    $arquivo = $diretorio . basename($_FILES["arquivo"]["name"]);
    $uploadOk = 1;
    $tipoArquivo = strtolower(pathinfo($arquivo, PATHINFO_EXTENSION));

    // Verifica se o arquivo já existe
    if (file_exists($arquivo)) {
        echo "Desculpe, o arquivo já existe.<br>";
        $uploadOk = 0;
    }

    // Limita o tamanho do arquivo (exemplo: 2MB)
    if ($_FILES["arquivo"]["size"] > 2 * 1024 * 1024) {
        echo "Desculpe, o arquivo é muito grande.<br>";
        $uploadOk = 0;
    }

    // Permite apenas alguns tipos de arquivos (exemplo: imagens)
    $tiposPermitidos = ["jpg", "jpeg", "png", "gif", "pdf"];
    if (!in_array($tipoArquivo, $tiposPermitidos)) {
        echo "Desculpe, apenas arquivos JPG, JPEG, PNG, GIF e PDF são permitidos.<br>";
        $uploadOk = 0;
    }

    // Tenta fazer o upload se tudo estiver ok
    if ($uploadOk) {
        if (move_uploaded_file($_FILES["arquivo"]["tmp_name"], $arquivo)) {
            echo "Arquivo " . htmlspecialchars(basename($_FILES["arquivo"]["name"])) . " enviado com sucesso!";
        } else {
            echo "Desculpe, houve um erro ao enviar seu arquivo.";
        }
    }
}
?>

<!-- Formulário HTML para upload -->
<form action="" method="post" enctype="multipart/form-data">
    Selecione o arquivo para upload:
    <input type="file" name="arquivo"><br>
    <input type="submit" value="Enviar Arquivo">
</form>