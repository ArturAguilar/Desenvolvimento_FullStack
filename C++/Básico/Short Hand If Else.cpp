#include <iostream>

int main() {
    int numero;
    std::cout << "Digite um número: ";
    std::cin >> numero;

    // Operador ternário (short hand if else)
    std::string resultado = (numero % 2 == 0) ? "Par" : "Ímpar";

    std::cout << "O número é: " << resultado << std::endl;

    return 0;
}