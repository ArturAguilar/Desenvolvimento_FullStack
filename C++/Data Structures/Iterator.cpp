#include <iostream>
#include <vector>

int main() {
    std::vector<int> numeros = {10, 20, 30, 40, 50};

    // Usando um iterator para percorrer o vector
    std::cout << "Elementos do vector: ";
    for (std::vector<int>::iterator it = numeros.begin(); it != numeros.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;

    // Modificando elementos usando iterator
    for (std::vector<int>::iterator it = numeros.begin(); it != numeros.end(); ++it) {
        *it += 1;
    }

    std::cout << "Após incrementar cada elemento: ";
    for (auto it = numeros.begin(); it != numeros.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;

    return 0;
}