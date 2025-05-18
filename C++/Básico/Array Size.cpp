#include <iostream>

int main() {
    int numeros[5] = {10, 20, 30, 40, 50};

    // Calculando o tamanho do array
    int tamanho = sizeof(numeros) / sizeof(numeros[0]);

    std::cout << "Tamanho do array: " << tamanho << std::endl;

    return 0;
}