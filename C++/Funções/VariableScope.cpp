#include <iostream>

int globalVar = 100; // Variável global

void mostrarEscopo() {
    int localVar = 50; // Variável local à função
    std::cout << "Dentro da função - localVar: " << localVar << std::endl;
    std::cout << "Dentro da função - globalVar: " << globalVar << std::endl;
}

int main() {
    int localVar = 10; // Variável local ao main
    std::cout << "No main - localVar: " << localVar << std::endl;
    std::cout << "No main - globalVar: " << globalVar << std::endl;

    mostrarEscopo();

    // std::cout << localVar << std::endl; // localVar da função mostrarEscopo não é acessível aqui

    return 0;
}