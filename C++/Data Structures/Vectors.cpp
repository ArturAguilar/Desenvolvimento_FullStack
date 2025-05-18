#include <iostream>
#include <vector>

int main() {
    // Declarando e inicializando um vector de inteiros
    std::vector<int> numeros = {10, 20, 30};

    // Adicionando elementos ao final do vector
    numeros.push_back(40);
    numeros.push_back(50);

    // Acessando elementos do vector
    std::cout << "Elementos do vector: ";
    for (int n : numeros) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    // Tamanho do vector
    std::cout << "Tamanho do vector: " << numeros.size() << std::endl;

    // Acessando elemento por índice
    std::cout << "Primeiro elemento: " << numeros[0] << std::endl;

    // Removendo o último elemento
    numeros.pop_back();
    std::cout << "Após remover o último elemento: ";
    for (int n : numeros) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    return 0;
}