#include <iostream>

int main() {
    int valor = 42;           // Variável inteira
    int* ponteiro = &valor;   // Ponteiro para int, armazena o endereço de valor

    std::cout << "Valor da variável: " << valor << std::endl;
    std::cout << "Endereço da variável: " << &valor << std::endl;
    std::cout << "Valor armazenado no ponteiro: " << ponteiro << std::endl;
    std::cout << "Valor apontado pelo ponteiro: " << *ponteiro << std::endl;

    // Modificando o valor usando o ponteiro
    *ponteiro = 100;
    std::cout << "Novo valor da variável: " << valor << std::endl;

    return 0;
}