#include <iostream>

// Definindo uma estrutura
struct Pessoa {
    std::string nome;
    int idade;
};

// Função que recebe uma estrutura como parâmetro
void exibirPessoa(Pessoa p) {
    std::cout << "Nome: " << p.nome << std::endl;
    std::cout << "Idade: " << p.idade << std::endl;
}

int main() {
    Pessoa pessoa1;
    pessoa1.nome = "Artur";
    pessoa1.idade = 30;

    exibirPessoa(pessoa1); // Passando a estrutura para a função

    return 0;
}