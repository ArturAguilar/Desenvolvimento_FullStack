#include <iostream>

// Primeira classe base
class Caminhador {
public:
    void andar() {
        std::cout << "Andando..." << std::endl;
    }
};

// Segunda classe base
class Nadador {
public:
    void nadar() {
        std::cout << "Nadando..." << std::endl;
    }
};

// Classe derivada com herança múltipla
class Triatleta : public Caminhador, public Nadador {
public:
    void competir() {
        std::cout << "Competindo em triatlo!" << std::endl;
    }
};

int main() {
    Triatleta atleta;
    atleta.andar();      // Método da classe Caminhador
    atleta.nadar();      // Método da classe Nadador
    atleta.competir();   // Método da classe Triatleta

    return 0;
}