<?php
// Namespaces em PHP

namespace MeuProjeto\Utilidades;

class Saudacao {
    public static function ola($nome) {
        echo "Olá, $nome!<br>";
    }
}

// Fora do namespace, para usar a classe:
namespace {
    // Importando a classe com use
    use MeuProjeto\Utilidades\Saudacao;

    Saudacao::ola("Artur");
}
?>