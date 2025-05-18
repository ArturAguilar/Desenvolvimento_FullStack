#include <iostream>

// Função que soma dois números inteiros
int soma(int a, int b) {
    return a + b;
}

// Função que exibe uma mensagem
void mensagem() {
    std::cout << "Funções em C++ são legais!" << std::endl;
}

int main() {
    int resultado = soma(5, 3); // Chama a função soma
    std::cout << "Resultado da soma: " << resultado << std::endl;

    mensagem(); // Chama a função mensagem

    return 0;
}