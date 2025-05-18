#include <iostream>
#include <deque>

int main() {
    // Declarando e inicializando um deque de inteiros
    std::deque<int> numeros = {10, 20, 30};

    // Adicionando elementos no início e no final
    numeros.push_front(5);
    numeros.push_back(40);

    // Exibindo os elementos do deque
    std::cout << "Elementos do deque: ";
    for (int n : numeros) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    // Removendo elementos do início e do final
    numeros.pop_front();
    numeros.pop_back();

    std::cout << "Após remoções: ";
    for (int n : numeros) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    // Acessando elementos por índice
    std::cout << "Primeiro elemento: " << numeros[0] << std::endl;
    std::cout << "Último elemento: " << numeros[numeros.size() - 1] << std::endl;

    return 0;
}