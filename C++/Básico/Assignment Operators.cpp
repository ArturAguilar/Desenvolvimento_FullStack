#include <iostream>

int main() {
    int a = 10;      // Atribuição simples
    a += 5;          // a = a + 5 (adição e atribuição)
    a -= 2;          // a = a - 2 (subtração e atribuição)
    a *= 3;          // a = a * 3 (multiplicação e atribuição)
    a /= 4;          // a = a / 4 (divisão e atribuição)
    a %= 3;          // a = a % 3 (módulo e atribuição)

    std::cout << "Valor final de a: " << a << std::endl;

    return 0;
}