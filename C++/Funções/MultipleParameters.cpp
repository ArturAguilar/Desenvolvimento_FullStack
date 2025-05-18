#include <iostream>

// Função com múltiplos parâmetros
void exibirDados(std::string nome, int idade, double altura) {
    std::cout << "Nome: " << nome << std::endl;
    std::cout << "Idade: " << idade << std::endl;
    std::cout << "Altura: " << altura << " metros" << std::endl;
}

int main() {
    exibirDados("Artur", 30, 1.80);
    exibirDados("Maria", 25, 1.65);

    return 0;
}