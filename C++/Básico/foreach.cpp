#include <iostream>
#include <vector>

int main() {
    std::vector<int> numeros = {1, 2, 3, 4, 5};

    // Estrutura de repetição foreach (range-based for)
    for (int numero : numeros) {
        std::cout << "Número: " << numero << std::endl;
    }

    return 0;
}