<?php
// Modificadores de acesso em PHP

class Pessoa {
    public $nome;           // Pode ser acessado de qualquer lugar
    protected $idade;       // Pode ser acessado na classe e em subclasses
    private $senha;         // Só pode ser acessado dentro da própria classe

    public function __construct($nome, $idade, $senha) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->senha = $senha;
    }

    public function exibirDados() {
        echo "Nome: {$this->nome}<br>";
        echo "Idade: {$this->idade}<br>";
        // $this->senha pode ser acessada aqui
    }
}

$pessoa = new Pessoa("Ana", 30, "1234");
$pessoa->exibirDados();

// $pessoa->nome é público
echo $pessoa->nome . "<br>";

// $pessoa->idade é protegido, não pode ser acessado diretamente fora da classe
// echo $pessoa->idade; // Erro

// $pessoa->senha é privado, não pode ser acessado diretamente fora da classe
// echo $pessoa->senha; // Erro
?>