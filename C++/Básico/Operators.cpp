#include <iostream>

int main() {
    int a = 10, b = 3;

    // Operadores aritméticos
    int soma = a + b;        // Soma
    int subtracao = a - b;   // Subtração
    int multiplicacao = a * b; // Multiplicação
    int divisao = a / b;     // Divisão inteira
    int resto = a % b;       // Resto da divisão

    // Operadores relacionais
    bool igual = (a == b);   // Igualdade
    bool diferente = (a != b); // Diferença
    bool maior = (a > b);    // Maior que
    bool menor = (a < b);    // Menor que
    bool maiorIgual = (a >= b); // Maior ou igual
    bool menorIgual = (a <= b); // Menor ou igual

    // Operadores lógicos
    bool e_logico = (a > 5 && b < 5); // E lógico
    bool ou_logico = (a < 5 || b < 5); // OU lógico
    bool nao_logico = !(a == b);      // NÃO lógico

    std::cout << "Soma: " << soma << std::endl;
    std::cout << "Subtração: " << subtracao << std::endl;
    std::cout << "Multiplicação: " << multiplicacao << std::endl;
    std::cout << "Divisão: " << divisao << std::endl;
    std::cout << "Resto: " << resto << std::endl;

    std::cout << "Igual: " << igual << std::endl;
    std::cout << "Diferente: " << diferente << std::endl;
    std::cout << "Maior: " << maior << std::endl;
    std::cout << "Menor: " << menor << std::endl;
    std::cout << "Maior ou igual: " << maiorIgual << std::endl;
    std::cout << "Menor ou igual: " << menorIgual << std::endl;

    std::cout << "E lógico: " << e_logico << std::endl;
    std::cout << "OU lógico: " << ou_logico << std::endl;
    std::cout << "NÃO lógico: " << nao_logico << std::endl;

    return 0;
}