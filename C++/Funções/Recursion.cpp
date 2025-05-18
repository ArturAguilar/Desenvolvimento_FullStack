#include <iostream>

// Função recursiva para calcular o fatorial de um número
int fatorial(int n) {
    if (n <= 1) {
        return 1; // Caso base
    } else {
        return n * fatorial(n - 1); // Chamada recursiva
    }
}

int main() {
    int numero = 5;
    std::cout << "Fatorial de " << numero << " é: " << fatorial(numero) << std::endl;

    return 0;
}