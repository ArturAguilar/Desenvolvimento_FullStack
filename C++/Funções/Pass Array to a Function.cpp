#include <iostream>

// Função que recebe um array e seu tamanho como parâmetros
void exibirArray(int numeros[], int tamanho) {
    std::cout << "Elementos do array: ";
    for (int i = 0; i < tamanho; i++) {
        std::cout << numeros[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int valores[5] = {10, 20, 30, 40, 50};
    int tamanho = sizeof(valores) / sizeof(valores[0]);

    exibirArray(valores, tamanho); // Passando o array para a função

    return 0;
}