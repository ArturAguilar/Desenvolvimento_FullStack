#include <iostream>
#include <list>

int main() {
    // Declarando e inicializando uma lista de strings
    std::list<std::string> nomes = {"Ana", "Bruno", "Carlos"};

    // Adicionando elementos ao final da lista
    nomes.push_back("Diana");

    // Adicionando elemento ao início da lista
    nomes.push_front("Eduardo");

    // Exibindo os elementos da lista
    std::cout << "Elementos da lista: ";
    for (const auto& nome : nomes) {
        std::cout << nome << " ";
    }
    std::cout << std::endl;

    // Removendo o primeiro elemento
    nomes.pop_front();

    // Removendo o último elemento
    nomes.pop_back();

    std::cout << "Após remoções: ";
    for (const auto& nome : nomes) {
        std::cout << nome << " ";
    }
    std::cout << std::endl;

    return 0;
}