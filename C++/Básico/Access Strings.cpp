#include <iostream>
#include <string>

int main() {
    std::string texto = "C++ é divertido!"; // string - texto

    // Acessando caracteres individuais da string
    char primeiro = texto[0]; // Primeiro caractere
    char segundo = texto[1];  // Segundo caractere

    std::cout << "Texto: " << texto << std::endl;
    std::cout << "Primeiro caractere: " << primeiro << std::endl;
    std::cout << "Segundo caractere: " << segundo << std::endl;

    // Modificando um caractere da string
    texto[0] = 'c';
    std::cout << "Texto modificado: " << texto << std::endl;

    return 0;
}