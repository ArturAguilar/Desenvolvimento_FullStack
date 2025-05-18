<?php
// Constantes de classe em PHP

class Matematica {
    const PI = 3.14159;

    public function mostrarPi() {
        // Acessando a constante da classe
        echo "O valor de PI é: " . self::PI . "<br>";
    }
}

// Acessando a constante sem instanciar a classe
echo "PI (acesso direto): " . Matematica::PI . "<br>";

// Acessando via método da classe
$mat = new Matematica();
$mat->mostrarPi();
?>