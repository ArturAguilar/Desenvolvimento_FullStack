#include <iostream>

int main() {
    int valor1 = 10;
    int valor2 = 20;
    int* ponteiro = &valor1; // Ponteiro aponta para valor1

    std::cout << "Valor inicial de valor1: " << valor1 << std::endl;
    std::cout << "Valor inicial de valor2: " << valor2 << std::endl;
    std::cout << "Valor apontado pelo ponteiro: " << *ponteiro << std::endl;

    // Modificando valor1 através do ponteiro
    *ponteiro = 50;
    std::cout << "Novo valor de valor1 (modificado pelo ponteiro): " << valor1 << std::endl;

    // Fazendo o ponteiro apontar para valor2
    ponteiro = &valor2;
    std::cout << "Valor apontado pelo ponteiro agora: " << *ponteiro << std::endl;

    // Modificando valor2 através do ponteiro
    *ponteiro = 100;
    std::cout << "Novo valor de valor2 (modificado pelo ponteiro): " << valor2 << std::endl;

    return 0;
}