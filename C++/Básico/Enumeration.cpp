#include <iostream>

// Definindo um enum para os dias da semana
enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
};

int main() {
    DiaDaSemana hoje = Quarta; // Usando o enum

    std::cout << "O valor de hoje (Quarta) é: " << hoje << std::endl;

    // Exemplo de uso em switch
    switch (hoje) {
        case Domingo:
            std::cout << "Hoje é domingo." << std::endl;
            break;
        case Segunda:
            std::cout << "Hoje é segunda-feira." << std::endl;
            break;
        case Terca:
            std::cout << "Hoje é terça-feira." << std::endl;
            break;
        case Quarta:
            std::cout << "Hoje é quarta-feira." << std::endl;
            break;
        case Quinta:
            std::cout << "Hoje é quinta-feira." << std::endl;
            break;
        case Sexta:
            std::cout << "Hoje é sexta-feira." << std::endl;
            break;
        case Sabado:
            std::cout << "Hoje é sábado." << std::endl;
            break;
    }

    return 0;
}