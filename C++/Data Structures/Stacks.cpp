#include <iostream>
#include <stack>

int main() {
    // Declarando uma pilha de inteiros
    std::stack<int> pilha;

    // Adicionando elementos na pilha
    pilha.push(10);
    pilha.push(20);
    pilha.push(30);

    // Exibindo o elemento do topo da pilha
    std::cout << "Topo da pilha: " << pilha.top() << std::endl;

    // Removendo o elemento do topo
    pilha.pop();
    std::cout << "Novo topo após pop: " << pilha.top() << std::endl;

    // Tamanho da pilha
    std::cout << "Tamanho da pilha: " << pilha.size() << std::endl;

    // Esvaziando a pilha
    while (!pilha.empty()) {
        std::cout << "Removendo: " << pilha.top() << std::endl;
        pilha.pop();
    }

    return 0;
}