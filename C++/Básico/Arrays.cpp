#include <iostream>

int main() {
    // Declarando e inicializando um array de inteiros
    int numeros[5] = {10, 20, 30, 40, 50};

    // Acessando e exibindo os elementos do array
    for (int i = 0; i < 5; i++) {
        std::cout << "Elemento " << i << ": " << numeros[i] << std::endl;
    }

    return 0;
}