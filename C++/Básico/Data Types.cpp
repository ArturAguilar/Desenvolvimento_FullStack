#include <iostream>
#include <string>

int main() {
    int numero = 42;                   // int - números inteiros
    double preco = 99.90;              // double - números com casas decimais
    char letra = 'B';                  // char - um único caractere
    std::string texto = "C++ é legal"; // string - texto
    bool ativo = false;                // bool - verdadeiro ou falso

    std::cout << "int: " << numero << std::endl;
    std::cout << "double: " << preco << std::endl;
    std::cout << "char: " << letra << std::endl;
    std::cout << "string: " << texto << std::endl;
    std::cout << "bool: " << ativo << std::endl;

    return 0;
}