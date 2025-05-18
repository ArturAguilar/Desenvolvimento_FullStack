#include <iostream>

// Classe base
class Animal {
public:
    // Método virtual para polimorfismo
    virtual void fazerSom() {
        std::cout << "O animal faz um som." << std::endl;
    }
};

// Classe derivada
class Cachorro : public Animal {
public:
    void fazerSom() override {
        std::cout << "O cachorro late." << std::endl;
    }
};

// Outra classe derivada
class Gato : public Animal {
public:
    void fazerSom() override {
        std::cout << "O gato mia." << std::endl;
    }
};

int main() {
    Animal* animal1 = new Cachorro();
    Animal* animal2 = new Gato();

    animal1->fazerSom(); // Saída: O cachorro late.
    animal2->fazerSom(); // Saída: O gato mia.

    delete animal1;
    delete animal2;

    return 0;
}