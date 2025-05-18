#include <iostream>
#include <string>

int main() {
    int numero = 123;                // int - números inteiros
    double preco = 19.99;            // double - números com casas decimais
    char letra = 'A';                // char - um único caractere
    std::string texto = "Hello World"; // string - texto
    bool ativo = true;               // bool - verdadeiro ou falso

    std::cout << "int: " << numero << std::endl;
    std::cout << "double: " << preco << std::endl;
    std::cout << "char: " << letra << std::endl;
    std::cout << "string: " << texto << std::endl;
    std::cout << "bool: " << ativo << std::endl;

    return 0;
}