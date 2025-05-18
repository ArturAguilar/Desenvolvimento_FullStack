#include <iostream>

int main() {
    int numero;
    std::cout << "Digite um número: ";
    std::cin >> numero;

    if (numero > 0) {
        std::cout << "O número é positivo." << std::endl;
    } else if (numero < 0) {
        std::cout << "O número é negativo." << std::endl;
    } else {
        std::cout << "O número é zero." << std::endl;
    }

    return 0;
}