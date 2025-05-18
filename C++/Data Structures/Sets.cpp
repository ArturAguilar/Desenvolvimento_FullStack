#include <iostream>
#include <set>

int main() {
    // Declarando e inicializando um set de inteiros
    std::set<int> numeros;

    // Adicionando elementos ao set
    numeros.insert(10);
    numeros.insert(20);
    numeros.insert(30);
    numeros.insert(20); // Não será adicionado novamente (sem duplicatas)

    // Exibindo os elementos do set
    std::cout << "Elementos do set: ";
    for (int n : numeros) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    // Verificando se um elemento existe
    if (numeros.count(20) > 0) {
        std::cout << "O número 20 está no set." << std::endl;
    }

    // Removendo um elemento
    numeros.erase(10);

    std::cout << "Após remover o 10: ";
    for (int n : numeros) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    return 0;
}