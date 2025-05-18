#include <iostream>
#include <vector>

int main() {
    int n, numero, maior;

    std::cout << "Quantos números você deseja digitar? ";
    std::cin >> n;

    if (n <= 0) {
        std::cout << "Quantidade inválida!" << std::endl;
        return 1;
    }

    std::vector<int> numeros;
    for (int i = 0; i < n; i++) {
        std::cout << "Digite o " << i + 1 << "º número: ";
        std::cin >> numero;
        numeros.push_back(numero);
    }

    maior = numeros[0];
    for (int i = 1; i < n; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    std::cout << "O maior número digitado foi: " << maior << std::endl;

    return 0;
}