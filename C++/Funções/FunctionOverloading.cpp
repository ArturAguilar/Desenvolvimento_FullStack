#include <iostream>

// Função soma para dois inteiros
int soma(int a, int b) {
    return a + b;
}

// Função soma para três inteiros
int soma(int a, int b, int c) {
    return a + b + c;
}

// Função soma para dois doubles
double soma(double a, double b) {
    return a + b;
}

int main() {
    std::cout << "Soma de 2 e 3: " << soma(2, 3) << std::endl;
    std::cout << "Soma de 2, 3 e 4: " << soma(2, 3, 4) << std::endl;
    std::cout << "Soma de 2.5 e 3.7: " << soma(2.5, 3.7) << std::endl;

    return 0;
}