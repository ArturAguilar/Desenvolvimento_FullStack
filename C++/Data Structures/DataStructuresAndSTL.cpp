#include <iostream>
#include <vector>
#include <list>
#include <map>
#include <algorithm>

int main() {
    // Vector: array dinâmico
    std::vector<int> numeros = {1, 2, 3, 4, 5};
    numeros.push_back(6);

    std::cout << "Vector: ";
    for (int n : numeros) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    // List: lista duplamente encadeada
    std::list<std::string> nomes = {"Ana", "Bruno", "Carlos"};
    nomes.push_back("Diana");

    std::cout << "List: ";
    for (const auto& nome : nomes) {
        std::cout << nome << " ";
    }
    std::cout << std::endl;

    // Map: dicionário (chave-valor)
    std::map<std::string, int> idades;
    idades["Ana"] = 20;
    idades["Bruno"] = 25;

    std::cout << "Map: ";
    for (const auto& par : idades) {
        std::cout << par.first << "=" << par.second << " ";
    }
    std::cout << std::endl;

    // Algoritmo: busca no vector
    auto it = std::find(numeros.begin(), numeros.end(), 3);
    if (it != numeros.end()) {
        std::cout << "Número 3 encontrado no vector!" << std::endl;
    }

    return 0;
}