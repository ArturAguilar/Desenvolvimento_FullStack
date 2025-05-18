<?php
// Iteráveis em PHP

// Qualquer array ou objeto que implemente Traversable pode ser percorrido com foreach

// Exemplo com array (iterável padrão)
$frutas = ["maçã", "banana", "laranja"];
foreach ($frutas as $fruta) {
    echo "Fruta: $fruta<br>";
}

// Exemplo com objeto que implementa Iterator
class MinhaColecao implements \Iterator {
    private $itens = [];
    private $posicao = 0;

    public function __construct($itens) {
        $this->itens = array_values($itens);
    }

    public function current(): mixed {
        return $this->itens[$this->posicao];
    }

    public function key(): mixed {
        return $this->posicao;
    }

    public function next(): void {
        ++$this->posicao;
    }

    public function rewind(): void {
        $this->posicao = 0;
    }

    public function valid(): bool {
        return isset($this->itens[$this->posicao]);
    }
}

$colecao = new MinhaColecao(["um", "dois", "três"]);
foreach ($colecao as $item) {
    echo "Item: $item<br>";
}
?>