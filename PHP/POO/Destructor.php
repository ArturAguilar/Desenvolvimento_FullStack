<?php
// Exemplo de uso de destrutor em PHP

class Arquivo {
    private $nome;

    public function __construct($nome) {
        $this->nome = $nome;
        echo "Arquivo '{$this->nome}' aberto.<br>";
    }

    // Método destrutor
    public function __destruct() {
        echo "Arquivo '{$this->nome}' fechado.<br>";
    }
}

// Criando e destruindo objetos
$arquivo1 = new Arquivo("dados.txt");
echo "Fazendo operações com o arquivo...<br>";

// O destrutor será chamado automaticamente ao final do script ou quando o objeto for destruído
?>