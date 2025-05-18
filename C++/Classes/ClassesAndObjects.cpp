#include <iostream>

// Definindo uma classe Pessoa
class Pessoa {
public:
    std::string nome;
    int idade;

    // Método da classe
    void apresentar() {
        std::cout << "Olá, meu nome é " << nome << " e tenho " << idade << " anos." << std::endl;
    }
};

int main() {
    Pessoa pessoa1; // Criando um objeto da classe Pessoa
    pessoa1.nome = "Artur";
    pessoa1.idade = 30;
    pessoa1.apresentar();

    Pessoa pessoa2;
    pessoa2.nome = "Maria";
    pessoa2.idade = 25;
    pessoa2.apresentar();

    return 0;
}