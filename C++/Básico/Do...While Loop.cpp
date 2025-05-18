#include <iostream>

int main() {
    int contador = 1;

    // Estrutura de repetição do...while
    do {
        std::cout << "Contador: " << contador << std::endl;
        contador++; // incrementa o contador
    } while (contador <= 5);

    return 0;
}