#include <iostream>

int main() {
    int a = 7, b = 5;

    // Operadores de comparação
    bool igual = (a == b);        // Igual a
    bool diferente = (a != b);    // Diferente de
    bool maior = (a > b);         // Maior que
    bool menor = (a < b);         // Menor que
    bool maiorIgual = (a >= b);   // Maior ou igual a
    bool menorIgual = (a <= b);   // Menor ou igual a

    std::cout << "a == b: " << igual << std::endl;
    std::cout << "a != b: " << diferente << std::endl;
    std::cout << "a > b: " << maior << std::endl;
    std::cout << "a < b: " << menor << std::endl;
    std::cout << "a >= b: " << maiorIgual << std::endl;
    std::cout << "a <= b: " << menorIgual << std::endl;

    return 0;
}