#include <iostream>

// Função com parâmetros
void saudacao(std::string nome, int idade) {
    std::cout << "Olá, " << nome << "! Você tem " << idade << " anos." << std::endl;
}

int main() {
    saudacao("Artur", 30); // Chama a função passando parâmetros
    saudacao("Maria", 25);

    return 0;
}