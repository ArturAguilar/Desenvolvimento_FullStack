#include <iostream>

// Definindo uma classe Calculadora
class Calculadora {
public:
    // Método para somar dois números
    int somar(int a, int b) {
        return a + b;
    }

    // Método para multiplicar dois números
    int multiplicar(int a, int b) {
        return a * b;
    }
};

int main() {
    Calculadora calc;

    int resultadoSoma = calc.somar(5, 3);
    int resultadoMultiplicacao = calc.multiplicar(4, 2);

    std::cout << "Soma: " << resultadoSoma << std::endl;
    std::cout << "Multiplicação: " << resultadoMultiplicacao << std::endl;

    return 0;
}