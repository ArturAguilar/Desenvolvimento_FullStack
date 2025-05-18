<?php
// Características da Programação Orientada a Objetos (POO) em PHP

/*
Principais características da POO:

1. Abstração:
   - Permite representar conceitos do mundo real como classes e objetos.

2. Encapsulamento:
   - Protege os dados, permitindo acesso apenas por métodos definidos.

3. Herança:
   - Permite que uma classe herde propriedades e métodos de outra.

4. Polimorfismo:
   - Permite que métodos com o mesmo nome se comportem de maneiras diferentes em classes distintas.
*/

// Exemplo simples de cada característica:

// Abstração e Encapsulamento
class ContaBancaria {
    private $saldo;

    public function __construct($saldoInicial) {
        $this->saldo = $saldoInicial;
    }

    public function depositar($valor) {
        $this->saldo += $valor;
    }

    public function getSaldo() {
        return $this->saldo;
    }
}

// Herança
class ContaPoupanca extends ContaBancaria {
    public function renderJuros($taxa) {
        $this->depositar($this->getSaldo() * $taxa);
    }
}

// Polimorfismo
$conta = new ContaPoupanca(1000);
$conta->renderJuros(0.05);
echo "Saldo após juros: " . $conta->getSaldo() . "<br>";
?>