<?php
// Constantes mágicas em PHP

echo "Arquivo atual: " . __FILE__ . "<br>";
echo "Diretório atual: " . __DIR__ . "<br>";
echo "Linha atual: " . __LINE__ . "<br>";

function mostrarFuncao() {
    echo "Função: " . __FUNCTION__ . "<br>";
    echo "Arquivo dentro da função: " . __FILE__ . "<br>";
}
mostrarFuncao();

class Exemplo {
    public function mostrarClasse() {
        echo "Classe: " . __CLASS__ . "<br>";
        echo "Método: " . __METHOD__ . "<br>";
        echo "Namespace: " . __NAMESPACE__ . "<br>";
    }
}
$obj = new Exemplo();
$obj->mostrarClasse();
?>