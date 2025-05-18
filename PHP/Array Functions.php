<?php
// Criando um array
$numeros = [1, 2, 2, 3, 4, 5, 5];

// array_unique() - Remove valores duplicados
$unicos = array_unique($numeros);
echo "Valores únicos: ";
print_r($unicos);
echo "<br>";

// array_sum() - Soma todos os valores
echo "Soma: " . array_sum($numeros) . "<br>";

// array_search() - Procura um valor e retorna a chave
$chave = array_search(3, $numeros);
echo "Chave do valor 3: $chave<br>";

// in_array() - Verifica se um valor existe no array
if (in_array(4, $numeros)) {
    echo "O número 4 está no array<br>";
}

// array_push() - Adiciona elementos ao final
array_push($numeros, 6, 7);
echo "Após array_push: ";
print_r($numeros);
echo "<br>";

// array_pop() - Remove o último elemento
$ultimo = array_pop($numeros);
echo "Elemento removido com array_pop: $ultimo<br>";

// array_reverse() - Inverte a ordem dos elementos
$invertido = array_reverse($numeros);
echo "Array invertido: ";
print_r($invertido);
echo "<br>";

// array_keys() - Retorna todas as chaves
$chaves = array_keys($numeros);
echo "Chaves do array: ";
print_r($chaves);
echo "<br>";
?>