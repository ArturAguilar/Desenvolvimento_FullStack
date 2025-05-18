#include <iostream>

// Classe base
class Animal {
public:
    void comer() {
        std::cout << "O animal está comendo." << std::endl;
    }
};

// Classe derivada de Animal
class Mamifero : public Animal {
public:
    void amamentar() {
        std::cout << "O mamífero está amamentando." << std::endl;
    }
};

// Classe derivada de Mamifero
class Cachorro : public Mamifero {
public:
    void latir() {
        std::cout << "O cachorro está latindo." << std::endl;
    }
};

int main() {
    Cachorro meuCachorro;
    meuCachorro.comer();       // Método da classe Animal
    meuCachorro.amamentar();   // Método da classe Mamifero
    meuCachorro.latir();       // Método da classe Cachorro

    return 0;
}