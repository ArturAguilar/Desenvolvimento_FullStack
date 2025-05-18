#include <iostream>

// Classe base
class Animal {
public:
    void comer() {
        std::cout << "O animal está comendo." << std::endl;
    }
};

// Classe derivada (herda de Animal)
class Cachorro : public Animal {
public:
    void latir() {
        std::cout << "O cachorro está latindo." << std::endl;
    }
};

int main() {
    Cachorro meuCachorro;
    meuCachorro.comer(); // Método herdado da classe Animal
    meuCachorro.latir(); // Método da classe Cachorro

    return 0;
}