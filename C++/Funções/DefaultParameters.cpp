#include <iostream>

// Função com parâmetro padrão
void saudacao(std::string nome, std::string mensagem = "Bem-vindo!") {
    std::cout << mensagem << " " << nome << std::endl;
}

int main() {
    saudacao("Artur"); // Usa o valor padrão para mensagem
    saudacao("Maria", "Olá"); // Usa valor personalizado

    return 0;
}