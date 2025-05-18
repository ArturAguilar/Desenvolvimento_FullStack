#include <iostream>
#include <cmath> // Necessário para funções matemáticas

int main() {
    double x = 9.0;
    double y = 2.0;

    // Funções matemáticas básicas
    double raiz = sqrt(x);         // Raiz quadrada
    double potencia = pow(x, y);   // Potência (x elevado a y)
    double absoluto = fabs(-7.5);  // Valor absoluto
    double seno = sin(x);          // Seno
    double cosseno = cos(x);       // Cosseno
    double logaritmo = log(x);     // Logaritmo natural

    std::cout << "Raiz quadrada de " << x << ": " << raiz << std::endl;
    std::cout << x << " elevado a " << y << ": " << potencia << std::endl;
    std::cout << "Valor absoluto de -7.5: " << absoluto << std::endl;
    std::cout << "Seno de " << x << ": " << seno << std::endl;
    std::cout << "Cosseno de " << x << ": " << cosseno << std::endl;
    std::cout << "Logaritmo natural de " << x << ": " << logaritmo << std::endl;

    return 0;
}