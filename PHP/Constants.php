<?php
// Constantes em PHP

// Definindo uma constante
define("PI", 3.14159);
define("NOME_SITE", "MeuSite");

// Constantes são acessadas sem o cifrão $
echo "Valor de PI: " . PI . "<br>";
echo "Nome do site: " . NOME_SITE . "<br>";

// Constantes são globalmente acessíveis
function mostrarConstante() {
    echo "PI dentro da função: " . PI . "<br>";
}
mostrarConstante();

// Constantes mágicas
echo "Arquivo atual: " . __FILE__ . "<br>";
echo "Linha atual: " . __LINE__ . "<br>";
?>