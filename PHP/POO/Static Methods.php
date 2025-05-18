<?php
// Métodos estáticos em PHP

class Utilidades {
    public static function saudacao($nome) {
        echo "Olá, $nome!<br>";
    }
}

// Chamando método estático sem instanciar a classe
Utilidades::saudacao("Artur");

// Também é possível acessar métodos estáticos dentro da própria classe usando self::
class Matematica {
    public static function somar($a, $b) {
        return $a + $b;
    }

    public static function exemplo() {
        echo "2 + 3 = " . self::somar(2, 3) . "<br>";
    }
}

Matematica::exemplo();
?>