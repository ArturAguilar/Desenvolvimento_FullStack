#include <iostream>

int main() {
    const double PI = 3.14159;      // constante de ponto flutuante
    const int ANO = 2025;           // constante inteira
    const char LETRA = 'C';         // constante caractere

    std::cout << "PI: " << PI << std::endl;
    std::cout << "Ano: " << ANO << std::endl;
    std::cout << "Letra: " << LETRA << std::endl;

    // PI = 3.14; // Isso causaria erro de compilação, pois PI é constante

    return 0;
}