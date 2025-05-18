#include <iostream>
#include <string>

int main() {
    std::string texto = "Exemplo de string"; // string - texto

    // Obtendo o tamanho da string
    int tamanho = texto.length(); // length() retorna o número de caracteres

    std::cout << "Texto: " << texto << std::endl;
    std::cout << "Tamanho da string: " << tamanho << std::endl;

    return 0;
}