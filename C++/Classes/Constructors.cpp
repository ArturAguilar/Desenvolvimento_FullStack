#include <iostream>

// Definindo uma classe Pessoa com construtor
class Pessoa {
public:
    std::string nome;
    int idade;

    // Construtor
    Pessoa(std::string n, int i) {
        nome = n;
        idade = i;
    }

    void apresentar() {
        std::cout << "Olá, meu nome é " << nome << " e tenho " << idade << " anos." << std::endl;
    }
};

int main() {
    Pessoa pessoa1("Artur", 30); // Cria objeto usando o construtor
    pessoa1.apresentar();

    Pessoa pessoa2("Maria", 25);
    pessoa2.apresentar();

    return 0;
}