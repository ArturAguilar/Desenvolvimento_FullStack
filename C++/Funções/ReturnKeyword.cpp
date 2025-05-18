#include <iostream>

// Função que retorna um valor inteiro
int quadrado(int numero) {
    return numero * numero; // retorna o quadrado do número
}

// Função que retorna uma string
std::string mensagem() {
    return "Esta função retorna uma string!";
}

int main() {
    int resultado = quadrado(5);
    std::cout << "O quadrado de 5 é: " << resultado << std::endl;

    std::cout << mensagem() << std::endl;

    return 0;
}