#include <iostream>
#include <stdexcept>

// Função que lança uma exceção se o divisor for zero
double dividir(double a, double b) {
    if (b == 0) {
        throw std::runtime_error("Divisão por zero não é permitida!");
    }
    return a / b;
}

int main() {
    try {
        double resultado = dividir(10, 0);
        std::cout << "Resultado: " << resultado << std::endl;
    } catch (const std::exception& e) {
        std::cout << "Exceção capturada: " << e.what() << std::endl;
    }

    return 0;
}